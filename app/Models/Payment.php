<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = ['PricelD', 'BookingID', 'date', 'payment_type'];

    public function price()
    {
        return $this->belongsTo(Price::class, 'PricelD');
    }

    public function booking()
    {
        return $this->belongsTo(Booking::class, 'BookingID');
    }
}

