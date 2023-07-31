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
                                        <th>Avatar</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @isset($artists)
                                        @foreach ($artists as $row)
                                            <tr>
                                                <td class="p-1"><input type="checkbox" name="check[]"
                                                        value="{{ $row->id }}" id="">
                                                    {{ $stt++ }}</td>
                                                <td> <img src="{{ asset($row->avatar) }}" alt="" height="60px"
                                                        width="60px"></td>
                                                <td>{{ $row->fullname }}</td>
                                                <td>{{ $row->email }}</td>
                                                <td>{{ $row->phone }}</td>

                                                <td style="text-align: center">
                                                    @isset($row->status)
                                                        @if ($row->status == 'published')
                                                            <span class="published"> {{ $row->status }}</span>
                                                        @elseif ($row->status == 'pending')
                                                            <span class="pending">Pending</span>
                                                        @elseif ($row->status == 'draft')
                                                            <span class="draft">Draft</span>
                                                        @endif
                                                    @endisset
                                                </td>



                                                <td style="text-align: center">

                                                   
                                                    <button class="bg-none">
                                                        <a href="{{ route('artist.show', $row->id) }}"><i class="fa-solid fa-binoculars"></i></a>
                                                    </button>

                                                    <button class="bg-none">
                                                        <a href="{{ route('artist.edit', $row->id) }}">
                                                            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                                                        </a>
                                                    </button>
                                                    <form method="POST" action="{{ route('artist.destroy', $row->id) }}"
                                                        onsubmit="return ConfirmDelete(this)" class="p-0"
                                                        style="display: inline;">
                                                        @method('DELETE')
                                                        @csrf
                                                        <button class="bg-none" type="submit"><i
                                                                class="fa-solid fa-trash"></i></button>
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
