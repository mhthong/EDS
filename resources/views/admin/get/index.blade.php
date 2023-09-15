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

                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div class="main__body__data__header">
                            <div class="">
                    
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

                        <div class="bg-ad flexb-col-c">

                            <table id="table" class="table-reponsive">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Address</th>
                       
                                    </tr>
                                </thead>
                                <tbody>
                                    @isset($gets)
                                        @foreach ($gets as $get)
                                            <tr>
                                                <td>{{ $loop->index + 1 }}</td>
                                                <td>{{ $get->Name }}</td>
                                                <td>{{ $get->Email }}</td>
                                                <td>{{ $get->Phone }}</td>
                                                <td>{{ $get->Address }}</td>
                                           {{--      <td>


                                                    <button class="bg-none">
                                                        <a href="{{ route('get.edit', ['get' => $get->id]) }}">
                                                            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                                                        </a>
                                                    </button>


                                                    <form action="{{ route('get.destroy', ['get' => $get->id]) }}"
                                                        method="POST" style="display: inline;">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="submit" class="bg-none"
                                                            onclick="return confirm('Are you sure you want to delete this get?')">
                                                            <i class="fa-solid fa-trash"></i></button>

                                                    </form>
                                                </td> --}}
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
                excelData.push(['No.', 'Client Name', 'Client Info', 'Services',
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
