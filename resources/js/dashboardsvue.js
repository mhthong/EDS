import Vue from 'vue';
import AdminDashboard from './components/AdminDashboard.vue';

new Vue({
    el: '#doashboard',
    components: {
        AdminDashboard,
    },
    data: {
        adminId: document.getElementById('doashboard').getAttribute('data-admin-id'),
        artistId: document.getElementById('doashboard').getAttribute('data-artist-id'),
        employeeId: document.getElementById('doashboard').getAttribute('data-employee-id')
    },
});
