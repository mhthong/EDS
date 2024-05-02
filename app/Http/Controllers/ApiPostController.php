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
use App\Models\ServiceBooking;
use App\Models\Group;
use App\Models\GroupShowroom;
use Illuminate\Support\Facades\Log;



class ApiPostController extends Controller
{
    //

    public function changeServices(Request $request)
    {
        try {
            // Log the received data
            logger()->info('Received data: ' . print_r($request->all(), true));
    
            // Check authentication
            $check = $this->CheckAuth();
    
            if (!$check) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
    
            // Retrieve the booking based on the provided ID
            $booking = Booking::find($request->input('id'));
            $ServiceBooking = ServiceBooking::where('booking_id', $request->input('id'))->where('service_id', $request->input('serviceId'))->first();
    
            // Check if the booking exists
            if (!$booking || !$ServiceBooking) {
                return response()->json(['error' => 'Booking or Service not found'], 404);
            }
    
            // Update values âm nó giảm thời gian làmn , dương thì tăng
            $booking->change_time_servies =   $request->input('input')['time'] - $request->input('service_time') + $booking->change_time_servies;


            $booking->change_service_wage = $request->input('change_service_wage');
            $ServiceBooking->service_id = $request->input('input')['id'];
    
            // Save changes
            $ServiceBooking->save();
            $booking->save();
    
            return response()->json(['message' => 'Data updated successfully']);
        } catch (\Exception $e) {
            // Log the error
            logger()->error('Failed to update data: ' . $e->getMessage());
    
            return response()->json(['error' => 'Failed to update data'], 500);
        }
    }
    

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
        // Kiểm tra xác thực
        $check = $this->CheckAuth();

        if ($check == true) {
            // Lấy dữ liệu từ request
            $showroomId = $request->input('showroomId');
            $inputData = $request->input('inputData');
            $artistIds = $request->input('artistId');


            
            // Xử lý các artistId từ request
            foreach ($artistIds as $artistId) {

                if(isset($artistId['selectedActive']) && $artistId['selectedActive'] !== "undefined") {
                    $selectedActive = $artistId['selectedActive'];
                } else {
                    $selectedActive = 3; // Hoặc bất kỳ giá trị mặc định nào bạn muốn gán khi selectedActive không được định nghĩa
                }

                if(isset($artistId['note']) && $artistId['note'] !== "undefined") {
                    $note = $artistId['note'];
                } else {
                    $note = ""; // Hoặc bất kỳ giá trị mặc định nào bạn muốn gán khi selectedActive không được định nghĩa
                }

                // Tìm kiếm giờ làm việc dựa trên showroom_schedule_id, date và artist_id
                $workingHour = WorkingHour::where('showroom_schedule_id', $showroomId)
                    ->where('date', $inputData)
                    ->where('artist_id', $artistId['id'])
                    ->first();

                // Nếu đã có giờ làm việc, cập nhật trạng thái active
                if ($workingHour) {
                    $workingHour->active = $selectedActive;
                    $workingHour->note = $note; 
                    $workingHour->save();
                } else {
                    // Nếu chưa có, tạo mới bản ghi giờ làm việc
                    WorkingHour::create([
                        'showroom_schedule_id' => $showroomId,
                        'artist_id' =>  $artistId['id'],
                        'note' => $note,
                        'date' => $inputData,
                        'active' => $selectedActive,
                    ]);
                }
            }

            // Trả về phản hồi JSON thành công
            return response()->json(['message' => 'Data updated/created successfully']);
        } else {
            // Nếu không xác thực thành công, chuyển hướng về trang trước với thông báo lỗi
            return redirect()->back()->with("failed", "You do not have access !");
        }
    }





    public function saveDataApprovedDate(Request $request)
    {

        $check = $this->CheckAuth();



        if ($check == true) {
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
            return redirect()->back()->with("message", "You do not have access !");
        }
    }


    public function saveDataGroup(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'showrooms' => 'required|array',
        ]);
    

            // Tạo mới nhóm và lưu thông tin cơ bản

            try {
      
                $group = Group::create([
                    'name' => $request->name,
                    'description' => $request->description,
                ]);
        
                // Lấy danh sách các showroom từ request
                $showrooms = $request->input('showrooms');
        
                // Tạo mảng dữ liệu để chèn vào cơ sở dữ liệu
                $groupShowroomsData = [];
                foreach ($showrooms as $showroom) {
                    $groupShowroomsData[] = [
                        'group_id' => $group->id,
                        'showroom_id' => $showroom,
                    ];
                }
    
                // Chèn tất cả dữ liệu vào bảng liên kết GroupShowroom một lần
                GroupShowroom::insert($groupShowroomsData);
    
                return response()->json(['message' => 'Data deleted successfully']);
            } catch (\Exception $e) {
                return response()->json(['message' => 'Error deleting data', 'error' => $e->getMessage()], 500);
            }

        // Nếu tất cả công việc được thực hiện thành công, bạn có thể trả về một phản hồi thành công nếu cần.
    }


    public function updateDataGroups(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'name' => 'required',
            'description' => 'required',
            'showrooms' => 'required|array',
        ]);
    

        try {
            $group = Group::find($request->id);
            if ($group) { // Check if $group exists
                $group->update([
                    'name' => $request->name,
                    'description' => $request->description,
                ]);
        
                // Lấy danh sách các showroom từ request
                $showrooms = $request->input('showrooms');
        
                $GroupShowrooms = GroupShowroom::where('group_id', $group->id)->get();
        
                foreach ($GroupShowrooms as $GroupShowroom) {
                    $GroupShowroom->delete();
                }
        
                // Tạo mảng dữ liệu để chèn vào cơ sở dữ liệu
                $groupShowroomsData = [];
        
                foreach ($showrooms as $showroom) {
                    $groupShowroomsData[] = [
                        'group_id' => $group->id,
                        'showroom_id' => $showroom,
                    ];
                }
        
                // Chèn tất cả dữ liệu vào bảng liên kết GroupShowroom một lần
                GroupShowroom::insert($groupShowroomsData);


            return response()->json(['message' => 'Data deleted successfully']);
        }
     }
      catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting data', 'error' => $e->getMessage()], 500);
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


    public function deleteGroup($id)
    {

        try {
            $group = Group::find($id);

            if (!$group) {
                return response()->json(['message' => 'KPI not found'], 404);
            }

            $GroupShowrooms = GroupShowroom::where('group_id', $id)->get();

        
            foreach ($GroupShowrooms as $GroupShowroom) {
                $GroupShowroom->delete();
            }



            $group->delete();

            return response()->json(['message' => 'Data deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting data', 'error' => $e->getMessage()], 500);
        }
    }



    public function deleteArtist($id)
    {
        $check = $this->CheckAuthLeader();

        if (!$check) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }



        $Booking = Booking::where('ArtistID', $id)->first();


        if (!$Booking) {

            try {
                $Artists = Artists::find($id);

                if (!$Artists) {
                    return response()->json(['message' => 'Artists not found'], 404);
                }

                $Artists->delete();

                return response()->json(['message' => 'Data deleted successfully']);
            } catch (\Exception $e) {
                return response()->json(['message' => 'Error deleting data', 'error' => $e->getMessage()], 500);
            }
        } else {
            return response()->json(['message' => 'Data deleted failed']);
        }
    }


    public function deleteShowroom($id)
    {
        $check = $this->CheckAuthLeader();

        if (!$check) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }



        $Booking = Booking::where('ShowroomID', $id)->first();


        if (!$Booking) {

            try {
                $Showroom = Showroom::find($id);

                if (!$Showroom) {
                    return response()->json(['message' => 'Artists not found'], 404);
                }

                $Showroom->delete();

                return response()->json(['message' => 'Data deleted successfully']);
            } catch (\Exception $e) {
                return response()->json(['message' => 'Error deleting data', 'error' => $e->getMessage()], 500);
            }
        } else {
            return response()->json(['message' => 'Data deleted failed']);
        }
    }




    public function deleteEmployee($id)
    {
        $check = $this->CheckAuthLeader();

        if (!$check) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }



        $Booking = Booking::where('source_id', $id)->where('source_type', 'App\Models\Employee')->first();

        if (!$Booking) {

            try {
                $Employee = Employee::find($id);

                if (!$Employee) {
                    return response()->json(['message' => 'Employee not found'], 404);
                }

                $Employee->delete();

                return response()->json(['message' => 'Data deleted successfully']);
            } catch (\Exception $e) {
                return response()->json(['message' => 'Error deleting data', 'error' => $e->getMessage()], 500);
            }
        } else {
            return response()->json(['message' => 'Data deleted failed']);
        }
    }






    public function deleteService($id)
    {
        $check = $this->CheckAuthLeader();

        if (!$check) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $ServiceBooking = ServiceBooking::where('service_id', $id)->first();


        if (!$ServiceBooking) {

            try {
                $Service = Service::find($id);

                if (!$Service) {
                    return response()->json(['message' => 'Service not found'], 404);
                }

                $Service->delete();

                return response()->json(['message' => 'Data deleted successfully']);
            } catch (\Exception $e) {
                return response()->json(['message' => 'Error deleting data', 'error' => $e->getMessage()], 500);
            }
        } else {
            return response()->json(['message' => 'Data deleted failed']);
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
