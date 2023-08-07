<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Showroom;
use App\Models\GroupService;
use App\Models\ServiceShowroom;

class APIBookingController extends Controller
{
    //

    public function getShowrooms()
    {
        $showrooms = Showroom::all();
        return response()->json($showrooms);
    }

    public function getGroupServices($showroomId){
   
        $serviceShowrooms = ServiceShowroom::with('groupservice')->where('showroom_id',$showroomId)->get();

        foreach ($serviceShowrooms as $serviceShowroom) {
            $groupService[] = $serviceShowroom->groupservice; // Thông tin GroupService liên kết với mỗi ServiceShowroom
            // Thực hiện xử lý với thông tin từ bảng GroupService
        }

        return response()->json($groupService);
    }

/*     public function getGroupServices($showroomId)
    {
        $groupServices = Showroom::find($showroomId)->groupServices;
        return response()->json($groupServices);
    } */

    public function getServices($groupId)
    {
        $services = GroupService::find($groupId)->services;
        return response()->json($services);
    }

}
