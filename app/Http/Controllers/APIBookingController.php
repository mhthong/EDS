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
use App\Models\Price;
use App\Models\Booking;
use App\Models\Employee;
use App\Models\Get;
use App\Models\Admin;
use App\Models\WorkingHour;
use App\Models\ArtistShowroom;
use App\Models\GroupShowroom;
use Carbon\Carbon;


class APIBookingController extends Controller
{
    //


    public function artistshowroom()
    {
        $ArtistShowroom = ArtistShowroom::with('artist:id,name,status', 'showroom:id,Name,status')->orderBy('created_at', 'desc')->get();
        return response()->json($ArtistShowroom);
    }






    public function checkget($phone)
    {
        $Get = Get::Where('phone', $phone)->first();
        return response()->json($Get);
    }

    public function getShowrooms()
    {
        $showrooms = Showroom::where('status', 'published')->get();
        return response()->json($showrooms);
    }


    public function getallShowrooms()
    {
        $showrooms = Showroom::get();
        return response()->json($showrooms);
    }



    public function groupservice()
    {
        $GroupService = GroupService::orderBy('Name', 'asc')->get();
        return response()->json($GroupService);
    }


    public function postData(Request $request)
    {
        // Validate the request data
        $request->validate([
            'name' => 'required|string|max:255',
            // Add more validation rules as needed
        ]);

        // Process the data (you can save it to the database, for example)
        $name = $request->input('name');

        // Return a response (you can customize this based on your needs)
        return response()->json(['message' => 'Data received successfully', 'name' => $name]);
    }


    public function getemployeeData()
    {
        $Employee = Employee::where('status', 'published')->get();
        return response()->json($Employee);
    }


    public function getallemployeeData()
    {
        $Employee = Employee::get();
        return response()->json($Employee);
    }



    public function getGroupServices($showroomId)
    {
        $serviceShowrooms = ServiceShowroom::with(['groupservice' => function ($query) {
            $query->with(['services' => function ($query) {
                $query->where('status', 'published')->orderBy('Name', 'asc'); // Sắp xếp services theo tên từ a đến z
            }]);
        }])->where('showroom_id', $showroomId)->get();

        $groupServiceData = [];

        foreach ($serviceShowrooms as $serviceShowroom) {
            $groupService = $serviceShowroom->groupservice;

            if ($groupService) {
                // Sắp xếp mảng services trong groupService theo tên từ a đến z
                $groupService->services = $groupService->services->sortBy('Name')->values()->all();

                $groupServiceData[] = [
                    'groupService' => $groupService,
                ];
            }
        }

        // Sắp xếp mảng $groupServiceData theo tên của mỗi groupService từ a đến z
        usort($groupServiceData, function ($a, $b) {
            return strcmp($a['groupService']->Name, $b['groupService']->Name);
        });

        return response()->json($groupServiceData);
    }


    public function ShowroomSchedule($showroomId)
    {
        /*      $showroomSchedules = ShowroomSchedule::where('showroom_id', $showroomId)
            ->with('workingHours')
            ->get();
    
        return response()->json($showroomSchedules); */

        $showroomSchedules = ShowroomSchedule::where('showroom_id', $showroomId)->get();

        return response()->json($showroomSchedules);
    }


    public function workingHours($showroomId)
    {

        // Retrieve WorkingHours data based on the common showroom_id
        $workingHours = WorkingHour::where('showroom_schedule_id', $showroomId)->get();


        return response()->json($workingHours);
    }




    /*     public function getGroupServices($showroomId)
    {
        $groupServices = Showroom::find($showroomId)->groupServices;
        return response()->json($groupServices);
    } */

    public function getServices()
    {
        $services = Service::where('status', 'published')->get();
        return response()->json($services);
    }



    public function Services()
    {
        try {
            $services = Service::with('groupService:id,name')
                ->get()
                ->sortBy(function ($service) {
                    return $service->groupService->name;
                });

            return response()->json($services->values()->all());
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    public function ArtistLevel()
    {
        $artistLevels = ArtistLevel::all();
        return response()->json($artistLevels);
    }

    public function Artist()
    {
        $artist = Artists::where('name', '!=', 'N/A')->where('status', 'published')->get();
        return response()->json($artist);
    }



    public function Get()
    {
        $Get = Get::get();
        return response()->json($Get);
    }

    public function Parner()
    {
        $OP = Admin::select('id', 'name','manage_supers')
            ->where('status', 'published')
            ->where('manage_supers', 4)
            ->orwhere('manage_supers', 3)
            ->get();

        return response()->json($OP);
    }





    public function getAllData()
    {

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


        return response()->json($bookings);
    }

    public function getAllDataTable($startDate, $endDate, $type)
    {
        $startDate = Carbon::parse($startDate)->startOfDay();
        $endDate = Carbon::parse($endDate)->endOfDay();

        $bookings = Booking::select('bookings.id', 'bookings.date', 'bookings.GetID', 'bookings.Source', 'bookings.source_data', 'bookings.Note', 'bookings.time', 'bookings.time_end', 'bookings.ArtistID', 'bookings.ShowroomID', 'bookings.status', 'bookings.action', 'bookings.content', 'bookings.source_name', 'bookings.created_at', 'bookings.price_id')
            ->with([
                'artist' => function ($query) {
                    $query->select('id', 'name', 'artist_pay');
                },
                'showroom' => function ($query) {
                    $query->select('id', 'Name');
                },
                'get' => function ($query) {
                    $query->select('id', 'Name', 'Source', 'Phone', 'Email', 'Address', 'source_data', 'Note');
                },
                'services' => function ($query) {
                    $query->select('Name'); // Select only the 'Name' column
                },
                'price' => function ($query) {
                    $query->select('id', 'Total_price', 'Deposit_price', 'Remaining_price', 'servies_price');
                },
                'payment' => function ($query) {
                    $query->select('id', 'BookingID', 'payment_type', '1stcheck', 'payment_type_remainding', '2ndcheck');
                }
            ])
            ->where(function ($query) use ($startDate, $endDate, $type) {

                // Check either 'bookings.date' or 'bookings.created_at' based on $type
                if ($type == 'null') {
                    $query->whereBetween('bookings.date', [$startDate, $endDate])
                        ->orWhereBetween('bookings.created_at', [$startDate, $endDate]);
                } elseif ($type == 1) {
                    $query->whereBetween('bookings.created_at', [$startDate, $endDate]);
                } elseif ($type == 2) {
                    $query->whereBetween('bookings.date', [$startDate, $endDate]);
                }
            })
            ->orderBy('created_at', 'desc') // Sắp xếp theo thứ tự mới nhất dựa trên created_at
            ->get();

        $bookings->transform(function ($booking) {
            $booking->time = Carbon::parse($booking->time)->format('h:i A');
            $booking->time_end = Carbon::parse($booking->time_end)->format('h:i A');
            return $booking;
        });

        return response()->json($bookings);
    }




    public function bookingsData($id)
    {



        $bookingsData = Booking::with([
            'artist' => function ($query) {
                $query->select('id', 'name', 'fullname');
            },
            'showroom',
            'get',
            'services' => function ($query) {
                // Include additional information about groupService
                $query->with('groupService:id,name');
            },
            'price',
            'payment'
        ])->where('id', '=', $id)->get();

        return response()->json($bookingsData);
    }


    public function bookingsDataArtists($id)
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
        ])->where('ArtistID', '=', $id)->get();

        return response()->json($bookingsData);
    }



    public function bookingsDataEmployee($id)
    {
        $userId = $id;

        $bookingsData = Booking::with([
            'artist' => function ($query) {
                $query->select('id', 'name', 'fullname');
            },
            'showroom',
            'get',
            'services',
            'price',
            'payment'
        ])->where('source_id', '=', $userId)->where('source_type', '=', "App\Models\Employee")->get();

        return response()->json($bookingsData);
    }


    public function getBookShowroomData($showroomId)
    {
        $getBookShowroomData = Booking::with([
            'artist:id,name,fullname',
            'showroom',
            'get',
            'services',
            'price',
            'payment'
        ])->where('status', '=', 'Waiting')->where('ShowroomID', $showroomId)->get();

        return response()->json($getBookShowroomData);
    }



    public function getAllfullcalendarNew($startDate, $endDate, $showroom)
    {
        // Chuyển định dạng ngày về Y-m-d nếu chưa được chuyển đổi
        $startDate = date('Y-m-d', strtotime($startDate));
        $endDate = date('Y-m-d', strtotime($endDate));

        // Lấy danh sách showroom
        $showrooms = Showroom::all();

        // Khởi tạo mảng để chứa dữ liệu
        $result = [];

        // Tạo vòng lặp qua mỗi ngày trong khoảng thời gian
        $currentDate = $startDate;

        while ($currentDate <= $endDate) {
            // Tạo mảng chứa dữ liệu cho mỗi showroom
            $showroomData = [];

            // Lặp qua từng 
            // Lấy dữ liệu cho ngày hiện tại và showroom hiện tại
            $dailyData = ShowroomSchedule::where('showroom_id', $showroom)
                ->where('day', date('l', strtotime($currentDate)))
                ->first();

            // Kiểm tra xem có dữ liệu không
            if ($dailyData) {
                // Lấy dữ liệu cho ngày hiện tại
                $bookingData = Booking::select('id', 'ArtistID', 'GetID', 'ShowroomID', 'status', 'action', 'time', 'time_end', 'date', 'source_name')
                    ->with([
                        'artist:id',
                        'showroom:id,Name',
                        'services:id,Name',
                        'get:id,name',
                    ])
                    ->where('date', $currentDate)
                    ->where('ShowroomID',  $showroom)
                    ->orderBy('created_at', 'desc')
                    ->get();

                // Kiểm tra và cập nhật trường 'active' trong dailyData
                $workingHour = WorkingHour::where('showroom_schedule_id', $dailyData->showroom_id)
                    ->where('date', $currentDate)
                    ->first();

                if ($workingHour) {
                    $dailyData->active = $workingHour->active;
                }

                // Thêm trường dayOfWeek cho mỗi mục
                // Thêm dữ liệu vào mảng showroomData
                $showroomData[$showroom] = [
                    'dailyData' => $dailyData,
                    'bookingData' => $bookingData,
                ];
            }

            // Thêm dữ liệu vào mảng kết quả
            $result[$currentDate] = $showroomData;

            // Di chuyển tới ngày tiếp theo
            $currentDate = date('Y-m-d', strtotime($currentDate . ' +1 day'));
        }

        return response()->json($result);
    }

    /*     public function getAllfullcalendar($startDate, $endDate, $showroom)
    {
        // Chuyển định dạng ngày về Y-m-d nếu chưa được chuyển đổi
        $startDate = date('Y-m-d', strtotime($startDate));
        $endDate = date('Y-m-d', strtotime($endDate));

        // Lấy danh sách showroom
        $showrooms = Showroom::all();

        // Khởi tạo mảng để chứa dữ liệu
        $result = [];

        // Tạo vòng lặp qua mỗi ngày trong khoảng thời gian
        $currentDate = $startDate;

        if($showroom !== 0) {
            while ($currentDate <= $endDate) {
                // Tạo mảng chứa dữ liệu cho mỗi showroom
                $showroomData = [];
    
                // Lặp qua từng 
                // Lấy dữ liệu cho ngày hiện tại và showroom hiện tại
                $dailyData = ShowroomSchedule::where('showroom_id', $showroom)
                    ->where('day', date('l', strtotime($currentDate)))
                    ->first();
    
                // Kiểm tra xem có dữ liệu không
                if ($dailyData) {
                    // Lấy dữ liệu cho ngày hiện tại
                    
                    $bookingData = Booking::select('id', 'ArtistID', 'GetID', 'ShowroomID', 'status', 'action', 'time', 'time_end', 'date', 'source_name','price_id')
                        ->with([
                            'artist:id,name',
                            'showroom:id,Name',
                            'services:id,Name',
                            'get:id,name',
                            'price',
                        ])
                        ->where('date', $currentDate)
                        ->where('ShowroomID',  $showroom)
                        ->orderBy('created_at', 'desc')
                        ->get();
    
    
                    // Kiểm tra và cập nhật trường 'active' trong dailyData
                    $workingHour = WorkingHour::where('showroom_schedule_id', $dailyData->showroom_id)
                        ->where('date', $currentDate)
                        ->first();
    
                    if ($workingHour) {
                        $dailyData->active = $workingHour->active;
                    }
    
                    // Thêm trường dayOfWeek cho mỗi mục
                    // Thêm dữ liệu vào mảng showroomData
                    $showroomData[$showroom] = [
                        'dailyData' => $dailyData,
                        'bookingData' => $bookingData,
                    ];
                }
    
                // Thêm dữ liệu vào mảng kết quả
                $result[$currentDate] = $showroomData;
    
                // Di chuyển tới ngày tiếp theo
                $currentDate = date('Y-m-d', strtotime($currentDate . ' +1 day'));
            }
        } else {

            while ($currentDate <= $endDate) {
                // Tạo mảng chứa dữ liệu cho mỗi showroom
                $showroomData = [];

                foreach (    $showrooms as $showroom ) {
    
                // Lặp qua từng 
                // Lấy dữ liệu cho ngày hiện tại và showroom hiện tại
                $dailyData = ShowroomSchedule::where('showroom_id', $showroom->id)
                    ->where('day', date('l', strtotime($currentDate)))
                    ->first();
    
                // Kiểm tra xem có dữ liệu không
                if ($dailyData) {
                    // Lấy dữ liệu cho ngày hiện tại
                    
                    $bookingData = Booking::select('id', 'ArtistID', 'GetID', 'ShowroomID', 'status', 'action', 'time', 'time_end', 'date', 'source_name','price_id')
                        ->with([
                            'artist:id,name',
                            'showroom:id,Name',
                            'services:id,Name',
                            'get:id,name',
                            'price',
                        ])
                        ->where('date', $currentDate)
                        ->where('ShowroomID',   $showroom->id)
                        ->orderBy('created_at', 'desc')
                        ->get();
    
    
                    // Kiểm tra và cập nhật trường 'active' trong dailyData
                    $workingHour = WorkingHour::where('showroom_schedule_id', $dailyData->showroom_id)
                        ->where('date', $currentDate)
                        ->first();
    
                    if ($workingHour) {
                        $dailyData->active = $workingHour->active;
                    }
    
                    // Thêm trường dayOfWeek cho mỗi mục
                    // Thêm dữ liệu vào mảng showroomData
                    $showroomData[$showroom] = [
                        'dailyData' => $dailyData,
                        'bookingData' => $bookingData,
                    ];
                }
    
                // Thêm dữ liệu vào mảng kết quả
                $result[$currentDate] = $showroomData;
    
                // Di chuyển tới ngày tiếp theo
                $currentDate = date('Y-m-d', strtotime($currentDate . ' +1 day'));
            }
  
                
            }

        }
    

        return response()->json($result);
    } 
 */


    public function getAllfullcalendar($startDate, $endDate, $showroom, $artist)
    {
        // Chuyển định dạng ngày về 'Y-m-d' nếu chưa được chuyển đổi
        $startDate = date('Y-m-d', strtotime($startDate));
        $endDate = date('Y-m-d', strtotime($endDate));

        // Lấy danh sách tất cả showroom
        $showrooms = Showroom::all();

        // Khởi tạo mảng kết quả
        $result = [];

        // Thiết lập ngày hiện tại là ngày bắt đầu
        $currentDate = $startDate;


        // Xử lý trường hợp nếu showroom được chỉ định
        if ($showroom != 0) {
            // Lặp qua mỗi ngày trong khoảng thời gian
            while ($currentDate <= $endDate) {
                // Khởi tạo mảng dữ liệu cho showroom hiện tại
                $showroomData = [];

                // Lấy dữ liệu cho ngày hiện tại và showroom chỉ định
                $dailyData = $this->getShowroomData($currentDate, $showroom);

                // Nếu có dữ liệu cho ngày và showroom
                if ($dailyData) {
                    // Lấy dữ liệu đặt chỗ cho ngày hiện tại và showroom chỉ định
                    $bookingData = $this->getBookingData($currentDate, $showroom);


                    $workingHourNoneArtist = WorkingHour::where('showroom_schedule_id', $showroom)
                        ->where('date', $currentDate)
                        ->where('artist_id', 0)
                        ->first();


                    if ($workingHourNoneArtist) {
                        $dailyData->active = $workingHourNoneArtist->active;
                    }


                    // Kiểm tra và cập nhật trường 'active' trong dailyData
                    $workingHour = WorkingHour::where('showroom_schedule_id', $showroom)
                        ->where('date', $currentDate)
                        ->where('artist_id', $artist)
                        ->first();


                    if ($workingHour) {
                        $dailyData->active = $workingHour->active;
                    }

                    // Thêm dữ liệu của ngày và showroom vào mảng showroomData
                    $showroomData[$showroom] = [
                        'dailyData' => $dailyData,
                        'bookingData' => $bookingData,
                    ];
                }

                // Thêm dữ liệu của showroom vào mảng kết quả
                $result[$currentDate] = $showroomData;

                // Di chuyển tới ngày tiếp theo
                $currentDate = date('Y-m-d', strtotime($currentDate . ' +1 day'));
            }
        } else { // Xử lý trường hợp nếu không có showroom được chỉ định
            while ($currentDate <= $endDate) {
                // Khởi tạo mảng dữ liệu cho từng showroom
                $showroomData = [];

                // Lặp qua từng showroom
                foreach ($showrooms as $showroomid) {
                    // Lấy dữ liệu cho ngày hiện tại và showroom hiện tại
                    $dailyData = $this->getShowroomData($currentDate, $showroomid->id);

                    // Nếu có dữ liệu cho ngày và showroom
                    if ($dailyData) {
                        // Lấy dữ liệu đặt chỗ cho ngày hiện tại và showroom hiện tại
                        $bookingData = $this->getBookingData($currentDate, $showroomid->id);

                        $dailyData->active = 1;
                        // Kiểm tra và cập nhật trường 'active' trong dailyData


                        // Thêm dữ liệu của ngày và showroom vào mảng showroomData
                        $showroomData[$showroomid->id] = [
                            'dailyData' => $dailyData,
                            'bookingData' => $bookingData,
                        ];
                    }
                }

                // Thêm dữ liệu của showroom vào mảng kết quả
                $result[$currentDate] = $showroomData;

                // Di chuyển tới ngày tiếp theo
                $currentDate = date('Y-m-d', strtotime($currentDate . ' +1 day'));
            }
        }

        // Trả về kết quả dưới dạng JSON
        return response()->json($result);
    }

    // Phương thức để lấy dữ liệu showroom cho một ngày và showroom chỉ định
    private function getShowroomData($date, $showroomId)
    {
        return ShowroomSchedule::where('showroom_id', $showroomId)
            ->where('day', date('l', strtotime($date)))
            ->first();
    }

    // Phương thức để lấy dữ liệu đặt chỗ cho một ngày và showroom chỉ định
    private function getBookingData($date, $showroomId)
    {
        return Booking::select('id', 'ArtistID', 'GetID', 'ShowroomID', 'status', 'action', 'time', 'time_end', 'date', 'source_name', 'price_id')
            ->with([
                'artist:id,name',
                'showroom:id,Name',
                'services:id,Name',
                'get:id,name',
                'price',
            ])
            ->where('date', $date)
            ->where('ShowroomID', $showroomId)
            ->orderBy('created_at', 'desc')
            ->get();
    }

    // Phương thức để cập nhật trường 'active' trong dailyData
    private function updateActiveField($dailyData, $artist)
    {
        $workingHour = WorkingHour::where('showroom_schedule_id', $dailyData->showroom_id)
            ->where('date', $dailyData->date)
            ->where('artist_id', $artist)
            ->first();


        if ($workingHour) {
            $dailyData->active = $workingHour->active;
        }
    }


    public function DateActive($Date, $showroom, $artist_id)
    {
        // Query the status of the day of the week ($Date)
        $dayOfWeekActive = ShowroomSchedule::where('showroom_id', $showroom)
            ->where('day', date('l', strtotime($Date)))
            ->first();




        if ($dayOfWeekActive != null) {
            $active =   $dayOfWeekActive->active;
        }


        $dayActive = WorkingHour::where('showroom_schedule_id', $showroom)
            ->where('date', $Date)
            ->where('artist_id', $artist_id)
            ->first();


        if ($dayActive != null) {
            $active =  $dayActive->active;
        } else {
            $active = 0;
        }

        // Initialize $isActive to true

        // If $dayActive is null, meaning no specific entry for the date
        if ($active == 1) {
            // Check if $dayOfWeekActive is active
            $isActive = true;
        } else {
            // If $dayActive is not null, consider both $dayActive and $dayOfWeekActive status
            $isActive = false;
        }

        // Return the JSON response with the final isActive status
        return response()->json(['active' => $isActive]);
    }



    public function getDataShowroom($startDate, $endDate)
    {
        // Lấy danh sách các ShowroomID (giả sử ShowroomID là một trường trong bảng Booking)
        $showroomIDs = Showroom::where('status', 'published')->get();

        // Tạo mảng để lưu trữ dữ liệu tổng hợp
        $summarizedData = [];

        // Chuyển $startDate và $endDate thành các đối tượng ngày
        $currentDate = new \DateTime($startDate);
        $endDate = new \DateTime($endDate);

        while ($currentDate <= $endDate) {
            // Lấy ngày hiện tại dưới dạng chuỗi "Y-m-d"
            $currentDateStr = $currentDate->format('Y-m-d');

            foreach ($showroomIDs as $showroomID) {
                // Lấy dữ liệu cho ngày hiện tại và cho từng ShowroomID
                $dataForDateAndShowroom = $this->getDataForDateAndShowroom($currentDateStr, $showroomID->id);

                // Tổng hợp dữ liệu cho ngày hiện tại và ShowroomID vào mảng tổng hợp
                if (!isset($summarizedData[$currentDateStr])) {
                    $summarizedData[$currentDateStr] = [];
                }

                $summarizedData[$currentDateStr][$showroomID->id] = $dataForDateAndShowroom;
                $summarizedData[$currentDateStr][$showroomID->id]["Name"] = $showroomID->Name;
                $summarizedData[$currentDateStr][$showroomID->id]["id"] = $showroomID->id;
            }

            // Tăng ngày hiện tại lên 1 ngày
            $currentDate->modify('+1 day');
        }


        return $summarizedData;
    }

    public function getDataForDateAndShowroom($date, $showroomID)
    {

        $bookings = Booking::select('id', 'ArtistID', 'ShowroomID', 'status', 'action', 'source_data', 'source_name', 'source_id', 'source_type', 'created_at', 'updated_at', 'price_id')
            ->with(['price', 'services:id,Name', 'showroom'])
            ->whereDate('created_at', $date)
            ->where('ShowroomID', $showroomID)
            ->orderBy('created_at', 'desc')
            ->get();



        // Tạo một mảng để tổng hợp dữ liệu cho ngày cụ thể và ShowroomID
        $summarizedData = [
            'id' => "",
            'Name' => "",
            'Total_price' => 0,
            'Deposit_price' => 0,
            'servies_price' => 0,
            'revenue' => 0,
            'Remaining_price' => 0,
            'Done_price' => 0,
            'Cancel_price' => 0,
            'Refund_price' => 0,
            'length' => 0,
            'length_real' => 0,
            'Done_price_revenue' => 0,
            'upsale' => 0,
            'PartialDone' => 0,
            'Initial_revenue' => 0,
            'Refund_booking' => 0,
        ];

        foreach ($bookings as $booking) {
            // Tính tổng các trường trong price
            $summarizedData['Total_price'] += $booking->price->Total_price;
            $summarizedData['Deposit_price'] += $booking->price->Deposit_price;
            $summarizedData['servies_price'] += $booking->price->servies_price;
            $summarizedData['revenue'] += $booking->price->Deposit_price;
            $summarizedData['Initial_revenue'] += $booking->price->Deposit_price;
            $summarizedData['length'] += 1;
            $summarizedData['Remaining_price'] += $booking->price->Remaining_price;

            if ($booking->price->servies_price != 0) {
                $summarizedData['length_real'] += 1;
            }
        }


        $bookingupdates = Booking::select('bookings.id', 'bookings.ArtistID', 'bookings.ShowroomID', 'bookings.status', 'bookings.action', 'bookings.source_data', 'bookings.source_name', 'bookings.source_id', 'bookings.source_type', 'bookings.created_at', 'bookings.updated_at', 'bookings.price_id')
            ->with(['price', 'services:id,Name'])
            ->join('prices', 'bookings.price_id', '=', 'prices.id')
            ->whereDate('bookings.date', $date)
            ->where('bookings.ShowroomID', '=', $showroomID)
            ->orderBy('bookings.created_at', 'desc')
            ->get();


        foreach ($bookingupdates as $bookingupdate) {
            $newRevenue = $bookingupdate->price->Total_price - $bookingupdate->price->Deposit_price;
            $summarizedData['revenue'] += $newRevenue;
            $summarizedData['upsale'] += $bookingupdate->price->upsale;
            $summarizedData['Initial_revenue'] += $bookingupdate->price->servies_price - $bookingupdate->price->Deposit_price;

            if ($bookingupdate->status == "Done") {
                $summarizedData['Done_price'] += $bookingupdate->price->servies_price;
                $summarizedData['Done_price_revenue'] += $newRevenue;
            } else if ($bookingupdate->status == "Cancel") {
                $summarizedData['Cancel_price'] += $bookingupdate->price->servies_price;
            } else if ($bookingupdate->status == "Refund") {
                $summarizedData['Refund_price'] += $bookingupdate->price->Deposit_price - $bookingupdate->price->Total_price;
                $summarizedData['Refund_booking'] += $bookingupdate->price->servies_price;
            } else if ($bookingupdate->status == "Partial Done") {
                $summarizedData['Done_price'] += $bookingupdate->price->Total_price;
                $summarizedData['Done_price_revenue'] += $newRevenue;
                $summarizedData['PartialDone'] += $bookingupdate->price->Remaining_price;
            }
        }

        return $summarizedData;
    }





    public function getDataSource($startDate, $endDate)
    {
        // Lấy danh sách các ShowroomID (giả sử ShowroomID là một trường trong bảng Booking)
        $GetIDs =  Booking::distinct()->pluck('source_data');


        // Tạo mảng để lưu trữ dữ liệu tổng hợp
        $summarizedData = [];

        // Chuyển $startDate và $endDate thành các đối tượng ngày
        $currentDate = new \DateTime($startDate);
        $endDate = new \DateTime($endDate);

        while ($currentDate <= $endDate) {
            // Lấy ngày hiện tại dưới dạng chuỗi "Y-m-d"
            $currentDateStr = $currentDate->format('Y-m-d');

            foreach ($GetIDs as $GetID) {
                // Lấy dữ liệu cho ngày hiện tại và cho từng GetID
                $dataForDateAndGet = $this->getDataForDateAndGet($currentDateStr, $GetID);

                // Tổng hợp dữ liệu cho ngày hiện tại và GetID vào mảng tổng hợp
                if (!isset($summarizedData[$currentDateStr])) {
                    $summarizedData[$currentDateStr] = [];
                }

                $summarizedData[$currentDateStr][$GetID] = $dataForDateAndGet;
                $summarizedData[$currentDateStr][$GetID]["Name"] = $GetID;
            }

            // Tăng ngày hiện tại lên 1 ngày
            $currentDate->modify('+1 day');
        }


        return $summarizedData;
    }

    public function getDataForDateAndGet($date, $GetID)
    {
        $cacheKey = 'data_' . $date . '_' . $GetID;
        $yourCacheDuration = 0;

        $bookings = Booking::select('id', 'ArtistID', 'GetID', 'status', 'action', 'source_data', 'source_name', 'source_id', 'source_type', 'created_at', 'updated_at', 'price_id')
            ->with(['price', 'services:id,Name', 'Get'])
            ->whereDate('created_at', $date)
            ->where('source_data', $GetID)
            ->orderBy('created_at', 'desc')
            ->get();

        // Tạo một mảng để tổng hợp dữ liệu cho ngày cụ thể và GetID
        $summarizedData = [
            'Name' => "",
            'Total_price' => 0,
            'Deposit_price' => 0,
            'servies_price' => 0,
            'revenue' => 0,
            'Remaining_price' => 0,
            'length' => 0,
            'length_real' => 0,

        ];

        foreach ($bookings as $booking) {

            // Tính tổng các trường trong price
            $summarizedData['Total_price'] += $booking->price->Total_price;
            $summarizedData['Deposit_price'] += $booking->price->Deposit_price;
            $summarizedData['servies_price'] += $booking->price->servies_price;
            $summarizedData['revenue'] += $booking->price->Deposit_price;
            $summarizedData['length'] += 1;
            $summarizedData['Remaining_price'] += $booking->price->Remaining_price;


            if ($booking->price->servies_price != 0) {
                $summarizedData['length_real'] += 1;
            }
        }

        $bookingupdates = Booking::select('bookings.id', 'bookings.ArtistID', 'bookings.ShowroomID', 'bookings.status', 'bookings.action', 'bookings.source_data', 'bookings.source_name', 'bookings.source_id', 'bookings.source_type', 'bookings.created_at', 'bookings.updated_at', 'bookings.price_id')
            ->with(['price', 'services:id,Name'])
            ->join('prices', 'bookings.price_id', '=', 'prices.id')
            ->whereHas('price', function ($query) use ($date) {
                $query->whereDate('prices.updated_at', $date);
            })
            ->where('bookings.source_data', '=', $GetID)
            ->orderBy('bookings.created_at', 'desc')
            ->get();

        foreach ($bookingupdates as $bookingupdate) {
            $newRevenue = $bookingupdate->price->Total_price - $bookingupdate->price->Deposit_price;
            $summarizedData['revenue'] += $newRevenue;
        }

        return $summarizedData;
    }

    /*     getDataSource Location */


    public function getDataSourceLocation($startDate, $endDate, $showroom)
    {
        // Lấy danh sách các ShowroomID (giả sử ShowroomID là một trường trong bảng Booking)
        $GetIDs =  Booking::distinct()->pluck('source_data');


        // Tạo mảng để lưu trữ dữ liệu tổng hợp
        $summarizedData = [];

        // Chuyển $startDate và $endDate thành các đối tượng ngày
        $currentDate = new \DateTime($startDate);
        $endDate = new \DateTime($endDate);

        while ($currentDate <= $endDate) {
            // Lấy ngày hiện tại dưới dạng chuỗi "Y-m-d"
            $currentDateStr = $currentDate->format('Y-m-d');

            foreach ($GetIDs as $GetID) {
                // Lấy dữ liệu cho ngày hiện tại và cho từng GetID
                $dataForDateAndGet = $this->getDataForDateAndGetLocation($currentDateStr, $GetID, $showroom);

                // Tổng hợp dữ liệu cho ngày hiện tại và GetID vào mảng tổng hợp
                if (!isset($summarizedData[$currentDateStr])) {
                    $summarizedData[$currentDateStr] = [];
                }

                $summarizedData[$currentDateStr][$GetID] = $dataForDateAndGet;
                $summarizedData[$currentDateStr][$GetID]["Name"] = $GetID;
            }

            // Tăng ngày hiện tại lên 1 ngày
            $currentDate->modify('+1 day');
        }


        return $summarizedData;
    }

    public function getDataForDateAndGetLocation($date, $GetID, $showroom)
    {
        $cacheKey = 'data_' . $date . '_' . $GetID;
        $yourCacheDuration = 0;

        $bookingsQuery = Booking::select('id', 'ArtistID', 'GetID', 'status', 'action', 'source_data', 'source_name', 'source_id', 'source_type', 'created_at', 'updated_at', 'price_id')
            ->with(['price', 'services:id,Name', 'Get'])
            ->whereDate('created_at', $date)
            ->where('source_data', $GetID)
            ->orderBy('created_at', 'desc');


        if ($showroom !== "null") {
            $bookingsQuery->where('ShowroomID', $showroom);
        }


        $bookings = $bookingsQuery->orderBy('created_at', 'desc')
            ->get();



        // Tạo một mảng để tổng hợp dữ liệu cho ngày cụ thể và GetID
        $summarizedData = [
            'Name' => "",
            'Total_price' => 0,
            'Deposit_price' => 0,
            'servies_price' => 0,
            'revenue' => 0,
            'Remaining_price' => 0,
            'length' => 0,
            'length_real' => 0,

        ];

        foreach ($bookings as $booking) {

            // Tính tổng các trường trong price
            $summarizedData['Total_price'] += $booking->price->Total_price;
            $summarizedData['Deposit_price'] += $booking->price->Deposit_price;
            $summarizedData['servies_price'] += $booking->price->servies_price;
            $summarizedData['revenue'] += $booking->price->Deposit_price;
            $summarizedData['length'] += 1;
            $summarizedData['Remaining_price'] += $booking->price->Remaining_price;


            if ($booking->price->servies_price != 0) {
                $summarizedData['length_real'] += 1;
            }
        }

        $bookingsQueryupdates = Booking::select('bookings.id', 'bookings.ArtistID', 'bookings.ShowroomID', 'bookings.status', 'bookings.action', 'bookings.source_data', 'bookings.source_name', 'bookings.source_id', 'bookings.source_type', 'bookings.created_at', 'bookings.updated_at', 'bookings.price_id')
            ->with(['price', 'services:id,Name'])
            ->join('prices', 'bookings.price_id', '=', 'prices.id')
            ->whereHas('price', function ($query) use ($date) {
                $query->whereDate('prices.updated_at', $date);
            })
            ->where('bookings.source_data', '=', $GetID)
            ->orderBy('bookings.created_at', 'desc');


        if ($showroom !== "null") {
            $bookingsQueryupdates->where('ShowroomID', $showroom);
        }


        $bookingupdates = $bookingsQueryupdates->orderBy('created_at', 'desc')
            ->get();


        foreach ($bookingupdates as $bookingupdate) {
            $newRevenue = $bookingupdate->price->Total_price - $bookingupdate->price->Deposit_price;
            $summarizedData['revenue'] += $newRevenue;
        }

        return $summarizedData;
    }


    /*     getDataService */

    public function getDataService($startDate, $endDate)
    {
        // Lấy danh sách các ShowroomID (giả sử ShowroomID là một trường trong bảng Booking)
        $ServiceIDs =  Service::all();



        // Tạo mảng để lưu trữ dữ liệu tổng hợp
        $summarizedData = [];

        // Chuyển $startDate và $endDate thành các đối tượng ngày
        $currentDate = new \DateTime($startDate);
        $endDate = new \DateTime($endDate);

        while ($currentDate <= $endDate) {
            // Lấy ngày hiện tại dưới dạng chuỗi "Y-m-d"
            $currentDateStr = $currentDate->format('Y-m-d');

            foreach ($ServiceIDs as $ServiceID) {
                // Lấy dữ liệu cho ngày hiện tại và cho từng GetID
                $dataForDateAndService = $this->getDataForDateAndService($currentDateStr, $ServiceID->id);

                // Tổng hợp dữ liệu cho ngày hiện tại và GetID vào mảng tổng hợp
                if (!isset($summarizedData[$currentDateStr])) {
                    $summarizedData[$currentDateStr] = [];
                }

                $summarizedData[$currentDateStr][$ServiceID->id] = $dataForDateAndService;
                $summarizedData[$currentDateStr][$ServiceID->id]["Name"] = $ServiceID->Name;
                $summarizedData[$currentDateStr][$ServiceID->id]["id"] = $ServiceID->id;
            }

            // Tăng ngày hiện tại lên 1 ngày
            $currentDate->modify('+1 day');
        }


        return $summarizedData;
    }

    public function getDataForDateAndService($date, $serviceId)
    {

        $cacheKey = 'data_' . $date . '_' . $serviceId;
        $yourCacheDuration = 0;


        $bookings = Booking::select('bookings.id', 'bookings.ArtistID', 'bookings.GetID', 'bookings.status', 'bookings.action', 'bookings.source_data', 'bookings.source_name', 'bookings.source_id', 'bookings.source_type', 'bookings.created_at', 'bookings.updated_at', 'bookings.price_id')
            ->with(['price', 'services:id', 'Get'])
            ->whereDate('bookings.created_at', $date)
            ->whereHas('services', function ($query) use ($serviceId) {
                $query->where('services.id', $serviceId); // Thay $serviceId bằng giá trị bạn muốn kiểm tra
            })
            ->orderBy('created_at', 'desc')
            ->get();

        // Tạo một mảng để tổng hợp dữ liệu cho ngày cụ thể và GetID
        $summarizedData = [
            'id' => "",
            'Name' => "",
            'Total_price' => 0,
            'Deposit_price' => 0,
            'servies_price' => 0,
            'revenue' => 0,
            'Remaining_price' => 0,
            'length' => 0,
            'length_real' => 0,
        ];

        foreach ($bookings as $booking) {

            // Tính tổng các trường trong price
            $summarizedData['Total_price'] += $booking->price->Total_price;
            $summarizedData['Deposit_price'] += $booking->price->Deposit_price;
            $summarizedData['servies_price'] += $booking->price->servies_price;
            $summarizedData['revenue'] += $booking->price->Deposit_price;
            $summarizedData['length'] += 1;
            $summarizedData['Remaining_price'] += $booking->price->Remaining_price;

            if ($booking->price->servies_price != 0) {
                $summarizedData['length_real'] += 1;
            }
        }

        $bookingupdates = Booking::select('bookings.id', 'bookings.ArtistID', 'bookings.ShowroomID', 'bookings.status', 'bookings.action', 'bookings.source_data', 'bookings.source_name', 'bookings.source_id', 'bookings.source_type', 'bookings.created_at', 'bookings.updated_at', 'bookings.price_id')
            ->with(['price', 'services:id,Name'])
            ->join('prices', 'bookings.price_id', '=', 'prices.id')
            ->whereHas('price', function ($query) use ($date) {
                $query->whereDate('prices.updated_at', $date);
            })
            ->whereHas('services', function ($query) use ($serviceId) {
                $query->where('services.id', $serviceId); // Thay $serviceId bằng giá trị bạn muốn kiểm tra
            })
            ->orderBy('bookings.created_at', 'desc')
            ->get();

        foreach ($bookingupdates as $bookingupdate) {
            $newRevenue = $bookingupdate->price->Total_price - $bookingupdate->price->Deposit_price;
            $summarizedData['revenue'] += $newRevenue;
        }

        return $summarizedData;
    }


    /*     getDataService Location*/
    public function getDataServiceLocation($startDate, $endDate, $showroom, $employee)
    {
        // Lấy danh sách các ShowroomID (giả sử ShowroomID là một trường trong bảng Booking)
        $ServiceIDs =  Service::all();



        // Tạo mảng để lưu trữ dữ liệu tổng hợp
        $summarizedData = [];

        // Chuyển $startDate và $endDate thành các đối tượng ngày
        $currentDate = new \DateTime($startDate);
        $endDate = new \DateTime($endDate);

        while ($currentDate <= $endDate) {
            // Lấy ngày hiện tại dưới dạng chuỗi "Y-m-d"
            $currentDateStr = $currentDate->format('Y-m-d');

            foreach ($ServiceIDs as $ServiceID) {
                // Lấy dữ liệu cho ngày hiện tại và cho từng GetID
                $dataForDateAndService = $this->getDataForDateAndServiceLocation($currentDateStr, $ServiceID->id, $showroom, $employee);

                // Tổng hợp dữ liệu cho ngày hiện tại và GetID vào mảng tổng hợp
                if (!isset($summarizedData[$currentDateStr])) {
                    $summarizedData[$currentDateStr] = [];
                }

                $summarizedData[$currentDateStr][$ServiceID->id] = $dataForDateAndService;
                $summarizedData[$currentDateStr][$ServiceID->id]["Name"] = $ServiceID->Name;
                $summarizedData[$currentDateStr][$ServiceID->id]["id"] = $ServiceID->id;
            }

            // Tăng ngày hiện tại lên 1 ngày
            $currentDate->modify('+1 day');
        }


        return $summarizedData;
    }

    public function getDataForDateAndServiceLocation($date, $serviceId, $showroom, $employee)
    {

        $cacheKey = 'data_' . $date . '_' . $serviceId;
        $yourCacheDuration = 0;


        $bookingsQuery = Booking::select('bookings.id', 'bookings.ArtistID', 'bookings.GetID', 'bookings.status', 'bookings.action', 'bookings.source_data', 'bookings.source_name', 'bookings.source_id', 'bookings.source_type', 'bookings.created_at', 'bookings.updated_at', 'bookings.price_id')
            ->with(['price', 'services:id', 'Get'])
            ->whereDate('bookings.created_at', $date)
            ->whereHas('services', function ($query) use ($serviceId) {
                $query->where('services.id', $serviceId); // Thay $serviceId bằng giá trị bạn muốn kiểm tra
            })
            ->orderBy('created_at', 'desc');


        if ($showroom !== "null") {
            $bookingsQuery->where('ShowroomID', $showroom);
        }


        if ($employee !== "null") {
            $bookingsQuery->where('source_id', $employee)->where('source_type', "App\Models\Employee");
        }

        $bookings = $bookingsQuery->orderBy('created_at', 'desc')
            ->get();

        // Tạo một mảng để tổng hợp dữ liệu cho ngày cụ thể và GetID
        $summarizedData = [
            'id' => "",
            'Name' => "",
            'Total_price' => 0,
            'Deposit_price' => 0,
            'servies_price' => 0,
            'revenue' => 0,
            'Remaining_price' => 0,
            'length' => 0,
            'length_real' => 0,
        ];

        foreach ($bookings as $booking) {

            // Tính tổng các trường trong price
            $summarizedData['Total_price'] += $booking->price->Total_price;
            $summarizedData['Deposit_price'] += $booking->price->Deposit_price;
            $summarizedData['servies_price'] += $booking->price->servies_price;
            $summarizedData['revenue'] += $booking->price->Deposit_price;
            $summarizedData['length'] += 1;
            $summarizedData['Remaining_price'] += $booking->price->Remaining_price;

            if ($booking->price->servies_price != 0) {
                $summarizedData['length_real'] += 1;
            }
        }

        $bookingsQueryupdates = Booking::select('bookings.id', 'bookings.ArtistID', 'bookings.ShowroomID', 'bookings.status', 'bookings.action', 'bookings.source_data', 'bookings.source_name', 'bookings.source_id', 'bookings.source_type', 'bookings.created_at', 'bookings.updated_at', 'bookings.price_id')
            ->with(['price', 'services:id,Name'])
            ->join('prices', 'bookings.price_id', '=', 'prices.id')
            ->whereHas('price', function ($query) use ($date) {
                $query->whereDate('prices.updated_at', $date);
            })
            ->whereHas('services', function ($query) use ($serviceId) {
                $query->where('services.id', $serviceId); // Thay $serviceId bằng giá trị bạn muốn kiểm tra
            })
            ->orderBy('bookings.created_at', 'desc');



        if ($showroom !== "null") {
            $bookingsQueryupdates->where('ShowroomID', $showroom);
        }


        $bookingupdates = $bookingsQueryupdates->orderBy('created_at', 'desc')
            ->get();

        foreach ($bookingupdates as $bookingupdate) {
            $newRevenue = $bookingupdate->price->Total_price - $bookingupdate->price->Deposit_price;
            $summarizedData['revenue'] += $newRevenue;
        }

        return $summarizedData;
    }



    /*     getDataEmployee */



    public function getDataEmployee($startDate, $endDate)
    {
        // Lấy danh sách các ShowroomID (giả sử ShowroomID là một trường trong bảng Booking)
        $EmployeeIDs =  Employee::all();


        // Tạo mảng để lưu trữ dữ liệu tổng hợp
        $summarizedData = [];

        // Chuyển $startDate và $endDate thành các đối tượng ngày
        $currentDate = new \DateTime($startDate);
        $endDate = new \DateTime($endDate);

        while ($currentDate <= $endDate) {
            // Lấy ngày hiện tại dưới dạng chuỗi "Y-m-d"
            $currentDateStr = $currentDate->format('Y-m-d');

            foreach ($EmployeeIDs as $EmployeeID) {
                // Lấy dữ liệu cho ngày hiện tại và cho từng GetID
                $dataForDateAndService = $this->getDataForDateAndEmployee($currentDateStr, $EmployeeID->id);

                // Tổng hợp dữ liệu cho ngày hiện tại và GetID vào mảng tổng hợp
                if (!isset($summarizedData[$currentDateStr])) {
                    $summarizedData[$currentDateStr] = [];
                }

                $summarizedData[$currentDateStr][$EmployeeID->id] = $dataForDateAndService;
                $summarizedData[$currentDateStr][$EmployeeID->id]["Name"] = $EmployeeID->name;
                $summarizedData[$currentDateStr][$EmployeeID->id]["id"] = $EmployeeID->id;
            }

            // Tăng ngày hiện tại lên 1 ngày
            $currentDate->modify('+1 day');
        }


        return $summarizedData;
    }

    public function getDataForDateAndEmployee($date, $EmployeeID)
    {


        $cacheKey = 'data_' . $date . '_' . $EmployeeID;
        $yourCacheDuration = 0;


        $bookings = Booking::select('bookings.id', 'bookings.ArtistID', 'bookings.GetID', 'bookings.status', 'bookings.action', 'bookings.source_data', 'bookings.source_name', 'bookings.source_id', 'bookings.source_type', 'bookings.created_at', 'bookings.updated_at', 'bookings.price_id')
            ->with(['price', 'services:id', 'Get'])
            ->whereDate('bookings.created_at', $date)
            ->where('source_id', '=', $EmployeeID)
            ->where('source_type', '=', "App\Models\Employee")
            ->orderBy('created_at', 'desc')
            ->get();

        // Tạo một mảng để tổng hợp dữ liệu cho ngày cụ thể và GetID
        $summarizedData = [
            'id' => "",
            'Name' => "",
            'Total_price' => 0,
            'Deposit_price' => 0,
            'servies_price' => 0,
            'revenue' => 0,
            'Remaining_price' => 0,
            'Done_price' => 0,
            'Cancel_price' => 0,
            'Refund_price' => 0,
            'length' => 0,
            'length_real' => 0,
            'Done_price_revenue' => 0,
        ];

        foreach ($bookings as $booking) {

            // Tính tổng các trường trong price
            $summarizedData['Total_price'] += $booking->price->Total_price;
            $summarizedData['Deposit_price'] += $booking->price->Deposit_price;
            $summarizedData['servies_price'] += $booking->price->servies_price;
            $summarizedData['revenue'] += $booking->price->Deposit_price;
            $summarizedData['length'] += 1;
            $summarizedData['Remaining_price'] += $booking->price->Remaining_price;

            if ($booking->price->servies_price != 0) {
                $summarizedData['length_real'] += 1;
            }
        }

        $bookingupdates = Booking::select('bookings.id', 'bookings.ArtistID', 'bookings.ShowroomID', 'bookings.status', 'bookings.action', 'bookings.source_data', 'bookings.source_name', 'bookings.source_id', 'bookings.source_type', 'bookings.created_at', 'bookings.updated_at', 'bookings.price_id')
            ->with(['price', 'services:id,Name'])
            ->join('prices', 'bookings.price_id', '=', 'prices.id')
            ->whereHas('price', function ($query) use ($date) {
                $query->whereDate('prices.updated_at', $date);
            })
            ->where('source_id', '=', $EmployeeID)
            ->where('source_type', '=', "App\Models\Employee")
            ->orderBy('bookings.created_at', 'desc')
            ->get();



        foreach ($bookingupdates as $bookingupdate) {
            $newRevenue = $bookingupdate->price->Total_price - $bookingupdate->price->Deposit_price;
            $summarizedData['revenue'] += $newRevenue;
            if ($bookingupdate->status == "Done") {
                $summarizedData['Done_price_revenue'] += $newRevenue;
                $summarizedData['Done_price'] += $bookingupdate->price->servies_price;
            } else if ($bookingupdate->status == "Cancel") {
                $summarizedData['Cancel_price'] += $bookingupdate->price->servies_price;
            } else if ($bookingupdate->status == "Refund") {
                $summarizedData['Refund_price'] += $bookingupdate->price->servies_price;
            } else if ($bookingupdate->status == "Partial Done") {
                $summarizedData['Done_price'] += $bookingupdate->price->Total_price;
                $summarizedData['Done_price_revenue'] += $newRevenue;
            }
        }

        return $summarizedData;
    }

    /*     getDataEmployee  Location */


    public function getDataEmployeeLocation($startDate, $endDate, $showroom)
    {
        // Lấy danh sách các ShowroomID (giả sử ShowroomID là một trường trong bảng Booking)
        $EmployeeIDs =  Employee::all();


        // Tạo mảng để lưu trữ dữ liệu tổng hợp
        $summarizedData = [];

        // Chuyển $startDate và $endDate thành các đối tượng ngày
        $currentDate = new \DateTime($startDate);
        $endDate = new \DateTime($endDate);

        while ($currentDate <= $endDate) {
            // Lấy ngày hiện tại dưới dạng chuỗi "Y-m-d"
            $currentDateStr = $currentDate->format('Y-m-d');

            foreach ($EmployeeIDs as $EmployeeID) {
                // Lấy dữ liệu cho ngày hiện tại và cho từng GetID
                $dataForDateAndService = $this->getDataForDateAndEmployeeLocation($currentDateStr, $EmployeeID->id, $showroom);

                // Tổng hợp dữ liệu cho ngày hiện tại và GetID vào mảng tổng hợp
                if (!isset($summarizedData[$currentDateStr])) {
                    $summarizedData[$currentDateStr] = [];
                }

                $summarizedData[$currentDateStr][$EmployeeID->id] = $dataForDateAndService;
                $summarizedData[$currentDateStr][$EmployeeID->id]["Name"] = $EmployeeID->name;
                $summarizedData[$currentDateStr][$EmployeeID->id]["id"] = $EmployeeID->id;
            }

            // Tăng ngày hiện tại lên 1 ngày
            $currentDate->modify('+1 day');
        }


        return $summarizedData;
    }


    public function getDataForDateAndEmployeeLocation($date, $EmployeeID, $showroom)
    {

        $cacheKey = 'data_' . $date . '_' . $EmployeeID;
        $yourCacheDuration = 0;

        $bookingsQuery = Booking::select('bookings.id', 'bookings.ArtistID', 'bookings.GetID', 'bookings.status', 'bookings.action', 'bookings.source_data', 'bookings.source_name', 'bookings.source_id', 'bookings.source_type', 'bookings.created_at', 'bookings.updated_at', 'bookings.price_id')
            ->with(['price', 'services:id', 'Get'])
            ->whereDate('bookings.created_at', $date)
            ->where('source_id', '=', $EmployeeID)
            ->where('source_type', '=', "App\Models\Employee")
            ->orderBy('created_at', 'desc');


        if ($showroom !== "null") {
            $bookingsQuery->where('ShowroomID', $showroom);
        }


        $bookings = $bookingsQuery->orderBy('created_at', 'desc')
            ->get();

        // Tạo một mảng để tổng hợp dữ liệu cho ngày cụ thể và GetID
        $summarizedData = [
            'id' => "",
            'Name' => "",
            'Total_price' => 0,
            'Deposit_price' => 0,
            'servies_price' => 0,
            'revenue' => 0,
            'Remaining_price' => 0,
            'Done_price' => 0,
            'Cancel_price' => 0,
            'Refund_price' => 0,
            'length' => 0,
            'length_real' => 0,
            'Done_price_revenue' => 0,
            'upsale' => 0,
            'PartialDone' => 0,
            'Initial_revenue' => 0,
            'Refund_booking' => 0,
        ];

        foreach ($bookings as $booking) {

            // Tính tổng các trường trong price
            $summarizedData['Total_price'] += $booking->price->Total_price;
            $summarizedData['Deposit_price'] += $booking->price->Deposit_price;
            $summarizedData['servies_price'] += $booking->price->servies_price;
            $summarizedData['revenue'] += $booking->price->Deposit_price;
            $summarizedData['Initial_revenue'] += $booking->price->Deposit_price;
            $summarizedData['length'] += 1;
            $summarizedData['Remaining_price'] += $booking->price->Remaining_price;

            if ($booking->price->servies_price != 0) {
                $summarizedData['length_real'] += 1;
            }
        }

        $bookingsQueryupdates = Booking::select('bookings.id', 'bookings.ArtistID', 'bookings.ShowroomID', 'bookings.status', 'bookings.action', 'bookings.source_data', 'bookings.source_name', 'bookings.source_id', 'bookings.source_type', 'bookings.created_at', 'bookings.updated_at', 'bookings.price_id')
            ->with(['price', 'services:id,Name'])
            ->join('prices', 'bookings.price_id', '=', 'prices.id')
            ->whereDate('bookings.date', $date)
            ->where('source_id', '=', $EmployeeID)
            ->where('source_type', '=', "App\Models\Employee")
            ->orderBy('bookings.created_at', 'desc');



        if ($showroom !== "null") {
            $bookingsQueryupdates->where('ShowroomID', $showroom);
        }


        $bookingupdates = $bookingsQueryupdates->orderBy('created_at', 'desc')
            ->get();


        foreach ($bookingupdates as $bookingupdate) {
            $newRevenue = $bookingupdate->price->Total_price - $bookingupdate->price->Deposit_price;
            $summarizedData['revenue'] += $newRevenue;
            $summarizedData['upsale'] += $bookingupdate->price->upsale;
            $summarizedData['Initial_revenue'] += $bookingupdate->price->servies_price - $bookingupdate->price->Deposit_price;


            if ($bookingupdate->status == "Done") {
                $summarizedData['Done_price_revenue'] += $newRevenue;
                $summarizedData['Done_price'] += $bookingupdate->price->servies_price;
            } else if ($bookingupdate->status == "Cancel") {
                $summarizedData['Cancel_price'] += $bookingupdate->price->servies_price;
            } else if ($bookingupdate->status == "Refund") {
                $summarizedData['Refund_price'] += $bookingupdate->price->Deposit_price - $bookingupdate->price->Total_price;
                $summarizedData['Refund_booking'] += $bookingupdate->price->servies_price;
            } else if ($bookingupdate->status == "Partial Done") {
                $summarizedData['Done_price'] += $bookingupdate->price->Total_price;
                $summarizedData['Done_price_revenue'] += $newRevenue;
                $summarizedData['PartialDone'] += $bookingupdate->price->Remaining_price;
            }
        }

        return $summarizedData;
    }


    public function getDataArtist($startDate, $endDate)
    {
        // Lấy danh sách các ShowroomID (giả sử ShowroomID là một trường trong bảng Booking)
        $ArtistIDs = Artists::all();


        // Tạo mảng để lưu trữ dữ liệu tổng hợp
        $summarizedData = [];

        // Chuyển $startDate và $endDate thành các đối tượng ngày
        $currentDate = new \DateTime($startDate);
        $endDate = new \DateTime($endDate);

        while ($currentDate <= $endDate) {
            // Lấy ngày hiện tại dưới dạng chuỗi "Y-m-d"
            $currentDateStr = $currentDate->format('Y-m-d');

            foreach ($ArtistIDs as $ArtistID) {
                // Lấy dữ liệu cho ngày hiện tại và cho từng GetID
                $dataForDateAndService = $this->getDataForDateAndArtist($currentDateStr, $ArtistID->id);

                // Tổng hợp dữ liệu cho ngày hiện tại và GetID vào mảng tổng hợp
                if (!isset($summarizedData[$currentDateStr])) {
                    $summarizedData[$currentDateStr] = [];
                }

                $summarizedData[$currentDateStr][$ArtistID->id] = $dataForDateAndService;
                $summarizedData[$currentDateStr][$ArtistID->id]["Name"] = $ArtistID->name;
                $summarizedData[$currentDateStr][$ArtistID->id]["id"] = $ArtistID->id;
            }

            // Tăng ngày hiện tại lên 1 ngày
            $currentDate->modify('+1 day');
        }


        return $summarizedData;
    }

    public function getDataForDateAndArtist($date, $ArtistID)
    {


        $cacheKey = 'data_' . $date . '_' . $ArtistID;
        $yourCacheDuration = 0;


        $bookings = Booking::select('bookings.id', 'bookings.ArtistID', 'bookings.GetID', 'bookings.status', 'bookings.action', 'bookings.source_data', 'bookings.source_name', 'bookings.source_id', 'bookings.source_type', 'bookings.created_at', 'bookings.updated_at', 'bookings.price_id')
            ->with(['price', 'services:id', 'Get'])
            ->whereDate('bookings.created_at', $date)
            ->where('ArtistID', '=', $ArtistID)
            ->where('action', '=', 'approved')
            ->orderBy('created_at', 'desc')
            ->get();

        // Tạo một mảng để tổng hợp dữ liệu cho ngày cụ thể và GetID
        $summarizedData = [
            'id' => "",
            'Name' => "",
            'Total_price' => 0,
            'Deposit_price' => 0,
            'servies_price' => 0,
            'revenue' => 0,
            'Remaining_price' => 0,
            'Done_price' => 0,
            'Cancel_price' => 0,
            'Refund_price' => 0,
            'length' => 0,
            'length_real' => 0,
            'Done_price_revenue' => 0,
        ];

        foreach ($bookings as $booking) {

            // Tính tổng các trường trong price
            $summarizedData['Total_price'] += $booking->price->Total_price;
            $summarizedData['Deposit_price'] += $booking->price->Deposit_price;
            $summarizedData['servies_price'] += $booking->price->servies_price;
            $summarizedData['revenue'] += $booking->price->Deposit_price;
            $summarizedData['length'] += 1;
            $summarizedData['Remaining_price'] += $booking->price->Remaining_price;


            if ($booking->price->servies_price != 0) {
                $summarizedData['length_real'] += 1;
            }
        }

        $bookingupdates = Booking::select('bookings.id', 'bookings.ArtistID', 'bookings.ShowroomID', 'bookings.status', 'bookings.action', 'bookings.source_data', 'bookings.source_name', 'bookings.source_id', 'bookings.source_type', 'bookings.created_at', 'bookings.updated_at', 'bookings.price_id')
            ->with(['price', 'services:id,Name'])
            ->join('prices', 'bookings.price_id', '=', 'prices.id')
            ->whereHas('price', function ($query) use ($date) {
                $query->whereDate('prices.updated_at', $date);
            })
            ->where('ArtistID', '=', $ArtistID)
            ->where('action', '=', 'approved')
            ->orderBy('bookings.created_at', 'desc')
            ->get();

        foreach ($bookingupdates as $bookingupdate) {
            $newRevenue = $bookingupdate->price->Total_price - $bookingupdate->price->Deposit_price;
            $summarizedData['revenue'] += $newRevenue;

            if ($bookingupdate->status == "Done") {
                $summarizedData['Done_price_revenue'] += $newRevenue;
                $summarizedData['Done_price'] += $bookingupdate->price->servies_price;
            } else if ($bookingupdate->status == "Cancel") {
                $summarizedData['Cancel_price'] += $bookingupdate->price->servies_price;
            } else if ($bookingupdate->status == "Refund") {
                $summarizedData['Refund_price'] += $bookingupdate->price->servies_price;
            } else if ($bookingupdate->status == "Partial Done") {
                $summarizedData['Done_price'] += $bookingupdate->price->Total_price;
                $summarizedData['Done_price_revenue'] += $newRevenue;
            }
        }

        return $summarizedData;
    }



    /** artisrt location  */



    public function getDataArtistLocation($startDate, $endDate, $showroom)
    {
        // Lấy danh sách các ShowroomID (giả sử ShowroomID là một trường trong bảng Booking)
        $ArtistIDs = Artists::all();


        // Tạo mảng để lưu trữ dữ liệu tổng hợp
        $summarizedData = [];

        // Chuyển $startDate và $endDate thành các đối tượng ngày
        $currentDate = new \DateTime($startDate);
        $endDate = new \DateTime($endDate);

        while ($currentDate <= $endDate) {
            // Lấy ngày hiện tại dưới dạng chuỗi "Y-m-d"
            $currentDateStr = $currentDate->format('Y-m-d');

            foreach ($ArtistIDs as $ArtistID) {
                // Lấy dữ liệu cho ngày hiện tại và cho từng GetID
                $dataForDateAndService = $this->getDataForDateAndArtistLocation($currentDateStr, $ArtistID->id, $showroom);

                // Tổng hợp dữ liệu cho ngày hiện tại và GetID vào mảng tổng hợp
                if (!isset($summarizedData[$currentDateStr])) {
                    $summarizedData[$currentDateStr] = [];
                }

                $summarizedData[$currentDateStr][$ArtistID->id] = $dataForDateAndService;
                $summarizedData[$currentDateStr][$ArtistID->id]["Name"] = $ArtistID->name;
                $summarizedData[$currentDateStr][$ArtistID->id]["id"] = $ArtistID->id;
            }

            // Tăng ngày hiện tại lên 1 ngày
            $currentDate->modify('+1 day');
        }


        return $summarizedData;
    }




    public function getDataForDateAndArtistLocation($date, $ArtistID, $showroom)
    {


        $cacheKey = 'data_' . $date . '_' . $ArtistID;
        $yourCacheDuration = 0;


        $bookingsQuery = Booking::select('bookings.id', 'bookings.ArtistID', 'bookings.GetID', 'bookings.status', 'bookings.action', 'bookings.source_data', 'bookings.source_name', 'bookings.source_id', 'bookings.source_type', 'bookings.created_at', 'bookings.updated_at', 'bookings.price_id')
            ->with(['price', 'services:id', 'Get'])
            ->whereDate('bookings.created_at', $date)
            ->where('ArtistID', '=', $ArtistID)
            ->orderBy('created_at', 'desc');


        if ($showroom !== "null") {
            $bookingsQuery->where('ShowroomID', $showroom);
        }


        $bookings = $bookingsQuery->orderBy('created_at', 'desc')
            ->get();

        // Tạo một mảng để tổng hợp dữ liệu cho ngày cụ thể và GetID
        $summarizedData = [
            'id' => "",
            'Name' => "",
            'Total_price' => 0,
            'Deposit_price' => 0,
            'servies_price' => 0,
            'revenue' => 0,
            'Remaining_price' => 0,
            'Done_price' => 0,
            'Cancel_price' => 0,
            'Refund_price' => 0,
            'length' => 0,
            'length_real' => 0,
            'Done_price_revenue' => 0,
            'upsale' => 0,
            'PartialDone' => 0,
            'Initial_revenue' => 0,
            'Refund_booking' => 0,
        ];

        foreach ($bookings as $booking) {

            // Tính tổng các trường trong price
            $summarizedData['Total_price'] += $booking->price->Total_price;
            $summarizedData['Deposit_price'] += $booking->price->Deposit_price;
            $summarizedData['servies_price'] += $booking->price->servies_price;
            $summarizedData['revenue'] += $booking->price->Deposit_price;
            $summarizedData['Initial_revenue'] += $booking->price->Deposit_price;
            $summarizedData['length'] += 1;
            $summarizedData['Remaining_price'] += $booking->price->Remaining_price;


            if ($booking->price->servies_price != 0) {
                $summarizedData['length_real'] += 1;
            }
        }

        $bookingsQueryUpdate = Booking::select('bookings.id', 'bookings.ArtistID', 'bookings.ShowroomID', 'bookings.status', 'bookings.action', 'bookings.source_data', 'bookings.source_name', 'bookings.source_id', 'bookings.source_type', 'bookings.created_at', 'bookings.updated_at', 'bookings.price_id')
            ->with(['price', 'services:id,Name'])
            ->join('prices', 'bookings.price_id', '=', 'prices.id')
            ->whereDate('bookings.date', $date)
            ->where('ArtistID', '=', $ArtistID)
            ->orderBy('bookings.created_at', 'desc');


        if ($showroom !== "null") {
            $bookingsQueryUpdate->where('ShowroomID', $showroom);
        }


        $bookingupdates = $bookingsQueryUpdate->orderBy('created_at', 'desc')
            ->get();



        foreach ($bookingupdates as $bookingupdate) {
            $newRevenue = $bookingupdate->price->Total_price - $bookingupdate->price->Deposit_price;
            $summarizedData['revenue'] += $newRevenue + $bookingupdate->price->upsale;
            $summarizedData['upsale'] += $bookingupdate->price->upsale;
            $summarizedData['Initial_revenue'] += $bookingupdate->price->servies_price - $bookingupdate->price->Deposit_price;


            if ($bookingupdate->status == "Done") {
                $summarizedData['Done_price_revenue'] += $newRevenue;
                $summarizedData['Done_price'] += $bookingupdate->price->servies_price;
            } else if ($bookingupdate->status == "Cancel") {
                $summarizedData['Cancel_price'] += $bookingupdate->price->servies_price;
            } else if ($bookingupdate->status == "Refund") {
                $summarizedData['Refund_price'] +=  $bookingupdate->price->Deposit_price - $bookingupdate->price->Total_price;
                $summarizedData['Refund_booking'] += $bookingupdate->price->servies_price;
            } else if ($bookingupdate->status == "Partial Done") {
                $summarizedData['Done_price'] += $bookingupdate->price->Total_price;
                $summarizedData['Done_price_revenue'] += $newRevenue;
            }
        }

        return $summarizedData;
    }



    public function getDataShowroomEmployee($startDate, $endDate, $employee, $title)
    {
        // Lấy danh sách các ShowroomID (giả sử ShowroomID là một trường trong bảng Booking)
        $showroomIDs = Showroom::where('status', 'published')->get();

        // Tạo mảng để lưu trữ dữ liệu tổng hợp
        $summarizedData = [];

        // Chuyển $startDate và $endDate thành các đối tượng ngày
        $currentDate = new \DateTime($startDate);
        $endDate = new \DateTime($endDate);

        while ($currentDate <= $endDate) {
            // Lấy ngày hiện tại dưới dạng chuỗi "Y-m-d"
            $currentDateStr = $currentDate->format('Y-m-d');

            foreach ($showroomIDs as $showroomID) {
                // Lấy dữ liệu cho ngày hiện tại và cho từng ShowroomID
                $dataForDateAndShowroom = $this->getDataForDateAndShowroomEmployee($currentDateStr, $showroomID->id, $employee, $title);

                // Tổng hợp dữ liệu cho ngày hiện tại và ShowroomID vào mảng tổng hợp
                if (!isset($summarizedData[$currentDateStr])) {
                    $summarizedData[$currentDateStr] = [];
                }

                $summarizedData[$currentDateStr][$showroomID->id] = $dataForDateAndShowroom;
                $summarizedData[$currentDateStr][$showroomID->id]["Name"] = $showroomID->Name;
                $summarizedData[$currentDateStr][$showroomID->id]["id"] = $showroomID->id;
            }

            // Tăng ngày hiện tại lên 1 ngày
            $currentDate->modify('+1 day');
        }


        return $summarizedData;
    }

    public function getDataForDateAndShowroomEmployee($date, $showroomID, $employee, $title)
    {

        $bookingsQuery = Booking::select('id', 'ArtistID', 'ShowroomID', 'status', 'action', 'source_data', 'source_name', 'source_id', 'source_type', 'created_at', 'updated_at', 'price_id')
            ->with(['price', 'services:id,Name', 'showroom'])
            ->whereDate('created_at', $date)
            ->where('ShowroomID', $showroomID)
            ->orderBy('created_at', 'desc');


        if ($employee !== "null" && $title === "Saler") {
            $bookingsQuery->where('source_id', $employee)->where('source_type', "App\Models\Employee");
        }

        if ($employee !== "null" && $title === "Artist") {
            $bookingsQuery->where('ArtistID', $employee);
        }


        $bookings = $bookingsQuery->orderBy('created_at', 'desc')
            ->get();



        // Tạo một mảng để tổng hợp dữ liệu cho ngày cụ thể và ShowroomID
        $summarizedData = [
            'id' => "",
            'Name' => "",
            'Total_price' => 0,
            'Deposit_price' => 0,
            'servies_price' => 0,
            'revenue' => 0,
            'Remaining_price' => 0,
            'Done_price' => 0,
            'Cancel_price' => 0,
            'Refund_price' => 0,
            'length' => 0,
            'length_real' => 0,
            'Done_price_revenue' => 0,
            'upsale' => 0,
            'PartialDone' => 0,
            'Initial_revenue' => 0,
            'Refund_booking' => 0,
            'Done' => 0,
            'Waiting' => 0,
            'Cancel' => 0,
            'Refund' => 0,
        ];

        foreach ($bookings as $booking) {
            // Tính tổng các trường trong price
            $summarizedData['Total_price'] += $booking->price->Total_price;
            $summarizedData['Deposit_price'] += $booking->price->Deposit_price;
            $summarizedData['servies_price'] += $booking->price->servies_price;
            $summarizedData['revenue'] += $booking->price->Deposit_price;
            $summarizedData['Initial_revenue'] += $booking->price->Deposit_price;
            $summarizedData['length'] += 1;
            $summarizedData['Remaining_price'] += $booking->price->Remaining_price;

            if ($booking->status == "Done") {
                $summarizedData['Done'] += 1;
            } else if ($booking->status == "Cancel") {
                $summarizedData['Cancel'] += 1;
            } else if ($booking->status == "Refund") {
                $summarizedData['Refund'] += 1;
            } else if ($booking->status == "Partial Done") {
                $summarizedData['Done'] += 1;
            } else if ($booking->status == "Waiting") {
                $summarizedData['Waiting'] += 1;
            }
            if ($booking->price->servies_price != 0) {
                $summarizedData['length_real'] += 1;
            }
        }


        $bookingsQueryupdates = Booking::select('bookings.id', 'bookings.ArtistID', 'bookings.ShowroomID', 'bookings.status', 'bookings.action', 'bookings.source_data', 'bookings.source_name', 'bookings.source_id', 'bookings.source_type', 'bookings.created_at', 'bookings.updated_at', 'bookings.price_id')
            ->with(['price', 'services:id,Name'])
            ->join('prices', 'bookings.price_id', '=', 'prices.id')
            ->whereDate('bookings.date', $date)
            ->where('bookings.ShowroomID', '=', $showroomID)
            ->orderBy('bookings.created_at', 'desc');



        if ($employee !== "null" && $title === "Saler") {
            $bookingsQueryupdates->where('source_id', $employee)->where('source_type', "App\Models\Employee");
        }

        if ($employee !== "null" && $title === "Artist") {
            $bookingsQueryupdates->where('ArtistID', $employee);
        }


        $bookingupdates = $bookingsQueryupdates->orderBy('created_at', 'desc')
            ->get();


        foreach ($bookingupdates as $bookingupdate) {
            $newRevenue = $bookingupdate->price->Total_price - $bookingupdate->price->Deposit_price;
            $summarizedData['revenue'] += $newRevenue;
            $summarizedData['upsale'] += $bookingupdate->price->upsale;
            $summarizedData['Initial_revenue'] += $bookingupdate->price->servies_price - $bookingupdate->price->Deposit_price;

            if ($bookingupdate->status == "Done") {
                $summarizedData['Done_price'] += $bookingupdate->price->servies_price;
                $summarizedData['Done_price_revenue'] += $newRevenue;
            } else if ($bookingupdate->status == "Cancel") {
                $summarizedData['Cancel_price'] += $bookingupdate->price->servies_price;
            } else if ($bookingupdate->status == "Refund") {
                $summarizedData['Refund_price'] +=  $bookingupdate->price->Deposit_price - $bookingupdate->price->Total_price;
                $summarizedData['Refund_booking'] += $bookingupdate->price->servies_price;
            } else if ($bookingupdate->status == "Partial Done") {
                $summarizedData['Done_price'] += $bookingupdate->price->Total_price;
                $summarizedData['Done_price_revenue'] += $newRevenue;
                $summarizedData['PartialDone'] += $bookingupdate->price->Remaining_price;
            }
        }

        return $summarizedData;
    }


    /*     Dashboard administration */

    public function Dashboard($startDate, $endDate,$group, $employee, $title)
    {
        // Lấy danh sách các ShowroomID (giả sử ShowroomID là một trường trong bảng Booking)
        $showroomIDs = Showroom::where('status', 'published')->get();

        // Tạo mảng để lưu trữ dữ liệu tổng hợp
        $summarizedData = [];

        // Chuyển $startDate và $endDate thành các đối tượng ngày
        $currentDate = new \DateTime($startDate);
        $endDate = new \DateTime($endDate);

        while ($currentDate <= $endDate) {
            // Lấy ngày hiện tại dưới dạng chuỗi "Y-m-d"
            $currentDateStr = $currentDate->format('Y-m-d');

            foreach ($showroomIDs as $showroomID) {
                // Lấy dữ liệu cho ngày hiện tại và cho từng ShowroomID
                $dataForDateAndShowroom = $this->getDashboardDataForDate($currentDateStr, $showroomID->id, $employee, $title, $startDate, $group);

                // Tổng hợp dữ liệu cho ngày hiện tại và ShowroomID vào mảng tổng hợp
                if (!isset($summarizedData[$currentDateStr])) {
                    $summarizedData[$currentDateStr] = [];
                }

                $summarizedData[$currentDateStr][$showroomID->id] = $dataForDateAndShowroom;
                $summarizedData[$currentDateStr][$showroomID->id]["Name"] = $showroomID->Name;
                $summarizedData[$currentDateStr][$showroomID->id]["id"] = $showroomID->id;
            }

            // Tăng ngày hiện tại lên 1 ngày
            $currentDate->modify('+1 day');
        }


        return $summarizedData;
    }


    public function getDashboardDataForDate($date, $showroomID, $employee, $title, $startDate, $group)
    {

        $bookingsQuery = Booking::select('id', 'ArtistID', 'ShowroomID', 'status', 'action', 'source_data', 'source_name', 'source_id', 'source_type', 'created_at', 'updated_at', 'price_id', 'date')
            ->with(['price', 'services:id,Name,Time', 'showroom', 'artist'])
            ->whereDate('created_at', $date)
            ->where('ShowroomID', $showroomID)
            ->orderBy('created_at', 'desc');


        if ($employee !== "null" && $title === "Saler") {
            $bookingsQuery->where('source_id', $employee)->where('source_type', "App\Models\Employee");
        }

        if ($employee !== "null" && $title === "Artist") {
            $bookingsQuery->where('ArtistID', $employee)->where('action', "approved");
        }

        if ($employee !== "null" && $title === "Parner") {
            $bookingsQuery->where('source_id', $employee)->where('source_type', "App\Models\Amin")->where('source_type', "App\Models\Admin");
        }

        if ($employee !== "null" && $title === "Teams") {
                    // Bước 1: Tìm tất cả các Employee có team_id là $employee
            $employees = Employee::where('team_id', $employee)->pluck('id');

            // Bước 2: Lọc bookingsQuery với các điều kiện cần thiết
            $bookingsQuery->whereIn('source_id', $employees)->where('source_type', "App\Models\Employee");
            
        }




        if ($group != 0) {
            // Bước 1: Tìm tất cả các Employee có team_id là $employee
                $groups = GroupShowroom::where('group_id', 2)->pluck('showroom_id');
                // Bước 2: Lọc bookingsQuery với các điều kiện cần thiết
                $bookingsQuery->whereIn('ShowroomID', $groups);
                
            }






        $bookings = $bookingsQuery->orderBy('created_at', 'desc')
            ->get();

        // Tạo một mảng để tổng hợp dữ liệu cho ngày cụ thể và ShowroomID
        $summarizedData = [
            'id' => "",
            'Name' => "",
            'Booking_Value' => 0,
            'Actual_B_Value' => 0,
            'Initial_P_Revenue' => 0,
            'Initial_Revenue' => 0,
            'Refund' => 0,
            'B_Refund_Value' => 0,
            'Deposit' => 0,
            'Remaining' => 0,
            'Upsell' => 0,
            'Cancel_Booking_Value' => 0,
            'Total_Booking' => 0,
            'percent_done' => 0,
            'percent_waiting' => 0,
            'percent_refund' => 0,
            'percent_cancel' => 0,
            'length_real' => 0,
            'percent_Pratial_Done' => 0,
            'percent_Reschedule' => 0,
            'percent_Unidentified' => 0,
            'Operation_KPI' => 0,
            'range_time' => 0,
            'total_wage' => 0,
        ];

        foreach ($bookings as $booking) {


            // Tính tổng các trường trong price
            $summarizedData['Booking_Value'] += $booking->price->servies_price;
            $summarizedData['Initial_Revenue'] += $booking->price->Deposit_price;
            $summarizedData['Deposit'] += $booking->price->Deposit_price;
            $summarizedData['Remaining'] += $booking->price->Remaining_price;
            $summarizedData['Actual_B_Value'] += $booking->price->servies_price;
            $summarizedData['Total_Booking'] += 1;

            if ($booking->status == "Done") {
                $summarizedData['percent_done'] += 1;
            } else if ($booking->status == "Cancel") {
                $summarizedData['percent_cancel'] += 1;
                $summarizedData['Actual_B_Value'] -= $booking->price->servies_price;
            } else if ($booking->status == "Refund") {
                $summarizedData['percent_refund'] += 1;
                $summarizedData['Actual_B_Value'] -= $booking->price->servies_price;
            } else if ($booking->status == "Partial Done") {
                $summarizedData['Actual_B_Value'] -= $booking->price->Remaining_price;
                $summarizedData['percent_Pratial_Done'] += 1;
            } else if ($booking->status == "Waiting") {
                $summarizedData['percent_waiting'] += 1;
            } else if ($booking->status == "Reschedule") {
                $summarizedData['percent_Reschedule'] += 1;
            } else if ($booking->status == "Unidentified") {
                $summarizedData['percent_Unidentified'] += 1;
            }
            if ($booking->price->servies_price != 0) {
                $summarizedData['length_real'] += 1;
            }
        }




        $bookingsQueryupdates = Booking::select('bookings.id', 'bookings.date', 'bookings.ArtistID', 'bookings.ShowroomID', 'bookings.status', 'bookings.action', 'bookings.source_data', 'bookings.source_name', 'bookings.source_id', 'bookings.source_type', 'bookings.created_at', 'bookings.updated_at', 'bookings.price_id')
            ->with(['price', 'services:id,Name,Time', 'showroom', 'artist'])
            ->join('prices', 'bookings.price_id', '=', 'prices.id')
            ->whereDate('bookings.date', $date)
            ->where('bookings.ShowroomID', '=', $showroomID)
            ->orderBy('bookings.created_at', 'desc');

        if ($employee !== "null" && $title === "Saler") {
            $bookingsQueryupdates->where('source_id', $employee)->where('source_type', "App\Models\Employee");
        }

        if ($employee !== "null" && $title === "Artist") {
            $bookingsQueryupdates->where('ArtistID', $employee)->where('action', "approved");
        }

        if ($group != 0) {
            // Bước 1: Tìm tất cả các Employee có team_id là $employee
                $groups = GroupShowroom::where('group_id', 2)->pluck('showroom_id');
                // Bước 2: Lọc bookingsQuery với các điều kiện cần thiết
                $bookingsQueryupdates->whereIn('ShowroomID', $groups);
                
            }



        $bookingupdates = $bookingsQueryupdates->orderBy('created_at', 'desc')
            ->get();



        foreach ($bookingupdates as $bookingupdate) {



            $summarizedData['Upsell'] += $bookingupdate->price->upsale;
            $summarizedData['Operation_KPI'] += $bookingupdate->price->op_kpi;

            if ($bookingupdate->status == "Done") {
                $summarizedData['Initial_Revenue'] += $bookingupdate->price->Total_price - $bookingupdate->price->Deposit_price;
            }


            if ($bookingupdate->created_at <= $startDate && $bookingupdate->status == "Waiting") {
                $summarizedData['Initial_P_Revenue'] += $bookingupdate->price->Remaining_price;
            }

            if ($bookingupdate->status == "Done") {
            } else if ($bookingupdate->status == "Cancel") {
                $summarizedData['Cancel_Booking_Value'] += $bookingupdate->price->servies_price;
            } else if ($bookingupdate->status == "Refund") {
                $summarizedData['Refund'] +=  $bookingupdate->price->Deposit_price - $bookingupdate->price->Total_price;
                $summarizedData['B_Refund_Value'] += $bookingupdate->price->servies_price;
            } else if ($bookingupdate->status == "Partial Done") {
            }

            if ($bookingupdate->action == "approved" && ($bookingupdate->status == "Done" || $bookingupdate->status == "Partial Done")) { // Kiểm tra action của bookingupdate
                // Lấy ID của artist
                $artistId = $bookingupdate->artist->id;

                // Tạo key dựa trên artist
                $key = $artistId;

                // Kiểm tra nếu artist được thanh toán theo giờ
                if ($bookingupdate->artist->artist_pay == 1) {
                    /*            // Kiểm tra xem phần tử có tồn tại trong mảng $summarizedData['hour'] không
                    if (!isset($summarizedData['hour'][$key])) {
                        // Nếu không, khởi tạo nó với giá trị ban đầu là 0
                        $summarizedData['hour'][$key] = 0;
                    }
                    // Cộng thời gian vào số giờ */
                    $summarizedData['range_time'] += $bookingupdate->services[0]->Time;
                    $summarizedData['total_wage'] += $bookingupdate->services[0]->Time *  floatval($bookingupdate->artist->wage);
                } else {
                    // Kiểm tra xem key đã tồn tại trong $summarizedData['day'] chưa
                    /*             if (!isset($summarizedData['day'][$key])) {
                        // Nếu chưa, thì tạo key và đặt giá trị bằng 1
                        $summarizedData['day'][$key] = 1;
                    } */
                    $summarizedData['range_time'] = 1;
                    $summarizedData['total_wage'] = floatval($bookingupdate->artist->wage);
                }
            }
        }


        return $summarizedData;
    }


    public function artistshowroomRoster()
    {
        $ArtistShowrooms = ArtistShowroom::with('artist:id,name,status', 'showroom:id,Name,status')
            ->whereHas('artist', function ($query) {
                $query->where('status', 'published');
            })
            ->whereHas('showroom', function ($query) {
                $query->where('status', 'published');
            })
            ->orderBy('created_at', 'desc')
            ->get();

        // Khởi tạo mảng chứa dữ liệu tổng hợp
        $summarizedData = [];

        foreach ($ArtistShowrooms as $ArtistShowroom) {

            $schedules = WorkingHour::where('artist_id', $ArtistShowroom->artist_id)->where('showroom_schedule_id', $ArtistShowroom->showroom_id)->get();

            if (isset($schedules)) {
                foreach ($schedules as $schedule) {
                    // Tăng giá trị của Id theo biến đếm
                    $idCounter = count($summarizedData) + 1;

                    if ($schedule->active == 1) {
                        // Nếu là active, gán giá trị 'active' cho $action
                        $action = 'Active';
                        $color =  '#7373fa';
                    } else if ($schedule->active == 0) {
                        // Ngược lại, gán giá trị 'none' cho $action
                        $action = 'None active';
                        $color =  '#acacac';
                    } else {
                        // Ngược lại, gán giá trị 'none' cho $action
                        $action = 'Undefined';
                        $color =  '#b0b7d2cc';
                    }


                    $date = Carbon::parse($schedule->date);

                    // Thiết lập giờ và phút
                    $date->hour = 13;
                    $date->minute = 30;
                    $date->second = 0;

                    // Chuyển đổi sang định dạng ISO 8601
                    $startTime = $date->toIso8601ZuluString();
                    $endTime = $date->toIso8601ZuluString();

                    // Chuyển đổi ShowroomId và ArtistId thành chuỗi nhị phân
                    $showroomIdBinary = decbin($schedule->showroom_schedule_id);
                    $artistIdBinary = decbin($schedule->artist_id);

                    // Thêm "00" vào giữa hai chuỗi nhị phân
                    $combinedBinary = $showroomIdBinary . "00" . $artistIdBinary;

                    // Chuyển đổi lại thành số nguyên
                    $combinedId = bindec($combinedBinary);

                    $note = $schedule->note = "" ? $schedule->note : 'N/A';


                    // Tạo một mảng mới chứa dữ liệu của mục hiện tại
                    $data = [
                        'Id' => $idCounter,
                        'Subject' => $action . "\nNote: " .   $note,
                        'StartTime' =>      $startTime,
                        'EndTime' =>        $endTime,
                        'IsAllDay' => true,
                        'ShowroomId' => $schedule->showroom_schedule_id,
                        'ArtistId' => $schedule->artist_id,
                        'Showroom' =>  $ArtistShowroom->showroom->Name,
                        'Artist' => $ArtistShowroom->artist->name,
                        'CategoryColor' =>  $color,
                        'ResourceId' => $idCounter,
                        'CombinedId' =>  $combinedId,
                    ];

                    // Thêm mảng mới vào mảng tổng hợp
                    $summarizedData[] = $data;
                }
            }
        }

        usort($summarizedData, function ($a, $b) {
            return strcmp($a['Showroom'], $b['Showroom']);
        });

        return response()->json($summarizedData);
    }


    public function getWithBookingsInCurrentMonth(Request $request)
    {
        // Lấy ngày đầu tiên và cuối cùng của tháng hiện tại
        $startDate = Carbon::now()->startOfMonth();
        $endDate = Carbon::now()->endOfMonth();
        $currentDate = Carbon::now()->format('Y-m-d');

        // Lấy dữ liệu của các instance của model Get có booking date hoặc created_at trong tháng này
        $gets = Get::whereHas('bookings', function ($query) use ($startDate, $endDate) {
            $query->whereDate('date', '>=', $startDate)
                  ->whereDate('date', '<=', $endDate);
        })->orWhere(function ($query) use ($startDate, $endDate) {
            $query->whereDate('created_at', '>=', $startDate)
                  ->whereDate('created_at', '<=', $endDate);
        })->with(['bookings' => function ($query) use ($currentDate) {
            $query->whereDate('date', '<=', $currentDate)->latest()->take(1);
        }])->get();

        return response()->json($gets);
    }

}
/* neww code */
