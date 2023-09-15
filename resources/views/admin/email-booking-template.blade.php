<!-- resources/views/emails/email_template.blade.php -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation</title>
    <style>
        /* CSS cho các phần cơ bản */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #000; /* Màu chữ chính */
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .logo {
            text-align: center;
            margin-bottom: 20px;
        }
        .logo img {
            max-width: 200px;
        }
        .content {
            padding: 20px;
        }
        /* CSS cho footer */
        .footer {
            background-color: #f4f4f4;
            padding: 20px;
            text-align: center;
        }
        .social-icons {
            margin-top: 10px;
        }
        .social-icons a {
            margin: 0 10px;
            text-decoration: none;
        }
        /* Tùy chỉnh màu sắc cho các phần */
        .primary-text {
            color: #d69d91; /* Hồng */
        }
        .secondary-text {
            color: #a77a72; /* Nâu nhạt */
        }
        /* Thêm các kiểu CSS khác theo nhu cầu */
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="{{ $data['Logo'] }}" alt="Eye Design Salon Logo">
        </div>
        <h1 class="primary-text">Booking Confirmation</h1>
        <div class="content">
            <p>Dear {{ $data['Name'] }},</p>
            <p>Your booking has been accepted. Here are the details:</p>
            <ul>
                <!-- Thêm màu cho các phần chính -->
                <li><strong class="primary-text">Date:</strong> {{ $data['date'] }}</li>
                <li><strong class="primary-text">Start Time:</strong> {{ $data['start_time'] }}</li>
                <li><strong class="primary-text">End Time:</strong> {{ $data['end_time'] }}</li>
                <li><strong class="primary-text">Address:</strong> {{ $data['Address'] }}</li>
                <li><strong class="primary-text">Phone:</strong> {{ $data['Phone'] }}</li>
                <li><strong class="primary-text">Showroom:</strong> {{ $data['Showroom'] }}</li>
                <li><strong class="primary-text">Showroom Address:</strong> {{ $data['Showroom_Address'] }}</li>
                <li><strong class="primary-text">Showroom Phone:</strong> {{ $data['Showroom_Phone'] }}</li>
                <li><strong class="primary-text">Deposit Price:</strong> {{ $data['Deposit_price'] }}</li>
                <li><strong class="primary-text">Remaining Price:</strong> {{ $data['Remaining_price'] }}</li>
                <li><strong class="primary-text">Services Price:</strong> {{ $data['servies_price'] }}</li>
            </ul>
            <p><strong class="primary-text">Note:</strong> {{ $data['note'] }}</p>
        </div>
    </div>
    <!-- Footer -->
    <div class="footer">
        <div class="social-icons">
            <a href="{{ $data['Facebook'] }}" target="_blank" class="secondary-text">Facebook</a>
            <a href="{{ $data['Instagram'] }}" target="_blank" class="secondary-text">Instagram</a>
            <a href="{{ $data['Youtube'] }}" target="_blank" class="secondary-text">Youtube</a>
        </div>
        <p class="secondary-text">Hotline: {{ $data['hotline'] }}</p>
        <p class="secondary-text">Hotline 1: {{ $data['hotline-1'] }}</p>
        <!-- Thêm Google Map -->
        <iframe src="{{ $data['Google-map-embed'] }}" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
</body>
</html>
