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
            <div id="app" class="main__body">

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
                                                            .pointer-events-p {
                                                                pointer-events: none !important;
                                                            }
                                                            option[value="Cancel"],
                                                            option[value="Refund"],
                                                            option[value="Done"]{
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

        </section>

    </main>



@endsection

@section('footer')
    @include('layouts.footerad')
@endsection

@section('script')
    <script src="/js/bookcreate.js" defer></script>
@endsection
