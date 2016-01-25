/**
 * Created by willians on 20/01/16.
 */
var Application;
(function (Application) {
    var Services;
    (function (Services) {
        var ApiService = (function () {
            function ApiService($scope, $http, $q) {
                this.$scope = $scope;
                this.$http = $http;
                this.$q = $q;
                this._http = $http;
                this._q = $q;
            }
            ApiService.prototype.getProducts = function () {
                var deferred = this._q.defer();
                this._http.get("/api/v1/products")
                    .success(function (products) {
                    console.log(products);
                    deferred.resolve(products);
                }.bind(this));
                return deferred.promise;
            };
            ApiService.prototype.getFavorites = function () {
                var deferred = this._q.defer();
                this._http.get("/api/v1/favorites")
                    .success(function (favorites) {
                    console.log(favorites);
                    deferred.resolve(favorites);
                }.bind(this));
                return deferred.promise;
            };
            ApiService.prototype.getWishList = function () {
                var deferred = this._q.defer();
                this._http.get("/api/v1/wishlist")
                    .success(function (wishlist) {
                    console.log(wishlist);
                    deferred.resolve(wishlist);
                }.bind(this));
                return deferred.promise;
            };
            ApiService.prototype.saveFavorites = function (id) {
                var deferred = this._q.defer();
                this._http.put("/api/v1/favorites/" + id)
                    .success(function (favorite) {
                    deferred.resolve(favorite);
                }.bind(this));
                return deferred.promise;
            };
            ApiService.prototype.saveWishlist = function (id) {
                var deferred = this._q.defer();
                this._http.post("/api/v1/wishlist/" + id)
                    .success(function (wishlist) {
                    deferred.resolve(wishlist);
                }.bind(this));
                return deferred.promise;
            };
            ApiService.$inject = ['$scope', '$http', '$q'];
            return ApiService;
        })();
        Services.ApiService = ApiService;
    })(Services = Application.Services || (Application.Services = {}));
})(Application = exports.Application || (exports.Application = {}));
//# sourceMappingURL=ApiService.js.map