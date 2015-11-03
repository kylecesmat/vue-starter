module.exports = {
  template : require('./template.html'),
  replace  : true,
  data : function () {
    return {
      msg : 'Home Page'
    }
  },
  components : {
    'app-header' : require('../../components/header')
  }
}
