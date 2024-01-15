import Vue from 'vue';
import CreateBooking from './components/CreateBooking.vue';
import TotalPriceBookingEmployee  from './components/TotalPriceBookingEmployee.vue';
import TotalPriceBookingArtists  from './components/TotalPriceBookingArtist.vue';
import TotalPriceBookingAll  from './components/TotalPriceBookingAll.vue';


new Vue({
    el: '#app',
    components: {
        CreateBooking,
    },
    data: {
        adminId: document.getElementById('app').getAttribute('data-admin-id'),
        artistId: document.getElementById('app').getAttribute('data-artist-id'),
        employeeId: document.getElementById('app').getAttribute('data-employee-id')
    },


});


new Vue({
    el: '#price',
    components: {
        TotalPriceBookingEmployee,
        TotalPriceBookingArtists,
        TotalPriceBookingAll,
    },
    data: {
        userId: document.getElementById('price').getAttribute('data-user-id')
    },

});