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
            file_picker_callback: function(callback, value, meta) {
                var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName(
                    'body')[0].clientWidth;
                var y = window.innerHeight || document.documentElement.clientHeight || document
                    .getElementsByTagName('body')[0].clientHeight;

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
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossorigin="anonymous"></script>
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
                        @isset($Statics)
                            <form class="p-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" name="add-blog-post-form"
                                id="add-blog-post-form" method="post" action="{{ route('statics.update', ['id' => $Statics->id]) }}"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="flexb-c col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                                    style="align-items: flex-start;   justify-content: space-between;">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                                        <div class="bg-ad-form bg-ad-form-left containerInput  twothirds p-3">
                                            <div class="form-group">
                                                <label for="name mt-0">Name</label>
                                                <input class="form-control" type="text" name="name" id="name" placeholder="" required
                                                    value="{{ $Statics->name }}" required />
                                            </div>
                                            <div class="form-group mt-4">
                                                <label for="name">Description</label>
                                                <textarea class="form-control" cols="30" rows="3" type="text" name="description"
                                                    id="description" placeholder="" required>{{ $Statics->description }}</textarea>
                                            </div>
                                            <div class="form-group mt-4">
                                                <label for="alias" class="control-label required" aria-required="true">Alias</label>
                                                <input class="form-control is-valid" placeholder="Alias" data-counter="120" readonly=""
                                                    name="alias" type="text" value="{{ $Statics->alias }}" id="alias"
                                                    aria-invalid="false" aria-describedby="alias-error">
                                            </div>
                                            <div class="form-group mt-4">
                                                <label for="name">Content</label>
                                                <textarea cols="2" rows="2" name="content" id="editor1" placeholder="Content" required
                                                    value="">{{ $Statics->content }}</textarea>
                                            </div>
                                        </div>
                                        @if ($Statics->alias === 'pricelist-tow')
                                            <div class="bg-ad-form bg-ad-form-left containerInput  twothirds p-3 mt-3">
                                                <div class="-space-y-px mb-4">
                                                    <div class="containerInput ">
                                                        <div class="widget-title">
                                                            <h4>
                                                                <span>Pricelist</span>
                                                            </h4>
                                                        </div>
                                                        <div class="form-group ">
                                                            <label for="pricelist" class="control-label">
                                                                Pricelist
                                                            </label>
                                                            <div class="repeater">
                                                                <div data-repeater-list="pricelist">
                                                                    @foreach (json_decode($Statics->pricelist) as $key => $value)
                                                                        <div data-repeater-item class="data-repeater-item">
                                                                            <div class="form-group data-repeater-form flexb-c">
                                                                                <div class="col-6">
                                                                                    <div class="me-3">
                                                                                        <label
                                                                                            for="f2c6be2ae579c0933ac1457f64a44c1b">Vehicle
                                                                                            type</label>
                                                                                        <input class="form-control me-3"
                                                                                            data-counter="40"
                                                                                            id="f2c6be2ae579c0933ac1457f64a44c1b"
                                                                                            value="{{ $value->type }}"
                                                                                            name="type" type="text">
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-6">
                                                                                    <div class="me-3">
                                                                                        <label
                                                                                            for="f2c6be2ae579c0933ac1457f64a44c1b">Loading
                                                                                            and unloading fee</label>
                                                                                        <input class="form-control"
                                                                                            data-counter="40"
                                                                                            id="f2c6be2ae579c0933ac1457f64a44c1b"
                                                                                            value="{{ $value->price }}"
                                                                                            name="price" type="text">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                
                                                                            <span data-repeater-delete type="button"
                                                                                class="remove-item-button">
                                                                                <i class="fa fa-times"></i>
                                                                            </span>
                                                                        </div>
                                                                    @endforeach
                                                                </div>
                                                                <input data-repeater-create type="button" class="bg-add pt-3"
                                                                    value="Add New" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        @elseif ($Statics->alias === 'pricelist')
                                            <div class="bg-ad-form bg-ad-form-left containerInput  twothirds p-3 mt-3">
                                                <div class="-space-y-px mb-4">
                                                    <div class="containerInput ">
                                                        <div class="widget-title">
                                                            <h4>
                                                                <span>Pricelist</span>
                                                            </h4>
                                                        </div>
                                                        <div class="form-group ">
                                                            <label for="pricelist" class="control-label">
                                                                Pricelist
                                                            </label>
                                                            <div class="repeater">
                                                                <div data-repeater-list="pricelist">
                                                                    @foreach (json_decode($Statics->pricelist) as $key => $value)
                                                                        <div data-repeater-item class="data-repeater-item">
                                                                            <div class="form-group data-repeater-form flexb-c">
                                                                                <div class="col-6">
                                                                                    <div class="me-3">
                                                                                        <label
                                                                                            for="f2c6be2ae579c0933ac1457f64a44c1b">Vehicle
                                                                                            type</label>
                                                                                        <input class="form-control me-3"
                                                                                            data-counter="40"
                                                                                            id="f2c6be2ae579c0933ac1457f64a44c1b"
                                                                                            value="{{ $value->type }}"
                                                                                            name="type" type="text">
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-6">
                                                                                    <div class="me-3">
                                                                                        <label
                                                                                            for="f2c6be2ae579c0933ac1457f64a44c1b">Vehicle
                                                                                            size</label>
                                                                                        <input class="form-control"
                                                                                            data-counter="40"
                                                                                            id="f2c6be2ae579c0933ac1457f64a44c1b"
                                                                                            value="{{ $value->size }}"
                                                                                            name="size" type="text">
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-6">
                                                                                    <div class="me-3">
                                                                                        <label
                                                                                            for="f2c6be2ae579c0933ac1457f64a44c1b">Opening
                                                                                            fee for the first 10km</label>
                                                                                        <input class="form-control"
                                                                                            data-counter="40"
                                                                                            id="f2c6be2ae579c0933ac1457f64a44c1b"
                                                                                            value="{{ $value->value }}"
                                                                                            name="value" type="text">
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-6">
                                                                                    <div class="me-3">
                                                                                        <label
                                                                                            for="f2c6be2ae579c0933ac1457f64a44c1b">km11-km50</label>
                                                                                        <input class="form-control"
                                                                                            data-counter="40"
                                                                                            id="f2c6be2ae579c0933ac1457f64a44c1b"
                                                                                            value="{{ $value->price10 }}"
                                                                                            name="price10" type="text">
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-6">
                                                                                    <div class="me-3">
                                                                                        <label
                                                                                            for="f2c6be2ae579c0933ac1457f64a44c1b">51-100km</label>
                                                                                        <input class="form-control"
                                                                                            data-counter="40"
                                                                                            id="f2c6be2ae579c0933ac1457f64a44c1b"
                                                                                            value="{{ $value->price51_100 }}"
                                                                                            name="price51_100" type="text">
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-6">
                                                                                    <div class="me-3">
                                                                                        <label
                                                                                            for="f2c6be2ae579c0933ac1457f64a44c1b">Over
                                                                                            100km</label>
                                                                                        <input class="form-control"
                                                                                            data-counter="40"
                                                                                            id="f2c6be2ae579c0933ac1457f64a44c1b"
                                                                                            value="{{ $value->price100 }}"
                                                                                            name="price100" type="text">
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-6">
                                                                                    <div class="me-3">
                                                                                        <label
                                                                                            for="f2c6be2ae579c0933ac1457f64a44c1b">Waiting
                                                                                            time (in hours)</label>
                                                                                        <input class="form-control"
                                                                                            data-counter="40"
                                                                                            id="f2c6be2ae579c0933ac1457f64a44c1b"
                                                                                            value="{{ $value->time }}"
                                                                                            name="time" type="text">
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-6">
                                                                                    <div class="me-3">
                                                                                        <label
                                                                                            for="f2c6be2ae579c0933ac1457f64a44c1b">Overnight
                                                                                            stay</label>
                                                                                        <input class="form-control"
                                                                                            data-counter="40"
                                                                                            id="f2c6be2ae579c0933ac1457f64a44c1b"
                                                                                            value="{{ $value->save_night }}"
                                                                                            name="save_night" type="text">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <span data-repeater-delete type="button"
                                                                                class="remove-item-button">
                                                                                <i class="fa fa-times"></i>
                                                                            </span>
                                                                        </div>
                                                                    @endforeach
                                                                </div>
                                                                <input data-repeater-create type="button" class="bg-add"
                                                                    value="Add New" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        @elseif ($Statics->alias === 'ask-list')
                                            <div class="bg-ad-form bg-ad-form-left containerInput  twothirds p-3 mt-3">
                                                <div class="-space-y-px mb-4">
                                                    <div class="containerInput ">
                                                        <div class="widget-title">
                                                            <h4>
                                                                <span>Additions</span>
                                                            </h4>
                                                        </div>
                                                        <div class="form-group ">
                                                            <label for="pricelist" class="control-label">
                                                                Questionnaire
                                                            </label>
                                                            <div class="repeater">
                                                                <div data-repeater-list="pricelist">
                                                                    @foreach (json_decode($Statics->pricelist) as $key => $value)
                                                                        <div data-repeater-item class="data-repeater-item">
                                                                            <div class="form-group data-repeater-form flexb-c">
                                                                                <div class="col-12">
                                                                                    <div class="me-3">
                                                                                        <label
                                                                                            for="f2c6be2ae579c0933ac1457f64a44c1b">Question</label>
                                                                                        <input class="form-control me-3"
                                                                                            data-counter="40"
                                                                                            id="f2c6be2ae579c0933ac1457f64a44c1b"
                                                                                            name="ask"
                                                                                            value="{{ $value->ask }}"
                                                                                            type="text">
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-12">
                                                                                    <div class="me-3">
                                                                                        <label
                                                                                            for="f2c6be2ae579c0933ac1457f64a44c1b">Answer</label>
                                                                                        <input class="form-control"
                                                                                            data-counter="40"
                                                                                            id="f2c6be2ae579c0933ac1457f64a44c1b"
                                                                                            name="reply"
                                                                                            value="{{ $value->reply }}"
                                                                                            type="text">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <span data-repeater-delete type="button"
                                                                                class="remove-item-button">
                                                                                <i class="fa fa-times"></i>
                                                                            </span>
                                                                        </div>
                                                                    @endforeach
                                                                </div>
                                                                <input data-repeater-create type="button" class="bg-add pt-3"
                                                                    value="Add New" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="bg-ad-form right-sidebar bg-ad-form-left">
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
                                        <div class="bg-ad-form right-sidebar mt-3 bg-ad-form-left">
                                            <div class="widget meta-boxes">
                                                <div class="widget-title">
                                                    <h4><label for="status" class="m-0 control-label required" aria-required="true">Status</label></h4>
                                                </div>
                                                <div class="widget-body p-3">
                                                    <div class="ui-select-wrapper form-group">
                                                        <select class="form-control ui-select ui-select" id="status" name="status">
                                                            @isset($Statics->status)
                                                                @if ($Statics->status == 'published')
                                                                    <option value="published" selected="selected">Published</option>
                                                                    <option value="draft">Draft</option>
                                                                    <option value="pending">Pending</option>
                                                                @endif
                                                                @if ($Statics->status == 'draft')
                                                                    <option value="published">Published</option>
                                                                    <option value="draft" selected="draft">Draft</option>
                                                                    <option value="pending">Pending</option>
                                                                @endif
                                                                @if ($Statics->status == 'pending')
                                                                    <option value="published">Published</option>
                                                                    <option value="draft">Draft</option>
                                                                    <option value="pending" selected="pending">Pending</option>
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
    </div>
        </section>

    </main>



@endsection

@section('footer')
    <script>
        var route_prefix = "/admin/laravel-filemanager";
        $('#data-image').filemanager('image', {
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
        $(".btn-trigger-show-seo-detail").click(function() {
            $('.seo-edit-section').toggleClass('hidden-active');
        });
    </script>
    {{--     @include('ckfinder::setup'); --}}
    <script src="{{ asset('js/add-new-form.js') }}"></script>
@endsection
