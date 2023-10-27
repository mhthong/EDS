
import Vue from 'vue';
import AnalyticsAdmin from './components/Analytics.vue';

new Vue({
    el: '#analytics-admin',
    components: {
        AnalyticsAdmin,
    },
    data: {
        adminId: document.getElementById('analytics-admin').getAttribute('data-admin-id'),
        artistId: document.getElementById('analytics-admin').getAttribute('data-artist-id'),
        employeeId: document.getElementById('analytics-admin').getAttribute('data-employee-id')
    },

});
