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

                            <table id="table" class="table-reponsive">
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
                                    @isset($employee)
                                        @foreach ($employee as $row)
                                            <tr>
                                                <td class="p-1"><input type="checkbox" name="check[]"
                                                        value="{{ $row->id }}" id="">
                                                    {{ $stt++ }}</td>
                                                <td>
                                                    @if ($row->avatar =='')
                                                    <img src="{{ asset("public/storage/photos/1/user.jpeg") }}" alt="" height="60px"
                                                    width="60px"></td>
                                                    @else
                                                    <img src="{{ asset($row->avatar) }}" alt="" height="60px"
                                                    width="60px"></td>   
                                                    @endif
                                
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
                                                        <a href="{{ route('employee.edit', $row->id) }}">
                                                            <i class="fa-solid fa-user-pen" style="color: #74C0FC;"></i>
                                                        </a>
                                                    </button>
                                                    <form method="POST" action="{{ route('employee.destroy', $row->id) }}"
                                                        onsubmit="return ConfirmDelete(this)" class="p-0"
                                                        style="display: inline;">
                                                        @method('DELETE')
                                                        @csrf
                                                        <button class="bg-none" type="submit">
                                                            <i class="fa-solid fa-trash" style="color: #ff0000;"></i>
                                                        </button>
                                                    </form>
                                                </td>
                                            </tr>
                                        @endforeach
                                    @endisset
                                </tbody>
                            </table>
            
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
        autoWidth: false,
    });
    
});

</script>
@endsection
