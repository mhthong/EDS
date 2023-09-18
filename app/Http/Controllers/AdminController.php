<?php

namespace App\Http\Controllers;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Http;
use Spatie\Analytics\Analytics;
use Spatie\Analytics\Period;
use Carbon\Carbon;
use Illuminate\Support\Collection;



class AdminController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
       
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('admin.index');

    }



    public function YourSetting(){
        $this->middleware('auth');
        // Truy cập thông tin người dùng đang đăng nhập
        $user = Auth::user();
        return view('admin.admin-setting' , compact('user'));
    }


    public function updateAvatar(Request $request)
    {
        // Lấy người dùng đang đăng nhập
        $user = Auth::user();

        // Lưu ảnh từ file manager vào thư mục public/avatars
        $img = $request->avatar_image;
        $eror_img = explode(env('APP_URL'), $img);
        $image = end($eror_img);
        // Cập nhật avatar_id
        $user->avatar = $image;
        
        $user->save();

        // Trả về kết quả thành công hoặc thất bại
        return response()->json(['success' => true]);
    }


    public function updateInfomation(Request $request)
    {
        $this->middleware('auth');
        
        // Lấy thông tin từ request
        $email = $request->input('email');
        $last_name = $request->input('last_name');
        
        // Lấy người dùng đang đăng nhập
        $user = Auth::user();
        
        // Cập nhật thông tin
        $user->email = $email;
        $user->last_name = $last_name;
        
        // Lưu lại các thay đổi
        $saved = $user->save();
    
        if ($saved) {
            return redirect()->back()->with('success', 'Information updated successfully.');
        } else {
            return redirect()->back()->with('failed', 'Failed to update information.');
        }
    }
    

    public function resetPassword(Request $request)
    {
        $this->middleware('auth');
        
        // Lấy mật khẩu hiện tại và mật khẩu mới từ request
        $currentPassword = $request->input('pass');
        $newPassword = $request->input('passwordnew');
        
        // Lấy người dùng đang đăng nhập
        $user = Auth::user();
        
        // Kiểm tra mật khẩu hiện tại
        $currentPasswordHash = $user->password;
        if (!Hash::check($currentPassword, $currentPasswordHash)) {
            return back()->with('failed', 'Incorrect current password.');
        }
        
        // Mật khẩu hiện tại đúng, cập nhật mật khẩu mới
        $user->password = Hash::make($newPassword);
        $saved = $user->save();
    
        if ($saved) {
            // Đăng xuất người dùng và xóa phiên đăng nhập
            Auth::guard('admin')->logout();
            Session::flush();
    
            return back()->with('success', 'Password updated successfully. Please login with your new password.');
        } else {
            return back()->with('failed', 'Failed to update password.');
        }
    }
    
}
