<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @isset($setting_data['Favicon'])
    <link rel="shortcut icon" href="{{ asset($setting_data['Favicon']) }}">
    @endisset
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @routes()

    @if (Auth::check())   
        @if (Auth::user() instanceof \App\Models\Admin)

        <title>Admin</title>
        @elseif  (Auth::user() instanceof \App\Models\Artists)
        <title>Artists</title>
        @elseif  (Auth::user() instanceof \App\Models\Employee)
        <title>Employee</title>
        @endif

    @endif
 
    <link href="/css/vendor.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
    <script src="/js/vendor.js"></script>
    
    @stack('styles')
    @yield('head')
    
    <style>
    body{
        font-family: serif !important;
        font: 16px !important;
    }
    </style>

    
</head>

<body>

    @yield('header')

    @yield('content')

    @yield('footer')
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="/js/style.js" defer></script>
    @yield('script')


</body>

</html>









