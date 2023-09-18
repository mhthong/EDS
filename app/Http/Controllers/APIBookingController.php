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

class APIBookingController extends Controller
{
    //

    public function getShowrooms()
    {
        $showrooms = Showroom::where('status', 'published')->get();
        return response()->json($showrooms);
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
        $artist = Artists::where('name', '!=', 'N/A')->get();
        return response()->json($artist);
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

}
