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
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;

class APIBookingController extends Controller
{
    public function getShowrooms()
    {
        return $this->getCachedData('showrooms', function () {
            return Showroom::where('status', 'published')->get();
        });
    }

    public function getemployeeData()
    {
        return $this->getCachedData('employeeData', function () {
            return Employee::get();
        });
    }

    public function getGroupServices($showroomId)
    {
        return $this->getCachedData('groupServices_' . $showroomId, function () use ($showroomId) {
            // Lấy dữ liệu groupServices cho showroom có ID là $showroomId
            // Thực hiện truy vấn dữ liệu ở đây và trả về kết quả
        });
    }

    public function ShowroomSchedule($showroomId)
    {
        return $this->getCachedData('showroomSchedule_' . $showroomId, function () use ($showroomId) {
            // Lấy dữ liệu lịch làm việc của showroom có ID là $showroomId
            // Thực hiện truy vấn dữ liệu ở đây và trả về kết quả
        });
    }

    public function getServices()
    {
        return $this->getCachedData('services', function () {
            return Service::where('status', 'published')->get();
        });
    }

    public function ArtistLevel()
    {
        return $this->getCachedData('artistLevels', function () {
            return ArtistLevel::all();
        });
    }

    public function Artist()
    {
        return $this->getCachedData('artists', function () {
            return Artists::where('name', '!=', 'N/A')->get();
        });
    }

    public function Get()
    {
        return $this->getCachedData('get', function () {
            return Get::get();
        });
    }

    public function getAllData()
    {
        return $this->getCachedData('allData', function () {
            return Booking::with([
                'artist:id,name,fullname',
                'showroom',
                'get',
                'services',
                'price',
                'payment'
            ])->orderBy('created_at', 'desc')->get();
        });
    }




    public function getData($startDate, $endDate)
    {

        return $this->getCachedData('Data', function () use ($startDate, $endDate) {
            return Booking::select('id', 'ArtistID', 'ShowroomID', 'status', 'action', 'source_data', 'source_name', 'source_id', 'source_type', 'created_at', 'updated_at', 'price_id')
                ->with(['price'])
                ->whereBetween('created_at', [$startDate, $endDate])
                ->orderBy('created_at', 'desc')
                ->get()
                ->map(function ($booking) {
                    if (is_null($booking->price)) {
                        // Trường price là null, chúng tôi thay thế nó bằng một mảng trống
                        $booking->price = [];
                    }
                    return $booking;
                });
        });
    }
    

    public function bookingsData($id)
    {
        return $this->getCachedData('bookingsData_' . $id, function () use ($id) {
            return Booking::with([
                'artist:id,name,fullname',
                'showroom',
                'get',
                'services',
                'price',
                'payment'
            ])->where('id', '=', $id)->get();
        });
    }

    public function bookingsDataArtists($id)
    {
        return $this->getCachedData('bookingsDataArtists_' . $id, function () use ($id) {
            return Booking::with([
                'artist:id,name,fullname',
                'showroom',
                'get',
                'services',
                'price',
                'payment'
            ])->where('ArtistID', '=', $id)->get();
        });
    }

    public function bookingsDataEmployee($id)
    {
        return $this->getCachedData('bookingsDataEmployee_' . $id, function () use ($id) {
            return Booking::with([
                'artist:id,name,fullname',
                'showroom',
                'get',
                'services',
                'price',
                'payment'
            ])->where('source_id', '=', $id)->where('source_type', '=', "App\Models\Employee")->get();
        });
    }

    public function getBookShowroomData($showroomId)
    {
        return $this->getCachedData('bookShowroomData_' . $showroomId, function () use ($showroomId) {
            return Booking::with([
                'artist:id,name,fullname',
                'showroom',
                'get',
                'services',
                'price',
                'payment'
            ])->where('status','=','Waiting')->where('ShowroomID', $showroomId)->get();
        });
    }

    protected function getCachedData($key, $callback, $minutes = 1)
    {
        $cachedData = Cache::get($key);
        $newData = $callback();
        if ($cachedData === null || $cachedData !== $newData) {
            Cache::put($key, $newData, now()->addMinutes($minutes));
        }
        return $newData;
    }
}
