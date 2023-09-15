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

    protected $fillable = ['ArtistID', 'ShowroomID', 'time','time_end', 'date', 'GetID','price_id', 'content','action','status','source_name','source_id','source_type'];

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

    public function price()
    {
        return $this->belongsTo(Price::class, 'price_id');
    }

    public function payment()
    {
        return $this->hasOne(Payment::class, 'BookingID');
    }

    public function sourceBookings()
{
    return $this->hasMany(SourceBooking::class, 'booking_id');
}


}
