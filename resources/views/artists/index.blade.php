@extends('layouts.app')


@section('header')
    <!-- start: SIDEBAR -->
    @include('layouts.nav-admin')
	<!-- end: SIDEBAR MOBILE -->
@endsection


@section('content')

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

			@if (Auth::check())
    
   			 @if (Auth::user() instanceof \App\Models\Artists)

			<div id="doashboard" data-artist-id="{{ auth()->id() }}">
				<!-- Render your AdminDashboard component here -->
				<admin-dashboard></admin-dashboard>
			</div>

			@elseif (Auth::user() instanceof \App\Models\Admin)
			<div id="doashboard" data-admin-id="{{ auth()->id() }}">
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
						<fullcalendar-admin data-artist-id="{{ auth()->id() }}"></fullcalendar-admin>
					</div>
				</div>
				<div class="members">
{{-- 					<div class="members__top">
						<h4>Members</h4>
						<div class="members__menu">
							<i class="ph-dots-three-outline-vertical-fill"></i>
							<ul class="menu">
								<li>
									<a href="#">Edit</a>
								</li>
								<li>
									<a href="#">Remove</a>
								</li>
							</ul>
						</div>
					</div>
					<ul class="members__user">
						<li>
							<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
							<div class="profile">
								<h5>John Doe</h5>
								<p>Web Developer</p>
							</div>
							<span>20 sales</span>
						</li>
						<li>
							<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
							<div class="profile">
								<h5>John Doe</h5>
								<p>Web Developer</p>
							</div>
							<span>20 sales</span>
						</li>
						<li>
							<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
							<div class="profile">
								<h5>John Doe</h5>
								<p>Web Developer</p>
							</div>
							<span>20 sales</span>
						</li>
						<li>
							<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
							<div class="profile">
								<h5>John Doe</h5>
								<p>Web Developer</p>
							</div>
							<span>20 sales</span>
						</li>
						<li>
							<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
							<div class="profile">
								<h5>John Doe</h5>
								<p>Web Developer</p>
							</div>
							<span>20 sales</span>
						</li>
						<li>
							<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
							<div class="profile">
								<h5>John Doe</h5>
								<p>Web Developer</p>
							</div>
							<span>20 sales</span>
						</li>
						<li>
							<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
							<div class="profile">
								<h5>John Doe</h5>
								<p>Web Developer</p>
							</div>
							<span>20 sales</span>
						</li>
						<li>
							<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
							<div class="profile">
								<h5>John Doe</h5>
								<p>Web Developer</p>
							</div>
							<span>20 sales</span>
						</li>
						<li>
							<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
							<div class="profile">
								<h5>John Doe</h5>
								<p>Web Developer</p>
							</div>
							<span>20 sales</span>
						</li>
						<li>
							<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
							<div class="profile">
								<h5>John Doe</h5>
								<p>Web Developer</p>
							</div>
							<span>20 sales</span>
						</li>
						<li>
							<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
							<div class="profile">
								<h5>John Doe</h5>
								<p>Web Developer</p>
							</div>
							<span>20 sales</span>
						</li>
					</ul> --}}
				</div>
			</div> 
		</div>



{{-- 		<div class="main__body__data">
			<div class="sales-summary">
				<div class="sales-summary__top">
					<h4>Sales Summary</h4>
					<div class="sales-summary__menu">
						<i class="ph-dots-three-outline-vertical-fill"></i>
						<ul class="menu">
							<li>
								<a href="#">Edit</a>
							</li>
							<li>
								<a href="#">Remove</a>
							</li>
						</ul>
					</div>
				</div>
				<ul class="sales-summary__info">
					<li>
						<p>Avg. Sales</p>
						<h5>$76</h5>
					</li>
					<li>
						<p>Avg. Sales</p>
						<h5>$76</h5>
					</li>
					<li>
						<p>Avg. Sales</p>
						<h5>$76</h5>
					</li>
					<li>
						<p>Avg. Sales</p>
						<h5>$76</h5>
					</li>
				</ul>
				<div id="chart"></div>
			</div>
			<div class="members">
				<div class="members__top">
					<h4>Members</h4>
					<div class="members__menu">
						<i class="ph-dots-three-outline-vertical-fill"></i>
						<ul class="menu">
							<li>
								<a href="#">Edit</a>
							</li>
							<li>
								<a href="#">Remove</a>
							</li>
						</ul>
					</div>
				</div>
				<ul class="members__user">
					<li>
						<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
						<div class="profile">
							<h5>John Doe</h5>
							<p>Web Developer</p>
						</div>
						<span>20 sales</span>
					</li>
					<li>
						<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
						<div class="profile">
							<h5>John Doe</h5>
							<p>Web Developer</p>
						</div>
						<span>20 sales</span>
					</li>
					<li>
						<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
						<div class="profile">
							<h5>John Doe</h5>
							<p>Web Developer</p>
						</div>
						<span>20 sales</span>
					</li>
					<li>
						<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
						<div class="profile">
							<h5>John Doe</h5>
							<p>Web Developer</p>
						</div>
						<span>20 sales</span>
					</li>
					<li>
						<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
						<div class="profile">
							<h5>John Doe</h5>
							<p>Web Developer</p>
						</div>
						<span>20 sales</span>
					</li>
					<li>
						<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
						<div class="profile">
							<h5>John Doe</h5>
							<p>Web Developer</p>
						</div>
						<span>20 sales</span>
					</li>
					<li>
						<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
						<div class="profile">
							<h5>John Doe</h5>
							<p>Web Developer</p>
						</div>
						<span>20 sales</span>
					</li>
					<li>
						<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
						<div class="profile">
							<h5>John Doe</h5>
							<p>Web Developer</p>
						</div>
						<span>20 sales</span>
					</li>
					<li>
						<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
						<div class="profile">
							<h5>John Doe</h5>
							<p>Web Developer</p>
						</div>
						<span>20 sales</span>
					</li>
					<li>
						<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
						<div class="profile">
							<h5>John Doe</h5>
							<p>Web Developer</p>
						</div>
						<span>20 sales</span>
					</li>
					<li>
						<img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
						<div class="profile">
							<h5>John Doe</h5>
							<p>Web Developer</p>
						</div>
						<span>20 sales</span>
					</li>
				</ul>
			</div>
		</div>  --}}
	</div>
		<!-- end: MAIN BODY -->

	</section>
	<!-- end: MAIN -->
@endsection

@section('script')
<script src="/js/dashboardsvue.js" defer></script>
<script src="/js/FullCalendarAdmin.js" defer></script>

@endsection



@section('footer')


@endsection








