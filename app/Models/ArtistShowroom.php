<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArtistShowroom extends Model
{
    use HasFactory;

    protected $table = 'artist_showroom';

    protected $fillable = ['artist_id', 'showroom_id'];

    public function artist()
    {
        return $this->belongsTo(Artists::class, 'artist_id');
    }

    public function showroom()
    {
        return $this->belongsTo(Showroom::class, 'showroom_id');
    }
}
