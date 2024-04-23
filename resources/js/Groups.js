
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import IndexGroups from './components/GroupsComponent.vue'

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';


Vue.use(Vuetify);


new Vue({
    vuetify: new Vuetify(),
    el: '#Groups',
    components: {
        IndexGroups,
    },
    data: {
        adminId: document.getElementById('Groups').getAttribute('data-admin-id'),
        artistId: document.getElementById('Groups').getAttribute('data-artist-id'),
        employeeId: document.getElementById('Groups').getAttribute('data-employee-id')
    },
});
