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

			<div id="roster-admin" data-artist-id="{{ auth()->id() }}">
				<!-- Render your AdminDashboard component here -->
				<roster-admin></roster-admin>
			</div>

			@elseif (Auth::user() instanceof \App\Models\Admin)
			<div id="roster-admin" data-admin-id="{{ auth()->id() }}" manage_supers = "{{ Auth::user()->manage_supers }}">
				<!-- Render your AdminDashboard component here -->
				<roster-admin></roster-admin>
			</div>
			
			@elseif (Auth::user() instanceof \App\Models\Employee)

			<div id="roster-admin" data-employee-id="{{ auth()->id() }}">
				<!-- Render your AdminDashboard component here -->
				<roster-admin></roster-admin>
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
<script src="/js/roster.js" defer></script>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const unwantedImgElements = document.querySelectorAll('img[src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE5OV80KSI+CjxwYXRoIGQ9Ik0xMiAyMUMxNi45NzA2IDIxIDIxIDE2Ljk3MDYgMjEgMTJDMjEgNy4wMjk0NCAxNi45NzA2IDMgMTIgM0M3LjAyOTQ0IDMgMyA3LjAyOTQ0IDMgMTJDMyAxNi45NzA2IDcuMDI5NDQgMjEgMTIgMjFaIiBzdHJva2U9IiM3MzczNzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMS4yNSAxMS4yNUgxMlYxNi41SDEyLjc1IiBmaWxsPSIjNjE2MDYzIi8+CjxwYXRoIGQ9Ik0xMS4yNSAxMS4yNUgxMlYxNi41SDEyLjc1IiBzdHJva2U9IiM3MzczNzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMS44MTI1IDlDMTIuNDMzOCA5IDEyLjkzNzUgOC40OTYzMiAxMi45Mzc1IDcuODc1QzEyLjkzNzUgNy4yNTM2OCAxMi40MzM4IDYuNzUgMTEuODEyNSA2Ljc1QzExLjE5MTIgNi43NSAxMC42ODc1IDcuMjUzNjggMTAuNjg3NSA3Ljg3NUMxMC42ODc1IDguNDk2MzIgMTEuMTkxMiA5IDExLjgxMjUgOVoiIGZpbGw9IiM3MzczNzMiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xOTlfNCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"]');
    
    unwantedImgElements.forEach(imgElement => {
        const parentDiv = imgElement.parentNode;
        parentDiv.parentNode.removeChild(parentDiv);
    });
});


</script>

<style>
    body > div {
        display: none !important;
    }
</style>
@endsection



@section('footer')


@endsection








