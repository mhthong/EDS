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

                <button type="button" class="bg-none" data-bs-toggle="modal" data-bs-target="#createModal">
                    BOOK NOW
                </button>
                <!-- Create popup modal -->
                <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="createModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <!-- Add form for Create action -->

                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>

                            <form action="{{route('bookings.store')}}" method="post">
                                @csrf
                                <div class="modal-body">
                                    <!-- Add form fields here -->
                                    <div id="app">
                                        <create-booking></create-booking>
                                    </div>
                                    <!-- Add more fields as needed -->
                                </div>
    
                            </form>


                        </div>
                    </div>
                </div>


                <div class="main__body__data">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="">Date Columns : </label>
                            <select name="datecolumns" id="datecolumns">
                                <option value=""></option>
                                <option value="7">Booking Date Create</option>
                                <option value="8">Treatment Date</option>

                            </select>

                            <label for="start-date-filter">Start Date : </label>
                            <input type="date" id="start-date-filter" class="filter-datepicker">

                            <label for="end-date-filter">End Date : </label>
                            <input type="date" id="end-date-filter" class="filter-datepicker">

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
                                        <th data-field="Remaining"></th>
                                        <th data-field="TotalRevenue"></th>
                                        <th data-field="Source">Source</th>
                                        <th data-field="Action"></th>
                                    </tr>
                                </thead>
                                <!-- ... -->

                                <tbody id="bookingTableBody">
                                    <!-- Dữ liệu sẽ được thêm vào đây bằng JavaScript -->
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
    <script>
        axios.get('/api/all-data')
            .then(response => {

                const bookingData = response.data;

                const tableBody = document.getElementById("bookingTableBody");

                bookingData.forEach(booking => {
                    const formattedCreatedDate = moment(booking.created_at).format('YYYY-MM-DD');
                    const row = document.createElement("tr");
                    row.innerHTML = `
                    <td>${booking.id}</td>
                    <td>${booking.get.Name}</td>
                    <td>Email : ${booking.get.Email}, Address : ${booking.get.Address} , Phone : ${booking.get.Phone}</td>
                    <td>${booking.services.map(service => service.Name).join(', ')}</td> <!-- Hiển thị tên dịch vụ -->
                    <td>${booking.price ? booking.price.Total_price : 'N/A'}</td> <!-- Hiển thị giá -->
                    <td>${booking.showroom.Name}</td>
                    <td>${booking.artist.name}</td>
                    <td>${formattedCreatedDate}</td>
                    <td>${booking.date}</td>
                    <td>${booking.time}</td>
                    <td>${booking.price ? booking.price.Deposit_price : 'N/A'}</td> <!-- Hiển thị giá -->
                    <td>${booking.payment ? booking.payment.payment_type : 'N/A'}</td> <!-- Hiển thị loại thanh toán -->
                    <td>${booking.status}</td>
                    <td>${booking.price ? booking.price.Remaining_price : 'N/A'}</td>
                    <td>${booking.price ? booking.price.Total_price : 'N/A'}</td> 
                    <td></td>
                    <td></td> 
                `;
                    tableBody.appendChild(row);
                });

                $(document).ready(function() {
                    const table = $('#table').DataTable({
                        scrollX: true,
                        autoWidth: false,
                        columnDefs: [{
                                type: 'date',
                                targets: [7, 8]
                            } // Đặt kiểu dữ liệu date cho cột Treatment Date và Booking Date Create
                        ],
                    });


                    $('#start-date-filter, #end-date-filter, #datecolumns').on('change', function() {
                        var startDate = $('#start-date-filter').val();
                        var endDate = $('#end-date-filter').val();
                        var datecolumns = $('#datecolumns').val();

                        if (startDate <= endDate && datecolumns !== "" && startDate !== "" &&
                            endDate !== "") {
                            applyFilter(startDate, endDate, datecolumns);
                        } 
                    });

           
                    table.columns([5, 6, 11, 12, 15]).every(function() {

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
                            // Clear the current search in the target column
                            table.columns([datecolumns]).search('').draw();
                        // Custom filtering function
                        $.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
                            const dateStr = data[
                                datecolumns]; // Lấy giá trị ngày tháng trong cột đã chọn
                            const date = new Date(dateStr);
                            const formattedDate = moment(date).format('YYYY-MM-DD');
                            if (startDate <= formattedDate && endDate >= formattedDate) {
                                return true; // Trả về true nếu ngày tháng nằm trong khoảng lọc
                            }
                            return false; // Trả về false nếu không thoả mãn điều kiện lọc
                        });
                        // Vẽ lại bảng sau khi áp dụng lọc
                        table.draw();
                        // Loại bỏ bộ lọc tùy chỉnh sau khi vẽ lại bảng
                        $.fn.dataTable.ext.search.pop();

                    }

                    // Ghi log dữ liệu sau khi đã thêm vào bảng
                    console.log(table.data().toArray());
                });
                // Add event listener to the filter inputs
            })
            .catch(error => {
                console.error(error);
            });
    </script>


@endsection
