@isset($static_data)
    @foreach ($static_data['contact'] as $value)
        <section class="section">
            {{-- counselling --}}
            <div id="counselling" class="">
                <div class="content-main container">
                    <div class="header-content flexb-c pb-0 text-center">
                        <div class="text text-gardian mb-4">
                            <h2>{{ $value->description }} </h2>
                        </div>
                    </div>

                    <div id="idform" class="counselling-main container" style="align-items: flex-start;">

                        <div class="form-content col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 pe-3 ps-3"
                            style=" border-radius: 1rem;">
                            <div class="counselling-title  wow animate__animated  animate__fadeInUp" data-wow-offset="100">
                                <div id="lienhe" style="position: relative ; top:-100px ;"></div>
                                @isset($setting_data)
                                    <img src="{{ asset($setting_data['Logo']) }}" alt="logo" class="img">
                                @endisset
                            </div>
                            <div class="counselling-item  wow animate__animated  animate__fadeInUp" data-wow-offset="100">
                                <form method="post" action="{{ route('compose-email-form') }}">
                                    @csrf
                                    <div class="input-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <input type="text" class="form-control form-content col-12 col-sm-12 col-md-12"
                                            name="message[]" multiple id="name" placeholder="Tên Khách Hàng"
                                            aria-label="Ho va ten" required minlength="10" maxlength="200">

                                    </div>

                                    <div class="input-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <input type="text" pattern="(\+84|0)\d{9,10}"
                                            title="Nhập số điện thoại từ 10 đến 11 số"
                                            class="form-control form-content col-12 col-sm-12 col-md-12" name="message[]"
                                            multiple id="phone" placeholder="Số Điện Thoại" aria-label="Phone munber"
                                            required>
                                    </div>
                                    <div
                                        class="input-group p-0 m-0 text-btn-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 xol-xxl-12">
                                        <button type="submit"
                                            class="btn-sp bg-style m-0 p-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                            ĐĂNG KÝ NGAY
                                        </button>
                                    </div>
                                </form>


                            </div>
                        </div>
                        <div class="sale-content container col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <div class="line-h-2" style="align-items: baseline;">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    {!! $value->content !!}
                                </div>
                                <div class="flexb-c col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                                    style="justify-content: flex-start;">
                                    <div class="text-introduce col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <span>+15</span>
                                        <p>Kinh nghiệm</p>
                                    </div>
                                    <div class="text-introduce col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <span>+200</span>
                                        <p>Khách hàng tiềm năng</p>
                                    </div>
                                    <div class="text-introduce col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <span>+35</span>
                                        <p>Nhân viên lành nghề</p>
                                    </div>
                                </div>
                                <div class=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button class="neat-cow-49">
                                        <a class="a text-white" sty href=" {{ route('page', ['slug'=> 'gioi-thieu']) }}">Xem Thêm +</a>
                                    </button>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
        </section>
    @endforeach
@endisset
{{-- @include('layouts.content') --}}
@include('layouts.pricelist')
{{-- @include('layouts.content') --}}

<section class="content content3 bg-style" style="overflow: hidden">
    <div class="content-main container">

        <div class="content-item content-item-d flexb-c" style="justify-content: flex-start">
            <div class="content-right col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 col-xxl-7 wow animate__animated  animate__fadeInTopLeft "
                data-wow-offset="50">
                <h5>Bạn cần tham khảo thêm về giá dịch vụ </h5>
                @isset($setting_data['name-company'])
                    <h4> {{ $setting_data['name-company'] }}</h4>
                @endisset

            </div>

            <div class="mt-3 content-left flexb-c content-left-content3 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5 col-xxl-5 wow animate__animated  animate__fadeInTopRight animate__delay-1s "
                data-wow-offset="50">
                <div class="content-item-contact flexb-c col-4">
                    @isset($setting_data['hotline'])
                        <a class="a style-a flexb-col-c" href="tel:{{ $setting_data['hotline'] }}">
                            <img src="{{ asset('images/call.png') }}" alt="">
                            <span>Call: {{ $setting_data['hotline'] }}</span>
                        </a>
                    @endisset
                </div>
                <div class="content-item-contact flexb-c col-4">

                    <a class="a style-a flexb-col-c" href="">
                        <img src="{{ asset('images/zalo.png') }}" alt="">
                        <span>Chat Zalo</span>
                    </a>

                </div>
                <div class="content-item-contact flexb-c col-4">
                    <a class="a style-a flexb-col-c" href="">
                        <img src="{{ asset('images/mess.png') }}" alt="">
                        <span>Chat Messenger</span>
                    </a>
                </div>
            </div>

        </div>

    </div>
</section>
{{-- @include('layouts.content') --}}
<section class="section">


    <div id="content" class="" style=" padding:2rem 0 0rem;">
        @isset($static_data['intro'])
            @foreach ($static_data['intro'] as $value)
                <div class="bg-style text-center text-white p-3">

                    <h3>{{ $value->description }}</h3>
                </div>
                <div class="content-main container">
                    <div class="header-content flexb-c pb-0 text-center">
                        <div class="text col-12 p-3">
                            {!! $value->content !!}
                        </div>
                    </div>
                </div>
            @endforeach
        @endisset

        <div class="content-main container">
            <div class="cards wow slideInRight" data-wow-offset="200" data-wow-iteration="10">
                @isset($post_data['dich-vu'])

  

                    @for ($i = 0; $i < 8; $i++)

                        @isset($post_data['dich-vu'][$i])
                            @foreach ($post_data['dich-vu'][$i] as $value)
                                <div class="card">
                                    <img src="{{ asset($value->image) }}" alt="{{ $value->title }}"
                                        class="card-image m-0" />
                                    <div class="card-content" data-mh="card-content">
                                        <div class="card-top">
                                            <h3 class="card-title m-0 " data-mh="data-mh-02">
                                                <a href="{{ route('post', ['slug'=> $value->slug ]) }}" class="line_clamp_2">
                                                    {{ $value->title }}
                                                </a>
                                            </h3>
                                        </div>
                                        <div class="card-bottom data-mh-01 text-bot-card " data-mh="data-mh-01">
                                            <p class="p line_clamp_3">
                                                {{ $value->description }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        @endisset
                
                    @endfor


                @endisset

            </div>
            <div class="text-center col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-3">
                <button class="neat-cow-49">
                    <a class="a text-white" href="{{ route('caretoties', ['slug'=> 'dich-vu' ]) }}">Xem Thêm +</a>
                </button>
            </div>
        </div>

</section>

{{-- @include('layouts.content') --}}
<section class="section">

    <div id="content" class="" >
        <div class="bg-style text-center text-white p-3">
            <h3>TIN TỨC NỔI BẬT</h3>
        </div>

        <div class="container">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 pd">
                @isset($post_data['tin-tuc'])
                    @foreach ($post_data['tin-tuc'][0] as $value)
                    <div class="card">
                        <img src="{{ asset($value->image) }}" alt="{{ $value->title }}"
                        class="card-image m-0" />
                        <div class="card-content">
                            <div class="card-top">
                                <h3 class="card-title m-0 line_clamp_2">
                                    <a href="{{ route('post', ['slug'=>$value->slug]) }}">
                                        {{ $value->title }}
                                    </a>
                                </h3>
                            </div>
                            <div class="card-bottom data-mh-01 text-bot-card ">
                                <p class="p line_clamp_5">
                                    {{ $value->description }}
                                </p>
                            </div>
                        </div>
                    </div>
                    @endforeach
                 @endisset

            </div>
            <div class="flexb-col-c col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 pd">
                @isset($post_data['tin-tuc'])
                    @for ($i = 1; $i < 6; $i++)
                        @foreach ($post_data['tin-tuc'][$i] as $value)
                            <div class="text-new col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-1">
                                <a href="{{ route('post', ['slug'=>$value->slug]) }}">
                                    <p class="p line_clamp_2">
                                        {{ $value->title }}.
                                    </p>
                                </a>
                            </div>
                        @endforeach
                    @endfor
                @endisset
            </div>

            <div class="form-content col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 pd">
                <div class="bg-style text-center text-white p-3">
                    <h5 class="p">ĐẶT LỊCH DỊCH VỤ</h5>
                </div>
                <div class="counselling-item">

                    <form method="post" action="{{ route('composer.email') }}">
                        @csrf
                        <div class="input-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                            <input type="text" class="form-control form-content col-12 col-sm-12 col-md-12"
                                name="message[]" multiple id="name" placeholder="Tên" aria-label="Ho va ten"
                                required minlength="10" maxlength="200">

                        </div>

                        <div class="input-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <input type="text" pattern="(\+84|0)\d{9,10}"
                                title="Nhập số điện thoại từ 10 đến 11 số"
                                class="form-control form-content col-12 col-sm-12 col-md-12" name="message[]" multiple
                                id="phone" placeholder="Số Điện Thoại" aria-label="Phone munber" required>
                        </div>
                        <div class="input-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <input   class="form-control form-content col-12 col-sm-12 col-md-12" id="emailAddress"  placeholder="Email"  name="emailAddress" type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email Address">


                        </div>
                        <div
                            class="input-group p-0 m-0 text-btn-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 xol-xxl-12">
                            <button type="submit"
                                class="btn-sp bg-style m-0 p-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2">
                                ĐĂNG KÝ NGAY
                            </button>
                        </div>
                    </form>

                </div>
                <div class="bg-style text-center text-white p-3 mt-3">
                    <h5 class="p"><a href="tel:">Hotline : 18001911</a></h5>
                </div>
            </div>
        </div>

</section>

{{-- @include('layouts.content') --}}
<section class="section">

    <div id="content" class="" style=" padding:0rem 0 0rem;">
        <div class="bg-style text-center text-white p-3">
            <h3>CÂU HỎI THƯỜNG GẶP</h3>
        </div>
        <div class="content-main-style-1">
            <div class="container content-main ">
                <div class="pb-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 pd">
                    <div id="sidebar-wrapper">
                        <ul class="" id="menu-nav">
                            @isset($static_data['ask-list'])
                                @foreach ($static_data['ask-list'] as $value)
                                    @foreach (json_decode($value->pricelist) as $key => $value)
                                        <li class="li-show-style">
                                            <p class="nav-content-header p" href="#" data-tab="a">
                                                <span class="show-plus">
                                                    <i class="fa-solid fa-plus"></i>
                                                </span>
                                                <span class="show-minus">
                                                    <i class="fa-solid fa-minus"></i>
                                                </span>
                                                {{ $value->ask }}
                                            </p>
                                            <ul class="nav-pills nav-stacked" style="list-style-type:none;">
                                                <li>
                                                    <p>
                                                        {{ $value->reply }}
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                    @endforeach
                                @endforeach
                            @endisset
                        </ul>
                    </div>
                </div>

            </div>

        </div>

</section>
