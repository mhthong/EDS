
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import ServiceTable from './components/ServiceTable.vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';


Vue.use(Vuetify);


new Vue({
    vuetify: new Vuetify(),
    el: '#ServiceTable',
    components: {
        ServiceTable,
    },
    data: {
        adminId: document.getElementById('ServiceTable').getAttribute('data-admin-id'),
        artistId: document.getElementById('ServiceTable').getAttribute('data-artist-id'),
        employeeId: document.getElementById('ServiceTable').getAttribute('data-employee-id')
    },
});
