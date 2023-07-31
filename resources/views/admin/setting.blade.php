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

            @include('admin.ViewCompanySetting')

            </div>

        </div>
    </main>
@endsection

@section('footer')
    @include('layouts.footerad')
@endsection

@section('script')
<script src="/vendor/laravel-filemanager/js/stand-alone-button.js"></script>
<script>
    var route_prefix = "/admin/laravel-filemanager";
    $('#lfm').filemanager('image', {prefix: route_prefix});
    $('#lfm1').filemanager('image', {prefix: route_prefix});
    $('#Favicon_manager').filemanager('image', {prefix: route_prefix});
    $('#Logo_manager').filemanager('image', {prefix: route_prefix});
    $('#logo_mobile_manager').filemanager('image', {prefix: route_prefix});
</script>


<Script style="text/javascript">

$(document).ready(function(){

$('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.none').removeClass('current');
    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
})


})

</Script>

<script src="{{ asset('js/add-new-form.js') }}"></script>

@endsection
