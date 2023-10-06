<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckAdminAuthController extends Controller
{
    //

    public function checkAdminRole()
    {
        $user = auth()->user();
    
        if ($user->manage_supers == 0) {
            // Tiếp tục xử lý
        } else {
            return redirect()->route('admin.index');
        }
    }

}


