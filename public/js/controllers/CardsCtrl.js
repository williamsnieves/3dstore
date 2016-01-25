/**
 * Created by willians on 15/01/16.
 */
/// <reference path="../_all.ts" />
var ApiService = require('../services/ApiService');
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var CardsCtrl = (function () {
            function CardsCtrl($scope, $http, $q, $mdToast) {
                //this._scope = $scope;
                this.$scope = $scope;
                this.$http = $http;
                this.$q = $q;
                this.$mdToast = $mdToast;
                this._toast = $mdToast;
                this._service = new ApiService.Application.Services.ApiService($scope, $http, $q);
                this._service.getProducts().then(function (products) {
                    $scope.products = products.products;
                    console.log($scope);
                }.bind(this));
                //this._service.getFavorites();
                //this._service.getWishList();
            }
            CardsCtrl.$inject = ['$scope', 'ApiService', '$http', '$q', '$mdToast'];
            return CardsCtrl;
        })();
        Controllers.CardsCtrl = CardsCtrl;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application = exports.Application || (exports.Application = {}));
//# sourceMappingURL=CardsCtrl.js.map