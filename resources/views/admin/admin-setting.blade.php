@extends('layouts.app')
@section('head')

<!-- JavaScript của jQuery -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>

<!-- JavaScript của Bootstrap -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

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

            <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-9 col-xxl-3 crop-avatar nav_form">
                <!-- Profile links -->
                <div class="block">
                    <div class="block mt-element-card mt-card-round mt-element-overlay">
                        <div class="thumbnail">
                            <div class="thumb">
                                <div class="profile-userpic mt-card-item">
                                    <div class="avatar-view mt-card-avatar mt-overlay-1">
                                        @if ($user->avatar != "")
                                        <img src="{{ asset($user->avatar) }}" class="img-fluid img" alt="avatar">
                                        @else                                      
                                            <img src="{{ asset('./storage/photos/1/Image/user-286.png') }}" class="img-fluid img" alt="avatar">
                                        @endif
                                        <div class="mt-overlay">

                                            <!-- Button để mở modal -->
                                            <button data-toggle="modal" data-target="#avatarModal" class="btn_avatar">
                                                <i class="fa-solid fa-pen" style="color: black;"></i>
                                            </button>

                                        </div>
    
                                    </div>
                                    <div class="mt-card-content">
                                        <h3 class="mt-card-name">{{ $user->name}}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /profile links -->

            </div>

            <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 flexb-c nav_content">
                <div class="bg-ad flexb-col-c">
                    <h4 class="text-center pt-3"> Change the infomation </h4>
                    <form class="mt-8 space-y-6 col-12" action="{{ route('admin.updateInfomation') }}"
                        method="POST">
                        @csrf            
                        <div class="containerInput -space-y-px mb-4">
                            <div class="input__user">
                                <label for="email">Email:</label>
                                <input id="email" name="email" type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email">
                            </div>
                        </div>
                    
                        <div class="containerInput -space-y-px mb-4">
                            <div class="input__user">
                                <label for="last_name">Last Name:</label>
                                <input id="last_name" name="last_name" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Last Name">
                            </div>
                        </div>
                        <button type="submit" style="color: cadetblue;"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium  bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                    </form>
                </div>
                <div class="bg-ad flexb-col-c">
                    <h4 class="text-center pt-3"> Change the password </h4>
                    <form class="mt-8 space-y-6 col-12" onsubmit="return validate()" action="{{ route('reset-password') }}"
                        method="POST">
                        @csrf

                        <div class="containerInput -space-y-px mb-4">
                            <div class="input__user">
                                <label for="pass">Current password :</label>
                                <input id="pass" name="pass" type="text" required
                                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Current password">
                            </div>
                        </div>
                        <div class="containerInput -space-y-px mb-4" style="position: relative;">
                            <div class="input__user">
                                <small></small>
                                <a class="eyes" onclick="passwordshow()"><i class="fa-solid fa-eye"></i></a>
                                <label for="pass">New Password (8 characters minimum):</label>
                                <input id="password-new" minlength="8" name="passwordnew" type="password" required
                                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="New Password">
                            </div>
                        </div>
                        <div class="containerInput -space-y-px mb-4" style="position: relative;">
                            <div class="input__user">
                                <small></small>
                                <a class="eyes" onclick="repasswordshow()"><i class="fa-solid fa-eye"></i></a>
                                <label for="pass">Confirm New Password (8 characters minimum):</label>

                                <input id="password-renew" minlength="8" name="passwordrenew" type="password" required
                                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Confirm New Password">
                            </div>
                        </div>
                        <button type="submit" style="color: cadetblue;"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium  bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                    </form>
                </div>
            </div>


        </div>

    </div>



<!-- Modal -->
<div class="modal fade" id="avatarModal" tabindex="-1" role="dialog" aria-labelledby="avatarModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="avatarModalLabel">Change Avatar</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                </button>
            </div>
            <div class="modal-body">
                <!-- Form để tải lên ảnh -->
                <form id="avatarForm" enctype="multipart/form-data" >
                    @csrf


                    <div class="-space-y-px mb-4">
                        <div class="containerInput">
                            <div class="form-group ">
                                <div class="-space-y-px mb-4 ">
                                    <div class="containerInput input-group change__avatar">
                                        <div class="holder holder1" id="holder1" value=""></div>
                                        <span class="input-group-btn ">
                                            <a class="text-primary" id="lfm1" data-input="avatar_image"
                                                data-preview="holder1">
                                                Choose a photo
                                            </a>
                                        </span>
                                        <p class="p p-1 col-12 bg-span">Size - W:200*200px</p>
                                        <input class="form-control" id="avatar_image" type="text"
                                            name="avatar_image" required style="display: none">
                                       
                                    </div>
    
                                </div>
    
    
                            </div>
                        </div>
                    </div>
    
                    <button type="submit" style="color: cadetblue;"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium  bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Save Avatar</button>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Script để gửi Ajax request và xử lý kết quả -->
<script>
    // Gửi Ajax request khi form được submit
    $('#avatarForm').submit(function (event) {
        event.preventDefault();

        var formData = new FormData($(this)[0]);

        $.ajax({
            url: "{{ route('admin.updateAvatar') }}",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                // Xử lý kết quả thành công
                alert('Avatar updated successfully!');
                $('#avatarModal').modal('hide');

                // Tải lại trang
                location.reload();
                },

            error: function (xhr) {
                // Xử lý kết quả thất bại
                alert('Failed to update avatar. Please try again.');
            }
        });
    });
</script>


</main>

@endsection

@section('footer')
    @include('layouts.footerad')
@endsection

@section('script')

<script src="/vendor/laravel-filemanager/js/stand-alone-button.js"></script>
<script>
    var route_prefix = "/admin/laravel-filemanager";
    $('#lfm1').filemanager('image', {prefix: route_prefix});
</script>


    <script type="text/javascript">
const validate = () => {
    const n1 = document.getElementById("password-new");
    const n2 = document.getElementById("password-renew");
    if (n1.value == n2.value) {
        return true;
    } else {
        alert("Thông tin không chính xác. Vui lòng kiểm tra lại");
        return false;
    }
};

const passwordshow = () => {
    const passwordNew = document.getElementById('password-new');
    if (passwordNew.type === 'text') {
        passwordNew.type = 'password';
    } else {
        passwordNew.type = 'text';
    }
};

const repasswordshow = () => {
    const passwordRenew = document.getElementById('password-renew');
    if (passwordRenew.type === 'text') {
        passwordRenew.type = 'password';
    } else {
        passwordRenew.type = 'text';
    }
};

let isRepasswordshowExecuted = false;

const executeRepasswordshow = () => {
    if (!isRepasswordshowExecuted) {
        repasswordshow();
        isRepasswordshowExecuted = true;
    }
};
    </script>


@endsection
