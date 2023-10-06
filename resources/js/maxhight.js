import $ from 'jquery'; // Import jQuery
import 'jquery-match-height'; // Import jquery-match-height

// Áp dụng plugin cho các phần tử có lớp .fc-col-header-cell
$(document).ready(function() {
    $('.fc-col-header-cell').matchHeight();
});