
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import EmployeeTable from './components/EmployeeTable.vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';


Vue.use(Vuetify);


new Vue({
    vuetify: new Vuetify(),
    el: '#EmployeeTable',
    components: {
        EmployeeTable,
    },
    data: {
        adminId: document.getElementById('EmployeeTable').getAttribute('data-admin-id'),
        artistId: document.getElementById('EmployeeTable').getAttribute('data-artist-id'),
        employeeId: document.getElementById('EmployeeTable').getAttribute('data-employee-id')
    },
});
