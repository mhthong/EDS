<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

       // Define the table associated with the model
       protected $table = 'services';

       protected $fillable = ['Name', 'Price', 'Description', 'Sale_Price', 'Time' , 'status' ,'group_service_id'];

       // Define the relationships
       public function bookings()
       {
           return $this->belongsToMany(Booking::class, 'service_booking');
       }
   
       public function showrooms()
       {
           return $this->belongsToMany(Showroom::class, 'service_showroom');
       }
   
       public function artists()
       {
           return $this->belongsToMany(Artists::class, 'artist_service');
       }

       public function groupService()
       {
           return $this->belongsTo(GroupService::class, 'group_service_id');
       }
   
}
