
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import IndexSource from './components/Source.vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';


Vue.use(Vuetify);


new Vue({
    vuetify: new Vuetify(),
    el: '#Source',
    components: {
        IndexSource,
    },
    data: {
        adminId: document.getElementById('Source').getAttribute('data-admin-id'),
        artistId: document.getElementById('Source').getAttribute('data-artist-id'),
        employeeId: document.getElementById('Source').getAttribute('data-employee-id')
    },
});
