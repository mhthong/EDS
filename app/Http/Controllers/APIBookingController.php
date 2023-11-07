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

class APIBookingController extends Controller
{
    //

    public function getShowrooms()
    {
        $showrooms = Showroom::where('status', 'published')->get();
        return response()->json($showrooms);
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
    

    public function ShowroomSchedule($showroomId){
        
        $showroomSchedules = ShowroomSchedule::with('workingHours')->where('showroom_id', $showroomId)->get();

        return response()->json($showroomSchedules);
    
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
        ])->where('status','=','Waiting')->where('ShowroomID', $showroomId)->get();

        return response()->json($getBookShowroomData);
    }
    
    
    
    public function getAllfullcalendar()
    {
        return $this->getCachedData('getAllfullcalendar', function () {
            return Booking::select('id', 'ArtistID', 'ShowroomID', 'status', 'action', 'time', 'time_end', 'date' )
            ->with([
                'artist:id',
                'showroom:id,Name',
                'services:id,Name',
            ])->orderBy('created_at', 'desc')->get();
        });
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
        ];

        foreach ($bookings as $booking) {
            // Tính tổng các trường trong price
            $summarizedData['Total_price'] += $booking->price->Total_price;
            $summarizedData['Deposit_price'] += $booking->price->Deposit_price;
            $summarizedData['servies_price'] += $booking->price->servies_price;
            $summarizedData['revenue'] += $booking->price->Deposit_price;
            $summarizedData['length'] += 1;
            $summarizedData['Remaining_price'] += $booking->price->Remaining_price;

            if($booking->price->servies_price != 0){
                $summarizedData['length_real'] += 1;
            }

        }


        $bookingupdates = Booking::select('bookings.id', 'bookings.ArtistID', 'bookings.ShowroomID', 'bookings.status', 'bookings.action', 'bookings.source_data', 'bookings.source_name', 'bookings.source_id', 'bookings.source_type', 'bookings.created_at', 'bookings.updated_at', 'bookings.price_id')
            ->with(['price', 'services:id,Name'])
            ->join('prices', 'bookings.price_id', '=', 'prices.id')
            ->whereHas('price', function ($query) use ($date) {
                $query->whereDate('prices.updated_at', $date);
            })
            ->where('bookings.ShowroomID', '=', $showroomID)
            ->orderBy('bookings.created_at', 'desc')
            ->get();


        foreach ($bookingupdates as $bookingupdate) {
            $newRevenue = $bookingupdate->price->Total_price - $bookingupdate->price->Deposit_price;
            $summarizedData['revenue'] += $newRevenue;

            if($bookingupdate -> status == "Done"){
                $summarizedData['Done_price'] += $bookingupdate->price->servies_price;
            } else if($bookingupdate -> status == "Cancel"){
                $summarizedData['Cancel_price'] += $bookingupdate->price->servies_price;
            } else if($bookingupdate -> status == "Refund"){
                $summarizedData['Refund_price'] += $bookingupdate->price->servies_price;
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

            if($booking->price->servies_price != 0){
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
            'length_real'=>0,
        ];

        foreach ($bookings as $booking) {

            // Tính tổng các trường trong price
            $summarizedData['Total_price'] += $booking->price->Total_price;
            $summarizedData['Deposit_price'] += $booking->price->Deposit_price;
            $summarizedData['servies_price'] += $booking->price->servies_price;
            $summarizedData['revenue'] += $booking->price->Deposit_price;
            $summarizedData['length'] += 1;
            $summarizedData['Remaining_price'] += $booking->price->Remaining_price;

            if($booking->price->servies_price != 0){
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
        ];

        foreach ($bookings as $booking) {

            // Tính tổng các trường trong price
            $summarizedData['Total_price'] += $booking->price->Total_price;
            $summarizedData['Deposit_price'] += $booking->price->Deposit_price;
            $summarizedData['servies_price'] += $booking->price->servies_price;
            $summarizedData['revenue'] += $booking->price->Deposit_price;
            $summarizedData['length'] += 1;
            $summarizedData['Remaining_price'] += $booking->price->Remaining_price;

            if($booking->price->servies_price != 0){
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
            if($bookingupdate -> status == "Done"){
                $summarizedData['Done_price'] += $bookingupdate->price->servies_price;
            } else if($bookingupdate -> status == "Cancel"){
                $summarizedData['Cancel_price'] += $bookingupdate->price->servies_price;
            } else if($bookingupdate -> status == "Refund"){
                $summarizedData['Refund_price'] += $bookingupdate->price->servies_price;
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
                $dataForDateAndService = $this->getDataForDateAndEmployee($currentDateStr, $ArtistID->id);

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
        ];

        foreach ($bookings as $booking) {

            // Tính tổng các trường trong price
            $summarizedData['Total_price'] += $booking->price->Total_price;
            $summarizedData['Deposit_price'] += $booking->price->Deposit_price;
            $summarizedData['servies_price'] += $booking->price->servies_price;
            $summarizedData['revenue'] += $booking->price->Deposit_price;
            $summarizedData['length'] += 1;
            $summarizedData['Remaining_price'] += $booking->price->Remaining_price;

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
            if($bookingupdate -> status == "Done"){
                $summarizedData['Done_price'] += $bookingupdate->price->servies_price;
            } else if($bookingupdate -> status == "Cancel"){
                $summarizedData['Cancel_price'] += $bookingupdate->price->servies_price;
            } else if($bookingupdate -> status == "Refund"){
                $summarizedData['Refund_price'] += $bookingupdate->price->servies_price;
            }
        }

        return $summarizedData;
    }

}
