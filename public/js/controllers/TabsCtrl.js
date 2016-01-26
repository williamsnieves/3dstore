/**
 * Created by willians on 24/01/16.
 */
/// <reference path="../_all.ts" />
var ApiService = require('../services/ApiService');
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var TabsCtrl = (function () {
            function TabsCtrl($scope, $http, $q, $mdToast, $window) {
                this.$scope = $scope;
                this.$http = $http;
                this.$q = $q;
                this.$mdToast = $mdToast;
                this.$window = $window;
                this._toast = $mdToast;
                this._service = new ApiService.Application.Services.ApiService($scope, $http, $q);
                this._scope = $scope;
                $scope.getFirstTab = this.firstTab.bind(this);
                $scope.getSecondTab = this.secondTab.bind(this);
                $scope.getThirdTab = this.thirdTab.bind(this);
                $scope.saveFavorites = this.saveFavorites.bind(this);
                $scope.saveWishlist = this.saveWishlist.bind(this);
                $scope.category = $window.localStorage.getItem("category");
                this._service.getProducts().then(function (products) {
                    $scope.products = products.products;
                    console.log($scope);
                }.bind(this));
            }
            TabsCtrl.prototype.firstTab = function () {
                this._service.getProducts().then(function (products) {
                    this._scope.products = products.products;
                    //console.log($scope);
                }.bind(this));
            };
            TabsCtrl.prototype.secondTab = function () {
                this._service.getWishList().then(function (wishlists) {
                    this._scope.wishlists = wishlists.wishlists;
                }.bind(this));
            };
            TabsCtrl.prototype.thirdTab = function () {
                this._service.getFavorites().then(function (favorites) {
                    this._scope.favorites = favorites.favorites;
                }.bind(this));
            };
            TabsCtrl.prototype.saveFavorites = function (id) {
                console.log(id);
                this._service.saveFavorites(id).then(function (favorites) {
                    console.log(favorites);
                    if (favorites.product.favorite) {
                        this._toast.show(this._toast.simple()
                            .textContent('Added to favorites'));
                    }
                    else {
                        this._toast.show(this._toast.simple()
                            .textContent('Removed from favorites'));
                    }
                }.bind(this));
            };
            TabsCtrl.prototype.saveWishlist = function (id) {
                this._service.saveWishlist(id).then(function (wishlists) {
                    this._toast.show(this._toast.simple()
                        .textContent('Added to wishlist'));
                }.bind(this));
            };
            TabsCtrl.$inject = ['$scope', 'ApiService', '$http', '$q', '$mdToast', '$window'];
            return TabsCtrl;
        })();
        Controllers.TabsCtrl = TabsCtrl;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application = exports.Application || (exports.Application = {}));
//# sourceMappingURL=TabsCtrl.js.map