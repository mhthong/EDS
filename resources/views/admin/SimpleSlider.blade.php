@extends('layouts.app')

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
        <div class="bg-ad flexb-col-c">



            <table class="table-reponsive">
            
                <thead>
                    <tr>
                      <th>No.</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                <tbody>
                    @foreach ($SimpleSlider as $row)
                    <tr>
                        <td><input type="checkbox" name="check[]" value="{{$row->id}}" id="">
                            {{ $stt++ }}</td>
                        <td >{{ $row->name }}</td>
                        <td >{{ $row->key }}</td>
                        <td >
                            @isset($row->status)
                            @if ( $row->status =='published')
                            <span class="published"> {{$row->status}}</span>
                            @endif

                            @if ( $row->status =='pending')
                            <span class="pending">Pending</span>
                            @endif

                            @if ( $row->status =='draft')
                            <span class="draft">Draft</span>
                            @endif

                            @endisset

                        </td>
                        <td>
                            <a href="{{ route('SimpleSlider.edit', ['id' => $row->id]) }}">
                                <button class="bg-none" type="submit" >
                                    <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                                </button>
                            </a>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>


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
@endsection
