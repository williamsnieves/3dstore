/**
 * Created by willians on 15/01/16.
 */
var ApiService = require('../services/ApiService');
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var WishCtrl = (function () {
            function WishCtrl($scope, $http, $q) {
                this.$scope = $scope;
                this.$http = $http;
                this.$q = $q;
                this._service = new ApiService.Application.Services.ApiService($scope, $http, $q);
                $scope.wishTitle = "Wishlist items";
                this._service.getWishList().then(function (wishlists) {
                    $scope.wishlists = wishlists.wishlists;
                });
            }
            WishCtrl.$inject = ['$scope', 'ApiService'];
            return WishCtrl;
        })();
        Controllers.WishCtrl = WishCtrl;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application = exports.Application || (exports.Application = {}));
//# sourceMappingURL=WishCtrl.js.map