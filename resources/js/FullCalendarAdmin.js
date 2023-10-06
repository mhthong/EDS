import Vue from 'vue';
import FullcalendarAdmin from './components/FullcalendarAdmin.vue';

new Vue({
    el: '#fullcalendar',
    components: {
        FullcalendarAdmin,
    },
    data: {
        artistId: document.getElementById('doashboard').getAttribute('data-artist-id'),
    },

});
