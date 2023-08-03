<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceShowroom extends Model
{
    use HasFactory;

    protected $table = 'service_showroom';

    protected $fillable = ['groupservice_id', 'showroom_id'];

    public function groupservice()
    {
        return $this->belongsTo(GroupService::class, 'groupservice_id');
    }

    public function showroom()
    {
        return $this->belongsTo(Showroom::class, 'showroom_id');
    }
}
