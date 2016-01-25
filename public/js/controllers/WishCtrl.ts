/**
 * Created by willians on 15/01/16.
 */
import ApiService = require('../services/ApiService');
export module Application.Controllers{
    export class WishCtrl{
        private _service;
        public static $inject = ['$scope', 'ApiService'];
        constructor(private $scope, private $http, private $q){
            this._service = new ApiService.Application.Services.ApiService($scope, $http, $q);
            $scope.wishTitle = "Wishlist items";

            this._service.getWishList().then(function(wishlists){
                $scope.wishlists = wishlists.wishlists;
            })
        }
    }
}