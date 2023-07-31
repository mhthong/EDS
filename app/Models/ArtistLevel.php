<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArtistLevel extends Model
{
    
    use HasFactory;
    // Define the table associated with the model
    protected $table = 'artists_levels';
  
    
    protected $fillable = ['Name', 'Level_price'];


    public function artists()
    {
        return $this->hasMany(Artists::class, 'artist_levelID');
    }
}

