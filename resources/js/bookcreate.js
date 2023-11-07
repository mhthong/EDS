import Vue from 'vue';
import CreateBooking from './components/CreateBooking.vue';
import EditBooking  from './components/EditBooking.vue';
import PriceBooking  from './components/PriceBooking.vue';
import TotalPriceBookingEmployee  from './components/TotalPriceBookingEmployee.vue';
import TotalPriceBookingArtists  from './components/TotalPriceBookingArtist.vue';
import TotalPriceBookingAll  from './components/TotalPriceBookingAll.vue';


new Vue({
    el: '#app',
    components: {
        CreateBooking,
        EditBooking,
        PriceBooking,
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