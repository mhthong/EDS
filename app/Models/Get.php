<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Get extends Model
{
    use HasFactory;

    protected $fillable = ['Name', 'Gmail', 'Address', 'Phone'];

    public function bookings()
    {
        return $this->hasMany(Booking::class, 'GetID');
    }
}
