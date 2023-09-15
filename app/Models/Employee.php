<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable as AuthenticatableTrait;

class Employee extends Model implements Authenticatable
{
    use HasFactory;

    use AuthenticatableTrait;

    // Define the table associated with the model
    protected $table = 'employee';

    protected $fillable = ['name', 'fullname', 'password', 'phone', 'email', 'avatar', 'description', 'status'];

    // Define the relationships

}