import Vue from 'vue';
import FullcalendarAdmin from './components/FullcalendarAdmin.vue';

new Vue({
    el: '#fullcalendar',
    components: {
        FullcalendarAdmin,
    },
    data: {
        adminId: document.getElementById('doashboard').getAttribute('data-admin-id'),
        artistId: document.getElementById('doashboard').getAttribute('data-artist-id'),
        employeeId: document.getElementById('doashboard').getAttribute('data-employee-id'),
        manage_supers:  document.getElementById('doashboard').getAttribute('manage_supers')
    },

});
