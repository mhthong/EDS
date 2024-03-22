<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Showroom;
use App\Models\GroupService;
use App\Models\ServiceShowroom;
use App\Models\Service;
use App\Models\ArtistLevel;
use App\Models\ShowroomSchedule;
use App\Models\Artists;
use App\Models\Booking;
use App\Models\Employee;
use App\Models\Get;
use App\Models\WorkingHour;
use Illuminate\Support\Facades\Auth;
use App\Models\Kpi;
use App\Models\Price;
use Illuminate\Support\Facades\DB;



class ApiPostController extends Controller
{
    //

 
    


    public function changeStaff(Request $request)
    {
        // Log the received data
        logger()->info('Received data:', $request->all());
    
        // Check authentication
        $check = $this->CheckAuth();
    
        if ($check) {
            // Retrieve the booking based on the provided ID
            $booking = Booking::find($request->input('id'));
    
            // Check if the booking exists
            if (!$booking) {
                return response()->json(['error' => 'Booking not found'], 404);
            }
    
            // Determine the source type based on the request
            $staffType = $request->input('Staff');

            switch ($staffType) {
                case "Artists":
                    $sourceType = "App\Models\Artists";
                    break;
                case "Parner_Operation":
                    $sourceType = "App\Models\Admin";
                    break;
                case "Employee":
                    $sourceType = "App\Models\Employee";
                    break;
                default:
                    return response()->json(['error' => 'Invalid staff type'], 400);
            }
    
            try {
                // Update booking with new staff information
                $booking->source_type = $sourceType;
                // Extract id and name from the input object

                $booking->source_name =   $request->input('input')['name'];
                $booking->source_id =  $request->input('input')['id'];
                $booking->save();
    
                return response()->json(['message' => 'Data updated successfully']);
            } catch (\Exception $e) {
                return response()->json(['error' => 'Failed to update data'], 500);
            }
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
    
    
    
    public function saveDataActiveDate(Request $request)
    {
        
                $check = $this->CheckAuth();
                
                
                if ($check == true) {
                    $artistIds =  $request->input('artistId'); // Chuyển chuỗi thành mảng các artistId
                
                    foreach ($artistIds as $artistId) {
                        // Kiểm tra xem có dữ liệu nào tương ứng với showroomId, inputData và artistId không
                        $workingHour = WorkingHour::where('showroom_schedule_id', $request->input('showroomId'))
                            ->where('date', $request->input('inputData'))
                            ->where('artist_id', $artistId)
                            ->first();
                
                        // Nếu có, cập nhật activeStatus
                        if ($workingHour) {
                            $workingHour->active = ($request->input('activeStatus') == '1');
                            $workingHour->save();
                        } else {
                            // Nếu không có, tạo mới dữ liệu
                            WorkingHour::create([
                                'showroom_schedule_id' => $request->input('showroomId'),
                                'artist_id' => $artistId,
                                'date' => $request->input('inputData'),
                                'active' => ($request->input('activeStatus') == '1'),
                            ]);
                        }
                    }
                
                    return response()->json(['message' => 'Data updated/created successfully']);
                } else {
                    return redirect()->back()->with("failed", "You do not have access !");
                }




    }


    public function saveDataApprovedDate(Request $request)
    {
        
                $check = $this->CheckAuth();
                
                

                if($check == true){
                        // Kiểm tra xem có dữ liệu nào tương ứng với showroomId và inputData không
                $Bookings = Booking::where('ShowroomID', $request->input('showroomId'))
                ->where('date', $request->input('inputData'))
                ->where('ArtistID', $request->input('artistId'))
                ->get();


                try {
                    foreach ($Bookings as $booking) {
                        // Thực hiện cập nhật trường "action" của mỗi đối tượng Booking
                        $booking->action = $request->input('Approved');
                        $booking->save();
                    }
        
                    // Nếu không có lỗi, commit giao dịch và chuyển hướng trở lại với thông báo thành công
                    DB::commit();
                    return response()->json(['message' => 'Data created successfully']);

                } catch (\Exception $e) {
                    // Nếu có lỗi, rollback giao dịch và chuyển hướng trở lại với thông báo thất bại
                    DB::rollback();
                    return redirect()->back()->with("failed", "You do not have access !");
                }


              
            } else {
                return redirect()->back()->with("failed", "You do not have access !");

            }



    }



    public function CheckAuth()
    {
        $userData = Auth::user();
    
        if ($userData instanceof \App\Models\Admin) {
            // Lấy thông tin người dùng hiện tại
    
            // So sánh kiểu dữ liệu chính xác và kiểm tra quyền manage_supers
            if ($userData->manage_supers == 1  || $userData->manage_supers == 0 || $userData->manage_supers == 4) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
    
    
        public function saveDataKPI(Request $request)
    {

        $request->validate([
            'date' => 'required|date_format:Y-m-d',
            'number_of_kpi' => 'required|numeric',
            'kpi_showroom' => 'required|numeric',
            'kpi_employee' => 'required|numeric',
        ]);


        $check = $this->CheckAuthLeader();


        if ($check == true) {
            // Kiểm tra xem có dữ liệu nào tương ứng với showroomId và inputData khôn
            $kpi = Kpi::updateOrCreate(
                [
                    'date' => $request->input('date'),
                    'kpi_showroom' => $request->input('kpi_showroom'),
                    'kpi_employee' => $request->input('kpi_employee'),
                ],
                [
                    'number_of_kpi' => $request->input('number_of_kpi'),
                ]
            );

            return response()->json(['message' => 'Data created successfully']);
        } else {
            return redirect()->back()->with("failed", "You do not have access !");
        }
    }


    public function updateDataKPI(Request $request)
    {
        $request->validate([
            'id' => 'required|numeric',
            'date' => 'required|date_format:Y-m-d',
            'number_of_kpi' => 'required|numeric',
            'kpi_showroom' => 'required|numeric',
            'kpi_employee' => 'required|numeric',
        ]);

        $check = $this->CheckAuthLeader();

        if ($check) {

            if (Kpi::where([
                'date' => $request->input('date'),
                'kpi_showroom' => $request->input('kpi_showroom'),
                'kpi_employee' => $request->input('kpi_employee'),
            ])->exists()) {
                $affectedRows = Kpi::where([
                    'id' => $request->input('id'),

                ])->update([
                    'date' => $request->input('date'),
                    'kpi_showroom' => $request->input('kpi_showroom'),
                    'kpi_employee' => $request->input('kpi_employee'),
                    'number_of_kpi' => $request->input('number_of_kpi'),
                ]);

                return response()->json(['message' => "Data is exists"]);
            } else {

                $affectedRows = Kpi::where([
                    'id' => $request->input('id'),

                ])->update([
                    'date' => $request->input('date'),
                    'kpi_showroom' => $request->input('kpi_showroom'),
                    'kpi_employee' => $request->input('kpi_employee'),
                    'number_of_kpi' => $request->input('number_of_kpi'),
                ]);

                return response()->json(['message' => "Data updated for $affectedRows records"]);
            }
        } else {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    }
    
    
    public function CheckAuthLeader()
    {
        $userData = Auth::user();

        if ($userData instanceof \App\Models\Admin) {
            // Lấy thông tin người dùng hiện tại

            // So sánh kiểu dữ liệu chính xác và kiểm tra quyền manage_supers
            if ($userData->manage_supers == 1  || $userData->manage_supers == 0 || $userData->manage_supers == 3) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
    
    
        public function CheckAuthAdmin()
    {
        $userData = Auth::user();
    
        if ($userData instanceof \App\Models\Admin) {
            // Lấy thông tin người dùng hiện tại
    
            // So sánh kiểu dữ liệu chính xác và kiểm tra quyền manage_supers
            if ($userData->manage_supers == 1  || $userData->manage_supers == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    // app/Http/Controllers/KpiController.php
    public function deleteKpi($id)
    {
        $check = $this->CheckAuthLeader();

        if (!$check) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        try {
            $kpi = Kpi::find($id);

            if (!$kpi) {
                return response()->json(['message' => 'KPI not found'], 404);
            }

            $kpi->delete();

            return response()->json(['message' => 'Data deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting data', 'error' => $e->getMessage()], 500);
        }
    }
    
        public function deleteBooking($id)
    {


        try {
            $booking = Booking::find($id);

            if (!$booking) {
                return response()->json(['message' => 'Booking not found'], 404);
            }

            $booking->deleteBooking();

            // Now you can safely delete the price
            $price = Price::find($booking->price_id);

            $price->delete();

            return response()->json(['message' => 'Data deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting data', 'error' => $e->getMessage()], 500);
        }
    }

}
