<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    use HasFactory;

    protected $fillable = ['Total price', 'Deposit price', 'Remaining price', 'Level price', 'Artist levelID'];

    public function artistLevel()
    {
        return $this->belongsTo(ArtistLevel::class, 'Artist levelID');
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class, 'PriceID');
    }
}
