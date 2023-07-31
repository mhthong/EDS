@extends('layouts.app')
@section('head')


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tagsinput/0.8.0/bootstrap-tagsinput.css" integrity="sha512-xmGTNt20S0t62wHLmQec2DauG9T+owP9e6VU8GigI0anN7OXLip9i7IwEhelasml2osdxX71XcYm6BQunTQeQg==" crossorigin="anonymous" />
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha256-OFRAJNoaD8L3Br5lglV7VyLRf0itmoBzWUoM+Sji4/8=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tagsinput/0.8.0/bootstrap-tagsinput.js" integrity="sha512-VvWznBcyBJK71YKEKDMpZ0pCVxjNuKwApp4zLF3ul+CiflQi6aIJR+aZCP/qWsoFBA28avL5T5HA+RE+zrGQYg==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tagsinput/0.8.0/bootstrap-tagsinput-angular.min.js" integrity="sha512-KT0oYlhnDf0XQfjuCS/QIw4sjTHdkefv8rOJY5HHdNEZ6AmOh1DW/ZdSqpipe+2AEXym5D0khNu95Mtmw9VNKg==" crossorigin="anonymous"></script>
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
                        <form class="p-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" name="add-blog-post-form"
                            id="add-blog-post-form" method="post" action="{{ route('posts-up')}}" enctype="multipart/form-data">
                            @csrf
                            <div class="flexb-c col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                                style="align-items: flex-start; justify-content: space-between;">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                                    <div class="bg-ad-form bg-ad-form-left containerInput  twothirds p-3">

                                        <div class="form-group">
                                            <label for="name mt-0">Name</label>
                                            <input class="form-control" type="text" name="name" id="name" placeholder="" required
                                                value="" required />
                                        </div>

                                        <div class="form-group mt-4">
                                            <label for="name">Title</label>
                                            <input class="form-control" type="text" name="title" id="title" placeholder="" required
                                                value="" required />
                                        </div>

                                        <div class="form-group mt-4">

                                            <label for="name">Description</label>
                                            <textarea class="form-control" cols="30" rows="3" type="text" name="description" id="description" placeholder="" required></textarea>

                   
                                        </div>

                                        <div class="form-group mt-4">
                                            <label for="is_featured" class="control-label">Featured?</label>
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
                                            <textarea class="form-group mt-4" cols="2" rows="2" name="content" id="editor1" placeholder="Content" required value=""></textarea>

                                        </div>
                                    </div>
                                    <div class="bg-ad-form bg-ad-form-left  containerInput twothirds p-3 mt-3">
                                        <div class="widget-body">
                                            <div class="flexb-c" style="justify-content: space-between">
                                                <h4><span>Search Engine Optimization (SEO) Optimization</span></h4>
                                                <a href="#1" class="btn-trigger-show-seo-detail text-primary">Edit SEO</a>
                                            </div>

                                            <div id="1" class="seo-preview">
                                                <p class="default-seo-description">Setting up meta tags helps users easily find you on search engines like Google.</p>
                                                <div class="existed-seo-meta hidden">
                                                    <span class="page-title-seo">

                                                    </span>

                                                    <div class="page-url-seo ws-nm">
                                                        <p>{{ env('APP_URL') }}</p>
                                                    </div>

                                                    <div class="ws-nm">
                                                        <span style="color: #70757a;">Feb 20, 2023 - </span>
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
                                                    <button type="submit" name="submit" value="apply" class="btn btn-success">
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
                                                        <option value="published" selected="selected">Published</option>
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
                                                <h4><label for="categories[]" class="control-label required m-0"
                                                        aria-required="true">Categories</label></h4>
                                            </div>
                                            <div class="widget-body"
                                                style="max-height: 400px; overflow: auto; padding-left: 10px;">
                                                @isset($data)

                                    
                                                @isset($data['Menus_parent'])
                            
                                                    @foreach ($data['Menus_parent'] as $Menus => $Menu )
                            
                                                        @foreach ($Menu as $Menus_name)
                                                            <li class="checkbox-style ps-0" value="{{ $Menus_name->id }}"
                                                                data-tab="" style="">
                                                                <label for="">
                            
                                                                    @isset($menu_check[$Menus_name->id])
                                                                        @foreach ($menu_check as $key=>$value)
                                                                            @if ($value->id == $Menus_name->id)
                                                                                <input type="checkbox" value="{{$value->id}}"
                                                                                    name="categories[]" checked>
                                                                            @endif
                                                                        @endforeach
                                                                    @endisset
                            
                                                                    @empty($menu_check[$Menus_name->id])
                                                                        <input type="checkbox" value="{{$Menus_name->id}}" name="categories[]">
                                                                    @endempty
                                                                    {{ $Menus_name->name }}
                                                                </label>
                                                            </li>
                                                            @isset($data['parent_id'][$Menus_name->id])
                            
                                                            @if (is_array($data['parent_id'][$Menus_name->id]) || is_object($data['parent_id'][$Menus_name->id]))
                            
                                                                @foreach ( $data['parent_id'][$Menus_name->id] as $parent_id => $mp_value)
                                                                    <li class="checkbox-style ps-0" value="{{ $mp_value }}"
                                                                        data-tab="" style="">
                                                                        <label class="ps-4" for="">
                            
                                                                            @isset($menu_check[$mp_value])
                                                                                @foreach ($menu_check as $key => $value)
                            
                                                                                    @if ($value->id ==  $mp_value )
                                                                                        <input type="checkbox" value="{{$value->id }}" name="categories[]" checked>
                                                                                    @endif
                            
                                                                                @endforeach
                                                                            @endisset
                                                                            @empty($menu_check[$mp_value])
                                                                                <input type="checkbox" value="{{ $mp_value }}" name="categories[]" >
                                                                            @endempty
                            
                                                                            {{ $data['Menu_child_name'][$mp_value] }}
                                                                        </label>
                                                                    </li>
                                                                @endforeach
                                                            @endif
                            
                                                            @endisset
                            
                                                        @endforeach
                                                    @endforeach
                            
                                                @endisset
                                                @endisset
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
                                                    <div class="holder image-category" id="image-category" value="">
                                                    </div>
                                                    <div class="-space-y-px mb-4">
                                                        <div class="containerInput input-group">
                                                            <span class="input-group-btn ">
                                                                <a class="text-primary" id="image_manager" data-input="image"
                                                                    data-preview="image-category">
                                                                    Select Image
                                                                </a>
                                                            </span>

                                                            <input class="form-control" id="image" style="display: none"
                                                                type="text" name="image" >
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="bg-ad-form right-sidebar mt-3">

                                        <div class="widget meta-boxes">
                                            <div class="widget-title">
                                                <h4><label for="tag[]" class="control-label required m-0"
                                                        aria-required="true">Tags</label></h4>
                                            </div>
                                            <div class="widget-body">
                                                <tags class="tagify tags" tabindex="-1">
                                                    <span contenteditable="" data-placeholder="Write some tags"
                                                        aria-placeholder="Write some tags" class="tagify__input"
                                                        role="textbox" aria-autocomplete="both"
                                                        aria-multiline="false"></span>
                                                </tags>
                                                <input class="tags" data-role="tagsinput" placeholder="Write some tags"
                                                    data-url="" name="tag"
                                                    type="text" id="tag">
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
            $('#data-image').filemanager('image', {prefix: route_prefix});
        </script>

        <script>
            $(".btn-trigger-show-seo-detail").click(function() {
                $('.seo-edit-section').toggleClass('hidden-active');
            });
        </script>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="/js/bootstrap-tagsinput-latest/dist/bootstrap-tagsinput.min.js" defer></script>


    @endsection
