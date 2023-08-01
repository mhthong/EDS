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
                                        <th>Address</th>
                                        <th>Phone</th>
                                        <th>Description</th>
                                        <th>status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @isset($showrooms)
                                        @foreach ($showrooms as $showroom)
                                            <tr>
                                                <td>{{ $loop->index + 1 }}</td>
                                                <td>{{ $showroom->Name }}</td>
                                                <td>{{ $showroom->Address }}</td>
                                                <td>{{ $showroom->Phone }}</td>
                                                <td>{{ $showroom->Description }}</td>
                                                <td>
                                                @if ($showroom->status == 'published')
                                                    <span class="published"> {{ $showroom->status }}</span>
                                                @elseif ($showroom->status == 'pending')
                                                    <span class="pending">Pending</span>
                                                @elseif ($showroom->status == 'draft')
                                                    <span class="draft">Draft</span>
                                                @endif
                                                
                                                </td>
                    
                                                <td>


                                                    <button class="bg-none">
                                                        <a href="{{ route('showrooms.edit', ['showroom' => $showroom->id]) }}">
                                                            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                                                        </a>
                                                    </button>


                                                    <form action="{{ route('showrooms.destroy', ['showroom' => $showroom->id]) }}"
                                                        method="POST" style="display: inline;">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="submit" class="bg-none"
                                                            onclick="return confirm('Are you sure you want to delete this showroom?')">
                                                            <i class="fa-solid fa-trash"></i></button>

                                                    </form>
                                                </td>
                                            </tr>
                                        @endforeach
                                    @endisset

                                </tbody>
                            </table>



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
