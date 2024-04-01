
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import ShowroomTable from './components/ShowroomTable.vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';


Vue.use(Vuetify);


new Vue({
    vuetify: new Vuetify(),
    el: '#ShowroomTable',
    components: {
        ShowroomTable,
    },
    data: {
        adminId: document.getElementById('ShowroomTable').getAttribute('data-admin-id'),
        artistId: document.getElementById('ShowroomTable').getAttribute('data-artist-id'),
        employeeId: document.getElementById('ShowroomTable').getAttribute('data-employee-id')
    },
});
