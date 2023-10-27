@extends('layouts.app')

@section('header')


<script>
    $(document).ready(function() {
        const table = $('#table').DataTable({
            scrollX: true,
            order: [[0, 'desc']],
            columnDefs: [{
                type: 'date',
                targets: [7, 8]
            }],
            columns: [
        { width: '50px' }, 
        { width: '200px' }, 
        { width: '250px' },
        { width: '200px' }, 
        { width: '200px' },
        { width: '200px' }, 
        { width: '200px' },
        { width: '200px' }, 
        { width: '200px' },
        { width: '200px' }, 
        { width: '200px' },
        { width: '200px' }, 
        { width: '200px' },
        { width: '200px' }, 
        { width: '200px' },
        { width: '200px' }, 
        { width: '200px' },
        { width: '200px' },
        { width: '200px' }, 
        { width: '200px' },
    ],
            

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



        table.columns([1, 2, 14, 18,13, 15]).every(function() {
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
            excelData.push(['No.', 'Client Name', 'Client Info', 'Note','Services','Source', 'Price', 'Location', 'Artist',
                'Booking Date Create', 'Treatment Date', 'Time', 'Deposit', 'Payment Type', 'Status','Approved',
                'Remaining', 'Total Revenue', 'Staff', 'Link'
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
                <div class="modal fade bd-example-modal-lg" id="createModal" tabindex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
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
                            <div class="" style="
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
                                    <option value="3">Booking Date Create</option>
                                    <option value="4">Treatment Date</option>
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

                            <table id="table" class="table table-striped ">
                                <!-- ... -->
                                <thead>
                                    <tr class="table-danger">
                                        <th>No.</th>
                                        <th data-field="Location">Location</th>
                                        <th data-field="Artist">Artist</th>
                                        <th data-field="BookingDateCreate">Booking Date Create</th>
                                        <th data-field="TreatmentDate">Treatment Date</th>
                                        <th data-field="TreatmentTime">Treatment Time</th>
                                        <th data-field="ClientName">Client Name</th>
                                        <th data-field="ClientInfo">Client Info</th>
                                        <th data-field="Note">Note</th>
                                        <th data-field="Services">Services</th>
                                        <th data-field="Source">Source</th>
                                        <th data-field="Price">Price</th>
                                        <th data-field="Deposit">Deposit</th>
                                        <th data-field="PaymentType">Payment Type</th>
                                        <th data-field="Statustate">Status</th>
                                        <th data-field="Actiontate">Approved
                                        </th>
                                        <th data-field="Remaining">Remaining</th>
                                        <th data-field="TotalRevenue">Total Revenue</th>
                                        <th data-field="Staff">Staff</th>
                                        <th data-field="Action">Action</th>
                                    </tr>
                                    <tr class="tr_footer table-danger">
                                        <th></th>
                                        <th data-field="Location">Location</th>
                                        <th data-field="Artist">Artist</th>
                                        <th data-field="BookingDateCreate"></th>
                                        <th data-field="TreatmentDate"></th>
                                        <th data-field="TreatmentTime"></th>
                                        <th data-field="ClientName"></th>
                                        <th data-field="ClientInfo"></th>
                                        <th data-field="Note"></th>
                                        <th data-field="Services"></th>
                                        <th data-field="Source"></th>
                                        <th data-field="Price"></th>
                                        <th data-field="Deposit"></th>
                                        <th data-field="PaymentType">Payment Type</th>
                                        <th data-field="Statustate">Status</th>
                                        <th data-field="Actiontate">Approved
                                        </th>
                                        <th data-field="Remaining"></th>
                                        <th data-field="TotalRevenue"></th>
                                        <th data-field="Staff">Staff</th>
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
                                            <td>{{ $booking->showroom->Name }}</td>
                                            <td>{{ $booking->artist->name }}</td>
                                            <td>{{ $booking->created_at->format('Y-m-d') }}</td>
                                            <td>{{ $booking->date }}</td>
                                            <td>
                                                <span>Start time: {{ $booking->time }}</span>
                                                <span>End time: {{ $booking->time_end }}</span>
                                            </td>
                                            <td>{{ $booking->get->Name }}</td>
                                            <td><span>
                                                Email: {{ $booking->get->Email }} , Address: {{ $booking->get->Address }} , Phone: {{ $booking->get->Phone }}
                                                </span>
                                            </td>
                                            <td><span> {{ $booking->get->Note }} </span></td>
                                            
                                            <td>{{ $booking->services->pluck('Name')->join(', ') }}</td>
                                             <td><span>{{ $booking->get->Source }}</span></td>
                                            <td>{{ $booking->price ? $booking->price->servies_price : 'N/A' }}</td>
                                            <td>{{ $booking->price ? $booking->price->Deposit_price : 'N/A' }}</td>
                                            <td>{{ $booking->payment ? $booking->payment->payment_type : 'N/A' }}</td>
                                            <td>{{ $booking->status }}</td>
                                            <td>{{ $booking->action }}</td>
                                            <td>{{ $booking->price ? $booking->price->Remaining_price : 'N/A' }}</td>
                                            <td>{{ $booking->price ? $booking->price->Total_price : 'N/A' }}</td>
                                            <td>{{ $booking->source_name }}</td>
                                           
                                            <td>
                                                 <a class="a" href="{{ route($route, ['id' => $booking->id]) }}">
                                                <button
                                                class="custom-btn btn-16"
                                                type="button"
                                              >
                                             Edit
                                              </button>
                                               </a>
                                               <div class ="delete">
                                                <form method="POST" action="{{ route('bookings.delete', $booking->id) }}">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="custom-btn btn-danger" style="color:rgb(255, 116, 116);">Delete </button>
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
    background-color: #f2f2f2; /* Màu nền cho header */
}

th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd; /* Đường kẻ dưới mỗi hàng */
}

/* CSS cho hàng chẵn */
tr:nth-child(even) {
    background-color: #f2f2f2; /* Màu nền cho hàng chẵn */
}

/* CSS cho hover trên hàng */
tr:hover {
    background-color: #e0e0e0; /* Màu nền khi di chuột vào hàng */
}

/* CSS cho hàng chẵn */
tr:nth-child(even) {
    background-color: #f2f2f2; /* Màu nền cho hàng chẵn */
}

/* CSS cho hàng lẻ */
tr:nth-child(odd) {
    background-color: #ffffff; /* Màu nền cho hàng lẻ */
}
/* CSS cho hàng chẵn */
tr:nth-child(even) {
    background: linear-gradient(90deg, #f2f2f2, #ffffff); /* Gradient từ màu trắng đến màu xám nhạt */
}

/* CSS cho hàng lẻ */
tr:nth-child(odd) {
    background: linear-gradient(90deg, #ffffff, #f2f2f2); /* Gradient từ màu xám nhạt đến màu trắng */
}


/* CSS cho hàng chẵn */
tr:nth-child(even) {
    background-color: #f2f2f2; /* Màu nền cho hàng chẵn */
}

/* CSS cho hàng lẻ */
tr:nth-child(odd) {
    background-color: #ffffff; /* Màu nền cho hàng lẻ */
}
/* Thiết lập chiều rộng cố định cho các th và td */
th, td {
    padding: 10px; /* Padding để tạo khoảng cách và thẩm mỹ */
    text-align: center; /* Căn giữa nội dung trong cột */
    width: auto; /* Đặt chiều rộng tự động để các cột bằng nhau */
}

/* Bỏ thiết lập chiều rộng cố định cho th đầu tiên (nếu cần) */
th:first-child {
    width: auto; /* Đặt chiều rộng tự động cho thứ tự đầu tiên */
}

td span {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px; /* Đặt giới hạn 50 ký tự, tùy chỉnh theo nhu cầu */
}


</Style>
@endsection
