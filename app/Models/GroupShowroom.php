<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GroupShowroom extends Model
{
    use HasFactory;

    protected $table = 'group_showrooms'; // Changed table name to 'group_showrooms'
    protected $fillable = ['group_id', 'showroom_id'];

    // Define the relationship with the Showroom model
    public function showroom()
    {
        return $this->belongsTo(Showroom::class);
    }

    // Define the relationship with the Group model
    public function group()
    {
        return $this->belongsTo(Group::class);
    }
}
