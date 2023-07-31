@extends('layouts.app')

@section('header')
    @include('layouts.headerad')
@endsection

@section('content')
<main>
    @include('layouts.nav-admin')
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

        <div class="main__body__data">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 flexb-c">
                <div class="flexb-col-c bg-ad-1">
                <form method="POST" action="{{ route('email.post') }}" accept-charset="UTF-8">
                @csrf
                    <div class="max-width-1200 email-settings col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                        <div class="me-3">
                            <div class="flexbox-annotated-section col-12 ">
                                <div class="flexbox-annotated-section-annotation col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                                    <div class="annotated-section-title pd-all-20">
                                        <h4>Email settings</h4>
                                    </div>
                                    <div class="annotated-section-description pd-all-20 p-none-t">
                                        <p class="color-note">Cấu trúc file template sử dụng HTML và các biến trong hệ
                                            thống.</p>
                                    </div>
                                </div>

                                <div class="flexbox-annotated-section-content col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 bg-ad-form p-3">
                                    <div class="-space-y-px mb-4">
                                        <div class="containerInput">
                                            <label>Mailer</label>
                                            <input id="driver" name="email_driver" type="text" required
                                                class="appearance-none form-control rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Driver" value="@isset($setting_data['email_driver']) {{ $setting_data['email_driver'] }}  @endisset">
                                        </div>
                                    </div>

                                    <div class="-space-y-px mb-4">
                                        <div class="containerInput">
                                            <label>Máy chủ</label>
                                            <input id="host-name" name="email_hostName" type="text" required
                                                class="appearance-none form-control rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Host" value="@isset($setting_data['email_hostName']) {{ $setting_data['email_hostName'] }}  @endisset">
                                        </div>
                                    </div>
                                    <div class="-space-y-px mb-4">
                                        <div class="containerInput">
                                            <label>Mã hóa</label>
                                            <input id="encryption" name="email_encryption" type="text" required
                                                class="appearance-none form-control rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Host" value="@isset($setting_data['email_encryption']) {{ $setting_data['email_encryption'] }} @endisset">
                                        </div>
                                    </div>
                                    <div class="-space-y-px mb-4">
                                        <div class="containerInput">
                                            <label>Cổng</label>
                                            <input id="port" name="email_port" type="text" required
                                                class="appearance-none form-control rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Port" value="@isset($setting_data['email_port']) {{ $setting_data['email_port'] }} @endisset">
                                        </div>
                                    </div>

                                    <div class="-space-y-px mb-4">
                                        <div class="containerInput">
                                            <label>Tên đăng nhập</label>
                                            <input id="userName" name="email_userName" type="text" required
                                                class="appearance-none form-control rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="User Name" value="@isset($setting_data['email_userName']) {{ $setting_data['email_userName'] }} @endisset">
                                        </div>
                                    </div>

                                    <div class="-space-y-px mb-4">
                                        <div class="containerInput">
                                            <label>Mật khẩu</label>
                                            <input id="password" name="email_password" type="password"
                                                autocomplete="current-password" required
                                                class="appearance-none form-control rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Password" value="@isset($setting_data['email_password']) {{ $setting_data['email_password'] }} @endisset">
                                        </div>
                                    </div>

                                    <div class="-space-y-px mb-4">
                                        <div class="containerInput">
                                            <label>Tên người gửi</label>
                                            <input id="senderName" name="email_senderName" type="text" required
                                                class="appearance-none form-control rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Tên người gửi" value="@isset($setting_data['email_senderName']) {{ $setting_data['email_senderName'] }} @endisset">
                                        </div>
                                    </div>

                                    <div class="-space-y-px mb-4">
                                        <div class="containerInput">
                                            <label>Email của người gửi</label>
                                            <input id="senderEmail" name="email_senderEmail" type="text" required
                                                class="appearance-none form-control rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Email của người gửi" value="@isset($setting_data['email_senderEmail']) {{ $setting_data['email_senderEmail'] }} @endisset">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flexbox-annotated-section col-12">

                                <div class="flexbox-annotated-section-annotation col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                                    <div class="annotated-section-title pd-all-20">
                                        <h4>Mẫu giao diện email</h4>
                                    </div>
                                    <div class="annotated-section-description pd-all-20 p-none-t">
                                        <p class="color-note">Giao diện mặc định cho tất cả email</p>
                                    </div>
                                </div>

                                <div class="flexbox-annotated-section-content col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 bg-ad-form p-3">
                                    <div class="wrapper-content pd-all-20">
                                        <div class="table-wrap">
                                            <table class="table product-list ws-nm">
                                                <thead>
                                                    <tr>
                                                        <th class="border-none-b">Mẫu</th>
                                                        <th class="border-none-b"> Mô tả </th>
                                                        <th>&nbsp;</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <a class="hover-underline a-detail-template" href="">
                                                                Mẫu cho phần trên của email
                                                            </a>
                                                        </td>
                                                        <td>Phần trên của tất cả email</td>

                                                        <td class="text-center template-setting-on-off">

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a class="hover-underline a-detail-template" href="">
                                                                Mẫu cho phần dưới của email
                                                            </a>
                                                        </td>
                                                        <td>Phần dưới của tất cả email</td>

                                                        <td class="text-center template-setting-on-off">

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="bg-ad-form right-sidebar ">
                            <div class="widget meta-boxes form-actions form-actions-default action-horizontal ">
                                <div class="widget-title">
                                    <h4>
                                        <span>Xuất bản</span>
                                    </h4>
                                </div>
                                <div class="widget-body">
                                    <div class="btn-set">
                                        <button type="submit" name="submit" value="save" class="btn btn-info">
                                            <i class="fa fa-save"></i> Lưu
                                        </button>
                                        &nbsp;
                                        <button type="submit" name="submit" value="apply"
                                            class="btn btn-success">
                                            <i class="fa fa-check-circle"></i> Lưu &amp; chỉnh sửa
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>


            </div>
            <div class="max-width-1200 email-settings col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                <div class="me-3">
                    @include('admin.ViewEmailSetting')
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3"></div>

    </div>
</div>
</div>
        </section>

    </main>
@endsection

@section('footer')
    @include('layouts.footerad')
@endsection

@section('script')
    <script src="/vendor/laravel-filemanager/js/stand-alone-button.js"></script>
    <script>
        var route_prefix = "/admin/laravel-filemanager";
        $('#lfm').filemanager('image', {
            prefix: route_prefix
        });
    </script>
@endsection
