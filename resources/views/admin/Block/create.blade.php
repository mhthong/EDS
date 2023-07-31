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
                                id="add-blog-post-form" method="post" action="{{ route('block-store') }}" enctype="multipart/form-data">
                                @csrf
                                <div class="flexb-c col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                                    style="align-items: flex-start;   justify-content: space-between;">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                                        <div class="bg-ad-form bg-ad-form-left containerInput  twothirds p-3">
                        
                                            <div class="form-group mt-4">
                                                <label for="control-label required name mt-0">Name</label>
                                                <input class="form-control" type="text" name="name" id="name" placeholder="" required
                                                    value="" required />
                                            </div>
                                            <div class="form-group mt-4">
                                                <label for="name">Description</label>
                                                <textarea class="form-control" cols="30" rows="3" type="text" name="description" id="description" placeholder="" required></textarea>
                                            </div>
                        
                                            <div class="form-group mt-4">
                                                <label for="is_featured">Featured</label>
                        
                                                <div class="">
                                                    <label class="switch">
                                                        <input type="hidden" name="is_featured" value="0">
                                                        <input type="checkbox" name="is_featured" class="onoffswitch-checkbox"
                                                            id="is_featured" value="1">
                                                        <span class="slider"></span>
                                                    </label>
                                                </div>
                        
                                            </div>
                        
                                            <div class="form-group mt-4">
                                                <label for="name">Content</label>
                                                <textarea cols="2" rows="2" name="content" id="editor1" placeholder="Content" required value=""></textarea>
                                            </div>
                        
                        
                                        </div>
                                        <div class="bg-ad-form bg-ad-form-left  containerInput twothirds p-3 mt-3">
                                            <div class="widget-body">
                                                <div class="flexb-c" style="justify-content: space-between">
                                            
                                                        <h4><span>Search Engine Optimization (SEO) Optimization</span></h4>
                                                        <a href="#1" class="btn-trigger-show-seo-detail text-primary">Edit SEO</a>
                                           
                        
                                                </div>
                        
                                                <div id="1" class="seo-preview">
                                                    <p class="default-seo-description ">Setting up meta tags helps users easily find it on search engines like Google.</p>
                                                    <div class="existed-seo-meta  hidden ">
                                                        <span class="page-title-seo">
                        
                                                        </span>
                        
                                                        <div class="page-url-seo ws-nm">
                                                            <p>{{ env('APP_URL') }}</p>
                                                        </div>
                        
                                                        <div class="ws-nm">
                                                            <span style="color: #70757a;"></span>
                                                            <span class="page-description-seo">
                        
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="seo-edit-section hidden">
                                                    <hr>
                                                    <div class="form-group mt-4">
                                                        <label for="seo_title" class="control-label">Page Title</label>
                                                        <input class="form-control" id="seo_title" placeholder="Page Title"
                                                            data-counter="120" name="seo_meta[seo_title]" type="text"
                                                            value="">
                                                    </div>
                        
                        
                                                    <div class="form-group mt-4">
                                                        <label for="seo_description" class="control-label">Page Description</label>
                                                        <textarea class="form-control" rows="3" id="seo_description" placeholder="Page Description" data-counter="160"
                                                            name="seo_meta[seo_description]" cols="50"></textarea>
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
                                                        <button type="submit" name="submit" value="save" class="btn btn-info">
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
                                                    <div class="ui-select-wrapper form-group">
                                                        <select class="form-control ui-select ui-select" id="status"
                                                            name="status">
                                                            <option value="published" selected="selected">Published</option>
                                                            <option value="draft">Draft</option>
                                                            <option value="pending">Pending</option>
                                                        </select>
                        
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
                filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token=',
                filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
                filebrowserUploadUrl: "{{ route('ckeditor.upload', ['_token' => csrf_token()]) }}",
                filebrowserUploadMethod: 'form'
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
            $('#data-image').filemanager('image', {
                prefix: route_prefix
            });
        </script>
        <script>
            $(".btn-trigger-show-seo-detail").click(function() {
                $('.seo-edit-section').toggleClass('hidden-active');
            });
        </script>
    @endsection
