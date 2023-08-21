<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Showroom;
use App\Models\GroupService;
use App\Models\ServiceShowroom;
use App\Models\Service;
use App\Models\ArtistLevel;

class APIBookingController extends Controller
{
    //

    public function getShowrooms()
    {
        $showrooms = Showroom::all();
        return response()->json($showrooms);
    }

    public function getGroupServices($showroomId){
        $serviceShowrooms = ServiceShowroom::with('groupservice')->where('showroom_id', $showroomId)->get();
    
        $groupServiceData = []; // Initialize an array to store group service data
    
        foreach ($serviceShowrooms as $serviceShowroom) {
            $groupService = $serviceShowroom->groupservice; // Get the GroupService related to the ServiceShowroom
    
            // Check if the group service exists and retrieve its services
            if ($groupService) {
                $services = $groupService->services; // Assuming 'services' is a relationship in the GroupService model
                
                $groupServiceData[] = [
                    'groupService' => $groupService,
                ];
            }
        }
    
        return response()->json($groupServiceData);
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

}
