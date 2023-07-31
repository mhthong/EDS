




<!-- start: SIDEBAR -->
<section id="sidebar">
    <a href="#" class="brand">
        <i class="ph-flame-fill"></i>
    </a>

    <ul class="sidebar__menu">
        <li>
            <a href="#" class="active"><i class="ph-house-fill"></i></a>
            <ul class="sidebar__submenu">
                <li class="title">Dashboard</li>
                <li><a href="#">Sales</a></li>
                <li><a href="#">Analytics</a></li>
            </ul>
        </li>
        <li>
            <a href="#"><i class="fa-solid fa-pager"></i> </a>
            <ul class="sidebar__submenu">
                <li class="title">Page</li>
                <li><a href="{{route('blocks')}}">All Page</a></li>
                <li><a href="{{ route('block.create') }}">Add New</a></li>
            </ul>
        </li>
        <li>
            <a href="#"><i class="ph-clipboard-fill"></i></a>

            <ul class="sidebar__submenu">
                <li class="title">Posts</li>
                <li><a href="{{route('posts')}}">All Posts</a></li>
                <li><a href="{{route('create')}}">Add New Posts</a></li>

            </ul>
        </li>
        <li>
            <a href="#"><i class="fa-solid fa-table-columns"></i></a>

            <ul class="sidebar__submenu">
                <li class="title">Statics</li>
                <li><a href="{{route('statics')}}">All Statics</a></li>
                <li><a href="{{route('static.create')}}">Add New Statics</a></li>
            </ul>
        </li>

        <li>
            <a href="#"><i class="fa-solid fa-tag"></i></a>

            <ul class="sidebar__submenu">
                <li class="title">Tags</li>
                <li><a style="" href="{{route('tags')}}">Tag</a></li>
                <li><a href="{{route('tag-create')}}">Add New Tag</a></li>
            </ul>
        </li>


        <li>
            <a href="#"><i class="fa-solid fa-bars"></i></a>

            <ul class="sidebar__submenu">
                <li class="title">Interface options</li>
                <li><a href=" {{ route('category') }}">Category</a></li>
                <li><a href="{{route('simple-slider')}}">Simple slider</a></li>
              
            </ul>

        </li>

   
        <li>

        <a href="#"><i class="fa-brands fa-servicestack"></i></a>
        <ul class="sidebar__submenu">
					<li class="title">Salon</li>
					<li>
						<a href="#">Service <i class="ph-caret-right-fill"></i></a>
						<ul class="sidebar__dropdown-menu">
							<li><a href="#">Login page</a></li>
							<li><a href="#">Register page</a></li>
							<li><a href="#">Forgot password</a></li>
						</ul>
					</li>
					<li><a href=" {{ route('artist-levels.index')}} "> Artist Levels</a></li>
					<li><a href="#">Landing page</a></li>
					<li>
						<a href="#">Artist <i class="ph-caret-right-fill"></i></a>
						<ul class="sidebar__dropdown-menu">
                            <li><a href="{{route('artist.index')}}">All Artist</a></li>
                            <li><a href="{{ route('artist.create') }}">Add New Artist </a></li>
                            <li><a href=" {{ route('artist-levels.index')}} "> Artist Levels</a></li>
						</ul>
					</li>
		</ul>


        </li>
        <li class="divider"></li>
        <li>
            <a href="#"><i class="ph-gear-fill"></i></a>
            <ul class="sidebar__submenu">

                <li>
                    <a style="" href="{{ route('general') }}">
                        Cơ bản
                    </a>
                </li>
                <li>
                    <a style="" href="{{ route('email') }}">
                        Email
                    </a>
                </li>
                <li>
                    <a href="{{route('setting')}}">Cài đặt</a>
                </li>

            </ul>

        <li>



            <a class="dropdown-item logout" href="{{ route('logout') }}" onclick="event.preventDefault();
                             document.getElementById('logout-form').submit();">
                <i class="ph-sign-out-fill">
                </i>
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
    <i class="ph-squares-four-fill toggle-sidebar"></i>
    <a href="#" class="brand">
        <i class="ph-flame-fill"></i>
        Admin
    </a>
</section>
<!-- end: SIDEBAR MOBILE -->
