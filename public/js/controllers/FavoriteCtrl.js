/**
 * Created by willians on 15/01/16.
 */
var ApiService = require('../services/ApiService');
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var FavoriteCtrl = (function () {
            function FavoriteCtrl($scope, $http, $q) {
                this.$scope = $scope;
                this.$http = $http;
                this.$q = $q;
                this._service = new ApiService.Application.Services.ApiService($scope, $http, $q);
                $scope.favoriteTitle = "Favorites items";
                this._service.getFavorites().then(function (favorites) {
                    $scope.favorites = favorites.favorites;
                });
            }
            FavoriteCtrl.$inject = ['$scope', 'ApiService'];
            return FavoriteCtrl;
        })();
        Controllers.FavoriteCtrl = FavoriteCtrl;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application = exports.Application || (exports.Application = {}));
//# sourceMappingURL=FavoriteCtrl.js.map