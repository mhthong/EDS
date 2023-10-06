
import Vue from 'vue';
import ChartAdmin from './components/Chart.vue';

new Vue({
    el: '#chart-admin',
    components: {
        ChartAdmin,
    },
    data: {
        adminId: document.getElementById('chart-admin').getAttribute('data-admin-id'),
        artistId: document.getElementById('chart-admin').getAttribute('data-artist-id'),
        employeeId: document.getElementById('chart-admin').getAttribute('data-employee-id')
    },

});
