/**
 * Created by willians on 15/01/16.
 */
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var FavoriteCtrl = (function () {
            function FavoriteCtrl($scope) {
                this.$scope = $scope;
                $scope.favoriteTitle = "Favorites items";
            }
            FavoriteCtrl.$inject = ['$scope'];
            return FavoriteCtrl;
        })();
        Controllers.FavoriteCtrl = FavoriteCtrl;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application = exports.Application || (exports.Application = {}));
//# sourceMappingURL=FavoriteCtrl.js.map