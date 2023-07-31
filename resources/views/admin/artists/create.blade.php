@extends('layouts.app')
@section('head')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tagsinput/0.8.0/bootstrap-tagsinput.css"
        integrity="sha512-xmGTNt20S0t62wHLmQec2DauG9T+owP9e6VU8GigI0anN7OXLip9i7IwEhelasml2osdxX71XcYm6BQunTQeQg=="
        crossorigin="anonymous" />
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha256-OFRAJNoaD8L3Br5lglV7VyLRf0itmoBzWUoM+Sji4/8=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tagsinput/0.8.0/bootstrap-tagsinput.js"
        integrity="sha512-VvWznBcyBJK71YKEKDMpZ0pCVxjNuKwApp4zLF3ul+CiflQi6aIJR+aZCP/qWsoFBA28avL5T5HA+RE+zrGQYg=="
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tagsinput/0.8.0/bootstrap-tagsinput-angular.min.js"
        integrity="sha512-KT0oYlhnDf0XQfjuCS/QIw4sjTHdkefv8rOJY5HHdNEZ6AmOh1DW/ZdSqpipe+2AEXym5D0khNu95Mtmw9VNKg=="
        crossorigin="anonymous"></script>
    <script src="/js/typeahead/dist/typeahead.bundle.min.js" type="text/javascript"></script>
    <script src="/js/typeahead/dist/bloodhound.min.js" type="text/javascript"></script>
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
                            <form class="p-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                                name="add-blog-post-form" id="add-blog-post-form" method="post"
                                action="{{ route('artist.store') }}" enctype="multipart/form-data">
                                @csrf
                                <div class="flexb-c col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                                    style="align-items: flex-start; justify-content: space-between;">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                                        <div class="bg-ad-form bg-ad-form-left containerInput  twothirds p-3">

                                            <!-- artists/create.blade.php -->

                                            <div class="form-group">
                                                <label for="name">UserName:</label>
                                                <input type="text" name="name" id="name" class="form-control" placeholder=" Username" 
                                                    required>
                                            </div>

                                            <div class="form-group">
                                                <label for="fullname">Full Name:</label>
                                                <input type="text" name="fullname" id="fullname" class="form-control" placeholder="fullname"
                                                    required>
                                            </div>

                                            <div class="form-group">
                                                <label for="password">Password:</label>
                                                <input type="password" name="password" id="password" class="form-control" placeholder="Authentication"
                                                    required>
                                            </div>

                                            <div class="form-group">
                                                <label for="phone">Phone:</label>
                                                <input type="text" name="phone" id="phone" class="form-control" placeholder="Phone Number"
                                                    required>
                                            </div>

                                            <div class="form-group">
                                                <label for="email">Email:</label>
                                                <input type="email" name="email" id="email" class="form-control" placeholder="Artist email address"
                                                    required>
                                            </div>

                                            <div class="form-group">
                                                <label for="description">Description:</label>
                                                <textarea name="description" id="description" class="form-control" placeholder=" Description"></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label for="artist_levelID">Artist Level:</label>
                                                <select name="artist_levelID" id="artist_levelID" class="form-control"
                                                    required>
                                                    <!-- Populate options based on artist levels in the database -->
                                              
                                                    @foreach ($artistLevels as $artistLevel)
                                                        <option value="{{ $artistLevel->id }}">{{ $artistLevel->Name }}
                                                        </option>
                                                    @endforeach
                                                </select>
                                            </div>


                                        </div>

                                    </div>
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="bg-ad-form right-sidebar ">
                                            <div
                                                class="widget meta-boxes form-actions form-actions-default action-horizontal ">
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
                                                            <i class="fa fa-check-circle"></i> Save &amp; Edit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bg-ad-form right-sidebar mt-3">
                                            <div class="widget meta-boxes">
                                                <div class="widget-title">
                                                    <h4><label for="status" class="m-0 control-label required"
                                                            aria-required="true">Status</label></h4>
                                                </div>
                                                <div class="widget-body p-3">
                                                    <div class="ui-select-wrapper form-group mt-4">
                                                        <select class="form-control ui-select ui-select" id="status"
                                                            name="status">
                                                            <option value="published" selected="selected">Published
                                                            </option>
                                                            <option value="draft">Draft</option>
                                                            <option value="pending">Pending</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="bg-ad-form right-sidebar mt-3">
                                            <div class="widget meta-boxes">
                                                <div class="widget-title">
                                                    <h4><label for="image" class="control-label required m-0"
                                                            aria-required="true">Image (600*400 px)</label></h4>
                                                </div>
                                                <div class="widget-body">

                                                    <div class="form-group mt-4 ">
                                                        <div class="holder image-category" id="image-category"
                                                            value="">
                                                        </div>
                                                        <div class="-space-y-px mb-4">
                                                            <div class="containerInput input-group">
                                                                <span class="input-group-btn ">
                                                                    <a class="text-primary" id="image_manager"
                                                                        data-input="image" data-preview="image-category">
                                                                        Select Image
                                                                    </a>
                                                                </span>

                                                                <input class="form-control" id="image"
                                                                    style="display: none" type="text" name="avatar">
                                                            </div>

                                                        </div>
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
            </div>
            </div>
        </section>
    </main>
@endsection

@section('footer')
    @include('layouts.footerad')
@endsection
@section('script')
    <script src={{ asset('ckeditor/ckeditor.js') }}></script>

    <script>
        var options = {
            filebrowserImageBrowseUrl: 'laravel-filemanager?type=Images',
            /*                 filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token=',
                    filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
                            filebrowserUploadUrl: "{{ route('ckeditor.upload', ['_token' => csrf_token()]) }}",
                            filebrowserUploadMethod: 'form' */
        };
    </script>
    <script>
        CKEDITOR.replace('editor1', options);
        /*  $('textarea.editor1').ckeditor(options); */
    </script>
    <script src="/vendor/laravel-filemanager/js/stand-alone-button.js"></script>
    <script>
        var route_prefix = "/admin/laravel-filemanager";
        $('#lfm').filemanager('image', {
            prefix: route_prefix
        });
        $('#image_manager').filemanager('image', {
            prefix: route_prefix
        });
        $('#data-image').filemanager('image', {
            prefix: route_prefix
        });
    </script>

    <script>
        $(".btn-trigger-show-seo-detail").click(function() {
            $('.seo-edit-section').toggleClass('hidden-active');
        });
    </script>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="/js/bootstrap-tagsinput-latest/dist/bootstrap-tagsinput.min.js" defer></script>
@endsection
