@extends('layouts.app')

@section('header')
    @include('layouts.headerad')

    <!-- Include Moment.js library -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
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
                <div class="modal fade bd-example-modal-lg" id="createModal" tabindex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <!-- Add form for Create action -->


                            @if (Auth::check())
                                @if (Auth::user() instanceof \App\Models\Artists)

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
                            <div class="" style="
                            display: flex;
                        ">
                                <button type="button" class="btn-sub btn btn-info" data-bs-toggle="modal"
                                    data-bs-target="#createModal" data-target=".bd-example-modal-lg">
                                    New Book
                                </button>

                                <div class="download-buttons">
                                    <button type="button" class="btn-sub btn btn-success "
                                        id="download-visible-data">Download
                                        Visible Data</button>
                                    <button type="button" class="btn-sub btn btn-primary" id="download-all-data">Download
                                        All
                                        Data</button>
                                </div>

                            </div>
                        </div>

                        <div class="col-12 mt-4" style="    display: flex;
                        justify-content: start;
                        flex-wrap: wrap;">
                            <div class="controls col-12 col-md-4 col-lg-3 m-2">
                                <label class="label-date active" for="">Date Columns : </label>
                                <select name="datecolumns" id="datecolumns">
                                    <option value=""></option>
                                    <option value="7">Booking Date Create</option>
                                    <option value="8">Treatment Date</option>

                                </select>
                            </div>
                            <div class="controls col-12 col-md-4 col-lg-3 m-2">
                                <label class="label-date active" for="start-date-filter">Start Date : </label>
                                <input type="date" id="start-date-filter" class="filter-datepicker">
                            </div>
                            <div class="controls col-12 col-md-4 col-lg-3 m-2">
                                <label class="label-date active" for="end-date-filter">End Date : </label>
                                <input type="date" id="end-date-filter" class="filter-datepicker">

                            </div>
                        </div>
                        </div>



                        <div class="bg-ad flexb-col-c">

                            <table id="table" class="table-reponsive">
                                <!-- ... -->
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th data-field="ClientName">Client Name</th>
                                        <th data-field="ClientInfo">Client Info</th>
                                        <th data-field="Services">Services</th>
                                        <th data-field="Price">Price</th>
                                        <th data-field="Location">Location</th>
                                        <th data-field="Artist">Artist</th>
                                        <th data-field="BookingDateCreate">Booking Date Create</th>
                                        <th data-field="TreatmentDate">Treatment Date</th>
                                        <th data-field="TreatmentTime">Treatment Time</th>
                                        <th data-field="Deposit">Deposit</th>
                                        <th data-field="PaymentType">Payment Type</th>
                                        <th data-field="Statustate">Status</th>
                                        <th data-field="Actiontate">Approved
                                        </th>
                                        <th data-field="Remaining">Remaining</th>
                                        <th data-field="TotalRevenue">Total Revenue</th>
                                        <th data-field="Source">Source</th>
                                        <th data-field="Action">Action</th>
                                    </tr>
                                    <tr class="tr_footer">
                                        <th></th>
                                        <th data-field="ClientName"></th>
                                        <th data-field="ClientInfo"></th>
                                        <th data-field="Services"></th>
                                        <th data-field="Price"></th>
                                        <th data-field="Location">Location</th>
                                        <th data-field="Artist">Artist</th>
                                        <th data-field="BookingDateCreate"></th>
                                        <th data-field="TreatmentDate"></th>
                                        <th data-field="TreatmentTime"></th>
                                        <th data-field="Deposit"></th>
                                        <th data-field="PaymentType">Payment Type</th>
                                        <th data-field="Statustate">Status</th>
                                        <th data-field="Actiontate">Approved
                                        </th>
                                        <th data-field="Remaining"></th>
                                        <th data-field="TotalRevenue"></th>
                                        <th data-field="Source">Source</th>
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
                                            <td>{{ $booking->id }}</td>
                                            <td>{{ $booking->get->Name }}</td>
                                            <td>
                                                <p>Email: {{ $booking->get->Email }}</p>
                                                <p>Address: {{ $booking->get->Address }}</p>
                                                <p>Phone: {{ $booking->get->Phone }}</p>
                                            </td>
                                            <td>{{ $booking->services->pluck('Name')->join(', ') }}</td>
                                            <td>{{ $booking->price ? $booking->price->servies_price : 'N/A' }}</td>
                                            <td>{{ $booking->showroom->Name }}</td>
                                            <td>{{ $booking->artist->name }}</td>
                                            <td>{{ $booking->created_at->format('Y-m-d') }}</td>
                                            <td>{{ $booking->date }}</td>
                                            <td>
                                                <p>Start time: {{ $booking->time }}</p>
                                                <p>End time: {{ $booking->time_end }}</p>
                                            </td>
                                            <td>{{ $booking->price ? $booking->price->Deposit_price : 'N/A' }}</td>
                                            <td>{{ $booking->payment ? $booking->payment->payment_type : 'N/A' }}</td>
                                            <td>{{ $booking->status }}</td>
                                            <td>{{ $booking->action }}</td>
                                            <td>{{ $booking->price ? $booking->price->Remaining_price : 'N/A' }}</td>
                                            <td>{{ $booking->price ? $booking->price->Total_price : 'N/A' }}</td>
                                            <td>{{ $booking->source_name }}</td>
                                            <td>
                                                <button
                                                class="custom-btn btn-16"
                                                type="button"
                                              >
                                              <a class="a" href="{{ route($route, ['id' => $booking->id]) }}">Edit</a>
                                              </button>
                                               
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
                order: [[0, 'desc']],
                autoWidth: false,
                columnDefs: [{
                    type: 'date',
                    targets: [7, 8]
                }]

            });


            // Theo dõi sự thay đổi của trường endDate
            $('#end-date-filter').on('change', function() {
                const startDate = $('#start-date-filter').val();
                const endDate = $(this).val();
                const datecolumns = $('#datecolumns').val();

                if (startDate && endDate && datecolumns) {
                    if (startDate <= endDate) {
                        applyFilter(startDate, endDate, datecolumns);
                    } else {
                        alert('Start date must be before or equal to end date.');
                        // Reset the endDate field to an empty value
                        $(this).val('');
                    }
                }
            });



            table.columns([5, 6, 11, 12,13, 15]).every(function() {
                const column = this;
                const select = $('<select><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function() {
                        const val = $.fn.dataTable.util.escapeRegex($(this).val());
                        column.search(val ? '^' + val + '$' : '', true, false).draw();
                    });

                column.data().unique().sort().each(function(d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>');
                });
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
                const visibleData = table.rows({
                    search: 'applied'
                }).data().toArray();
                const fileName = generateFileName('visible_data', 'xlsx');
                downloadDataToExcel(visibleData, fileName);
            });

            $('#download-all-data').on('click', function() {
                const allData = table.rows().data().toArray();
                const fileName = generateFileName('all_data', 'xlsx');
                downloadDataToExcel(allData, fileName);
            });



            // Hàm để loại bỏ thẻ HTML từ chuỗi
            function stripHtmlTags(html) {
                var tmp = document.createElement("div");
                tmp.innerHTML = html;
                return tmp.textContent || tmp.innerText || "";
            }

            // Hàm để tạo và tải tệp Excel
            function downloadDataToExcel(data, filename) {
                const excelData = [];
                excelData.push(['No.', 'Client Name', 'Client Info', 'Services', 'Price', 'Location', 'Artist',
                    'Booking Date Create', 'Treatment Date', 'Time', 'Deposit', 'Payment Type', 'Status',
                    'Remaining', 'Total Revenue', 'Source', 'Link'
                ]);

                data.forEach(row => {
                    // Loại bỏ thẻ HTML từ các giá trị cần xuất
                    const rowData = Object.values(row).map(value => {
                        if (typeof value === 'string') {
                            return stripHtmlTags(value);
                        }
                        return value;
                    });
                    excelData.push(rowData);
                });

                const wb = XLSX.utils.book_new();
                const ws = XLSX.utils.aoa_to_sheet(excelData);
                XLSX.utils.book_append_sheet(wb, ws, 'Data');
                XLSX.writeFile(wb, filename);
            }
        });
    </script>
@endsection
