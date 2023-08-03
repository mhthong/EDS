<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkingHour extends Model
{
    use HasFactory;

    protected $table = 'working_hours';

    protected $fillable = ['showroom_schedule_id','start_time', 'end_time'];

    public function showroomSchedule()
    {
        return $this->belongsTo(ShowroomSchedule::class);
    }
}
