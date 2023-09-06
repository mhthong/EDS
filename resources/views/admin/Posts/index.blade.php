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
            <!-- ... nội dung khác ... -->

            <!-- start: MAIN TOP -->
            <div class="main__top">
                @include('admin.main__top')
            </div>
            <!-- end: MAIN TOP -->

            <div class="main__body">
                <div class="main__body__data">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" style="flex: auto;">
                        <label for="start-date-filter">Start Date:</label>
                        <input type="date" id="start-date-filter" class="filter-datepicker">

                        <label for="end-date-filter">End Date:</label>
                        <input type="date" id="end-date-filter" class="filter-datepicker">
                        <label for="">Status</label>
                        <select id="status-filter">
                            <option value="">All Statuses</option>
                            @isset($Posts)
                                @php
                                    $uniqueStatuses = $Posts->pluck('status')->unique();
                                    $index = 1;
                                @endphp
                                @foreach ($uniqueStatuses as $status)
                                    <option value="{{ $status }}">{{ $status }}</option>
                                @endforeach
                            @endisset
                        </select>

                        <table id="table" data-toggle="table" data-search="true" data-filter-control="true"
                            data-show-export="true" data-click-to-select="true" data-toolbar="#toolbar">
                            <thead>
                                <tr>
                                    <th data-field="state" data-checkbox="true">No.</th>
                                    <th data-field="image">Image</th>
                                    <th data-field="name" data-filter-control="input">Name</th>
                                    <th data-field="date" data-sortable="true" class="filter-datepicker">Date</th>
                                    <th data-field="description">Description</th>
                                    <th data-field="status" data-filter-control="select">Status</th>
                                    <th data-field="Categories">Categories</th>
                                    <th data-field="Action">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @isset($Posts)
                                    @foreach ($Posts as $row)
                                        <tr>
                                            <td>{{ $index++ }}</td>
                                            <td data-field="image" class="custom-table-img">
                                                <img src="{{ $row->image }}" alt="">
                                            </td>
                                            <td>{{ $row->name }}</td>
                                            <td class="custom-date-table">
                                                @isset($row->created_at)
                                                    {{ $row->created_at->format('Y-m-d') }}
                                                @endisset
                                            </td>
                                            <td>{{ $row->description }}</td>
                                            <td class="custom-status {{ $row->status }}">
                                                @isset($row->status)
                                                    <i>{{ $row->status }}</i>
                                                @endisset
                                            </td>
                                            <td>
                                                @foreach ($row->categories as $category)
                                                    {{ $category->menu->name }}
                                                @endforeach
                                            </td>
                                            <td style="text-align: center; width:100px;">
                                                <button class="bg-none">
                                                    <a href="{{ route('edit-posts', ['id' => $row->id]) }}">
                                                        <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                                                    </a>
                                                </button>
                                                <form method="POST" action="{{ route('posts.delete', ['id' => $row->id]) }}"
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
                    </div>
                </div>
            </div>
        </section>
    </main>
@endsection

@section('script')
    <script>
        $(document).ready(function() {
            // Initialize the DataTable
            var table = $('#table').DataTable();

            function applyFilter(startDate, endDate, selectedStatus) {
                // Create a custom range filtering function
                $.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
                    var currentDate = data[3];
                    var status = data[5];

                    console.log(startDate);
                    console.log(endDate);

                    console.log(selectedStatus);
               

                    if (selectedStatus !== "") {

                        if (startDate === "" || endDate === "" || startDate > endDate) {
                            if (selectedStatus === status) {
                                return true;
                            }
                            return false;
                        } else {
                            if (currentDate >= startDate && currentDate <= endDate && selectedStatus === status) {
                                return true;
                            }
                            return false;
                        }

                    } else if(startDate === "" || endDate === "" ){

                        return true;
          
                    } else if (currentDate >= startDate && currentDate <= endDate) {
                                return true;
                    }   


                });
                // Draw the table with the new filter
                table.draw();

                // Remove the custom filter after drawing the table
                $.fn.dataTable.ext.search.pop();
            }

            // Add event listener to the filter inputs
            $('#start-date-filter, #end-date-filter, #status-filter').on('change', function() {
                var startDate = $('#start-date-filter').val();
                var endDate = $('#end-date-filter').val();
                var selectedStatus = $('#status-filter').val();
                applyFilter(startDate, endDate, selectedStatus);
            });
        });
    </script>



@endsection
