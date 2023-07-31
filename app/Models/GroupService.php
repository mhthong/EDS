<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GroupService extends Model
{
    use HasFactory;

     // Define the table associated with the model
     protected $table = 'group_service';

     protected $fillable = ['Name', 'Value', 'Description'];

    // Define the relationship with the services table
    public function services()
    {
        return $this->hasMany(Service::class, 'group_service_id');
    }
}
