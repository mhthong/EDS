<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable as AuthenticatableTrait;

class Artists extends Model implements Authenticatable
{
    use HasFactory, AuthenticatableTrait;

    protected $table = 'artists';

    protected $fillable = ['name', 'fullname', 'password', 'phone', 'email', 'avatar', 'description', 'status', 'artist_levelID' ,'artist_pay','wage'];

    public function artistLevel()
    {
        return $this->belongsTo(ArtistLevel::class, 'artist_levelID');
    }

    public function services()
    {
        return $this->belongsToMany(Service::class, 'artist_service');
    }

    public function showrooms()
    {
        return $this->belongsToMany(Showroom::class, 'artist_showroom', 'artist_id', 'showroom_id');
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class, 'ArtistID');
    }

    public function artistshowroom()
    {
        return $this->belongsToMany(ArtistShowroom::class, 'artist_showroom', 'artist_id', 'showroom_id');
    }
}
