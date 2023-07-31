<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceShowroom extends Model
{
    use HasFactory;

    protected $table = 'service_showroom';

    protected $fillable = ['service_id', 'showroom_id'];

    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }

    public function showroom()
    {
        return $this->belongsTo(Showroom::class, 'showroom_id');
    }
}
