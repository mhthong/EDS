@extends('layouts.app')

@section('header')
    @include('layouts.headerad')
    <style>
        .custom-btn {
            width: 130px;
            height: 40px;
            color: #fff;
            border-radius: 5px;
            padding: 10px 25px;
            margin-top: 1rem;
            font-family: "Lato", sans-serif;
            font-weight: 500;
            background: transparent;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
            box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
                7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
            outline: none;
        }

        /* 16 */
        .btn-16 {
            border: none;
            color: #000;
        }

        .btn-16:after {
            position: absolute;
            content: "";
            width: 0;
            height: 100%;
            top: 0;
            left: 0;
            direction: rtl;
            z-index: -1;
            box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
                7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
            transition: all 0.3s ease;
        }

        .btn-16:hover {
            color: #000;
        }

        .btn-16:hover:after {
            left: auto;
            right: 0;
            width: 100%;
        }

        .btn-16:active {
            top: 2px;
        }
    </style>
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
                            <div class="pb-3" style="    display: flex;
                            width: 100%;">
                                <a class="a" href="{{ route('showrooms.create') }}">
                                    <button class="custom-btn btn-16" type="button">
                                        Add new
                                    </button>
                                </a>
                            </div>

                            <table id="table" class="table table-reponsive ">
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
                                                            <i class="fa-solid fa-user-pen"></i>
                                                        </a>
                                                    </button>


                                                    <form action="{{ route('showrooms.destroy', ['showroom' => $showroom->id]) }}"
                                                        method="POST" style="display: inline;">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="submit" class="bg-none"
                                                            onclick="return confirm('Are you sure you want to delete this showroom?')">
                                                            <i class="fa-solid fa-trash"
                                                            style="color: #ff0000;"></i></button>

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
<script>
    $(document).ready(function() {
        const table = $('#table').DataTable({
            scrollX: true,
            order: [
                [0, 'desc']
            ],
        });
    });
</script>
@endsection
