<?php
namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\Artists;


class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */

    protected $redirectTo = '/home';
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     const ALL_GUARD = [
       'admin', 'web', 'artists' ,'employee',/* 'shop', 'employee', 'user' */
     ];

    public function guard()
    {
        return Auth::guard('admin');
    }

    function login(Request $request)
    {
        $dataLogin = $request->only(['name', 'password']);
    
        foreach (self::ALL_GUARD as $guard) {
            if (Auth::guard($guard)->attempt($dataLogin)) {
                $user = Auth::guard($guard)->user();
                if ($user->status === 'published') {
                    if ($guard == 'web') {
                        return redirect('/home');
                    } elseif ($guard == 'admin') {
                        return redirect('/' . $guard . '/');
                    } else {
                        return redirect('/' . $guard . '/');
                    }
                }
            }
        }
    
        return redirect('/login');
    }
    
    public function showLoginForm()
    {
        return view('auth.login');
    }
}
