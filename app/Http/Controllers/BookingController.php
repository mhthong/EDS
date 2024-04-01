<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\Price;
use App\Models\Get;
use App\Models\Artists;
use App\Models\ServiceBooking;
use App\Models\Showroom;
use App\Models\Payment;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Models\Setting;
use App\Mail\DynamicEmailBooking;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;



class BookingController extends Controller
{
    //

    public function index()
    {



        if (Auth::check()) {

            $userId = Auth::id();

            if (Auth::user() instanceof \App\Models\Artists) {

                $bookings = Booking::with([
                    'artist' => function ($query) {
                        $query->select('id', 'name', 'fullname');
                    },
                    'showroom',
                    'get',
                    'services',
                    'price',
                    'payment'
                ])->orderBy('created_at', 'desc')->where('action', '=', 'approved')->where('ArtistID', '=', $userId)->get();
            } elseif (Auth::user() instanceof \App\Models\Admin) {

                $bookings = Booking::with([
                    'artist' => function ($query) {
                        $query->select('id', 'name', 'fullname');
                    },
                    'showroom',
                    'get',
                    'services',
                    'price',
                    'payment'
                ])->orderBy('created_at', 'desc') // Sắp xếp theo thứ tự mới nhất dựa trên created_at
                    ->get();
            } elseif (Auth::user() instanceof \App\Models\Employee) {

                $bookings = Booking::with([
                    'artist' => function ($query) {
                        $query->select('id', 'name', 'fullname');
                    },
                    'showroom',
                    'get',
                    'services',
                    'price',
                    'payment'
                ])->orderBy('created_at', 'desc')->where('source_id', '=', $userId)->where('source_type', '=', "App\Models\Employee")->get();
            } else {
                $bookings = Booking::with([
                    'artist' => function ($query) {
                        $query->select('id', 'name', 'fullname');
                    },
                    'showroom',
                    'get',
                    'services',
                    'price',
                    'payment'
                ])->orderBy('created_at', 'desc')->get();
            }
        }




        return view('admin.book.index', compact('bookings'));
    }



    public function store(Request $request)
    {
        // Kiểm tra xem người dùng đã đăng nhập hay chưa và xác định người dùng đang đăng nhập là loại gì
        $source_name = "N/A";
        $source_id = "";
        $source_type = "";

        if (Auth::check()) {
            $user = Auth::user();
            if ($user instanceof \App\Models\Artists) {
                $source_name = $user->name;
                $source_id = $user->id;
                $source_type = "App\Models\Artists";
            } elseif ($user instanceof \App\Models\Admin) {
                $source_name = $user->name;
                $source_id = $user->id;
                $source_type = "App\Models\Admin";
            } elseif ($user instanceof \App\Models\Employee) {
                $source_name = $user->name;
                $source_id = $user->id;
                $source_type = "App\Models\Employee";
            }
        }

        // Tạo đối tượng Get
        $get_isset = Get::where('email', $request->email)
        ->Where('phone', $request->phone)->Where('name',  $request->name)->first();

        if(isset($get_isset)){
            $get = $get_isset;
        } else {

            $get = Get::create([
                'Name' => $request->name,
                'Email' => $request->email,
                'Address' => $request->address,
                'Phone' => $request->phone,
                'source_data' => $request->source_data,
                'Source' => "",
                'Note' => "",
                'After_img' => "",
                'Before_img' => "",
            ]);
        }




        // Xử lý dữ liệu bookingData

        $Data = json_decode($request->input('bookingData'), true);
        $bookingDatas =  $Data['serviceIds'];

        $showroomId = $Data['showroomId'];
        $Artist_levelID =  $Data['Artist_levelID'];
        $Level_price =  $Data['Level_price'];

        // Bắt đầu giao dịch cơ sở dữ liệu
        DB::beginTransaction();

        try {
            foreach ($bookingDatas as $bookingData) {
                // Tạo đối tượng Price
                $price = Price::create([
                    'Total_price' => $bookingData['Deposit'],
                    'Deposit_price' => $bookingData['Deposit'],
                    'Remaining_price' => $bookingData['RemainingPrice'],
                    'Level_price' => $Level_price,
                    'Artist_levelID' =>  $Artist_levelID,
                    'servies_price' => $bookingData['price'],
                    'op_kpi' => $bookingData['price']
                ]);

                // Xác định ArtistID
                $ArtistID = $bookingData['Artist'] == 0 ? Artists::where('name', '=', 'N/A')->first()->id : $bookingData['Artist'];

                // Tạo đối tượng Booking
                $book = Booking::create([
                    'ArtistID' => $ArtistID,
                    'ShowroomID' => $showroomId,
                    'time' => $bookingData['StartTime'],
                    'time_end' => $bookingData['EndTime'],
                    'date' => $bookingData['DateTreament'],
                    'GetID' => $get->id,
                    'price_id' => $price->id,
                    'content' => "",
                    'Source' => $request->source,
                    'Note' => $request->note,
                    'status' => $bookingData['Status'],
                    'action' => "pending",
                    'source_data' => $request->source_data,
                    'source_name' => $source_name,
                    'source_id' => $source_id,
                    'source_type' => $source_type,
                ]);

                // Xử lý dữ liệu ImageDeposit
                $imageDeposit = $bookingData['ImageDeposit'];
                $baseUrl = env('APP_ENV');
                $imageUrls = explode(",", $imageDeposit);
                $imageUrls = array_map(function ($url) use ($baseUrl) {
                    return str_replace($baseUrl, "", $url);
                }, $imageUrls);
                $newImageDeposit = implode(",", $imageUrls);

                // Tạo đối tượng Payment
                $payment = Payment::create([
                    'PricelD' => $price->id,
                    'BookingID' => $book->id,
                    'payment_type' => $bookingData['PaymentType'],
                    'date' => now(),
                    'payment_deposit' =>  $newImageDeposit,
                    'payment_remainding' => ""
                ]);

                // Tạo đối tượng ServiceBooking
                $serviceBookings = ServiceBooking::create([
                    'service_id' => $bookingData['id'],
                    'booking_id' => $book->id,
                    'artist_levelID' =>   $Artist_levelID,
                ]);
            }

            // Nếu không có lỗi, commit giao dịch và chuyển hướng trở lại với thông báo thành công
            DB::commit();
            return redirect()->back()->with('success', 'Book created successfully.');
        } catch (\Exception $e) {
            // Nếu có lỗi, rollback giao dịch và chuyển hướng trở lại với thông báo thất bại
            DB::rollback();
            return redirect()->back()->with('failed', 'Failed to create book.');
        }
    }


    // Show the form for editing an existing service

    public function edit($id)
    {


        $bookingsData = Booking::with([
            'artist' => function ($query) {
                $query->select('id', 'name', 'fullname');
            },
            'showroom',
            'get',
            'services',
            'price',
            'payment'
        ])->where('id', '=', $id)->get();


        $check = $this->CheckAuthBooking($bookingsData[0]);


        if ($check == true) {
            return view('admin.book.edit', compact('bookingsData'));
        } else {
            return redirect()->back()->with("failed", "You do not have access !");
        }
    }



    public function CheckAuthBooking($Data)
    {

        if (Auth::user() instanceof \App\Models\Artists) {

            if ($Data->ArtistID == Auth::user()->id && $Data->action == "approved") {

                return true;
            } else {
                return false;
            }
        } else if (Auth::user() instanceof \App\Models\Employee) {

            if ($Data->source_name == Auth::user()->name && $Data->source_id == Auth::user()->id) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    public function CheckAuthUpdate($Data, $status)
    {

        if (Auth::user() instanceof \App\Models\Artists) {

            if ($Data->ArtistID == Auth::user()->id && $Data->action == "approved") {

                return true;
            } else {
                return false;
            }
        } else if (Auth::user() instanceof \App\Models\Employee) {

            if ($Data->source_name == Auth::user()->name && $Data->source_id == Auth::user()->id  && $Data->status != $status) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }




    public function update(Booking $id, Request $request)
    {

        if (Auth::check()) {
            if (Auth::user() instanceof \App\Models\Artists) {
                $route = 'artists.bookings.edit';
                $route_exit = 'artists.book.index';
            } elseif (Auth::user() instanceof \App\Models\Admin) {
                $route = 'bookings.edit';
                $route_exit = 'book.index';
            } elseif (Auth::user() instanceof \App\Models\Employee) {
                $route = 'employee.bookings.edit';
                $route_exit = 'employee.book.index';
            } else {
            }
        }

        if ($request->submit == "sendmail") {
            $sendEmail = $this->sendEmail($id, $request->action, $request->sendmail);
            if ($sendEmail) {
                return redirect()->back()->with('success', 'E-mail sent successfully!');
            } else {
                return redirect()->back()->with("failed", "E-mail not sent!");
            }
        } else {
            if (!isset($request->service_id)) {

                $updateEdit_resuft = $this->updateEdit($id, $request->all());


                if ($request->submit == "apply") {

                    if ($updateEdit_resuft) {
                        return redirect()->route($route_exit)->with('success', 'Updated successfully!');
                    } else {
                        return redirect()->back()->with('failed', 'Failed to update. Please try again.');
                    }
                } else {

                    if ($updateEdit_resuft) {
                        return redirect()->back()->with('success', 'Updated successfully!');
                    } else {
                        return redirect()->back()->with('failed', 'Failed to update. Please try again.');
                    }
                }
            } else {


                $data = $request->all();
                $services = $data['service_id'];
                $deposit = $data['deposit'];
                $booking_value = $data['booking_value'];

                $updateServices_resuft = $this->updateServices($id, $services,  $deposit, $booking_value);

                $updateEdit_resuft = $this->updateEdit($id, $data);


                if ($request->submit == "apply") {

                    if ($updateEdit_resuft && $updateServices_resuft) {
                        return redirect()->route($route_exit)->with('success', 'Updated successfully!');
                    } else {
                        return redirect()->back()->with('failed', 'Failed to update. Please try again.');
                    }
                } else {

                    if ($updateEdit_resuft && $updateServices_resuft) {
                        return redirect()->back()->with('success', 'Updated successfully!');
                    } else {
                        return redirect()->back()->with('failed', 'Failed to update. Please try again.');
                    }
                }
            }
        }
    }
    public function updateEdit($book, $data)
    {
        // Get ArtistID
        $ArtistID = ($data['artist'] == 0) ? Artists::where('name', '=', 'N/A')->first()->id : $data['artist'];
    
        // Get content
        $content = $data['content'] ?? "";
    
        // Get related models
        $get = Get::findOrFail($book->GetID);
        $payment = Payment::where('BookingID', '=', $book->id)->firstOrFail();
        $Price = Price::findOrFail($book->price_id);
    
        // Initialize variables
        $com = 0;
        $upsale = $data['upsale'] ?? 0;
        $Deposit_price = $Price->Deposit_price;
        $servies_price = $Price->servies_price;
    
        // Calculate Total_price and Remaining_price based on status
        if ($data['status'] !== $book->status) {
            switch ($data['status']) {
                case "Waiting":
                    $Total_price = $data['deposit'];
                    $Deposit_price = $data['deposit'];
                    $servies_price = $data['booking_value'];
                    $Remaining_price = $data['Remainingvalue'];
                    break;
                case "Done":
                    $Total_price = $Price->Total_price + $Price->Remaining_price;
                    $Remaining_price = 0;
                    break;
                case "Cancel":
                    $content = $data['Cancel'];
                    if ($data['Cancel'] === "Operation") {
                        $Total_price = $Price->Deposit_price;
                        $Remaining_price = 0;
                        $com = $Price->servies_price * 1 / 2 - $Price->Deposit_price;
                    } else {
                        $Total_price = $Price->Deposit_price;
                        $Remaining_price = 0;
                    }
                    break;
                case "Refund":
                    $Total_price = $Price->Deposit_price -  $data['Refund'];
                    $Remaining_price = 0;
                    break;
                case "Partial Done":
                    $Total_price = $Price->Deposit_price +  $data['Partial_Done'];
                    $Remaining_price = $Price->Remaining_price - $data['Partial_Done'];
                    break;
                default:
                    $Total_price = $Price->Deposit_price;
                    $Remaining_price = $Price->Remaining_price;
                    break;
            }
        } else {
            if(isset($data['deposit']) && isset($data['booking_value']) && isset($data['booking_value'])){
                $Total_price = $data['deposit'];
                $Deposit_price = $data['deposit'];
                $servies_price = $data['booking_value'];
                $Remaining_price = $data['Remainingvalue'];
            } else {
                switch ($data['status']) {
                    case "Waiting":
                        $Total_price = $Price->Total_price;
                        $Remaining_price = $Price->Remaining_price;
                        break;
                    case "Done":
                        $Total_price = $Price->Total_price;
                        $Remaining_price = $Price->Remaining_price;
                        break;
                    case "Cancel":
                        $content = $data['Cancel'];
                        $Total_price = ($data['Cancel'] === "Operation") ? $Price->Total_price : $Price->Total_price;
                        $Remaining_price = $Price->Remaining_price;
                        $com = ($data['Cancel'] === "Operation") ? $Price->com : 0;
                        break;
                    case "Refund":
                        $Total_price = $Price->Total_price;
                        $Remaining_price = 0;
                        break;
                    case "Partial Done":
                        $Total_price = $Price->Total_price;
                        $Remaining_price = $Price->Remaining_price;
                        $upsale = $Price->upsale;
                        break;
                    default:
                        $Total_price = $Price->Deposit_price;
                        $Remaining_price = $Price->Remaining_price;
                        break;
                }
            }
        }
    
        // Get start_time and end_time
        $start_time = $data['start_time'] ?? $book->time;
        $end_time = $data['end_time'] ?? $book->time_end;
    
        try {
            // Update the service record using the validated data
            $book->update([
                'ShowroomID' =>  $data['showroomID'],
                'ArtistID' => $ArtistID,
                'time' => $start_time,
                'time_end' => $end_time,
                'date' => $data['date'],
                'status' => $data['status'],
                'content' => $content,
                'source_data' =>  $data['source_data'],
                'action' => $data['action'],
                'After_img' => $data['After'] ?? $get->After_img,
                'Before_img' => $data['Before'] ?? $get->Before_img,
                'Note' => $data['note'],
                'Source' => $data['source'],
            ]);
    
            // Update Get
            $get->update([
                'Name' => $data['name'],
                'Email' => $data['email'],
                'Address' => $data['address'],
                'Phone' => $data['phone'],
                'source_data' =>  $data['source_data'],
            ]);
    
            // Update payment details
            $payment->update([
                'payment_type' => $data['payment_type'],
                'payment_type_remainding' => $data['payment_remaining_type'],
                'payment_deposit' => $data['Deposit'] ?? $payment->payment_deposit,
                'payment_remainding' => $data['Remaining'] ?? $payment->payment_remainding,
            ]);
    
            // Update Price details
            $Price->update([
                'Total_price' => $Total_price,
                'Remaining_price' => $Remaining_price,
                'Deposit_price' => $Deposit_price,
                'servies_price' => $servies_price,
                'com' => $com,
                'upsale' => $upsale,
            ]); 
    
            // Save models
            $book->save();
            $get->save();
            $payment->save();
            $Price->save();
    
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }
    
    
    public function updateServices($id, $services, $deposit, $booking_value)
    {

        $Price = Price::where('id', $id->price_id)->first();

        $serviceBookings = ServiceBooking::where('booking_id', $id->id)->first();

        $servies = Service::where('id', $services)->first();

        try {

            $serviceBookings->update([
                'service_id' => $services,
            ]);

            $id->update([
                'action' => 'pending',
                'status' => 'Waiting',
            ]);

            $Price->update([
                'Total_price' =>  $deposit,
                // Giả sử bạn không có dữ liệu về Deposit Price, gán là 0 hoặc thay đổi tùy theo yêu cầu của bạn
                'Remaining_price' => $booking_value - $deposit,
                // Giả sử bạn không có dữ liệu về Remaining Price, gán là 0 hoặc thay đổi tùy theo yêu cầu của bạn
                'servies_price' => $booking_value,
                // Các trường khác của Price ở đây...
                'Deposit_price' => $deposit,

                'com' => 0,
            ]);


            /*  
             */
            return true;
            // Redirect to the index page or wherever you wish after updating the service

        } catch (\Exception $e) {

            // Handle the exception if any error occurs during the update process
            // You can log the error or display an error message to the user
            return false;
            /* return redirect()->route('bookings.edit', ['id' => $book->id])->with('failed', 'Failed to update. Please try again.'); */
        }
    }


    public function sendEmail($id, $action, $sendmail)
    {

        $get = Get::where('id', $id->GetID)->first();
        $showroom = Showroom::where('id', $id->ShowroomID)->first();
        $Price = Price::where('id', $id->price_id)->first();

        /* $arr = array(
            "email_driver",
            "email_hostName",
            "email_encryption",
            "email_port",
            "email_userName",
            "email_password",
            "email_senderName",
            "email_senderEmail",
            "Logo",
            "Facebook",
            "Instagram",
            "Youtube",
            "hotline",
            "hotline-1",
            "Google-map-embed",
        );
        foreach ($arr as $arrkey => $arrvalue) {
            $configuration = Setting::where('key', $arrvalue)->get();

            foreach ($configuration as $key => $value) {
                # code...
                $value_setting[$value->key] = $value->value;
            }
        }

        $config = array(
            'driver' => $value_setting["email_driver"],
            'host' => $value_setting["email_hostName"],
            'port' => $value_setting["email_port"],
            'encryption' => $value_setting["email_encryption"],
            'username' => $value_setting["email_userName"],
            'password' => $value_setting["email_password"],
            'from' => ['address' => $value_setting["email_senderEmail"], 'name' => $value_setting["email_senderName"]],
        );

        Config::set('mail', $config);


        $toEmail = $get->Email;

        $data = [
            "Logo" => $value_setting["Logo"],
            "start_time" => $id->time,
            "end_time" => $id->time_end,
            "date" => $id->date,
            "Name" => $get->Name,
            "Email" => $get->Email,
            "Address" => $get->Address,
            "Phone" => $get->Phone,
            "Showroom" => $showroom->Name,
            "Showroom_Address" => $showroom->Address,
            "Showroom_Phone" => $showroom->Phone,
            "Deposit_price" => $Price->Deposit_price,
            "Remaining_price" => $Price->Remaining_price,
            "servies_price" => $Price->servies_price,
            "note" => $sendmail,
            "Facebook" => $value_setting["Facebook"],
            "Instagram" => $value_setting["Instagram"],
            "Youtube" => $value_setting["Youtube"],
            "hotline" => $value_setting["hotline"],
            "hotline-1" => $value_setting["hotline-1"],
            "Google-map-embed" => $value_setting["Google-map-embed"],
        ];

        // pass dynamic message to mail class
        Mail::to($toEmail)->send(new DynamicEmailBooking($data));
 */

        $id->update([
            'action' => $action,
        ]);

        $id->save();

        return true;


        /*         if (Mail::failures() != 0) {
            return true;
        } else {
            return false;

        } */
    }



    public function delete($id)
    {
        $booking = Booking::find($id);


        if (!$booking) {
            return redirect()->route('book.index')->with('error', 'Booking not found.');
        }

        $booking->deleteBooking();

        // Now you can safely delete the price
        $price = Price::find($booking->price_id);
        $price->delete();


        return redirect()->route('book.index')->with('success', 'Booking has been deleted.');
    }
}
