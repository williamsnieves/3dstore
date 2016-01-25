/**
 * Created by willians on 20/01/16.
 */

export module Application.Services{
    export class ApiService{

        public static $inject = ['$scope', '$http', '$q'];
        private _http: ng.IHttpService;
        private _q: ng.IQService;

        constructor(private $scope, private $http: ng.IHttpService, private $q:ng.IQService){
            this._http = $http;
            this._q = $q;
        }

        getProducts(){
            var deferred = this._q.defer();
            this._http.get("/api/v1/products")
                .success(function(products){
                    console.log(products);
                    deferred.resolve(products);
                }.bind(this))

            return deferred.promise;
        }

        getFavorites(){
            var deferred = this._q.defer();
            this._http.get("/api/v1/favorites")
                .success(function(favorites){
                    console.log(favorites);
                    deferred.resolve(favorites);
                }.bind(this))
            return deferred.promise;
        }

        getWishList(){
            var deferred = this._q.defer();
            this._http.get("/api/v1/wishlist")
                .success(function(wishlist){
                    console.log(wishlist);
                    deferred.resolve(wishlist);
                }.bind(this))
            return deferred.promise;
        }

        saveFavorites(id){
            var deferred = this._q.defer();
            this._http.put("/api/v1/favorites/"+id)
                .success(function(favorite){
                    deferred.resolve(favorite)
                }.bind(this))

            return deferred.promise;
        }

        saveWishlist(id){
            var deferred = this._q.defer();
            this._http.post("/api/v1/wishlist/"+id)
                .success(function(wishlist){
                    deferred.resolve(wishlist)
                }.bind(this))

            return deferred.promise;
        }
    }
}