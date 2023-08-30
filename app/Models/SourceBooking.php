<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SourceBooking extends Model
{
    use HasFactory;

    protected $table = 'source_booking'; // Tên bảng tương ứng trong cơ sở dữ liệu

    protected $fillable = ['booking_id', 'source_name'];

    public function booking()
    {
        return $this->belongsTo(Booking::class, 'booking_id');
    }
}
