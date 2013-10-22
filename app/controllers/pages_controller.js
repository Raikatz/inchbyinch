var locomotive = require('locomotive')
    , Controller = locomotive.Controller
    , HomeViewModel = require('../viewmodels/HomeViewModel');

var PagesController = new Controller();


PagesController.home = function() {
  this.Model = new HomeViewModel();
  this.render();
}

module.exports = PagesController;
