<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Showroom;
use App\Models\GroupService;

class APIBookingController extends Controller
{
    //

    public function getShowrooms()
    {
        $showrooms = Showroom::all();
        return response()->json($showrooms);
    }

    public function getGroupServices($showroomId)
    {
        $groupServices = Showroom::find($showroomId)->groupServices;
        return response()->json($groupServices);
    }

    public function getServices($groupId)
    {
        $services = GroupService::find($groupId)->services;
        return response()->json($services);
    }

}
