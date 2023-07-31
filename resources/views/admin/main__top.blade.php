<div class="main__top__title">
    <h3>Dashboard</h3>
    <ul class="breadcrumbs">
        <li><a href="#">Home</a></li>
        <li class="divider">/</li>
        <li><a href="#" class="active">Dashboard</a></li>
    </ul>
</div>
<ul class="main__top__menu">
    <li class="search">
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
    </li>
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
                <div class="name">
                    <h5>John Doe</h5>
                    <p>Web Developer</p>
                </div>
            </div>
            <ul class="profile__menu">
                <li><a href="{{route('your-setting')}}"><i class="ph-user-circle-fill"></i> Edit profile</a></li>
                <li><a href="#"><i class="ph-gear-fill"></i> Settings</a></li>
            </ul>
        </div>
    </li>
</ul>