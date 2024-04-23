<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;
use Illuminate\Support\Facades\Auth;

class Booking extends Model
{
    use HasFactory,LogsActivity;

    // app/Models/Booking.php
    protected static $logAttributes = ['ArtistID', 'ShowroomID', 'time','time_end', 'date', 'GetID','price_id', 'content','action','status','source_name','source_id','source_type','source_data','Source' , 'Note','After_img','Before_img' ,'created_at'];


      // Define the table associated with the model
    protected $table = 'bookings';

    protected $fillable = ['ArtistID', 'ShowroomID', 'time','time_end', 'date', 'GetID','price_id', 'content','action','status','source_name','source_id','source_type','source_data','Source' , 'Note','After_img','Before_img' ,'created_at'];

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
        return $this->hasOne(Payment::class, 'BookingID', 'id');
    }

    

    public function sourceBookings()
        {
            return $this->hasMany(SourceBooking::class, 'booking_id');
        }

    // app/Models/Booking.php

public function deleteBooking()
{
    // Delete related records if needed
    // For example, you can delete associated payment records before deleting the booking
    if ($this->payment ) {
        $this->payment->delete();

    }

    // Delete the booking record itself
    $this->delete();

    // You can also perform additional actions here before or after deletion

    // Example: Logging the deletion
    // Log::info('Booking deleted: ' . $this->id);
}

public function getActivitylogOptions(): LogOptions
{
                        
    if (Auth::check()) {
        if (Auth::user() instanceof \App\Models\Artists) {
            $source_name = Auth::user()->name;
            $source_id = Auth::user()->id;
            $source_type = "Artists";
        } elseif (Auth::user() instanceof \App\Models\Admin) {
            $source_name = Auth::user()->name;
            $source_id = Auth::user()->id;
            $source_type = Auth::user()->super_user;
        } elseif (Auth::user() instanceof \App\Models\Employee) {
            $source_name = Auth::user()->name;
            $source_id = Auth::user()->id;
            $source_type = "Employee";
        } else {
            $source_name = "N/A";
            $source_id = "";
            $source_type = "";
        }

    }

    $user = auth()->user();

    $logOptions = new LogOptions();
    $logOptions->logName = $user ? $source_type .'_'. $source_name : 'system';

    // Log changes to attributes
    $logOptions->logFillable();


    return $logOptions;
}

}
