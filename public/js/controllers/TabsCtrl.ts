/**
 * Created by willians on 24/01/16.
 */
/// <reference path="../_all.ts" />
import ApiService = require('../services/ApiService');
export module Application.Controllers{
    export class TabsCtrl{
        private _service;
        private _scope;
        private _toast;
        public static $inject = ['$scope', 'ApiService', '$http', '$q', '$mdToast'];
        constructor(private $scope, private $http, private $q, private $mdToast:angular.material.IToastService){
            this._toast = $mdToast;
            this._service = new ApiService.Application.Services.ApiService($scope, $http, $q);
            this._scope = $scope;
            $scope.getFirstTab = this.firstTab.bind(this);
            $scope.getSecondTab = this.secondTab.bind(this);
            $scope.getThirdTab = this.thirdTab.bind(this);

            $scope.saveFavorites = this.saveFavorites.bind(this);

            $scope.saveWishlist = this.saveWishlist.bind(this);

            this._service.getProducts().then(function(products){
                $scope.products = products.products;
                console.log($scope);
            }.bind(this));
        }

        firstTab(){
            this._service.getProducts().then(function(products){
                this._scope.products = products.products;
                //console.log($scope);
            }.bind(this));
        }

        secondTab(){
            this._service.getWishList().then(function(wishlists){
                this._scope.wishlists = wishlists.wishlists;
            }.bind(this))
        }

        thirdTab(){
            this._service.getFavorites().then(function(favorites){
                this._scope.favorites = favorites.favorites;
            }.bind(this))
        }

        saveFavorites(id){
            console.log(id);
            this._service.saveFavorites(id).then(function(favorites){
                console.log(favorites);
                if(favorites.product.favorite){
                    this._toast.show(
                        this._toast.simple()
                            .textContent('Added to favorites'));
                }else{
                    this._toast.show(
                        this._toast.simple()
                            .textContent('Removed from favorites'));
                }

            }.bind(this))
        }

        saveWishlist(id){
            this._service.saveWishlist(id).then(function(wishlists){
                this._toast.show(
                    this._toast.simple()
                        .textContent('Added to wishlist'));
            }.bind(this))
        }
    }
}