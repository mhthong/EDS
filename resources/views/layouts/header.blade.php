<div class="header-destop-main bg-style" style="height: 10px;">
    <div class="container">
        <div class="header-destop">
        </div>
    </div>
</div>

<div class="header-destop-main bg-white">
    <div class="container">
        <div class="header-destop">
            <div class="menu">
                <div class="logo col-2 flexb-c gap:10px" style="height: auto; width: 100px; padding: 0.7rem;">
                    @if(isset($setting_data['Logo']))
                        <a href="/"><img src="{{ asset($setting_data['Logo']) }}" alt="logo" class="img"></a>
                    @endif
                </div>

                <ul class="menu-main col-8">
                    <li><a class="text-fill-color:gray text-fill-color:#7388C1:hover" href="/" style="border-left: none;">Trang Chủ</a></li>
                    @isset($data)
                        @foreach ($data['Menus_parent'] as $key => $value)
                            @foreach ($value as $Menus_parent)
                                @if($Menus_parent->slug !== 'chinh-sach-khach-hang')
                                    @if($Menus_parent->slug === 'bang-gia')
                                        <li class="menuhover">
                                            <a class="text-fill-color:gray text-fill-color:#7388C1:hover" href="{{ route('page', ['slug'=>'bang-bao-gia']) }}">Bảng báo giá</a>
                                        </li>
                                    @else
                                        <li class="menuhover">
                                            <a class="text-fill-color:gray text-fill-color:#7388C1:hover" href="{{ route('caretoties', ['slug'=>$Menus_parent->slug]) }}">{{ $Menus_parent->name }}</a>
                                        </li>
                                    @endif
                                @endif
                            @endforeach
                        @endforeach
                    @endisset
                </ul>
                <div class="col-2 flexb-c menu-right">
                    <i class="fa-solid fa-phone-volume"></i>
                    @isset($setting_data)
                        <a href="tel:{{ $setting_data['hotline'] }}"><span>{{ $setting_data['hotline'] }}</span></a>
                    @endisset
                </div>
            </div>
        </div>
    </div>
</div>
<header class="sticky">
    <div class="header-destop-main bg-style">
        <div class="container">
            <div class="header-destop">
                <div class="menu menu-bot">
                    <ul class="menu-main menu-main-bot col-12" style="width: 100%;">
                        <li style="width: 50px;"><a href=""><i style="color: white; font-size: 1.5rem;" class="fa-solid fa-house"></i></a></li>
                        @isset($data)
                            @foreach ($data['Menu_show'] as $key => $value)
                                @foreach ($value as $value_menu)
                                    <li class="menuhover">
                                        <a href="{{ route('caretoties', ['slug'=>$value_menu->slug]) }}">{{ $value_menu->name }}</a>
                                    </li>
                                @endforeach
                            @endforeach
                        @endisset
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="header-mobile bg-white">
        <div class="container">
            <div class="header-main">
                <div class="item-header right">
                    <div class="logo flexb-c gap:10px" style="height: auto; width: 100px;">
                        @isset($setting_data['logo_mobile'])
                            <img src="{{ asset($setting_data['logo_mobile']) }}" alt="logo" class="img">
                        @endisset
                    </div>
                </div>
            </div>
        </div>
        <div class="menu-mobile">
            <input type="checkbox" id="overlay-input" />
            <label for="overlay-input" id="overlay-button"><span></span></label>
            <div id="overlay">
                <ul class="menu-main col-8">
                    @isset($data)
                        @foreach ($data['Menu_show'] as $key => $value)
                            @foreach ($value as $value_menu)
                                <li class="menuhover">
                                    <a class="text-fill-color:gray text-fill-color:#7388C1:hover" href="{{ route('caretoties', ['slug'=>$value_menu->slug]) }}">{{ $value_menu->name }}</a>
                                </li>
                            @endforeach
                        @endforeach
                    @endisset
                </ul>
            </div>
        </div>
    </div>
</header>
