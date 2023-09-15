<?php
// app/Http/Middleware/GetUserId.php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GetUserId
{
    public function handle($request, Closure $next)
    {
        // Kiểm tra nếu người dùng đã đăng nhập
        if (auth()->check()) {
            // Lấy id người dùng và lưu vào session hoặc request
            $userId = auth()->id();
            $request->merge(['user_id' => $userId]);
        }

        return $next($request);
    }
}
