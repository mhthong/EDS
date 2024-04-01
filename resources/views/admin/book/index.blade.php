@extends('layouts.app')

@section('head')
    <!-- Include DateRangePicker CSS and JS -->
    <script src="{{ asset('vendor/laravel-filemanager/js/stand-alone-button.js') }}"></script>
@endsection

@section('header')
    @include('layouts.headerad')

    <!-- Include Moment.js library -->
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
            <div class="main__body">


                <!-- Create popup modal -->
                <div class="modal fade bd-example-modal-lg" id="createModal" tabindex="-1" aria-labelledby="createModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <!-- Add form for Create action -->
                            <!-- Add these lines to your Blade view or layout file -->

                            @if (Auth::check())
                                @if (Auth::user() instanceof \App\Models\Artists)
                                    @push('styles')
                                        <style>
                                            .delete {
                                                display: none;
                                            }
                                        </style>
                                    @endpush
                                @elseif (Auth::user() instanceof \App\Models\Admin)
                                    <div class="modal-header main__body__data__header">
                                        <h5 class="m-0">Add New Booking </h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>

                                    </div>

                                    <form id="bookingForm" action="{{ route('bookings.store') }}" method="post">

                                        @csrf
                                        <div class="modal-body">
                                            <!-- Add form fields here -->
                                            <div id="app" data-admin-id="{{ auth()->id() }}">
                                                <create-booking></create-booking>
                                            </div>
                                            <!-- Add more fields as needed -->
                                        </div>

                                    </form>
                                @elseif (Auth::user() instanceof \App\Models\Employee)
                                    @push('styles')
                                        <style>
                                            .delete {
                                                display: none;
                                            }
                                        </style>
                                    @endpush
                                    <div class="modal-header main__body__data__header">
                                        <h5 class="m-0">Add New Booking </h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>


                                    </div>

                                    <form id="bookingForm" action="{{ route('employee.bookings.store') }}" method="post">

                                        @csrf
                                        <div class="modal-body">
                                            <!-- Add form fields here -->
                                            <div id="app" data-employee-id="{{ auth()->id() }}">
                                                <create-booking></create-booking>
                                            </div>
                                            <!-- Add more fields as needed -->
                                        </div>

                                    </form>
                                @endif
                            @endif


                        </div>
                    </div>
                </div>


                <div class="main__body__data">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="col-12  p-0">
                            <div class="col-12 p-0">
                                <div class=""style=" display: flex; ">
                                    <button type="button" class="btn-sub btn btn-info" data-bs-toggle="modal"
                                        data-bs-target="#createModal" data-target=".bd-example-modal-lg">
                                        New Booking
                                    </button>

                                </div>
                            </div>

                        </div>

                        <div class="bg-ad flexb-col-c">
                            @if (Auth::check())
                                @if (Auth::user() instanceof \App\Models\Artists)
                                    <div id="BookingTable" style="    width: 100%;
                                "
                                        data-artist-id="{{ auth()->id() }}">
                                        <!-- Render your AdminDashboard component here -->
                                        <booking-table></booking-table>
                                    </div>
                                @elseif (Auth::user() instanceof \App\Models\Admin)
                                    <div id="BookingTable" style="    width: 100%;
                                "
                                        data-admin-id="{{ auth()->id() }}"
                                        manage_supers = "{{ Auth::user()->manage_supers }}">
                                        <!-- Render your AdminDashboard component here -->
                                        <booking-table></booking-table>
                                    </div>
                                @elseif (Auth::user() instanceof \App\Models\Employee)
                                    <div id="BookingTable" style="    width: 100%;
                                "
                                        data-employee-id="{{ auth()->id() }}">
                                        <!-- Render your AdminDashboard component here -->
                                        <booking-table></booking-table>
                                    </div>
                                @endif
                            @else
                                <p>Welcome, Guest!</p>
                                <!- @endif

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
    <script src="/vendor/laravel-filemanager/js/stand-alone-button.js"></script>
    <script src="/js/bookcreate.js" defer></script>
    <script src="/js/BookingTable.js" defer></script>
@endsection
