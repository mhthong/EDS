@extends('layouts.app')

@section('header')
    @include('layouts.headerad')

    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">
    <link href="/js/bootstrap-tagsinput-latest/src/bootstrap-tagsinput.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.11.6/css/bootstrap-datepicker.min.css">

    <!-- Include necessary JavaScript libraries -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>

    <!-- Include Moment.js library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
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

                <div class="main__body__data">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 flexb-c">
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
    <script>
        axios.get('/api/all-data')
            .then(response => {

                const bookingData = response.data;

                const tableBody = document.getElementById("bookingTableBody");

                function formatDate(dateString) {
                    const date = new Date(dateString);
                    const day = date.getDate();
                    const month = date.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
                    const year = date.getFullYear();
                    return `${day}-${month}-${year}`;
                }
                bookingData.forEach(booking => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                    <td>${booking.id}</td>
                    <td>${booking.get.Name}</td>
                    <td>Email : ${booking.get.Email}, Address : ${booking.get.Address} , Phone : ${booking.get.Phone}</td>
                    <td>${booking.services.map(service => service.Name).join(', ')}</td> <!-- Hiển thị tên dịch vụ -->
                    <td>${booking.price ? booking.price.Total_price : 'N/A'}</td> <!-- Hiển thị giá -->
                    <td>${booking.showroom.Name}</td>
                    <td>${booking.artist.name}</td>
                    <td>${formatDate(booking.created_at)}</td>
                    <td>${formatDate(booking.date)}</td>
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
                                targets: [8, 9]
                            } // Đặt kiểu dữ liệu date cho cột Treatment Date và Booking Date Create
                        ],
                    });

                    // Đặt kiểu dữ liệu select cho trường Status, Artist và Location
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

                    // Ghi log dữ liệu sau khi đã thêm vào bảng
                    console.log(table.data().toArray());
                });


            })
            .catch(error => {
                console.error(error);
            });
    </script>
@endsection
