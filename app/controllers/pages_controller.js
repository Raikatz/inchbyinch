var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PagesController = new Controller();


PagesController.home = function() {
  this.title = 'Home'
  this.render();
}

module.exports = PagesController;
