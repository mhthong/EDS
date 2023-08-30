<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;

class BookingController extends Controller
{
    //
    public function getAllData()
{
    $bookings = Booking::with(['artist' => function ($query) {
        $query->select('id', 'name', 'fullname'); // Chỉ chọn các trường bạn muốn hiển thị
    }, 'showroom', 'get', 'services', 'price', 'payment'])->get();
    

    return response()->json($bookings);
}
}
