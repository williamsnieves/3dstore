/**
 * Created by willians on 08/01/16.
 */
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var AppCtrl = (function () {
            function AppCtrl($scope, $mdToast) {
                this.$scope = $scope;
                this.$mdToast = $mdToast;
                //console.log($mdSidenav);
                //this.$mdSidenav = $mdSidenav;
                $scope.openLeftMenu = this.openLeftMenu;
                $mdToast.show($mdToast.simple()
                    .textContent('Welcome to the 3d store!!!'));
            }
            AppCtrl.prototype.openLeftMenu = function () {
                console.log("hola");
                //this.mdSidenav('left').toggle();
            };
            AppCtrl.$inject = ['$scope', '$mdToast'];
            return AppCtrl;
        })();
        Controllers.AppCtrl = AppCtrl;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application = exports.Application || (exports.Application = {}));
//# sourceMappingURL=AppCtrl.js.map