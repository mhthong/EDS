@extends('layouts.app')
@section('head')
<script>
    var editor_config = {
        path_absolute: "/",
        selector: 'textarea#editor',
        relative_urls: false,
        directionality: 'rtl',
        plugins: [
            "advlist autolink lists link image charmap print preview hr anchor pagebreak",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime media nonbreaking save table directionality",
            "emoticons template paste textpattern"
        ],
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | rtl ltr",
        file_picker_callback: function (callback, value, meta) {
            var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
            var y = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

            var cmsURL = editor_config.path_absolute + 'laravel-filemanager?editor=' + meta.fieldname;
            if (meta.filetype == 'image') {
                cmsURL = cmsURL + "&type=Images";
            } else {
                cmsURL = cmsURL + "&type=Files";
            }

            tinyMCE.activeEditor.windowManager.openUrl({
                url: cmsURL,
                title: 'Filemanager',
                width: x * 0.8,
                height: y * 0.8,
                resizable: "yes",
                close_previous: "no",
                onMessage: (api, message) => {
                    callback(message.content);
                }
            });
        }
    };

    tinymce.init(editor_config);
</script>
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<script src="{{ asset('/vendor/laravel-filemanager/js/stand-alone-button.js') }}"></script>
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
            @isset($tag )

            <form class="p-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" name="add-blog-post-form"
                id="add-blog-post-form" method="post" action="{{ route('update.tag', ['id'=>$tag->id]) }}" enctype="multipart/form-data">
                @csrf


                <div class="flexb-c col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                    style="align-items: flex-start;   justify-content: space-between;">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                        <div class="bg-ad-form bg-ad-form-left containerInput  twothirds p-3">

                        <div class="form-group">
                        <label for="name mt-0">Name</label>
                            <input type="text" name="name" id="name" placeholder="" required
                                value="{{$tag->name}}" required />
                        </div>

                        <div class="form-group">
                            <label for="name">Mô tả</label>
                            <textarea cols="30" rows="3" type="text" name="title" id="title" placeholder="" required>{{$tag->title}}</textarea>
                        </div>
                            
                           
                        </div>
                        <div class="bg-ad-form bg-ad-form-left  containerInput twothirds p-3 mt-3">
                            <div class="widget-body">
                                <div class="flexb-c" style="justify-content: space-between">
                                    <h4><span>Tối ưu hoá bộ máy tìm kiếm (SEO)</span></h4>
                                    <a href="#1" class="btn-trigger-show-seo-detail text-primary">Chỉnh sửa
                                        SEO</a>
                                </div>

                                <div id="1" class="seo-preview">
                                    <p class="default-seo-description ">Thiết lập các thẻ mô tả giúp người dùng dễ
                                        dàng tìm thấy trên công cụ tìm kiếm như Google.</p>
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
                                    <div class="form-group">
                                        <label for="seo_title" class="control-label">Tiêu đề trang</label>
                                        <input class="form-control" id="seo_title" placeholder="Tiêu đề trang"
                                            data-counter="120" name="seo_meta[seo_title]" type="text"
                                            value="">
                                    </div>


                                    <div class="form-group">
                                        <label for="seo_description" class="control-label">Mô tả trang</label>
                                        <textarea class="form-control" rows="3" id="seo_description" placeholder="Mô tả trang" data-counter="160"
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


                        <div class="bg-ad-form right-sidebar mt-3">
                            <div class="widget meta-boxes">
                                <div class="widget-title">
                                    <h4><label for="status" class="m-0 control-label required"
                                            aria-required="true">Trạng
                                            thái</label></h4>
                                </div>
                                <div class="widget-body p-3">
                                    <div class="ui-select-wrapper form-group">
                                        <select class="form-control ui-select ui-select" id="status"
                                            name="status">
                                            @isset($tag->status)
                                            @if ($tag->status == 'published')
                                                <option value="published" selected="selected">Published</option>
                                                <option value="draft">Bản nháp</option>
                                                <option value="pending">Đang chờ xử lý</option>
                                            @endif

                                            @if ($tag->status == 'draft')
                                                <option value="published">Published</option>
                                                <option value="draft" selected="draft">Bản nháp</option>
                                                <option value="pending">Đang chờ xử lý</option>
                                            @endif

                                            @if ($tag->status == 'pending')
                                                <option value="published">Published</option>
                                                <option value="draft" >Bản nháp</option>
                                                <option value="pending" selected="pending">Đang chờ xử lý</option>
                                            @endif
                                        @endisset
                                        </select>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </form>



            @endisset
    </div>
    </div>
        </div>
            </div>
</section>

</main>



@endsection

@section('footer')
<script>
    var route_prefix = "/admin/laravel-filemanager";
    $('#lfm').filemanager('image', {prefix: route_prefix});
</script>
    @include('layouts.footerad')
@endsection

@section('script')
    <script src={{ url('ckeditor/ckeditor.js') }}></script>
{{--     @include('layouts.ckeditor'); --}}
    <script>
        var options = {
          filebrowserImageBrowseUrl: '/admin/laravel-filemanager?type=Images',
/*           filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token=',
          filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
          filebrowserUploadUrl: "{{route('ckeditor.upload', ['_token' => csrf_token() ])}}",
            filebrowserUploadMethod: 'form' */
        };
      </script>
              <script>
                $(".btn-trigger-show-seo-detail").click(function() {
                    $('.seo-edit-section').toggleClass('hidden-active');
                });
            </script>
    <script>
        CKEDITOR.replace('editor1', options);
    </script>
{{--     @include('ckfinder::setup'); --}}
@endsection

