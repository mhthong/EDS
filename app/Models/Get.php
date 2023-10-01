<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Get extends Model
{
    use HasFactory;

    protected $fillable = ['Name', 'Email', 'Address', 'Phone' ,'Source' , 'Note','After_img','Before_img'];

    public function bookings()
    {
        return $this->hasMany(Booking::class, 'GetID');
    }
}
