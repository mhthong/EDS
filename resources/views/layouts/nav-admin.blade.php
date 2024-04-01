@if (Auth::check())

    @if (Auth::user() instanceof \App\Models\Artists)
        <!-- start: SIDEBAR -->
        <section id="sidebar">
    
            <ul class="sidebar__menu">
                {{--                 <li>
                    <a href="#" class=""><i class="fa-solid fa-house"></i></a>
                    <ul class="sidebar__submenu">
                        <li class="title">Dashboard</li>
                        <li><a href="{{ route('sale-artists') }}">Sales</a></li>
                        <li><a href="{{ route('analytics-artists') }}">Analytics</a></li>
                    </ul>
                </li> --}}
                <li>
                    <a href="/artists" class="brand" style="
                    display: flex;
                    justify-content: center;
                ">

                            @isset($setting_data['admin-logo'])
                                <img src="{{ asset($setting_data['admin-logo']) }}" alt="" style="width:40px; padding:5px">
                            @endisset
  
                    </a>
                </li>
                <li>
                    <a href="{{ route('artists.book.index') }}"><i class="fab fa-servicestack"></i></a>
                </li>
                <li>
                    <a class="dropdown-item logout" href="{{ route('logout') }}"
                        onclick="event.preventDefault();
                         document.getElementById('logout-form').submit();">
                        <i class="fa-solid fa-arrow-right-from-bracket" style="color: #ff0000;"></i>
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf
                    </form>
                </li>
            </ul>
        </section>

        <!-- start: SIDEBAR OVERLAY -->
        <div class="sidebar-overlay"></div>
        <!-- end: SIDEBAR OVERLAY -->
        <!-- end: SIDEBAR -->

        <!-- start: SIDEBAR MOBILE -->
        <section id="sidebar-mobile">
            <i class="toggle-sidebar-active"><i class="fa-solid fa-bars"></i></i>
            <a href="#" class="brand">
                <i style="
                        display: flex;
                        justify-content: center;
                    ">
                    @isset($setting_data['admin-logo'])
                        <img src="{{ asset($setting_data['admin-logo']) }}" alt="" style="width:40px; padding:5px">
                    @endisset
                </i>
                Artirst
            </a>
        </section>
        <!-- end: SIDEBAR MOBILE -->

        <!-- Hiển thị nội dung dành riêng cho artists -->
    @elseif (Auth::user() instanceof \App\Models\Admin)
        <!-- start: SIDEBAR -->
        <section id="sidebar">
 
            <ul class="sidebar__menu">
             
                <li>
                    <a href="/admin" class="brand" style="
                    display: flex;
                    justify-content: center;
                ">
            
               @isset($setting_data['admin-logo'])
               <img src="{{ asset($setting_data['admin-logo']) }}" alt="" style="width:40px; padding:5px">
                @endisset
 
                    </a>
                </li>
                <li>
                    <a href="#" class=""><i class="fa-solid fa-house"></i></a>
                    <ul class="sidebar__submenu">   
                        <li class="title">Dashboard</li>
                        <li><a href="{{ route('sale-admin') }}">Sales</a></li>
                        <li><a href="{{ route('analytics-admin') }}">Analytics</a></li>
                    </ul>
                </li>

                <li>
                    <a href="#"><i class="fa-solid fa-clipboard-user"></i></a>
                    <ul class="sidebar__submenu">
                        <li class="title">Employee</li>

                        <li><a href="{{ route('employee.index') }}">All Employee</a></li>
                        <li><a href="{{ route('employee.create') }}">Add New Employee </a></li>

                    </ul>

                </li>

                <li>
                    <a href="#"><i class="fab fa-servicestack"></i></a>
                    <ul class="sidebar__submenu">
                        <li class="title">Salon</li>
                        <li>
                            <a href="#">Service <i class="ph-caret-right-fill"></i></a>
                            <ul class="sidebar__dropdown-menu">
                                <li><a href=" {{ route('services.index') }} ">All Services</a></li>
                                <li><a href="{{ route('services.create') }}">Add New Services </a></li>
                                <li><a href=" {{ route('groups.index') }} ">Services Group</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Showroom <i class="ph-caret-right-fill"></i></a>
                            <ul class="sidebar__dropdown-menu">
                                <li><a href=" {{ route('showrooms.index') }} ">All Showrooms</a></li>
                                <li><a href="{{ route('showrooms.create') }}">Add New Showrooms </a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Artist <i class="ph-caret-right-fill"></i></a>
                            <ul class="sidebar__dropdown-menu">
                                <li><a href="{{ route('artist.index') }}">All Artist</a></li>
                                <li><a href="{{ route('artist.create') }}">Add New Artist </a></li>
                                <li><a href=" {{ route('artist-levels.index') }} "> Artist Levels</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="{{ route('book.index') }}">Booking <i class="ph-caret-right-fill"></i></a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="{{ route('get.index') }}"><i class="fa-solid fa-address-book"></i></a>
                </li>
                @if (Auth::user()->manage_supers == 3 || Auth::user()->manage_supers == 0)
                <li>
                    <a href="{{ route('kpis.index') }}"><i class="fa-solid fa-signal"></i></a>
                </li>
            @endif

                @if (Auth::user()->manage_supers == 0)
                    <li>
                        <a href="{{ route('auth-admin.index') }}"><i class="fa-solid fa-user"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa-solid fa-bars"></i></a>

                        <ul class="sidebar__submenu">
                            <li class="title">Interface options</li>


                            <li>
                                <a href="#">Interface<i class="ph-caret-right-fill"></i></a>
                                <ul class="sidebar__dropdown-menu">
                                    <li><a href=" {{ route('category') }}">Category</a></li>
                                    <li><a href="{{ route('simple-slider') }}">Simple slider</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">Page<i class="ph-caret-right-fill"></i></a>
                                <ul class="sidebar__dropdown-menu">
                                    <li><a href="{{ route('blocks') }}">All Page</a></li>
                                    <li><a href="{{ route('block.create') }}">Add New</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">Posts<i class="ph-caret-right-fill"></i></a>
                                <ul class="sidebar__dropdown-menu">
                                    <li><a href="{{ route('posts') }}">All Posts</a></li>
                                    <li><a href="{{ route('create') }}">Add New Posts</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">Statics<i class="ph-caret-right-fill"></i></a>
                                <ul class="sidebar__dropdown-menu">
                                    <li><a href="{{ route('statics') }}">All Statics</a></li>
                                    <li><a href="{{ route('static.create') }}">Add New Statics</a></li>
                                </ul>
                            </li>
                        </ul>

                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="#"><i class="fa-solid fa-gear"></i></a>
                        <ul class="sidebar__submenu">
                            <li class="title">Setting</li>

                            <li>
                                <a style="" href="{{ route('general') }}">
                                    Basic Layout
                                </a>
                            </li>
                            <li>
                                <a style="" href="{{ route('email') }}">
                                    Email
                                </a>
                            </li>
                            <li>
                                <a href="{{ route('setting') }}">Setting</a>
                            </li>
                        </ul>
                @endif

       
                <li>
                    <a class="dropdown-item logout" href="{{ route('logout') }}"8
                        onclick="event.preventDefault();
                         document.getElementById('logout-form').submit();">
                        <i class="fa-solid fa-arrow-right-from-bracket" style="color: #ff0000;"></i>
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf
                    </form>
                </li>
            </ul>
        </section>

        <!-- start: SIDEBAR OVERLAY -->
        <div class="sidebar-overlay"></div>
        <!-- end: SIDEBAR OVERLAY -->
        <!-- end: SIDEBAR -->

        <!-- start: SIDEBAR MOBILE -->
        <section id="sidebar-mobile">
            <i class="toggle-sidebar-active"><i class="fa-solid fa-bars"></i></i>
            <a href="#" class="brand">
                <i style="
                        display: flex;
                        justify-content: center;
                    ">
                    @isset($setting_data['admin-logo'])
                        <img src="{{ asset($setting_data['admin-logo']) }}" alt="" style="width:40px; padding:5px">
                    @endisset
                </i>
                Admin
            </a>
        </section>
        <!-- end: SIDEBAR MOBILE -->
        <!-- Hiển thị nội dung dành riêng cho admins -->
    @elseif (Auth::user() instanceof \App\Models\Employee)
        <!-- start: SIDEBAR -->
        <section id="sidebar">
   
            <ul class="sidebar__menu">
                {{--                 <li>
                    <a href="#" class=""><i class="fa-solid fa-house"></i></a>
                    <ul class="sidebar__submenu">
                        <li class="title">Dashboard</li>
                        <li><a href="{{ route('sale-employee') }}">Sales</a></li>
                        <li><a href="{{ route('analytics-employee') }}">Analytics</a></li>
                    </ul>
                </li> --}}
                <li>
                    <a href="/employee" class="brand" style="
                    display: flex;
                    justify-content: center;
                ">
             
                            @isset($setting_data['admin-logo'])
                                <img src="{{ asset($setting_data['admin-logo']) }}" alt="" style="width:40px; padding:5px">
                            @endisset

                    </a>
                </li>
                <li>
                    <a href="{{ route('employee.book.index') }}"><i class="fab fa-servicestack"></i></a>
                </li>
                <li>
                    <a class="dropdown-item logout" href="{{ route('logout') }}"
                        onclick="event.preventDefault();
                             document.getElementById('logout-form').submit();">
                        <i class="fa-solid fa-arrow-right-from-bracket" style="color: #ff0000;"></i>
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf
                    </form>
                </li>
            </ul>
        </section>

        <!-- start: SIDEBAR OVERLAY -->
        <div class="sidebar-overlay"></div>
        <!-- end: SIDEBAR OVERLAY -->
        <!-- end: SIDEBAR -->

        <!-- start: SIDEBAR MOBILE -->
        <section id="sidebar-mobile">
            <i class="toggle-sidebar-active"><i class="fa-solid fa-bars"></i></i>
            <a href="#" class="brand">
                <i style="
                        display: flex;
                        justify-content: center;
                    ">
                    @isset($setting_data['admin-logo'])
                        <img src="{{ asset($setting_data['admin-logo']) }}" alt="" style="width:40px; padding:5px">
                    @endisset
                </i>
                Employee
            </a>
        </section>
        <!-- end: SIDEBAR MOBILE -->

    @endif
@else
    <p>Welcome, Guest!</p>
    <!-- Hiển thị nội dung dành cho khách truy cập -->
@endif
