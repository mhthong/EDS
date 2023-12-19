<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;
use Illuminate\Support\Facades\Auth;

class Payment extends Model
{
    use HasFactory, LogsActivity;

    protected static $logAttributes = ['PricelD', 'BookingID', 'date', 'payment_type','payment_deposit','1stcheck','payment_type_remainding','payment_remainding','2ndcheck'];
    protected $fillable = ['PricelD', 'BookingID', 'date', 'payment_type','payment_deposit','1stcheck','payment_type_remainding','payment_remainding','2ndcheck'];

    public function price()
    {
        return $this->belongsTo(Price::class, 'PricelD');
    }

    public function booking()
    {
        return $this->belongsTo(Booking::class, 'BookingID');
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

