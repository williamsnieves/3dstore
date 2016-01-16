/**
 * Created by willians on 15/01/16.
 */
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var WishCtrl = (function () {
            function WishCtrl($scope) {
                this.$scope = $scope;
                $scope.wishTitle = "Wish items";
            }
            WishCtrl.$inject = ['$scope'];
            return WishCtrl;
        })();
        Controllers.WishCtrl = WishCtrl;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application = exports.Application || (exports.Application = {}));
//# sourceMappingURL=WishCtrl.js.map