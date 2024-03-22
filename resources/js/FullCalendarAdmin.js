import Vue from 'vue';
import FullcalendarAdmin from './components/FullcalendarAdmin.vue';

new Vue({
    el: '#fullcalendar',
    components: {
        FullcalendarAdmin,
    },
    data: {
        adminId: document.getElementById('fullcalendar').getAttribute('data-admin-id'),
        artistId: document.getElementById('fullcalendar').getAttribute('data-artist-id'),
        employeeId: document.getElementById('fullcalendar').getAttribute('data-employee-id'),
        manage_supers:  document.getElementById('fullcalendar').getAttribute('manage_supers')
    }
});
