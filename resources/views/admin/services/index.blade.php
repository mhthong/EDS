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
                                        <th>Price</th>
                                        <th>Sale Price</th>
                                        <th>Status</th>
                                        <th>Group</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @isset($services)
                                        @foreach ($services as $service)
                                            <tr>
                                                <td>{{ $loop->index + 1 }}</td>
                                                <td>{{ $service->Name }}</td>
                                                <td>{{ $service->Price }}</td>
                                                <td>{{ $service->Sale_Price }}</td>
                                                <td>
                                                @if ($service->status == 'published')
                                                    <span class="published"> {{ $service->status }}</span>
                                                @elseif ($service->status == 'pending')
                                                    <span class="pending">Pending</span>
                                                @elseif ($service->status == 'draft')
                                                    <span class="draft">Draft</span>
                                                @endif
                                                
                                                </td>
                                                <td>{{ $service->groupService->Name }}</td>
                                                <td>


                                                    <button class="bg-none">
                                                        <a href="{{ route('services.edit', ['service' => $service->id]) }}">
                                                            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                                                        </a>
                                                    </button>


                                                    <form action="{{ route('services.destroy', ['service' => $service->id]) }}"
                                                        method="POST" style="display: inline;">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="submit" class="bg-none"
                                                            onclick="return confirm('Are you sure you want to delete this service?')">
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
