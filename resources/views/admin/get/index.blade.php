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
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Address</th>
                       
                                    </tr>
                                </thead>
                                <tbody>
                                    @isset($gets)
                                        @foreach ($gets as $get)
                                            <tr>
                                                <td>{{ $loop->index + 1 }}</td>
                                                <td>{{ $get->Name }}</td>
                                                <td>{{ $get->Email }}</td>
                                                <td>{{ $get->Phone }}</td>
                                                <td>{{ $get->Address }}</td>
                                           {{--      <td>


                                                    <button class="bg-none">
                                                        <a href="{{ route('get.edit', ['get' => $get->id]) }}">
                                                            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                                                        </a>
                                                    </button>


                                                    <form action="{{ route('get.destroy', ['get' => $get->id]) }}"
                                                        method="POST" style="display: inline;">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="submit" class="bg-none"
                                                            onclick="return confirm('Are you sure you want to delete this get?')">
                                                            <i class="fa-solid fa-trash"></i></button>

                                                    </form>
                                                </td> --}}
                                            </tr>
                                        @endforeach

                                 
                                    @endisset

                                </tbody>
                            </table>
                            {{ $gets->links() }}


                            <style>
                                nav[role=navigation] {
                                    position: absolute;
                                    bottom: 50px;
                                    right: 50px;
                                }
                            </style>
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
@endsection
