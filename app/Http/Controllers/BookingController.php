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


public function getBookShowroomData($showroomId)
{
    $getBookShowroomData = Booking::with([
        'artist:id,name,fullname',
        'showroom',
        'get',
        'services',
        'price',
        'payment'
    ])->where('ShowroomID', $showroomId)->get();

    return response()->json($getBookShowroomData);
}


public function store(Request $request)
    {
         // Xử lý dữ liệu đầu vào từ $request

               $bookingData = $request->all();

               dd($bookingData);
         

        // Tạo một bản ghi mới trong cơ sở dữ liệu


        // Trả về phản hồi thành công hoặc lỗi
 /*        if ($booking) {
            return response()->json(['message' => 'Booking created successfully'], 201);
        } else {
            return response()->json(['message' => 'Booking creation failed'], 500);
        } */
    }

}
