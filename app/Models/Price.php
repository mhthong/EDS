<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;
use Illuminate\Support\Facades\Auth;

class Price extends Model
{
    use HasFactory, LogsActivity;
    protected static $logAttributes =  ['Total_price', 'Deposit_price', 'Remaining_price', 'Level_price', 'Artist_levelID','servies_price','com','upsale'];

    protected $fillable = ['Total_price', 'Deposit_price', 'Remaining_price', 'Level_price', 'Artist_levelID','servies_price','com','upsale'];

    public function artistLevel()
    {
        return $this->belongsTo(ArtistLevel::class, 'Artist levelID');
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class, 'PriceID');
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
