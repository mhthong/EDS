@extends('layouts.app')
@section('head')
    <style>
        .carousel__button {
            display: none !important;
        }
    </style>

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

                    <form class="p-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" name="add-blog-post-form"
                        id="add-blog-post-form" method="post"
                        action="{{ route('update-simple-slider', ['id' => $data_slider->id]) }}"
                        enctype="multipart/form-data">
                        @csrf
                        <div class="flexb-c col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                            style="align-items: flex-start;   justify-content: space-between;">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                                <div class="bg-ad-form bg-ad-form-left containerInput  twothirds p-3">
                                  <div class="form-group">
                                    <label for="name">Name</label>
                                    <input class="form-control" type="text" name="name" id="name" placeholder="" required
                                        value="@isset($data_slider->name){{ $data_slider->name }}@endisset"
                                        required />
                                  </div>

                                  <div class="form-group">
                                    <label for="name">Key</label>
                                    <input class="form-control" type="text" style="background: #989898;" name="key" id="key"
                                        placeholder="" required
                                        value="@isset($data_slider->key){{ $data_slider->key }}@endisset"
                                        readonly />
                                  </div>

                                  <div class="form-group">

                                    <label for="name">Mô tả</label>
                                    <textarea class="form-control"  cols="2" rows="2" name="description" id="description" placeholder="Mô tả ngắn" required
                                        value=""> @isset($data_slider->description){{ $data_slider->description }}@endisset</textarea>
                         
                                  </div>

                                </div>

                                <div class="bg-ad-form bg-ad-form-left  containerInput twothirds p-3 mt-3">
                                    <div class="table-admin" style="width: 100% ">

                                        <table class="table-reponsive">
                                            <thead>
                                                <tr>
                                                    <th >ID</th>
                                                    <th >Image</th>
                                                    <th >Tiêu Đề</th>
                                                    <th >Thứ Tự</th>
                                                    <th >Operations</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <!-- Dialog Contents -->
                                                <div id="dialog-content" style="display:none;max-width:500px;">

                                                    <form method="POST"
                                                        action="{{ route('created-simple-slider-item', ['id_simple' => $data_slider->id]) }}"
                                                        accept-charset="UTF-8"
                                                        id="botble-simple-slider-forms-simple-slider-item-form"
                                                        novalidate="novalidate">
                                                        @csrf

                                                        <div class="modal-title">
                                                            <i class="til_img"></i> <strong>
                                                                Add Slider
                                                            </strong>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div class="form-body">
                                                                <label for="title" class="control-label">Tiêu
                                                                    đề</label>
                                                                <input class="form-control" data-counter="120" name="title"
                                                                    type="text" value="#" id="title">
                                                            </div>
                                                            <label for="link" class="control-label">Liên
                                                                kết</label>
                                                            <input class="form-control" placeholder="http://" data-counter="120"
                                                                name="link" type="text" value="" id="link">
                                                        </div>

                                                        <label for="description" class="control-label">Mô tả</label>
                                                        <textarea class="form-control" rows="4" placeholder="Mô tả ngắn" data-counter="2000" name="description"
                                                            cols="50" id="description"></textarea>
                                                        <div class="form-group">
                                                            <label for="order" class="control-label">Thứ tự</label>
                                                            <input class="form-control" placeholder="Sắp xếp" name="order"
                                                                type="number" value="" id="order">
                                                        </div>
                                                        <div class="form-group ">
                                                            <p class="p-2 col-12">Hình ảnh</p>
                                                            <div class="holder holder1" id="data-preview-image" value="">
                                                            </div>
                                                            <div class="-space-y-px mb-4">
                                                                <div class="containerInput input-group">
                                                                    <span class="input-group-btn ">
                                                                        <a class="text-primary data-image" id=""
                                                                            data-input="data-add-image"
                                                                            data-preview="data-preview-image">
                                                                            Chọn ảnh
                                                                        </a>
                                                                    </span>
                                                                    <p class="p p-1 col-12 bg-span">Kích thước - W:1920*770px</p>
                                                                    <input class="form-control" id="data-add-image"
                                                                        style="display: none" type="text" name="image"
                                                                        required>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button type="submit" class="btn btn-primary text-black bg-span">
                                                            Lưu thay đổi
                                                        </button>
                                                </div>

                                    </div>
                                    </form>
                                </div>

                                <!-- Dialog Trigger -->
                                <button data-fancybox="dialog" class="btn btn-primary mb-3" data-src="#dialog-content">
                                    <i class="fa-solid fa-pen-to-square"></i><span class="ps-1">Add new</span>
                                </button>

                                @foreach ($SimpleSliderItem as $row)
                                    <tr>
                                        <td>
                                            @isset($row->id)
                                                {{ $row->id }}
                                            @endisset
                                        </td>
                                        <td >

                                            @if ($row->image !=="")
                                            <img src="@isset($row->image)
                                            {{ $row->image }}
                                            @endisset"
                                            alt="@isset($row->image)
                                                    {{ $row->image }}
                                                @endisset"
                                            srcset="" width="50px" height="50px">
                                            @endif
                  

                                        </td>
                                        <td >
                                            @isset($row->title)
                                                {{ $row->title }}
                                            @endisset
                                        </td>
                                        <td >
                                            @isset($row->order)
                                                {{ $row->order }}
                                            @endisset

                                        </td>

                                        <td>

                                            <!-- Dialog Contents -->
                                            <div id="dialog-content.{{ $row->id }}" style="display:none;max-width:500px;">

                                                <form method="POST"
                                                    action="{{ route('update-simple-slider-item', ['id' => $row->id]) }}"
                                                    accept-charset="UTF-8" id="botble-simple-slider-forms-simple-slider-item-form"
                                                    novalidate="novalidate">
                                                    @csrf

                                                    <div class="modal-title">
                                                        <i class="til_img"></i> <strong>
                                                            Edit Slider
                                                            @isset($row->id)
                                                                {{ $row->id }}
                                                            @endisset
                                                        </strong>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="form-body">
                                                            <label for="title" class="control-label">Tiêu
                                                                đề</label>
                                                            <input class="form-control" data-counter="120" name="title"
                                                                type="text" value="#" id="title">
                                                        </div>
                                                        <label for="link" class="control-label">Liên
                                                            kết</label>
                                                        <input class="form-control" placeholder="http://" data-counter="120"
                                                            name="link" type="text" value="#" id="link">
                                                    </div>

                                                    <label for="description" class="control-label">Mô tả</label>
                                                    <textarea class="form-control" rows="4" placeholder="Mô tả ngắn" data-counter="2000" name="description"
                                                        cols="50" id="description"></textarea>
                                                    <div class="form-group">
                                                        <label for="order" class="control-label">Thứ tự</label>
                                                        <input class="form-control" placeholder="Sắp xếp" name="order"
                                                            type="number" value="1" id="order">
                                                    </div>
                                                    <div class="form-group ">
                                                        <img src="" alt="" sizes="" style="width: 200px;"
                                                            srcset="">
                                                        <p class="p-2 col-12">Hình ảnh</p>
                                                        <div class="-space-y-px mb-4">
                                                            <div class="containerInput input-group">
                                                                <span class="input-group-btn ">
                                                                    <a class="text-primary data-image" id=""
                                                                        data-input="@isset($row->id){{ $row->id }}@endisset"
                                                                        data-preview="@isset($row->id){{ 'holder' . $row->id }}@endisset">
                                                                        Chọn ảnh
                                                                    </a>
                                                                </span>
                                                                <p class="p p-1 col-12 bg-span">Kích thước - W:1920*770px</p>
                                                                <input class="form-control"
                                                                    id="@isset($row->id){{ $row->id }}@endisset"
                                                                    style="display: none" type="text" name="image" required>
                                                                <p class="p-2 col-12">Hình ảnh Cập Nhật</p>
                                                                <div class="holder holder1"
                                                                    id="@isset($row->id){{ 'holder' . $row->id }}@endisset"
                                                                    value=""></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary text-black bg-span">
                                                        Lưu thay đổi
                                                    </button>
                                            </form>
                                        </div>

                                        <div class="flexb-c">
                                                                    <!-- Dialog Trigger -->
                                                <button data-fancybox="dialog" class="bg-none"
                                                data-src="#dialog-content.{{ $row->id }}">
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </button>

                                            <form method="POST" action="{{ route('simple-slider-item.delete', ['id' => $row->id]) }}"
                                                onsubmit="return ConfirmDelete( this )">
                                                @method('DELETE')
                                                @csrf
                                                <button class="bg-none" type="submit"><i class="fa-solid fa-trash"></i>
                                                </button>
                                            </form>
                                        </div>

                        </td>
                        </tr>
                        @endforeach
                        </tbody>
                        </table>


                    </div>
                                </div>

                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="bg-ad-form bg-ad-form-left right-sidebar ">
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
                                <div class="bg-ad-form bg-ad-form-left right-sidebar mt-3">
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

                                                    <option value="published" selected="selected">Published</option>
                                                    <option value="draft">Bản nháp</option>
                                                    <option value="pending">Đang chờ xử lý</option>

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
    <script>
        var route_prefix = "/admin/laravel-filemanager";
        $('#lfm').filemanager('image', {
            prefix: route_prefix
        });
        $('.data-image').filemanager('image', {
            prefix: route_prefix
        });
        $('#add-image').filemanager('image', {
            prefix: route_prefix
        });
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
                      filebrowserUploadUrl: "{{ route('ckeditor.upload', ['_token' => csrf_token()]) }}",
                        filebrowserUploadMethod: 'form' */
        };
    </script>
    <script>
        CKEDITOR.replace('editor1', options);
    </script>

    <script>
        // Show HTML element
        Fancybox.show([{
            src: "#dialog-content",
            type: "inline",
            infinite: false,
        }]);

        // Show a copy of the element
        Fancybox.show([{
            src: "#dialog-content",
            type: "clone"
            infinite: false,
        }]);
    </script>
    {{--     @include('ckfinder::setup'); --}}
@endsection
