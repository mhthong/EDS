import Vue from 'vue';
import AdminDashboard from './components/AdminDashboard.vue';

new Vue({
    el: '#doashboard',
    components: {
        AdminDashboard,
    },
    data: {
        userId: document.getElementById('doashboard').getAttribute('data-user-id')
    },
});
