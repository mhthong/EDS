
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import IndexKpis from './components/Kpis.vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';


Vue.use(Vuetify);


new Vue({
    vuetify: new Vuetify(),
    el: '#Kpi',
    components: {
        IndexKpis,
    },
    data: {
        adminId: document.getElementById('Kpi').getAttribute('data-admin-id'),
        artistId: document.getElementById('Kpi').getAttribute('data-artist-id'),
        employeeId: document.getElementById('Kpi').getAttribute('data-employee-id')
    },
});
