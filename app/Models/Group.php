<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;
    protected $table = 'groups'; // Changed table name to 'groups'
    protected $fillable = ['name','description'];

    public function showrooms()
    {
        return $this->hasMany(Showroom::class);

    }
}
