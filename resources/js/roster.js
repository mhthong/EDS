
import Vue from 'vue';
import RosterAdmin from './components/RosterComponents.vue';


new Vue({
    el: '#roster-admin',
    components: {
        RosterAdmin,
    },
    data: {
        adminId: document.getElementById('roster-admin').getAttribute('data-admin-id'),
        manage_supers: document.getElementById('roster-admin').getAttribute('manage_supers'),
        artistId: document.getElementById('roster-admin').getAttribute('data-artist-id'),
        employeeId: document.getElementById('roster-admin').getAttribute('data-employee-id')
    },

});
