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

			<div id="analytics-admin" data-artist-id="{{ auth()->id() }}">
				<!-- Render your AdminDashboard component here -->
				<analytics-admin></analytics-admin>
			</div>

			@elseif (Auth::user() instanceof \App\Models\Admin)
			<div id="analytics-admin" data-admin-id="{{ auth()->id() }}">
				<!-- Render your AdminDashboard component here -->
				<analytics-admin></analytics-admin>
			</div>			
			
			@elseif (Auth::user() instanceof \App\Models\Employee)

			<div id="analytics-admin" data-employee-id="{{ auth()->id() }}">
				<!-- Render your AdminDashboard component here -->
				<analytics-admin></analytics-admin>
			</div>

			@endif
			@else
				<p>Welcome, Guest!</p>
			@endif

	
	</div>
		<!-- end: MAIN BODY -->

	</section>
	<!-- end: MAIN -->
@endsection

@section('script')
<script src="/js/analytics.js" defer></script>
@endsection



@section('footer')


@endsection








