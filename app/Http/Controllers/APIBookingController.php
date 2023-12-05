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

class APIBookingController extends Controller
{
    //

    public function getShowrooms()
    {
        $showrooms = Showroom::where('status', 'published')->get();
        return response()->json($showrooms);
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
        $Employee = Employee::get();
        return response()->json($Employee);
    }



    public function getGroupServices($showroomId)
    {
        $serviceShowrooms = ServiceShowroom::with(['groupservice' => function ($query) {
            $query->with(['services' => function ($query) {
                $query->where('status', 'published');
            }]);
        }])->where('showroom_id', $showroomId)->get();

        $groupServiceData = [];

        foreach ($serviceShowrooms as $serviceShowroom) {
            $groupService = $serviceShowroom->groupservice;

            if ($groupService) {
                $groupServiceData[] = [
                    'groupService' => $groupService,
                ];
            }
        }

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

    public function bookingsData($id)
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



    public function getAllfullcalendar($startDate, $endDate, $showroom)
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

    public function DateActive($Date, $showroom)
    {
        $dayOfWeekActive = ShowroomSchedule::where('showroom_id', $showroom)
            ->where('day', date('l', strtotime($Date)))
            ->first();

        $dayActive = WorkingHour::where('showroom_schedule_id', $showroom)
            ->where('date', $Date)
            ->first();

        // Kiểm tra nếu $dayOfWeekActive không null và có trạng thái "active"
        $dayOfWeekActiveActive = $dayOfWeekActive && $dayOfWeekActive->active !== null ? $dayOfWeekActive->active : null;

        // Kiểm tra nếu $dayActive không null và có trạng thái "active"
        $dayActiveActive = $dayActive && $dayActive->active !== null ? $dayActive->active : null;


        // Kiểm tra điều kiện để xác định giá trị cuối cùng
        // Nếu cả hai đều active hoặc $dayActive không có kết quả, thì mới coi là active
        // Hoặc nếu $dayOfWeekActiveActive là 0 và $dayActiveActive là 1
        $isActive = ($dayOfWeekActiveActive == 1 && ($dayActiveActive == 1 ||  $dayActiveActive == null)) || ($dayOfWeekActiveActive == 0 && $dayActiveActive == 1);

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
            ->whereDate('bookings.date', $date)
            ->where('bookings.ShowroomID', '=', $showroomID)
            ->orderBy('bookings.created_at', 'desc')
            ->get();


        foreach ($bookingupdates as $bookingupdate) {
            $newRevenue = $bookingupdate->price->Total_price - $bookingupdate->price->Deposit_price;
            $summarizedData['revenue'] += $newRevenue;
            $summarizedData['upsale'] += $bookingupdate->price->upsale;

            if ($bookingupdate->status == "Done") {
                $summarizedData['Done_price'] += $bookingupdate->price->servies_price;
                $summarizedData['Done_price_revenue'] += $newRevenue;
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


      /*     getDataShowroom Employee */ 





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
             ->whereDate('bookings.date', $date)
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
                $dataForDateAndGet = $this->getDataForDateAndGetLocation($currentDateStr, $GetID , $showroom);

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

    public function getDataForDateAndGetLocation($date, $GetID,$showroom)
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
             ->whereDate('bookings.date', $date)
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
             ->whereDate('bookings.date', $date)
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

        public function getDataServiceLocation($startDate, $endDate,$showroom,$employee)
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
                    $dataForDateAndService = $this->getDataForDateAndServiceLocation($currentDateStr, $ServiceID->id,$showroom,$employee);
    
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
    
        public function getDataForDateAndServiceLocation($date, $serviceId,$showroom,$employee)
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
             ->whereDate('bookings.date', $date)
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
             ->whereDate('bookings.date', $date)
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




    public function getDataShowroomEmployee($startDate, $endDate ,$employee,$title)
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
                $dataForDateAndShowroom = $this->getDataForDateAndShowroomEmployee($currentDateStr, $showroomID->id , $employee ,$title);

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

    public function getDataForDateAndShowroomEmployee($date, $showroomID ,$employee , $title)
    {

        $bookingsQuery = Booking::select('id', 'ArtistID', 'ShowroomID', 'status', 'action', 'source_data', 'source_name', 'source_id', 'source_type', 'created_at', 'updated_at', 'price_id')
            ->with(['price', 'services:id,Name', 'showroom'])
            ->whereDate('created_at', $date)
            ->where('ShowroomID', $showroomID)
            ->orderBy('created_at', 'desc');


          if ($employee !== "null" && $title ==="Saler") {
              $bookingsQuery->where('source_id', $employee)->where('source_type', "App\Models\Employee");
          }
  
          if ($employee !== "null" && $title ==="Artist") {
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
            ->whereDate('bookings.date', $date)
            ->where('bookings.ShowroomID', '=', $showroomID)
            ->orderBy('bookings.created_at', 'desc');



          if ($employee !== "null" && $title ==="Saler") {
              $bookingsQueryupdates->where('source_id', $employee)->where('source_type', "App\Models\Employee");
          }
  
          if ($employee !== "null" && $title ==="Artist") {
              $bookingsQueryupdates->where('ArtistID', $employee);
          }


          $bookingupdates = $bookingsQueryupdates->orderBy('created_at', 'desc')
          ->get();

        foreach ($bookingupdates as $bookingupdate) {
            $newRevenue = $bookingupdate->price->Total_price - $bookingupdate->price->Deposit_price;
            $summarizedData['revenue'] += $newRevenue;
            $summarizedData['upsale'] += $bookingupdate->price->upsale;

            if ($bookingupdate->status == "Done") {
                $summarizedData['Done_price'] += $bookingupdate->price->servies_price;
                $summarizedData['Done_price_revenue'] += $newRevenue;
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

    
    

}
