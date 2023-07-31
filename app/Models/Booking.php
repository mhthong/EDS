<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    // app/Models/Booking.php

      // Define the table associated with the model
    protected $table = 'bookings';

    protected $fillable = ['ArtistID', 'ShowroomID', 'time', 'date', 'GetID', 'content'];

    public function artist()
    {
        return $this->belongsTo(Artists::class, 'ArtistID');
    }

    public function showroom()
    {
        return $this->belongsTo(Showroom::class, 'ShowroomID');
    }

    public function get()
    {
        return $this->belongsTo(Get::class, 'GetID');
    }

    public function services()
    {
        return $this->belongsToMany(Service::class, 'service_booking');
    }

}
