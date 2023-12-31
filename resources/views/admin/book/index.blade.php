@extends('layouts.app')

@section('head')
    <!-- Include DateRangePicker CSS and JS -->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker@3.1.0/daterangepicker.css" />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker@3.1.0/moment.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker@3.1.0/daterangepicker.min.js"></script>
@endsection

@section('header')
    @include('layouts.headerad')

    <!-- Include Moment.js library -->
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


                <!-- Create popup modal -->
                <div class="modal fade bd-example-modal-lg" id="createModal" tabindex="-1" aria-labelledby="createModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <!-- Add form for Create action -->


                            @if (Auth::check())
                                @if (Auth::user() instanceof \App\Models\Artists)
                                    @push('styles')
                                        <style>
                                            .delete {
                                                display: none;
                                            }
                                        </style>
                                    @endpush
                                @elseif (Auth::user() instanceof \App\Models\Admin)
                                    <div class="modal-header main__body__data__header">
                                        <h5 class="m-0">Add New Booking </h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>

                                    </div>

                                    <form action="{{ route('bookings.store') }}" method="post">

                                        @csrf
                                        <div class="modal-body">
                                            <!-- Add form fields here -->
                                            <div id="app">
                                                <create-booking></create-booking>
                                            </div>
                                            <!-- Add more fields as needed -->
                                        </div>

                                    </form>
                                @elseif (Auth::user() instanceof \App\Models\Employee)
                                    @push('styles')
                                        <style>
                                            .delete {
                                                display: none;
                                            }
                                        </style>
                                    @endpush
                                    <div class="modal-header main__body__data__header">
                                        <h5 class="m-0">Add New Booking </h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>


                                    </div>

                                    <form action="{{ route('employee.bookings.store') }}" method="post">

                                        @csrf
                                        <div class="modal-body">
                                            <!-- Add form fields here -->
                                            <div id="app">
                                                <create-booking></create-booking>
                                            </div>
                                            <!-- Add more fields as needed -->
                                        </div>

                                    </form>
                                @endif
                            @endif


                        </div>
                    </div>
                </div>


                <div class="main__body__data">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="col-12">
                            <div class="col-12">
                                <div class=""
                                    style="
                            display: flex;
                        ">
                                    <button type="button" class="btn-sub btn btn-info" data-bs-toggle="modal"
                                        data-bs-target="#createModal" data-target=".bd-example-modal-lg">
                                        New Booking
                                    </button>

                                    <div class="download-buttons delete">
                                        <button type="button" class="btn-sub btn btn-success "
                                            id="download-visible-data">Download
                                            Visible Data</button>
                                        <button type="button" class="btn-sub btn btn-primary"
                                            id="download-all-data">Download
                                            All
                                            Data</button>



                                    </div>

                                </div>
                            </div>

                            <!-- Date range filter controls -->
                            <div class="col-12 mt-4" style="display: flex; justify-content: start; flex-wrap: wrap;">
                                <div class="controls col-12 col-md-4 col-lg-3 m-2">
                                    <label class="label-date active" for="date-columns">Date Columns: </label>
                                    <select class="p-2" name="datecolumns" id="datecolumns" style="border-radius: 10px;">
                                        <option value="5">Booking Date Create</option>
                                        <option value="6">Treatment Date</option>
                                    </select>
                                </div>

                                <div class="controls col-12 col-md-4 col-lg-3 m-2">
                                    <label class="label-date active" for="date-range-filter">Date Range: </label>
                                    <input type="text" class="filter-datepicker p-2" name="date-range-filter"
                                        id="date-range-filter" style="border-radius: 10px;" />
                                </div>


                            </div>

                        </div>



                        <div class="bg-ad flexb-col-c">

                            <table id="table" class="table table-striped ">
                                <!-- ... -->
                                <thead>
                                    <tr class="table-danger">
                                        <th>No.</th>
                                        <th data-field="Staff">Staff</th>
                                        <th data-field="Location">Location</th>
                                        <th data-field="Artist">Artist</th>
                                        <th data-field="ClientName">Client Name</th>
                                        <th data-field="BookingDateCreate">Booking Date Create</th>
                                        <th data-field="TreatmentDate">Treatment Date</th>
                                        <th data-field="TreatmentTime">Treatment Time</th>
                                        <th data-field="Statustate">Status</th>
                                        <th data-field="Services">Services</th>
                                        <th data-field="Source">Source</th>
                                        <th data-field="Price">Price</th>
                                        <th data-field="Deposit">Deposit</th>
                                        <th data-field="PaymentType">1st P.</th>
                                        <th data-field="1stCheck">1st Check</th>
                                        <th data-field="Remaining">Remaining</th>
                                        <th data-field="PaymentTypeSecond">2nd P.</th>
                                        <th data-field="2ndCheck">2nd Check</th>
                                        <th data-field="TotalRevenue">Total Revenue</th>
                                        <th data-field="ClientInfo">Client Info</th>
                                        <th data-field="Note">Note</th>
                                        <th data-field="Source Data">Source Data</th>
                                        <th data-field="Content">Note Status</th>
                                        <th data-field="Actiontate">Approved
                                        </th>
                                        <th data-field="Action">Action</th>
                                    </tr>
                                    <tr class="tr_footer table-danger">
                                        <th></th>
                                        <th data-field="Staff">Staff</th>
                                        <th data-field="Location">Location</th>
                                        <th data-field="Artist">Artist</th>
                                        <th data-field="ClientName"></th>
                                        <th data-field="BookingDateCreate"></th>
                                        <th data-field="TreatmentDate"></th>
                                        <th data-field="TreatmentTime"></th>
                                        <th data-field="Statustate">Status</th>
                                        <th data-field="Services"></th>
                                        <th data-field="Source">Source</th>
                                        <th data-field="Price"></th>
                                        <th data-field="Deposit"></th>
                                        <th data-field="PaymentType">1st P.</th>
                                        <th data-field="1stCheck"></th>
                                        <th data-field="Remaining"></th>
                                        <th data-field="PaymentTypeSecond">2nd P.</th>
                                        <th data-field="2ndCheck"></th>
                                        <th data-field="TotalRevenue"></th>
                                        <th data-field="ClientInfo"></th>
                                        <th data-field="Note"></th>
                                        <th data-field="Source Data"></th>
                                        <th data-field="Content"></th>
                                        <th data-field="Actiontate">Approved
                                        </th>
                                        <th data-field="Action"></th>
                                    </tr>
                                </thead>
                                <!-- ... -->
                                @php
                                    if (Auth::check()) {
                                        if (Auth::user() instanceof \App\Models\Artists) {
                                            $route = 'artists.bookings.edit';
                                        } elseif (Auth::user() instanceof \App\Models\Admin) {
                                            $route = 'bookings.edit';
                                        } elseif (Auth::user() instanceof \App\Models\Employee) {
                                            $route = 'employee.bookings.edit';
                                        } else {
                                        }
                                    }
                                @endphp

                                <tbody>
                                    @foreach ($bookings as $booking)
                                        <tr>
                                            <td><a class="a" href="{{ route($route, ['id' => $booking->id]) }}">
                                                    {{ $booking->id }}
                                                </a></td>
                                            <td>{{ $booking->source_name }}</td>
                                            <td>{{ $booking->showroom->Name }}</td>
                                            <td>{{ $booking->artist->name }}</td>
                                            <td>{{ $booking->get->Name }}</td>
                                            <td>{{ $booking->created_at->format('Y-m-d') }}</td>
                                            <td>{{ $booking->date }}</td>
                                            <td>
                                                <span>ST: {{ $booking->time }}</span>
                                                <span>ET: {{ $booking->time_end }}</span>
                                            </td>
                                            <td>{{ $booking->status }}</td>
                                            <td>{{ $booking->services->pluck('Name')->join(', ') }}</td>
                                            <td><span>{{ $booking->get->source_data }}</span></td>
                                            <td>{{ $booking->price ? intval($booking->price->servies_price) : 'N/A' }}</td>
                                            <td>{{ $booking->price ? intval($booking->price->Deposit_price) : 'N/A' }}</td>
                                            <td>{{ $booking->payment ? $booking->payment->payment_type : 'N/A' }}</td>
                                            <td>
                                                <label class="switch bookingcheck" id = "{{ $booking->payment->id }}">

                                                    <input type="hidden" id="1stchecknone_{{ $booking->payment->id }}"
                                                        name="1stcheck" value="0"
                                                        {{ $booking->payment->{'1stcheck'} == 1 ? '' : 'checked' }}>
                                                    <input type="checkbox" name="1stcheck"
                                                        id="1stcheck_{{ $booking->payment->id }}"
                                                        class="onoffswitch-checkbox" id="is_featured" value="1"
                                                        {{ $booking->payment->{'1stcheck'} == 1 ? 'checked' : '' }}>
                                                    <span class="slider"></span>
                                                </label>
                                            </td>
                                            <td>{{ $booking->price ? intval($booking->price->Remaining_price) : 'N/A' }}
                                            </td>
                                            <td>{{ $booking->payment ? $booking->payment->payment_type_remainding : 'N/A' }}
                                            </td>
                                            <td>
                                                <label class="switch bookingcheck" id = "{{ $booking->payment->id }}">
                                                    <input type="hidden" name="2ndcheck" value="0"
                                                        {{ $booking->payment->{'2ndcheck'} == 1 ? '' : 'checked' }}>
                                                    <input type="checkbox" name="2ndcheck" class="onoffswitch-checkbox"
                                                        id="is_featured" value="1"
                                                        {{ $booking->payment->{'2ndcheck'} == 1 ? 'checked' : '' }}>
                                                    <span class="slider"></span>
                                                </label>
                                            </td>
                                            <td>{{ $booking->price ? intval($booking->price->Total_price) : 'N/A' }}</td>
                                            <td><span>
                                                    Email: {{ $booking->get->Email }} , Address:
                                                    {{ $booking->get->Address }} , Phone: {{ $booking->get->Phone }}
                                                </span>
                                            </td>
                                            <td><span> {{ $booking->get->Note }} </span></td>
                                            <td><span>
                                                    <textarea name="" id="" cols="30" rows="2">{{ $booking->get->Source }}</textarea>
                                                </span></td>

                                            <td>{{ $booking->content }}</td>
                                            <td>{{ $booking->action }}</td>


                                            <td
                                                style="display: flex;
                                            gap: 10px;">
                                                <div class ="delete">
                                                    <form method="POST"
                                                        action="{{ route('bookings.delete', $booking->id) }}">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="submit" class="custom-btn btn-danger custom"
                                                            style="color:rgb(255, 116, 116); margin: 11px;"><i class="fa-solid fa-trash" style="color: #ff1f1f;"></i>
                                                        </button>
                                                    </form>
                                                </div>

                                            </td>
                                        </tr>
                                    @endforeach
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
    <script src="/js/bookcreate.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/xlsx@0.17.4/dist/xlsx.full.min.js"></script>
    <script>
        $(document).ready(function() {
            const table = $('#table').DataTable({
                scrollX: true,
                order: [
                    [0, 'desc']
                ],
                columnDefs: [{
                    type: 'date',
                    targets: [7, 8]
                }],
                stateSave: true, // Bật tính năng lưu trạng thái
                columns: [{
                        width: '20px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '150px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                    {
                        width: '100px'
                    },
                ],


            });


            table.columns([1, 2, 3, 8, 10, 13, 16, 23]).every(function() {
                const column = this;
                const select = $('<select><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function() {
                        const val = $.fn.dataTable.util.escapeRegex($(this).val());
                        column.search(val ? '^' + val + '$' : '', true, false).draw();
                    });

                column.data().unique().sort().each(function(d, j) {
                    const isSelected = column.search() === '^' + $.fn.dataTable.util.escapeRegex(
                        d) + '$';
                    select.append('<option value="' + d + '"' + (isSelected ? ' selected' : '') +
                        '>' + d + '</option>');
                });
            });



            $('#date-range-filter').daterangepicker({
                autoUpdateInput: false,
                locale: {
                    cancelLabel: 'Clear'
                },
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1,
                        'month').endOf('month')]
                }
            }, function(start, end, label) {
                // Update the input field with the selected date range
                $('#date-range-filter').val(start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD'));
            });

            // Apply date range filter on date columns change
            $('#date-range-filter').on('apply.daterangepicker', function(ev, picker) {
                const startDate = picker.startDate.format('YYYY-MM-DD');
                const endDate = picker.endDate.format('YYYY-MM-DD');
                const datecolumns = $('#datecolumns').val(); // Corrected to #date-columns

                if (startDate && endDate && datecolumns) {
                    applyFilter(startDate, endDate, datecolumns);
                } else {
                    alert('Invalid date range or date column.');
                }
            });

            // Handle cancel event for date range picker
            $('#date-range-filter').on('cancel.daterangepicker', function() {
                $(this).val('');
                applyFilter('', '', $('#datecolumns').val()); // Corrected to #date-columns
            });

            function applyFilter(startDate, endDate, datecolumns) {
                table.columns([datecolumns]).search('').draw();
                $.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
                    const dateStr = data[datecolumns];
                    const date = new Date(dateStr);
                    const formattedDate = moment(date).format('YYYY-MM-DD');
                    return (startDate <= formattedDate && endDate >= formattedDate);
                });
                table.draw();
                $.fn.dataTable.ext.search.pop();
            }

            // Hàm để tạo tên tệp với ngày tháng năm
            function generateFileName(prefix, extension) {
                const now = new Date();
                const year = now.getFullYear();
                const month = String(now.getMonth() + 1).padStart(2, '0');
                const day = String(now.getDate()).padStart(2, '0');
                const hours = String(now.getHours()).padStart(2, '0');
                const minutes = String(now.getMinutes()).padStart(2, '0');
                const seconds = String(now.getSeconds()).padStart(2, '0');

                return `${prefix}_${year}-${month}-${day}_${hours}${minutes}${seconds}.${extension}`;
            }

            // Sử dụng hàm generateFileName để tạo tên tệp

            $('#download-visible-data').on('click', function() {
                const fileName = generateFileName('visible_data', 'xlsx');

                // Lưu trạng thái DataTable trước khi làm mới
                table.state.save();

                // Làm mới DataTable
                table.rows().invalidate().draw();

                // Lấy thêm thông tin về bộ lọc hiện tại (nếu có)
                // Lấy thêm thông tin về bộ lọc hiện tại (nếu có)
                const dateRangePicker = $('#date-range-filter').data('daterangepicker');
                const startDate = dateRangePicker.startDate.format('YYYY-MM-DD');
                const endDate = dateRangePicker.endDate.format('YYYY-MM-DD');
                const datecolumns = $('#datecolumns').val();

                console.log(startDate, endDate, datecolumns);

                // Áp dụng bộ lọc tùy chỉnh nếu có
                if (startDate && endDate && datecolumns) {
                    applyFilter(startDate, endDate, datecolumns);
                }

                // Tải dữ liệu từ DataTable (đã được lọc)
                const visibleData = table.rows({
                    search: 'applied'
                }).data().toArray();

                console.log(fileName, visibleData);

                // Tải dữ liệu xuống tệp Excel
                downloadDataToExcel(visibleData, fileName);
            });


            $('#download-all-data').on('click', function() {
                // Lấy lại dữ liệu từ bảng
                const allData = table.rows().data().toArray();

                // Tạo tên tệp và tải về
                const fileName = generateFileName('all_data', 'xlsx');
                // Lưu trạng thái DataTable trước khi làm mới
                table.state.save();

                // Làm mới DataTable
                table.rows().invalidate().draw();

                // Tải dữ liệu từ DataTable
                const visibleData = table.rows({
                    search: 'applied'
                }).data().toArray();

                console.log(fileName, visibleData);

                // Tải dữ liệu xuống tệp Excel
                downloadDataToExcel(visibleData, fileName);
            });




            $('#clear-filters').on('click', function() {
                // Clear filters for all columns
                table.columns().search('').draw();

                // Clear individual column filters
                table.columns([1, 2, 3, 8, 10, 13, 16, 23]).every(function() {
                    this.search('').draw();
                });

                // Clear selected options in column filters
                table.columns([1, 2, 3, 8, 10, 13, 16, 23]).every(function() {
                    $(this.header()).find('select').val('').trigger('change');
                });
            });

            // Hàm để loại bỏ thẻ HTML từ chuỗi
            function stripHtmlTags(html) {
                var tmp = document.createElement("div");
                tmp.innerHTML = html;
                return tmp.textContent || tmp.innerText || "";
            }


            function checkCheckboxStatus(html) {
                // Tạo một div ẩn và thiết lập innerHTML bằng mã HTML được cung cấp
                var container = document.createElement('div');
                container.innerHTML = html;

                // Tìm input type="hidden"
                var hiddenInput = container.querySelector('input[type="hidden"]');

                // Tìm input type="checkbox"
                var checkboxInput = container.querySelector('input[type="checkbox"]');

                // Kiểm tra trạng thái và trả về kết quả
                if (hiddenInput && hiddenInput.hasAttribute('checked')) {
                    return false;
                } else if (checkboxInput && checkboxInput.checked) {
                    return true;
                }

                // Nếu không tìm thấy input nào có checked, trả về null
                return null;
            }

            // Sử dụng function và in kết quả

            function downloadDataToExcel(data, filename) {
                const excelData = [];

                excelData.push([
                    'No', 'Staff', 'Location', 'Artist', 'Client Name', 'Booking Date Create',
                    'Treatment Date',
                    'Treatment Time', 'Status', 'Services', 'Source', 'Price', 'Deposit', 'First Payment',
                    '1st Check', 'Remaining', 'Second Payment', '2nd Check', 'Total Revenue', 'Client Info',
                    'Note',
                    'Source_Data', 'Status Note', 'Approved'
                ]);
                console.log(data);
                data.forEach(row => {
                    // Extract values for specific columns
                    const rowData = [
                        stripHtmlTags(row[0]), // Client Info
                        stripHtmlTags(row[1]), // Client Info
                        stripHtmlTags(row[2]), // Client Info
                        stripHtmlTags(row[3]), // Client Info
                        stripHtmlTags(row[4]), // Client Info
                        stripHtmlTags(row[5]), // Client Info
                        stripHtmlTags(row[6]), // Client Info
                        stripHtmlTags(row[7]), // Client Info
                        stripHtmlTags(row[8]), // Client Info
                        stripHtmlTags(row[9]), // Client Info
                        stripHtmlTags(row[10]), // Client Info
                        stripHtmlTags(row[11]), // Client Info
                        stripHtmlTags(row[12]), // Client Info
                        stripHtmlTags(row[13]), // Client Info
                        checkCheckboxStatus(row[14]),
                        stripHtmlTags(row[15]), // Client Info4
                        stripHtmlTags(row[16]), // Client Info
                        checkCheckboxStatus(row[17]),
                        stripHtmlTags(row[18]), // Client Info
                        stripHtmlTags(row[19]), // Client Info
                        stripHtmlTags(row[20]), // Client Info
                        stripHtmlTags(row[21]), // Client Info
                        stripHtmlTags(row[22]), // Client Info
                        stripHtmlTags(row[23]), // Client Info
                    ];

                    console.log(rowData);
                    // Push rowData into excelData
                    excelData.push(rowData);

                });
                const wb = XLSX.utils.book_new();
                const ws = XLSX.utils.aoa_to_sheet(excelData);
                XLSX.utils.book_append_sheet(wb, ws, 'Data');
                XLSX.writeFile(wb, filename);
            }
            table.columns([10, 14, 17, 19, 20, 21, 22, 23, 24]).visible(false);
            @if (Auth::user() instanceof \App\Models\Admin && Auth::user()->manage_supers == 0)
                // Set column visibility for specific user roles
                table.columns([10, 14, 17, 19, 20, 21, 22, 23, 24]).visible(true);
            @elseif(Auth::user() instanceof \App\Models\Admin && Auth::user()->manage_supers == 1 )
                table.columns([14, 17]).visible(true);
            @elseif(Auth::user() instanceof \App\Models\Admin && Auth::user()->manage_supers == 2 )
                table.columns([13,16,21]).visible(true);
            @elseif(Auth::user() instanceof \App\Models\Admin && Auth::user()->manage_supers == 3 )
            table.columns([10, 19, 20, 21, 22, 23]).visible(true);
            @elseif(Auth::user() instanceof \App\Models\Admin && Auth::user()->manage_supers == 4 )
                table.columns([13,16,20,23]).visible(true);
            @else
             // Set column visibility for specific user roles
             table.columns([10, 19, 20, 21, 22, 23]).visible(true);
            @endif

        });

    </script>



    <script>
        $('.bookingcheck input[type="checkbox"]').click(function() {
            var $checkbox = $(this);
            var $bookingcheck = $checkbox.closest('.bookingcheck');
            var isChecked = $checkbox.prop('checked') ? 1 : 0;

            // Uncheck other checkboxes within the same container
            $bookingcheck.find('input[type="checkbox"]').not($checkbox).prop('checked', false);

            // Make AJAX request to update database
            updatePaymentStatus($bookingcheck, isChecked);
        });

        $('.bookingcheck input[type="hidden"]').click(function() {
            var $bookingcheck = $(this).closest('.bookingcheck');
            var checkboxInput = $bookingcheck.find('input[type="checkbox"]');

            // Toggle the checked attribute between hidden and checkbox inputs
            checkboxInput.prop('checked', !checkboxInput.prop('checked'));

            // Make AJAX request to update database
            updatePaymentStatus($bookingcheck, checkboxInput.prop('checked') ? 1 : 0);
        });

        // Function to update payment status via AJAX
        function updatePaymentStatus($bookingcheck, isChecked) {
            var paymentId = $bookingcheck.attr('id');
            var checkboxName = $bookingcheck.find('input[type="checkbox"]').attr('name');

            $.ajax({
                url: '/admin/update-payment-status/' + paymentId,
                type: 'POST',
                data: {
                    checkboxName: checkboxName,
                    isChecked: isChecked,
                    _token: '{{ csrf_token() }}'
                },
                success: function(response) {
                    // Update the div content after a successful update
                    $('#paymentStatus').text(response.paymentStatus);
                    if (isChecked == 0) {
                        // Uncheck all checkboxes
                        $bookingcheck.find('input').removeAttr('checked');

                        // Check the hidden input
                        var hiddenInput = $bookingcheck.find('input[type="hidden"]');
                        hiddenInput.attr('checked', 'checked');
                        console.log('Hidden Input Checked:', hiddenInput);
                    } else {
                        // Uncheck all checkboxes
                        $bookingcheck.find('input').removeAttr('checked');

                        // Check the checkbox input
                        var checkboxInput = $bookingcheck.find('input[type="checkbox"]');
                        checkboxInput.attr('checked', 'checked');
                        console.log('Checkbox Input Checked:', checkboxInput);
                    }


                    // Log removal of checked attributes

                },
                error: function(error) {
                    console.error(error);
                }
            });
        }
    </script>


    <Style>
        /* Thêm các cài đặt khác tùy theo ý muốn */
        /* CSS cho bảng */
        table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
        }

        /* CSS cho header của bảng */
        thead {
            background-color: #f2f2f2;
            /* Màu nền cho header */
        }

        th,
        td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            /* Đường kẻ dưới mỗi hàng */
        }

        /* CSS cho hàng chẵn */
        tr:nth-child(even) {
            background-color: #f2f2f2;
            /* Màu nền cho hàng chẵn */
        }

        /* CSS cho hover trên hàng */
        tr:hover {
            background-color: #e0e0e0;
            /* Màu nền khi di chuột vào hàng */
        }

        /* CSS cho hàng chẵn */
        tr:nth-child(even) {
            background-color: #f2f2f2;
            /* Màu nền cho hàng chẵn */
        }

        /* CSS cho hàng lẻ */
        tr:nth-child(odd) {
            background-color: #ffffff;
            /* Màu nền cho hàng lẻ */
        }

        /* CSS cho hàng chẵn */
        tr:nth-child(even) {
            background: linear-gradient(90deg, #f2f2f2, #ffffff);
            /* Gradient từ màu trắng đến màu xám nhạt */
        }

        /* CSS cho hàng lẻ */
        tr:nth-child(odd) {
            background: linear-gradient(90deg, #ffffff, #f2f2f2);
            /* Gradient từ màu xám nhạt đến màu trắng */
        }


        /* CSS cho hàng chẵn */
        tr:nth-child(even) {
            background-color: #f2f2f2;
            /* Màu nền cho hàng chẵn */
        }

        /* CSS cho hàng lẻ */
        tr:nth-child(odd) {
            background-color: #ffffff;
            /* Màu nền cho hàng lẻ */
        }

        /* Thiết lập chiều rộng cố định cho các th và td */
        th,
        td {
            padding: 10px;
            /* Padding để tạo khoảng cách và thẩm mỹ */
            text-align: center;
            /* Căn giữa nội dung trong cột */
            width: auto;
            /* Đặt chiều rộng tự động để các cột bằng nhau */
        }

        /* Bỏ thiết lập chiều rộng cố định cho th đầu tiên (nếu cần) */
        th:first-child {
            width: auto;
            /* Đặt chiều rộng tự động cho thứ tự đầu tiên */
        }

        td span {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 150px;
            /* Đặt giới hạn 50 ký tự, tùy chỉnh theo nhu cầu */
        }

        .bookingcheck .slider::after {
            left: 0;
        }
        .custom{
            width: auto;
            padding: 0px 10px;
        }
    </Style>
@endsection
