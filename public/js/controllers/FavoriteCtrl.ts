/**
 * Created by willians on 15/01/16.
 */
import ApiService = require('../services/ApiService');

export module Application.Controllers{
    export class FavoriteCtrl{
        private _service;
        public static $inject = ['$scope', 'ApiService'];
        constructor(private $scope, private $http, private $q){
            this._service = new ApiService.Application.Services.ApiService($scope, $http, $q);
            $scope.favoriteTitle = "Favorites items";

            this._service.getFavorites().then(function(favorites){
                $scope.favorites = favorites.favorites;
            })
        }
    }
}