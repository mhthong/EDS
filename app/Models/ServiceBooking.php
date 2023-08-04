<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceBooking extends Model
{
    use HasFactory;

    protected $table = 'service_booking';

    protected $fillable = ['service_id', 'booking_id','artist_levelID'];

    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }
    
    public function booking()
    {
        return $this->belongsTo(Booking::class, 'booking_id');
    }
    
    public function artistLevel()
    {
        return $this->belongsTo(ArtistLevel::class, 'artist_levelID');
    }

}
