@extends('layouts.app')
@section('head')
@endsection
@section('header')
    @include('layouts.headerad')
@endsection

@section('content')
    <main>
        @include('layouts.nav-admin')
        @include('admin.Notifications')

        <!-- start: MAIN -->
        <section id="main">

            <!-- start: MAIN TOP -->
            <div class="main__top">
                @include('admin.main__top')
            </div>
            <!-- end: MAIN TOP -->

            <!-- start: MAIN BODY -->
            <div id="app" class="main__body" data-user-id = "{{ auth()->id() }}">

                <price-booking></price-booking>

                <div class="main__body__data">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 flexb-c">
                        <div class="flexb-col-c bg-ad-1">

                            @isset($bookingsData)
                                @foreach ($bookingsData as $row)
                                    @if (Auth::check())
                                        @if (Auth::user() instanceof \App\Models\Artists)
                                            @push('styles')
                                                <style>
                                                    .pointer-events-a {
                                                        pointer-events: none !important;
                                                    }
                                                    option[value="Refund"] {
                                                        display: none;
                                                    }
                                                </style>
                                            @endpush


                                            <form class="p-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                                                name="add-blog-post-form" id="add-blog-post-form" method="post"
                                                action="{{ route('artists.bookings.update', ['id' => $row->id]) }}"
                                                enctype="multipart/form-data">
                                                @csrf
                                            @elseif (Auth::user() instanceof \App\Models\Admin)
                                                <form class="p-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                                                    name="add-blog-post-form" id="add-blog-post-form" method="post"
                                                    action="{{ route('bookings.update', ['id' => $row->id]) }}"
                                                    enctype="multipart/form-data">
                                                    @csrf
                                                @elseif (Auth::user() instanceof \App\Models\Employee)
                                                    @push('styles')
                                                        <style>
                                                
                                                            option[value="Refund"]{
                                                                display: none;
                                                            }
                                                        </style>
                                                    @endpush


                                                    <form class="p-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                                                        name="add-blog-post-form" id="add-blog-post-form" method="post"
                                                        action="{{ route('employee.bookings.update', ['id' => $row->id]) }}"
                                                        enctype="multipart/form-data">
                                                        @csrf
                                        @endif
                                    @endif




                                    <div class="flexb-c col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                                        style="align-items: flex-start;   justify-content: space-between;">

                                        <div class="flexb-c col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <edit-booking></edit-booking>
                                        </div>

                                    </div>



                                    </form>
                                @endforeach
                            @endisset
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="main__body" style="box-shadow: none;">
                @isset($bookingsData)
                @foreach ($bookingsData as $row)

                @if (Auth::check())
                @if (Auth::user() instanceof \App\Models\Artists)
                    @push('styles')
                        <style>
                            .pointer-events-a {
                                pointer-events: none !important;
                            }

                            option[value="Cancel"],
                            option[value="Refund"] {
                                display: none;
                            }
                        </style>
                    @endpush


                    <form class="p-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                        name="add-blog-post-form" id="add-blog-post-form" method="post"
                        action="{{ route('artists.bookings.update', ['id' => $row->id]) }}"
                        enctype="multipart/form-data">
                        @csrf
                    @elseif (Auth::user() instanceof \App\Models\Admin)
                        <form class="p-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                            name="add-blog-post-form" id="add-blog-post-form" method="post"
                            action="{{ route('bookings.update', ['id' => $row->id]) }}"
                            enctype="multipart/form-data">
                            @csrf
                        @elseif (Auth::user() instanceof \App\Models\Employee)
                            @push('styles')
                                <style>
                  
                                    option[value="Refund"]{
                                        display: none;
                                    }
                                </style>
                            @endpush


                            <form class="p-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                                name="add-blog-post-form" id="add-blog-post-form" method="post"
                                action="{{ route('employee.bookings.update', ['id' => $row->id]) }}"
                                enctype="multipart/form-data">
                                @csrf
                @endif
            @endif

            

                <ul class="main__body__box-info">
                    <li>
                        <p>Payment Deposit Image</p>
                  
                      
                       
                        <div class="form-group mt-4 ">
                            <div class="holder image-category" id="image-category" value="">
                                <img src="{{ asset($row->payment->payment_deposit) }}" alt="">
                            </div>
                            <div class="-space-y-px mb-4">
                                <div class="containerInput input-group">
                                    <span class="input-group-btn ">
                                        <a class="radio-header radio-text" id="image_manager" data-input="Deposit"
                                            data-preview="image-category">
                                            Select Image
                                        </a>
                                    </span>

                                    <input class="form-control" value="{{$row->payment->payment_deposit}}" id="Deposit" style="display: none"
                                        type="text" name="Deposit" >
                                </div>

                            </div>
                        </div>

                    </li>
                    <li>
                        <p>Payment Remaining Image</p>
                       
                        <div class="form-group mt-4 ">
                            <div class="holder image-category" id="PaymentRemainingImage" value="">
                                <img src="{{ asset($row->payment->payment_remainding) }}" alt="">
                            </div>
                            <div class="-space-y-px mb-4">
                                <div class="containerInput input-group">
                                    <span class="input-group-btn ">
                                        <a class="radio-header radio-text" id="image_PaymentRemainingImage" data-input="Remaining"
                                            data-preview="PaymentRemainingImage">
                                            Select Image
                                        </a>
                                    </span>

                                    <input class="form-control" value="{{$row->payment->payment_remainding}}" id="Remaining" style="display: none"
                                        type="text" name="Remaining" >
                                </div>

                            </div>
                        </div>

                    </li>

                    <li>
                        <p>Before Image</p>
                       
                        <div class="form-group mt-4 ">
                            <div class="holder image-category" id="BeforeImage" value="">
                                <img src="{{ asset($row->get->Before_img) }}" alt="">
                            </div>
                            <div class="-space-y-px mb-4">
                                <div class="containerInput input-group">
                                    <span class="input-group-btn ">
                                        <a class="radio-header radio-text" id="image_BeforeImage" data-input="Before"
                                            data-preview="BeforeImage">
                                            Select Image
                                        </a>
                                    </span>

                                    <input class="form-control" id="Before" value="{{$row->get->Before_img}}" style="display: none"
                                        type="text" name="Before" >
                                </div>

                            </div>
                        </div>

                    </li>
                    <li>
                        <p>After Image</p>
                       
                        <div class="form-group mt-4 ">
                            <div class="holder image-category" id="AfterImage" value="">
                                <img src="{{ asset($row->get->After_img) }}" alt="">
                            </div>
                            <div class="-space-y-px mb-4">
                                <div class="containerInput input-group">
                                    <span class="input-group-btn ">
                                        <a class="radio-header radio-text" id="image_AfterImage" data-input="After"
                                            data-preview="AfterImage">
                                            Select Image
                                        </a>
                                    </span>

                                    <input class="form-control" id="After"  value="{{$row->get->After_img}}" style="display: none"
                                        type="text" name="After" >
                                </div>

                            </div>
                        </div>

                    </li>
                
                </ul>

                <button
                type="submit"
                name="submit"
                value="Upload"
                class="btn btn-info mb-5"
              >
                <i class="fa fa-save"></i> Upload 
              </button>

                </form>

                @endforeach 
                @endisset


            </div>

        </section>

    </main>



@endsection

@section('footer')
    @include('layouts.footerad')
@endsection

@section('script')
    <script src="/js/bookcreate.js" defer></script>

    <script src="/vendor/laravel-filemanager/js/stand-alone-button.js"></script>
    @if (Auth::check())
    @php
        $route_prefix = '';
        if (Auth::user() instanceof \App\Models\Artists) {
            $route_prefix = '/artists/laravel-filemanager';
        } elseif (Auth::user() instanceof \App\Models\Admin) {
            $route_prefix = '/admin/laravel-filemanager';
        } elseif (Auth::user() instanceof \App\Models\Employee) {
            $route_prefix = '/employee/laravel-filemanager';
        }
    @endphp

    <script>
        var route_prefix = @json($route_prefix);

        $('#image_PaymentRemainingImage').filemanager('image', {
            prefix: route_prefix
        });
        $('#image_manager').filemanager('image', {
            prefix: route_prefix
        });
        $('#image_AfterImage').filemanager('image', {
            prefix: route_prefix
        });
        $('#image_BeforeImage').filemanager('image', {
            prefix: route_prefix
        });
    </script>
@endif



@endsection
