import Vue from 'vue';
import EditBooking  from './components/EditBooking.vue';
import PriceBooking  from './components/PriceBooking.vue';


new Vue({
    el: '#app',
    components: {
        EditBooking,
        PriceBooking,
    },
    data: {
        adminId: document.getElementById('app').getAttribute('data-admin-id'),
        artistId: document.getElementById('app').getAttribute('data-artist-id'),
        employeeId: document.getElementById('app').getAttribute('data-employee-id'),
        manage_supers: document.getElementById('app').getAttribute('manage_supers')
    },

});
