/**
 * Created by willians on 15/01/16.
 */
/// <reference path="../_all.ts" />

import ApiService = require('../services/ApiService');

export module Application.Controllers{
    export class CardsCtrl{
        public static $inject = ['$scope', 'ApiService', '$http', '$q', '$mdToast'];

        private _service;

        private _scope;

        private _toast;


        constructor(private $scope, private $http, private $q, private $mdToast:angular.material.IToastService){
            //this._scope = $scope;

            this._toast = $mdToast;

            this._service = new ApiService.Application.Services.ApiService($scope, $http, $q);

            this._service.getProducts().then(function(products){
                $scope.products = products.products;
                console.log($scope);
            }.bind(this));



            //this._service.getFavorites();
            //this._service.getWishList();

        }


    }
}