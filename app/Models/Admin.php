<?php

namespace App\Models;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;
use Illuminate\Support\Facades\Auth;

class Admin extends Authenticatable
{
    use Notifiable, LogsActivity;

    protected static $logAttributes = [
        'name', 'email', 'password', 'last_login', 'last_name', 'avarta_id', 'manage_supers', 'super_user', 'status'
    ];

    protected $guard = 'admin';

    protected $fillable = [
        'name', 'email', 'password', 'last_login', 'last_name', 'avarta_id', 'manage_supers', 'super_user', 'status'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function getAuthPassword()
    {
        return $this->password;
    }

    public function getActivitylogOptions(): LogOptions
    {
                            
        if (Auth::check()) {
            if (Auth::user() instanceof \App\Models\Artists) {
                $source_name = Auth::user()->name;
                $source_id = Auth::user()->id;
                $source_type = "Artists";
            } elseif (Auth::user() instanceof \App\Models\Admin) {
                $source_name = Auth::user()->name;
                $source_id = Auth::user()->id;
                $source_type = Auth::user()->super_user;
            } elseif (Auth::user() instanceof \App\Models\Employee) {
                $source_name = Auth::user()->name;
                $source_id = Auth::user()->id;
                $source_type = "Employee";
            } else {
                $source_name = "N/A";
                $source_id = "";
                $source_type = "";
            }

        }

        $user = auth()->user();

        $logOptions = new LogOptions();
        $logOptions->logName = $user ? $source_type .'_'. $source_name : 'system';

        // Log changes to attributes
        $logOptions->logFillable();


        return $logOptions;
    }

    public function employees()
    {
        return $this->hasMany(Employee::class, 'team_id')->where('super_user', 3);
    }

}
