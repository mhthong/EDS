@extends('layouts.app')

@section('header')
    @include('layouts.headerad')


    <!-- Include Bootstrap CSS -->
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">


    <!-- Include Bootstrap Table CSS -->
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.18.3/bootstrap-table.min.css">

    <!-- Link thư viện Bootstrap DatePicker CSS -->
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css">

    <!-- Other CSS files -->
    <!-- Include jQuery -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <!-- Include Bootstrap JavaScript -->
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    <!-- Include Bootstrap Table JavaScript -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.18.3/bootstrap-table.min.js"></script>
    <script
        src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.18.3/extensions/editable/bootstrap-table-editable.min.js">
    </script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.18.3/extensions/export/bootstrap-table-export.min.js">
    </script>
    <script src="//cdn.rawgit.com/hhurz/tableExport.jquery.plugin/4.0.11/dist/tableExport.min.js"></script>
    <script
        src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.18.3/extensions/filter-control/bootstrap-table-filter-control.min.js">
    </script>
    <!-- Link thư viện Bootstrap DatePicker JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>
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
                        <div id="toolbar">
                            <select class="form-control">
                                <option value="">Export Basic</option>
                                <option value="all">Export All</option>
                                <option value="selected">Export Selected</option>
                            </select>
                        </div>
                        <table id="table" data-toggle="table" data-search="true" data-filter-control="true"
                            data-show-export="true" data-click-to-select="true" data-toolbar="#toolbar">

                            <thead>
                                <tr>
                                    <th data-field="state" data-checkbox="true"></th>
                                    <th data-field="image">Image</th>
                                    <th data-field="name" data-filter-control="input">Name</th>
                                    <th data-field="date" data-filter-control="datepicker" data-sortable="true">Date</th>
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
                                            <td></td>
                                            <td data-field="image" class="custom-table-img">
                                                {{ $row->image }}
                                            </td>

                                            <td>{{ $row->name }}</td>

                                            <td class="custom-date-table"> @isset($row->created_at)
                                                    {{ $row->created_at->format('m/d/Y') }}
                                                @endisset
                                            </td>

                                            <td>{{ $row->description }}</td>

                                            <td class="custom-status {{ $row->status }}">
                                                @isset($row->status)
                                                    {{ $row->status }}
                                                @endisset
                                            </td>
                                            <td>
                                                @foreach ($row->categories as $category)
                                                    {{ $category->menu->name }}
                                                @endforeach
                                            </td>
                                            <td style="text-align: center; width:100px;">{{ $row->id }}</td>
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
    <!-- Your Custom JavaScript -->
    <script>
        var $table = $('#table');
        var selectedRows = [];
        $(function() {
            $('#toolbar').find('select').change(function() {
                $table.bootstrapTable('refreshOptions', {
                    exportDataType: $(this).val()
                });

                     // Lấy danh sách tùy chọn
        const selectElement = document.querySelector('.bootstrap-table-filter-control-status');
        const options = selectElement.querySelectorAll('option');

        // Lặp qua các tùy chọn và thực hiện xử lý
        options.forEach(option => {
            const originalValue = option.getAttribute('value');
            const strippedValue = originalValue.replace(/<\/?i>/g, ''); // Xóa thẻ <i>



            option.setAttribute('value', strippedValue);
            option.textContent = strippedValue;

            // Nếu tùy chọn này đã được chọn, cập nhật lại selected
            if (option.selected) {
                selectElement.value = strippedValue;

            }

        });
        
            });



            // ...


            // ... Rest of your JavaScript code ...
        })



        // Định nghĩa hàm formatter
        function imageFormatter(value, row, index) {
            return '<img src="' + value + '" alt="" height="60px" width="60px">';
        }

        // Định nghĩa hàm formatter cho cột trạng thái
        function statusFormatter(value, row, index) {
            return '<i>' + value + '</i>';
        }

        function statusFilterFormatter(value, row, index) {
                    return value;
        }
        // Định nghĩa hàm formatter cho cột trạng thái trong select filter
        // Định nghĩa hàm formatter cho cột trạng thái trong select filter
        function statusFilterFormatter(value, row, index) {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = value;
            var options = tempDiv.getElementsByTagName('i');
            var text = '';
            for (var i = 0; i < options.length; i++) {
                text += options[i].textContent; // Sử dụng textContent để chỉ lấy nội dung văn bản
            }
            return text;
        }

        function ActionFormatter(value, row, index) {
            var editRoute = "{{ route('edit-posts', ['id' => ':id']) }}".replace(':id', value);
            var deleteRoute = "{{ route('posts.delete', ['id' => ':id']) }}".replace(':id', value);

            return `
        <button class="bg-none">
            <a href="${editRoute}">
                <i class="fa-sharp fa-solid fa-pen-to-square"></i>
            </a>
        </button>
        <form method="POST" action="${deleteRoute}" onsubmit="return ConfirmDelete(this)" class="p-0" style="display: inline;">
            @method('DELETE')
            @csrf
            <button class="bg-none" type="submit" onclick="return confirm('Are you sure you want to delete this item?')">
                <i class="fa-solid fa-trash"></i>
            </button>
        </form>`;
        }

        function ConfirmDelete(form) {
            return confirm('Are you sure you want to delete this item?');
        }


        $table.bootstrapTable({
            pagination: true,
            paginationPreText: 'Previous',
            paginationNextText: 'Next',
            pageList: [10, 20, 50, 100, 'all'],
            showFooter: false,
            columns: [{
                    checkbox: true,
                }, {
                    field: 'image', // Tên trường trong dữ liệu
                    title: 'Image',
                    formatter: imageFormatter
                }, {
                    field: 'name',
                    title: 'Name'
                }, {
                    field: 'date',
                    title: 'Date'
                },
                {
                    field: 'description',
                    title: 'Description'
                }, {
                    field: 'status', // Tên trường trong dữ liệu
                    title: 'status',
                    formatter: statusFormatter, // Hàm formatter để hiển thị dữ liệu
                    filterFormatter: statusFilterFormatter, // Hàm formatter cho dropdown filter
                    dataFilter: function(value, row, index) {
                        return value; // Giá trị gốc không thay đổi
                    }
                },
                {
                    field: 'Categories',
                    title: 'Categories'
                }, {
                    field: 'Action', // Tên trường trong dữ liệu
                    title: 'Action',
                    formatter: ActionFormatter
                },
            ]
        });


        var trBoldBlue = $("table");
        $(trBoldBlue).on("click", "tr", function() {
            $(this).toggleClass("bold-blue");
        });
    </script>

    <script>
        // Lấy danh sách tùy chọn
        const selectElement = document.querySelector('.bootstrap-table-filter-control-status');
        const options = selectElement.querySelectorAll('option');

        // Lặp qua các tùy chọn và thực hiện xử lý
        options.forEach(option => {
            const originalValue = option.getAttribute('value');
            const strippedValue = originalValue.replace(/<\/?i>/g, ''); // Xóa thẻ <i>



            option.setAttribute('value', strippedValue);
            option.textContent = strippedValue;

            // Nếu tùy chọn này đã được chọn, cập nhật lại selected
            if (option.selected) {
                selectElement.value = strippedValue;

            }

        });
    </script>
@endsection
