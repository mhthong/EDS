<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShowroomSchedule extends Model
{
    use HasFactory;
    protected $table ='showroom_schedules';
    protected $fillable = ['day', 'active'];

    public function workingHours()
    {
        return $this->hasMany(WorkingHour::class);
    }
}
