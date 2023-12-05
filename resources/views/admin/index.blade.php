@extends('layouts.app')


@section('header')
    <!-- start: SIDEBAR -->
    @include('layouts.nav-admin')
	<!-- end: SIDEBAR MOBILE -->
@endsection


@section('content')



	<!-- start: MAIN -->
	<section id="main">
		
		<!-- start: MAIN TOP -->
		<div class="main__top">
            @include('admin.main__top')
		</div>
		<!-- end: MAIN TOP -->

		<!-- start: MAIN BODY -->
		<div class="main__body">

			@if (Auth::check())
    
   			 @if (Auth::user() instanceof \App\Models\Artists)

			<div id="doashboard" data-artist-id="{{ auth()->id() }}">
				<!-- Render your AdminDashboard component here -->
				<admin-dashboard></admin-dashboard>
			</div>

			@elseif (Auth::user() instanceof \App\Models\Admin)
			<div id="doashboard" data-admin-id="{{ auth()->id() }}" manage_supers = "{{Auth::user()->manage_supers}}">
				<!-- Render your AdminDashboard component here -->
				<admin-dashboard></admin-dashboard>
			</div>
			
			@elseif (Auth::user() instanceof \App\Models\Employee)

			<div id="doashboard" data-employee-id="{{ auth()->id() }}">
				<!-- Render your AdminDashboard component here -->
				<admin-dashboard></admin-dashboard>
			</div>

			@endif
			@else
				<p>Welcome, Guest!</p>
				<!-
			@endif

	
						
		<div class="main__body__data">
				<div class="sales-summary">
					<div class="sales-summary__top mb-1">
						<h4>Calendar</h4>
					</div>
					<div id="fullcalendar" style="
					height: 100%;
				">
						<!-- Render your AdminDashboard component here -->
						<fullcalendar-admin></fullcalendar-admin>
					</div>
				</div>

	</div>
		<!-- end: MAIN BODY -->

	</section>
	<!-- end: MAIN -->
@endsection

@section('script')
<script src="/js/dashboardsvue.js" defer></script>
<script src="/js/FullCalendarAdmin.js" defer></script>

<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

@endsection



@section('footer')


@endsection








