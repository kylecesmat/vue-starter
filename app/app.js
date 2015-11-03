require('./style.scss');

var Vue = require('vue');

var app = new Vue({
  el: '#app',
  data: {
    view: 'home'
  },
  components: {
    // define the main pages as async components.
    'home': function (resolve) {
      require(['./views/home'], resolve)
    }
  }
});
