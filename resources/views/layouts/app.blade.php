<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Admin') }}</title>

    <!-- Scripts -->
    {{--  <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script> --}}
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="https://unpkg.com/phosphor-icons"></script>
    {{--     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script> --}}
    <!-- Fonts -->
    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">
    <link href="/js/bootstrap-tagsinput-latest/src/bootstrap-tagsinput.css" rel="stylesheet">
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

    <script src="/js/app.js" defer></script>
    <script src="/js/style.js" defer></script>
	<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    @yield('script')


</body>

</html>









