{{-- <header role="banner bg-black" style="background-color: black;">
    <nav class="navbar navbar-expand-md navbar-light shadow-sm">
        <div class="container">
<div class="div" style="    display: flex;
justify-content: center;
align-items: center;">
    <a class="navbar-brand text-white" href="{{ url('/admin') }}">
        Admin
    </a>
    <div class="toggler" style="    font-size: 1.1rem; color: aliceblue;">
        <i class="fa-solid fa-bars"></i>
      </div>
</div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <!-- Right Side Of Navbar -->
                <ul class="ms-auto" style="margin: 0 2rem;">

                    <a class="text-white" href="{{ url(env('APP_URL')) }}" target="_blank">
                        <i class="fa-solid fa-globe"></i> Xem Trang Ngoài
                    </a>
                    

                </ul>
                <ul class="navbar-nav text-white">

                    <!-- Authentication Links -->
                    @guest
                        @if (Route::has('login'))
                            <li class="nav-item">
                                <a class="nav-link text-white" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                        @endif

                        @if (Route::has('register'))
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                            </li>
                        @endif
                    @else
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle text-white" href="#" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::user()->name }}
                            </a>

                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                                 document.getElementById('logout-form').submit();">
                                    {{ __('Đăng xuất') }}
                                </a>

                                <a class="dropdown-item" href="{{route('your-setting')}}">
<i class="ph-user-circle-fill"></i> Edit profile</a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                    @csrf
                                </form>
                            </div>
                        </li>
                    @endguest
                </ul>

            </div>

        </div>
    </nav>
  </header>




 --}}