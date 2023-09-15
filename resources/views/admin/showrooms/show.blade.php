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


                    @isset($services)
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 flexb-c">
                            <div class="flexb-col-c bg-ad-1">
     

                                    <div class="flexb-c col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                                        style="align-items: flex-start; justify-content: space-between;">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                                            <div class="bg-ad-form bg-ad-form-left containerInput  twothirds p-3">

                                                <!-- servicess/create.blade.php -->

                                                <div class="form-group">
                                                    <label for="name">UserName:</label>
                                                    <input type="text" name="name" id="name" class="form-control"
                                                        placeholder=" Username" value="{{ $services->name }}" required>
                                                </div>

                                                <div class="form-group">
                                                    <label for="fullname">Full Name:</label>
                                                    <input type="text" name="fullname" id="fullname" class="form-control"
                                                        placeholder="fullname" value="{{ $services->fullname }}" required>
                                                </div>

                                                <div class="form-group">
                                                    <label for="password">Password:</label>
                                                    <input type="password" name="password" id="password" class="form-control"
                                                        placeholder="Authentication" value="{{ $services->password }}" required>
                                                </div>

                                                <div class="form-group">
                                                    <label for="phone">Phone:</label>
                                                    <input type="text" name="phone" id="phone" class="form-control"
                                                        placeholder="Phone Number" value="{{ $services->phone }}" required>
                                                </div>

                                                <div class="form-group">
                                                    <label for="email">Email:</label>
                                                    <input type="email" name="email" id="email" class="form-control"
                                                        placeholder="services email address" value="{{ $services->email }}"
                                                        required>
                                                </div>

                                                <div class="form-group">
                                                    <label for="description">Description:</label>
                                                    <textarea name="description" id="description" class="form-control" placeholder=" Description">{{ $services->description }}</textarea>
                                                </div>
                                                <div class="form-group">

                                                    <label for="services_levelID">services Level:</label>
                                                    <select name="services_levelID" id="services_levelID" class="form-control"
                                                        required>
                                                        <!-- Populate options based on services levels in the database -->
                                                        @foreach ($servicesLevels as $servicesLevel)
                                                            <option value="{{ $servicesLevel->id }}"
                                                                {{ $services->services_levelID === $servicesLevel->id ? 'selected' : '' }}>
                                                                {{ $servicesLevel->Name }}</option>
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
                                                                <option value="published"
                                                                    {{ $services->status === 'published' ? 'selected' : '' }}>
                                                                    Published</option>
                                                                <option value="pending"
                                                                    {{ $services->status === 'pending' ? 'selected' : '' }}>
                                                                    Pending</option>
                                                                <option value="draft"
                                                                    {{ $services->status === 'draft' ? 'selected' : '' }}>Draft
                                                                </option>

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
                                                                <img src="{{ asset($services->avatar) }}" alt="">
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

                                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <div class="bg-ad-form bg-ad-form-left containerInput  twothirds p-3">
                                                <div class="bg-ad-form right-sidebar mt-3">
                                                    <div class="widget meta-boxes">
                                                        <div class="widget-title">
                                                            <h4><label for="status" class="m-0 control-label required"
                                                                    aria-required="true">Showroom schedule</label></h4>
                                                        </div>

                                                        <div class="col-12"
                                                            style="    display: flex;
                                                    justify-content: start;
                                                    flex-wrap: wrap;">
                                                            @foreach ($daysOfWeek as $day)
                                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-3">

                                                                    <div class="mt-3 mb-3">
                                                                        <label class="radio-header radio-text"
                                                                            for="active_{{ $day }}">{{ $day }}</label>
                                                                        <input type="checkbox"
                                                                            name="active_{{ $day }}"
                                                                            id="active_{{ $day }}"
                                                                            onchange="toggleWorkingFields(this)"
                                                                            {{ old("active_{$day}", optional($showroom_schedules->where('day', $day)->first())->active) ? 'checked' : '' }}>
                                                                    </div>



                                                                    <div class=" working-value-group controls"
                                                                        id="workingvalue_group_{{ $day }}">
                                                                        <label for="workingvalue_{{ $day }}"
                                                                            class="active">Number</label>

                                                                        <input type="number"
                                                                            name="workingvalue_{{ $day }}"
                                                                            id="workingvalue_{{ $day }}"
                                                                            min="0" max="4"
                                                                            value="{{ old("workingvalue_{$day}", optional($showroom_schedules->where('day', $day)->first())->workingvalue) }}"
                                                                            onchange="generateWorkingHours(this)">

                                                                    </div>



                                                                    <label for="{{ $day }}">Hours </label>

                                                                    <div class="form-group working-hours-group controls"
                                                                        id="{{ $day }}"
                                                                        style="{{ old("active_{$day}", optional($showroom_schedules->where('day', $day)->first())->active) ? '' : 'display: none' }}">

                                                                        <div class="working-hours  working-hours-flex"
                                                                            style="display: flex;flex-wrap: wrap; ">
                                                                            @foreach (optional($showroom_schedules->where('day', $day)->first())->workingHours ?? [] as $index => $workingHour)
                                                                                <input type="time"
                                                                                    name="{{ $day }}[{{ $index }}][start_time]"
                                                                                    value="{{ old("{$day}.{$index}.start_time", $workingHour->start_time) }}"
                                                                                    required>
                                                                                <input type="time"
                                                                                    name="{{ $day }}[{{ $index }}][end_time]"
                                                                                    value="{{ old("{$day}.{$index}.end_time", $workingHour->end_time) }}"
                                                                                    required>
                                                                            @endforeach
                                                                        </div>
                                                                    </div>
                                                                    <input type="hidden" name="{{ $day }}[]"
                                                                        id="{{ $day }}_hidden">

                                                                </div>
                                                            @endforeach

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                            </div>
                        </div>
                    @endisset
            </div>
            </div>
        </section>
    </main>



@endsection

@section('footer')
    <script src="/vendor/laravel-filemanager/js/stand-alone-button.js"></script>
    <script>
        var route_prefix = "/admin/laravel-filemanager";
        $('#lfm').filemanager('image', {
            prefix: route_prefix
        });
        $('#image_manager').filemanager('image', {
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
        var route_prefix = "/admin/laravel-filemanager";
        $('#data-image').filemanager('image', {
            prefix: route_prefix
        });
    </script>
    <script>
        CKEDITOR.replace('editor1', options);
    </script>
    <script>
        $(".btn-trigger-show-seo-detail").click(function() {
            $('.seo-edit-section').toggleClass('hidden-active');
        });
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="/js/bootstrap-tagsinput-latest/dist/bootstrap-tagsinput.min.js" defer></script>
    {{--     @include('ckfinder::setup'); --}}
@endsection
