<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Showroom extends Model
{
    use HasFactory;

    // Define the table associated with the model
    protected $table = 'showrooms';

    protected $fillable = ['Name', 'Address', 'Phone', 'Description'];

    // Define the relationships
    public function artists()
    {
        return $this->belongsToMany(Artists::class, 'artist_showroom');
    }

    public function services()
    {
        return $this->belongsToMany(Service::class, 'service_showroom');
    }


    public function bookings()
    {
        return $this->hasMany(Booking::class, 'ShowroomID');
    }
}
