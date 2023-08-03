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

                    @isset($showroom)
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 flexb-c">
                            <div class="flexb-col-c bg-ad-1">
                                <form class="p-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                                    name="add-blog-post-form" id="add-blog-post-form" method="post"
                                    action="{{ route('showrooms.update', ['showroom' => $showroom->id]) }}"
                                    enctype="multipart/form-data">
                                    @csrf
                                    @method('PUT')

                                    <div class="flexb-c col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                                        style="align-items: flex-start; justify-content: space-between;">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                                            <div class="bg-ad-form bg-ad-form-left containerInput  twothirds p-3">

                                                <!-- showroomss/edit.blade.php -->

                                                <div class="form-group">
                                                    <label for="Name">Name</label>
                                                    <input type="text" class="form-control" id="Name" name="Name" value="{{ $showroom ->Name}}" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="Address">Address</label>
                                                    <input type="text" class="form-control" id="Address" name="Address"  value="{{ $showroom ->Address}}" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="Phone">Phone</label>
                                                    <input type="text" class="form-control" id="Phone" name="Phone"  value="{{ $showroom ->Phone}}" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="Description">Description</label>
                                                    <textarea class="form-control" id="Description" name="Description"> {{ $showroom ->Description}}</textarea>
                                                </div>
                                                <div class="form-group">
                                                    <label for="maps">Maps</label>
                                                    <textarea type="text" class="form-control" col="30" rows="10" id="maps" name="maps">{{ $showroom ->maps}}</textarea>
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
                                                                    {{ $showroom->status === 'published' ? 'selected' : '' }}>
                                                                    Published</option>
                                                                <option value="pending"
                                                                    {{ $showroom->status === 'pending' ? 'selected' : '' }}>
                                                                    Pending</option>
                                                                <option value="draft"
                                                                    {{ $showroom->status === 'draft' ? 'selected' : '' }}>Draft
                                                                </option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="bg-ad-form right-sidebar mt-3">
                                                <div class="widget meta-boxes">
                                                    <div class="widget-title">
                                                        <h4><label for="status" class="m-0 control-label required"
                                                                aria-required="true">Showroom Schedules</label></h4>
                                                    </div>
                                                    <div class="widget-body p-3">
                                                        <div class="ui-select-wrapper form-group mt-4">
                                                            @foreach ($daysOfWeek as $day)
                                                            <div class="form-group">
                                                                <label for="active_{{ $day }}">{{ __('Active on ') . $day }}</label>
                                                                <input type="checkbox" name="active_{{ $day }}" id="active_{{ $day }}" onchange="toggleWorkingFields(this)" {{ old("active_{$day}", optional($showroom_schedules->where('day', $day)->first())->active) ? 'checked' : '' }}>
                                                            </div>
                                                            <div class="form-group working-value-group" id="workingvalue_group_{{ $day }}" style="{{ old("active_{$day}", optional($showroom_schedules->where('day', $day)->first())->active) ? '' : 'display: none' }}">
                                                                <label for="workingvalue_{{ $day }}">{{ __('Working Value on ') . $day }}</label>
                                                                <input type="number" name="workingvalue_{{ $day }}" id="workingvalue_{{ $day }}" min="0" max="30" value="{{ old("workingvalue_{$day}", optional($showroom_schedules->where('day', $day)->first())->workingvalue) }}" onchange="generateWorkingHours(this)">
                                                            </div>
                                                            <div class="form-group working-hours-group" id="{{ $day }}" style="{{ old("active_{$day}", optional($showroom_schedules->where('day', $day)->first())->active) ? '' : 'display: none' }}">
                                                                <label for="{{ $day }}">Working Hours on {{ $day }}</label>
                                                                <div class="working-hours">
                                                                    @foreach (optional($showroom_schedules->where('day', $day)->first())->workingHours ?? [] as $index => $workingHour)
                                                                        <input type="time" name="{{ $day }}[{{ $index }}][start_time]" value="{{ old("{$day}.{$index}.start_time", $workingHour->start_time) }}" required>
                                                                        <input type="time" name="{{ $day }}[{{ $index }}][end_time]" value="{{ old("{$day}.{$index}.end_time", $workingHour->end_time) }}" required>
                                                                    @endforeach
                                                                </div>
                                                            </div>
                                                            <input type="hidden" name="{{ $day }}[]" id="{{ $day }}_hidden">
                                                        @endforeach
                                                        
                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                </form>
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

        function toggleWorkingFields(checkbox) {
            const day = checkbox.id.replace('active_', '');
            const workingValueGroup = document.getElementById(`workingvalue_group_${day}`);
            const workingHoursGroup = document.getElementById(day);

            if (checkbox.checked) {
                workingValueGroup.style.display = 'block';
                workingHoursGroup.style.display = 'block';
                generateWorkingHours(workingValueGroup.querySelector(`#workingvalue_${day}`));
            } else {
                workingValueGroup.style.display = 'none';
                workingHoursGroup.style.display = 'none';
                document.getElementById(`${day}_hidden`).disabled = false;
            }
        }


        function generateWorkingHours(input) {
            const day = input.id.replace('workingvalue_', '');
            const workingHoursContainer = document.querySelector(`#${day} .working-hours`);
            workingHoursContainer.innerHTML = '';

            const maxWorkingHours = parseInt(input.value);
            if (maxWorkingHours > 0) {
                for (let i = 0; i < maxWorkingHours; i++) {
                    const startTimeInput = document.createElement('input');
                    startTimeInput.type = 'time';
                    startTimeInput.name = `${day}[${i}][start_time]`;
                    startTimeInput.required = true;

                    const endTimeInput = document.createElement('input');
                    endTimeInput.type = 'time';
                    endTimeInput.name = `${day}[${i}][end_time]`;
                    endTimeInput.required = true;

                    workingHoursContainer.appendChild(startTimeInput);
                    workingHoursContainer.appendChild(endTimeInput);
                }
            }
        }


        // Attach event listeners to the checkboxes
        const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        daysOfWeek.forEach(day => {
            const checkbox = document.getElementById(`active_${day}`);
            checkbox.addEventListener('change', () => toggleWorkingFields(checkbox));
        });
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="/js/bootstrap-tagsinput-latest/dist/bootstrap-tagsinput.min.js" defer></script>
    {{--     @include('ckfinder::setup'); --}}
@endsection
