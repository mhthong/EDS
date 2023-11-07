@extends('layouts.app')
@section('head')
@endsection
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
                    <form class="p-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" name="add-blog-post-form"
                        id="add-blog-post-form" method="post" action="{{ route('general.post') }}"
                        enctype="multipart/form-data">
                        @csrf
                        <div class="flexb-c col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                            style="align-items: flex-start;   justify-content: space-between;">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                                <div class="bg-ad-form-left containerInput  twothirds">
                                    <div class="max-width-1200">
                                        <div class="flexbox-annotated-section">
                                            <div class="flexbox-annotated-section-annotation col-3">
                                                <div class="annotated-section-title pd-all-20">
                                                    <h4>General Information</h4>
                                                </div>
                                                <div class="annotated-section-description pd-all-20 p-none-t">
                                                    <p class="color-note">Configure website settings information.</p>
                                                </div>
                                            </div>

                                            <div class="flexbox-annotated-section-content bg-ad-form col-9">
                                                <div class="wrapper-content pd-all-20">
                                                    <div class="form-group" id="admin_email_wrapper"
                                                        data-emails="" data-max="4">
                                                        <label class="text-title-field" for="admin_email">Admin Email
                                                            tablets</label>
                                                        <div class="d-flex mt-2 more-email align-items-center">
                                                            <input type="email" class="next-input form-control"
                                                                placeholder="" name="admin_email"
                                                               value="@isset($setting_data['admin_email']) {{ $setting_data['admin_email'] }} @endisset" />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="flexbox-annotated-section">

                                            <div class="flexbox-annotated-section-annotation col-3">
                                                <div class="annotated-section-title pd-all-20">
                                                    <h4>Admin appearance</h4>
                                                </div>
                                                <div class="annotated-section-description pd-all-20 p-none-t">
                                                    <p class="color-note">Setting admin appearance such as editor,
                                                        language...</p>
                                                </div>
                                            </div>

                                            <div class="flexbox-annotated-section-content bg-ad-form col-9">
                                                <div class="wrapper-content pd-all-20">
                                                    <div class="form-group">
                                                        <label class="text-title-field" for="admin-logo">Admin Logo
                                                            treat
                                                        </label>
                                                        <div class="form-group ">
                                                            <div class="holder holder1" id="data-preview-admin-logo" value="">
                                                                @isset($setting_data['admin-logo']) 
                                                                <img src="{{ $setting_data['admin-logo'] }}" alt="" srcset="">
                                                                @endisset
                                                            </div>
                                                            <div class="-space-y-px mb-4">
                                                                <div class="containerInput input-group">
                                                                    <span class="input-group-btn">
                                                                        <a class="text-primary data-image" id="admin-logo"
                                                                            data-input="data-input-admin-logo"
                                                                            data-preview="data-preview-admin-logo">
                                                                            Choose a photo
                                                                        </a>
                                                                    </span>

                                                                    <input class="form-control" id="data-input-admin-logo"
                                                                        style="display: none" type="text" name="admin-logo"
                                                                        required>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="form-group">
                                                        <label class="text-title-field" for="admin-favicon">Admin favicon
                                                        </label>
                                                        <div class="form-group ">
                                                            <div class="holder holder1" id="data-preview-admin-favicon" value="">
                                                                @isset($setting_data['admin-favicon']) 
                                                                <img src="{{ $setting_data['admin-favicon'] }}" alt="" srcset="">
                                                                @endisset
                                                            </div>
                                                            <div class="-space-y-px mb-4">
                                                                <div class="containerInput input-group">
                                                                    <span class="input-group-btn">
                                                                        <a class="text-primary data-image" id="admin-favicon"
                                                                            data-input="data-input-admin-favicon"
                                                                            data-preview="data-preview-admin-favicon">
                                                                            Choose a photo
                                                                        </a>
                                                                    </span>

                                                                    <input class="form-control" id="data-input-admin-favicon"
                                                                        style="display: none" type="text" name="admin-favicon"
                                                                        required>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="text-title-field"
                                                            for="admin-login-screen-backgrounds">Login screen backgrounds
                                                            (~1366x768)
                                                        </label>
                                                        <div class="form-group ">
                                                            <div class="holder holder1" id="data-preview-admin-login-screen-backgrounds" value="">
                                                                @isset($setting_data['admin-login-screen-backgrounds']) 
                                                                <img src="{{ $setting_data['admin-login-screen-backgrounds'] }}" alt="" srcset="">
                                                                @endisset
                                                            </div>
                                                            <div class="-space-y-px mb-4">
                                                                <div class="containerInput input-group">
                                                                    <span class="input-group-btn">
                                                                        <a class="text-primary data-image" id="admin-login-screen-backgrounds"
                                                                            data-input="data-input-admin-login-screen-backgrounds"
                                                                            data-preview="data-preview-admin-login-screen-backgrounds">
                                                                            Choose a photo
                                                                        </a>
                                                                    </span>

                                                                    <input class="form-control" id="data-input-admin-login-screen-backgrounds"
                                                                        style="display: none" type="text" name="admin-login-screen-backgrounds"
                                                                        required>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                        <div class="form-group">
                                                         <label class="text-title-field" for="admin_title">Page Title
                                                             admin</label>
                                                         <input class="form-control" data-counter="120" type="text" class="next-input"
                                                             name="admin_title" id="admin_title"
                                                             value="@isset($setting_data['admin_title']) {{ $setting_data['admin_title'] }} @endisset" >
                                                     </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="flexbox-annotated-section">
                                            <div class="flexbox-annotated-section-annotation col-3">
                                                <div class="annotated-section-title pd-all-20">
                                                    <h4>Google Analytics</h4>
                                                </div>
                                                <div class="annotated-section-description pd-all-20 p-none-t">
                                                    <p class="color-note">Config Credentials for Google Analytics</p>
                                                </div>
                                            </div>

                                            <div class="flexbox-annotated-section-content bg-ad-form col-9">
                                                <div class="wrapper-content pd-all-20">
                                                    <div class="form-group">
                                                        <label class="text-title-field" for="google_analytics">Tracking
                                                            Code</label>
                                                        <input data-counter="120" type="text" class="next-input form-control"
                                                            name="google_analytics" id="google_analytics"    value="@isset($setting_data['google_analytics']) {{ $setting_data['google_analytics'] }} @endisset" 
                                                            placeholder="Example: GA-12586526-8">
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="text-title-field" for="analytics_view_id">View
                                                            ID</label>
                                                        <input data-counter="120" type="text" class="next-input form-control"
                                                            name="analytics_view_id" id="analytics_view_id"
                                                            value="@isset($setting_data['analytics_view_id']) {{ $setting_data['analytics_view_id'] }} @endisset"  placeholder="Google Analytics View ID">
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="text-title-field"
                                                            for="analytics_service_account_credentials">Service Account
                                                            Credentials</label>
                                                        <textarea class="next-input form-control" name="analytics_service_account_credentials"
                                                            id="analytics_service_account_credentials" rows="5" placeholder="Service Account Credentials"> @isset($setting_data['analytics_service_account_credentials']) {{ $setting_data['analytics_service_account_credentials'] }} @endisset</textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flexbox-annotated-section">
                                            <div class="flexbox-annotated-section-annotation col-3">
                                                <div class="annotated-section-title pd-all-20">
                                                    <h4>Newsletter</h4>
                                                </div>
                                                <div class="annotated-section-description pd-all-20 p-none-t">
                                                    <p class="color-note">Settings for newsletter</p>
                                                </div>
                                            </div>

                                            <div class="flexbox-annotated-section-content bg-ad-form col-9">
                                                <div class="wrapper-content pd-all-20">
                                                    <div class="form-group">
                                                        <label class="text-title-field"
                                                            for="newsletter_mailchimp_api_key">Mailchimp API Key</label>
                                                        <input data-counter="120" type="text" class="next-input form-control"
                                                            name="newsletter_mailchimp_api_key"
                                                            id="newsletter_mailchimp_api_key"  value="@isset($setting_data['newsletter_mailchimp_api_key']) {{ $setting_data['newsletter_mailchimp_api_key'] }} @endisset"
                                                            placeholder="Mailchimp API Key">
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="text-title-field"
                                                            for="newsletter_mailchimp_list_id">Mailchimp List ID</label>
                                                        <input data-counter="120" type="text" class="next-input form-control"
                                                            name="newsletter_mailchimp_list_id"
                                                            id="newsletter_mailchimp_list_id"   value="@isset($setting_data['newsletter_mailchimp_list_id']) {{ $setting_data['newsletter_mailchimp_list_id'] }} @endisset"
                                                            placeholder="Mailchimp List ID">
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="text-title-field"
                                                            for="newsletter_sendgrid_api_key">Sendgrid API Key</label>
                                                        <input data-counter="120" type="text" class="next-input form-control"
                                                            name="newsletter_sendgrid_api_key"
                                                            id="newsletter_sendgrid_api_key"   value="@isset($setting_data['newsletter_sendgrid_api_key']) {{ $setting_data['newsletter_sendgrid_api_key'] }} @endisset"
                                                            placeholder="Sendgrid API Key">
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="text-title-field"
                                                            for="newsletter_sendgrid_list_id">Sendgrid List ID</label>
                                                        <input data-counter="120" type="text" class="next-input form-control"
                                                            name="newsletter_sendgrid_list_id"
                                                            id="newsletter_sendgrid_list_id"   value="@isset($setting_data['newsletter_sendgrid_list_id']) {{ $setting_data['newsletter_sendgrid_list_id'] }} @endisset"
                                                            placeholder="Sendgrid List ID">
                                                    </div>
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
                                                <span>Publish</span>
                                            </h4>
                                        </div>
                                        <div class="widget-body">
                                            <div class="btn-set">
                                                <button type="submit" name="submit" value="save"
                                                    class="btn btn-info">
                                                    <i class="fa fa-save"></i> Save
                                                </button>
                                                &nbsp;
                                                <button type="submit" name="submit" value="apply"
                                                    class="btn btn-success">
                                                    <i class="fa fa-check-circle"></i> Save &amp; edit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>
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
            $('#admin-logo').filemanager('image', {
                prefix: route_prefix
            });
            $('#admin-favicon').filemanager('image', {
                prefix: route_prefix
            });
            $('#admin-login-screen-backgrounds').filemanager('image', {
                prefix: route_prefix
            });
        </script>
        <script>
            $(".btn-trigger-show-seo-detail").click(function() {
                $('.seo-edit-section').toggleClass('hidden-active');
            });
        </script>
    @endsection
