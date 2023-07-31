<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArtistService extends Model
{
    use HasFactory;

    protected $table = 'artist_service';

    protected $fillable = ['artist_id', 'service_id'];

    public function artist()
    {
        return $this->belongsTo(Artists::class, 'artist_id');
    }

    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }
}
