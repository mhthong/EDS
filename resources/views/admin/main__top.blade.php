<div class="main__top__title">
    <h3>Dashboard</h3>
    <ul class="breadcrumbs">
        @if (Auth::check())
   
    @if (Auth::user() instanceof \App\Models\Artists)
    <li><a href="{{ url(env('APP_URL')) }}/artists">Home</a></li>
    @elseif (Auth::user() instanceof \App\Models\Employee)
    <li><a href="{{ url(env('APP_URL')) }}/employee">Home</a></li>
    @elseif (Auth::user() instanceof \App\Models\Admin)
    <li><a href="{{ url(env('APP_URL')) }}/admin">Home</a></li>
        <!-- Hiển thị nội dung dành riêng cho admins -->
    @endif
    @else
        <p>Welcome, Guest!</p>
        <!-- Hiển thị nội dung dành cho khách truy cập -->
    @endif

        
        <li class="divider">/</li>
       
        <li>@isset($pageNames)
            {{$pageNames}}
        @endisset</li>
    </ul>
</div>
<ul class="main__top__menu">
{{--     <li class="search">
        <a href="#">
            <i class="ph-magnifying-glass"></i>
        </a>
        <div class="main__dropdown">
            <form action="#">
                <input type="text" name="" placeholder="Search">
            </form>
            <span>Recent Search</span>
            <ul class="recent-search">
                <li>
                    <a href="#">
                        <h5>Keyword</h5>
                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h5>Keyword</h5>
                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h5>Keyword</h5>
                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h5>Keyword</h5>
                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h5>Keyword</h5>
                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h5>Keyword</h5>
                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h5>Keyword</h5>
                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                    </a>
                </li>
            </ul>
        </div>
    </li> --}}
    <li class="notification">
        <a href="#">
            <i class="ph-bell"></i>
        </a>
        <div class="main__dropdown">
            <div class="notification__top">
                <h4>Notifications</h4>
                <span>6</span>
            </div>
            <ul class="notification__item">
                <li>
                    <a href="#">
                        <div class="left">
                            <h5>Notification title</h5>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </div>
                        <span>3 hours</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="left">
                            <h5>Notification title</h5>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </div>
                        <span>3 hours</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="left">
                            <h5>Notification title</h5>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </div>
                        <span>3 hours</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="left">
                            <h5>Notification title</h5>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </div>
                        <span>3 hours</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="left">
                            <h5>Notification title</h5>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </div>
                        <span>3 hours</span>
                    </a>
                </li>
            </ul>
        </div>
    </li>
    <li class="inbox">
        <a href="#">
            <i class="ph-chat-circle-dots"></i>
        </a>
        <span></span>
    </li>
    <li>
        <a class="text-white" href="{{ url(env('APP_URL')) }}" target="_blank">
            <i class="fa-solid fa-globe"></i>
        </a>
    </li>
    <li class="profile">
        <a href="#">
            @auth
            @if (Auth::user()->avatar != "")
                <img src="{{ asset(Auth::user()->avatar) }}" class="img-fluid img" alt="avatar">
            @else
                <img src="{{ asset('./storage/photos/1/Image/user-286.png') }}" class="img-fluid img" alt="avatar">
            @endif
        @endauth
        </a>
        <div class="main__dropdown">
            <div class="profile__top">
                @auth
                @if (Auth::user()->avatar != "")
                    <img src="{{ asset(Auth::user()->avatar) }}" class="img-fluid img" alt="avatar">
                @else
                    <img src="{{ asset('./storage/photos/1/Image/user-286.png') }}" class="img-fluid img" alt="avatar">
                @endif
            @endauth
    
            </div>
          

@if (Auth::check())
   
    @if (Auth::user() instanceof \App\Models\Artists)
    <ul class="profile__menu">
        <li><a href="{{route('artists.your-setting')}}"><i class="ph-user-circle-fill"></i> Edit profile</a></li>
    </ul>
    @elseif (Auth::user() instanceof \App\Models\Admin)
    <ul class="profile__menu">
        <li><a href="{{route('your-setting')}}"><i class="ph-user-circle-fill"></i> Edit profile</a></li>
    </ul>
    @elseif (Auth::user() instanceof \App\Models\Employee)
    <ul class="profile__menu">
        <li><a href="{{route('employee.your-setting')}}"><i class="ph-user-circle-fill"></i> Edit profile</a></li>
    </ul>
        <!-- Hiển thị nội dung dành riêng cho admins -->
    @endif
@else
    <p>Welcome, Guest!</p>
    <!-- Hiển thị nội dung dành cho khách truy cập -->
@endif
        </div>
    </li>
</ul>