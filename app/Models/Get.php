<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Get extends Model
{
    use HasFactory;

    protected $fillable = ['Name', 'Email', 'Address', 'Phone' ,'source_data','Source' , 'Note','After_img','Before_img'];

    public function bookings()
    {
        return $this->hasMany(Booking::class, 'GetID');
    }
}
