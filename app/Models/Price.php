<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    use HasFactory;

    protected $fillable = ['Total_price', 'Deposit_price', 'Remaining_price', 'Level_price', 'Artist_levelID','servies_price','com'];

    public function artistLevel()
    {
        return $this->belongsTo(ArtistLevel::class, 'Artist levelID');
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class, 'PriceID');
    }
}
