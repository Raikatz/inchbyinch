var locomotive = require('locomotive')
    , Controller = locomotive.Controller;

var PermissionController = new Controller();

PermissionController.login = function() {
    this.title = 'Login'
    this.render();
}


module.exports = PermissionController;
