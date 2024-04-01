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


                @if (Auth::check())
                    @if (Auth::user() instanceof \App\Models\Artists)
                        <div id="ArtistTable" data-artist-id="{{ auth()->id() }}">
                            <!-- Render your AdminDashboard component here -->
                            <artist-table></artist-table>
                        </div>
                    @elseif (Auth::user() instanceof \App\Models\Admin)
                        <div id="ArtistTable" data-admin-id="{{ auth()->id() }}"
                            manage_supers = "{{ Auth::user()->manage_supers }}">
                            <!-- Render your AdminDashboard component here -->
                            <artist-table></artist-table>
                        </div>
                    @elseif (Auth::user() instanceof \App\Models\Employee)
                        <div id="ArtistTable" data-employee-id="{{ auth()->id() }}">
                            <!-- Render your AdminDashboard component here -->
                            <artist-table></artist-table>
                        </div>
                    @endif
                @else
                    <p>Welcome, Guest!</p>
                    <!- @endif


                <div class="main__body__data">

                </div>
            </div>
        </section>
    </main>
@endsection


@section('footer')
    @include('layouts.footerad')
@endsection

@section('script')
    <script src="/js/ArtistTable.js" defer></script>
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
</Style>
@endsection
