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

                       
        if (Auth::check()) {
            if (Auth::user() instanceof \App\Models\Artists) {
                $source_name = Auth::user()->name;
                $source_id = Auth::user()->id;
                $source_type = "App\Models\Artists";
            } elseif (Auth::user() instanceof \App\Models\Admin) {
                $source_name = Auth::user()->name;
                $source_id = Auth::user()->id;
                $source_type = "App\Models\Admin";
            } elseif (Auth::user() instanceof \App\Models\Employee) {
                $source_name = Auth::user()->name;
                $source_id = Auth::user()->id;
                $source_type = "App\Models\Employee";
            } else {
                $source_name = "N/A";
                $source_id = "";
                $source_type = "";
            }

        }


        // Xử lý dữ liệu đầu vào từ $request
        $bookingData = json_decode($request->input('bookingData'), true);

        $artists = Artists::where('name', '=', 'N/A')->first();

        if ($bookingData['ArtistID'] == 0) {
            $artists = Artists::where('name', '=', 'N/A')->first();
            $ArtistID = $artists->id;

        } else {
            $ArtistID = $bookingData['ArtistID'];

        }

        $price = Price::create([
            'Total_price' => $bookingData['Deposit_price'],
            'Deposit_price' => $bookingData['Deposit_price'],
            // Giả sử bạn không có dữ liệu về Deposit Price, gán là 0 hoặc thay đổi tùy theo yêu cầu của bạn
            'Remaining_price' => $bookingData['Remaining_price'],
            // Giả sử bạn không có dữ liệu về Remaining Price, gán là 0 hoặc thay đổi tùy theo yêu cầu của bạn
            'Level_price' => $bookingData['Level_price'],
            'Artist_levelID' => $bookingData['Artist_levelID'],
            'servies_price' => $bookingData['Total_price'],
            // Các trường khác của Price ở đây...
        ]);

        $get = Get::create([
            'Name' => $request->name,
            'Email' => $request->email,
            'Address' => $request->address,
            'Phone' => $request->phone,
            'source_data' => $request->source_data,
            'Source' => $request->source,
            'Note' => $request->note,
            'After_img' => "",
            'Before_img' => "",
        ]);

        $book = Booking::create([
            'ArtistID' => $ArtistID,
            'ShowroomID' => $bookingData['showroomId'],
            // Giả sử bạn không có dữ liệu về Deposit Price, gán là 0 hoặc thay đổi tùy theo yêu cầu của bạn // Giả sử bạn không có dữ liệu về Remaining Price, gán là 0 hoặc thay đổi tùy theo yêu cầu của bạn
            'time' => $bookingData['workingHour'],
            'time_end' => $bookingData['WorkingHour_end_time'],
            'date' => $bookingData['Date'],
            'GetID' => $get->id,
            'price_id' => $price->id,
            'content' => "",
            'status' => $bookingData['Status'],
            'action' => "pending",
            'source_name' => $source_name,
            'source_id' => $source_id,
            'source_type' => $source_type,
            // Các trường khác của Price ở đây...
        ]);
 
        $Payment = Payment::create([
            'PricelD' => $price->id,
            'BookingID' => $book->id,
            'payment_type' => $bookingData['PaymentType'],
            'date' => now(),
            'payment_deposit'=>"",
            'payment_remainding'=>""
            
        ]);


        $serviceBookings = ServiceBooking::create([
            'service_id' => $bookingData['serviceIds'],
            'booking_id' => $book->id,
            'artist_levelID' => $bookingData['Artist_levelID'],
        ]);


        if ($serviceBookings || $Payment || $book || $get || $price) {
            // If the artist was successfully created, redirect with success message
            return redirect()->back()->with('success', 'Book created successfully.');
        } else {
            // If the artist creation failed, redirect back with an error message
            return redirect()->back()->with('failed', 'Failed to create book.');
        }

        // Tạo một bản ghi mới trong cơ sở dữ liệu

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
        return view('admin.book.edit', compact('bookingsData'));
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

        } elseif ($request->submit == "Upload"){

            $updateEdit_resuft = $this->updateImage($id, $request->all());

            if ($updateEdit_resuft) {
                return redirect()->back()->with('success', 'Updated successfully!');
            } else {
                return redirect()->back()->with('failed', 'Failed to update. Please try again.');
            }

        } else {
            if (!isset($request->service_id)) {

                $updateEdit_resuft = $this->updateEdit($id, $request->all());

                if($request->submit == "apply"){

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
                $discount = $data['discount'];

                $updateServices_resuft = $this->updateServices($id, $services ,  $deposit  , $discount);

                $updateEdit_resuft = $this->updateEdit($id, $data);

                if($request->submit == "apply"){

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



        if ($data['artist'] == 0) {
            $artists = Artists::where('name', '=', 'N/A')->first();
            $ArtistID = $artists->id;

        } else {
            $ArtistID = $data['artist'];
        }


        if (isset($data['content'])) {
            $content = $data['content'];
        } else {
            $content = "";
        }

        $get = Get::where('id', $book->GetID)->first();

        $payment = Payment::where('BookingID', '=', $book->id)->first();

        $Price = Price::where('id', $book->price_id)->first();

        $com = 0;

        if ($data['status'] === "Done") {
            $Total_price = $Price->Deposit_price + $Price->Remaining_price;
            $Remaining_price = 0;

        } elseif ($data['status'] === "Cancel") {

            $content = $data['Cancel'];

            if($data['Cancel'] === "Operation")
            {
                $Total_price = $Price->Deposit_price;
                $Remaining_price = 0;
                $com = $Price->servies_price * 1/2 - $Price->Deposit_price;
           
            }
            else{
                $Total_price = $Price->Deposit_price;
                $Remaining_price = 0;
            }
      
        } elseif ($data['status'] === "Refund") {

            $Total_price = $Price->Deposit_price -  $data['Refund'];
            $Remaining_price = 0;
        } else {

            $Total_price = $Price->Deposit_price;
            $Remaining_price = $Price->Remaining_price;
           
        }


        if (isset($data['start_time'])) {
            $start_time = $data['start_time'];
        } else {
            $start_time = $book->time;
        }

        if (isset($data['end_time'])) {
            $end_time = $data['end_time'];
        } else {
            $end_time = $book->time_end;
        }

        try {

            // Update the service record using the validated data
            $book->update([
                'ArtistID' => $ArtistID,
                'time' => $start_time,
                'time_end' => $end_time,
                'date' => $data['date'],
                'status' => $data['status'],
                'content' => $content,
                'action' => 'pending',
            ]);

            $get->update([
                'Name' => $data['name'],
                'Email' => $data['email'],
                'Address' => $data['address'],
                'Phone' => $data['phone'],
                'Source' => $data['source'],
                'Note' => $data['note'],
            ]);

            $payment->update([
                'payment_type' => $data['payment_type'],
            ]);

            $Price->update([
                'Total_price' => $Total_price,
                'Remaining_price' => $Remaining_price,
                'com' => $com,
            ]);

            // Assign the group_service_id separately

            $book->save();
            $get->save();
            $payment->save();

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


  
    public function updateImage($book, $data)
    {



        $get = Get::where('id', $book->GetID)->first();

        $payment = Payment::where('BookingID', '=', $book->id)->first();


        try {

            // Update the service record using the validated data

            $get->update([
                'After_img' => $data['After'],
                'Before_img' => $data['Before'],
            ]);

  
            $payment->update([
                'payment_deposit' => $data['Deposit'],
                'payment_remainding' => $data['Remaining'],
            ]);
            // Assign the group_service_id separately

            $get->save();
            $payment->save();

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


    public function updateServices($id, $services , $deposit  , $discount)
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
                'Remaining_price' =>  $servies->Price  - $discount - $deposit,
                // Giả sử bạn không có dữ liệu về Remaining Price, gán là 0 hoặc thay đổi tùy theo yêu cầu của bạn
                'servies_price' => $servies->Price - $discount ,
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