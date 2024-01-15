
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import BookingTable from './components/BookingTable.vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';

Vue.use(Vuetify);


new Vue({
    vuetify: new Vuetify(),
    el: '#BookingTable',
    components: {
        BookingTable,
    },
    data: {
        adminId: document.getElementById('BookingTable').getAttribute('data-admin-id'),
        artistId: document.getElementById('BookingTable').getAttribute('data-artist-id'),
        employeeId: document.getElementById('BookingTable').getAttribute('data-employee-id'),
        manage_supers: document.getElementById('BookingTable').getAttribute('manage_supers')
    },
});
