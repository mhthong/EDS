<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable as AuthenticatableTrait;

class Artists extends Model implements Authenticatable
{
    use HasFactory;

    use AuthenticatableTrait;

    // Define the table associated with the model
    protected $table = 'artists';

    protected $fillable = ['name', 'fullname', 'password', 'phone', 'email', 'avatar', 'description', 'status', 'artist_levelID' ,'artist_pay','wage'];

    public function artistLevel()
    {
        return $this->belongsTo(ArtistLevel::class, 'artist_levelID');
    }

    // Define the relationships
    public function services()
    {
        return $this->belongsToMany(Service::class, 'artist_service');
    }

    public function showrooms()
    {
        return $this->belongsToMany(Showroom::class, 'artist_showroom');
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class, 'ArtistID');
    }

}