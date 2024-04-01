
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import ArtistTable from './components/ArtistTable.vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';


Vue.use(Vuetify);


new Vue({
    vuetify: new Vuetify(),
    el: '#ArtistTable',
    components: {
        ArtistTable,
    },
    data: {
        adminId: document.getElementById('ArtistTable').getAttribute('data-admin-id'),
        artistId: document.getElementById('ArtistTable').getAttribute('data-artist-id'),
        employeeId: document.getElementById('ArtistTable').getAttribute('data-employee-id')
    },
});
