// resources/js/hello.js

import Vue from 'vue';
/* import HelloWorld from './components/HelloWorld.vue'; */
import HelloWorld from './components/HelloWorld.vue';
new Vue({
  el: '#app',
  components: { HelloWorld },
  template: '<HelloWorld/>'
});
