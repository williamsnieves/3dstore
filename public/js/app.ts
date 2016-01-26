/**
 * Created by willians on 06/12/15.
 */

/// <reference path="_all.ts" />

import AppCtrl = require('./controllers/AppCtrl');
import ListCtrl = require('./controllers/ListCtrl');
import CardsCtrl = require('./controllers/CardsCtrl');
import ThreeCtrl = require('./controllers/ThreeCtrl');
import FavoriteCtrl = require('./controllers/FavoriteCtrl');
import TabsCtrl = require('./controllers/TabsCtrl');
import WishCtrl = require('./controllers/WishCtrl');
import ApiService = require('./services/ApiService');

module soccerStore{
    "use strict";

    angular.module("soccerStore", ['ngMaterial', 'ngMdIcons'])
            .service("ApiService", ['$scope', ($scope) => new ApiService.Application.Services.ApiService($scope)])
            .controller("AppCtrl", ['$scope', '$mdToast',($scope, $mdToast) => new AppCtrl.Application.Controllers.AppCtrl($scope, $mdToast)])
            .controller("ListCtrl", ['$scope','$rootScope','$window', ($scope, $rootScope, $window)=> new ListCtrl.Application.Controllers.ListCtrl($scope, $rootScope,$window)])
            .controller("TabsCtrl", ['$scope','$http','$q','$mdToast','$window', ($scope, $http, $q, $mdToast,$window)=> new TabsCtrl.Application.Controllers.TabsCtrl($scope, $http, $q, $mdToast, $window)])
            .controller("ThreeCtrl", ['$scope', ($scope)=> new ThreeCtrl.Application.Controllers.ThreeCtrl($scope)]);


}

/*angular.module('soccerStore', ['ngMaterial', 'ngMdIcons'])
    .controller("AppCtrl", ['$scope', '$mdSidenav', function($scope, $mdSidenav){
        $scope.openLeftMenu = function() {
            console.log("abrir");
            $mdSidenav('left').toggle();
        };
    }])
    .controller('ListCtrl', ['$scope', function($scope) {
        $scope.toppings = [
            {name: 'Pepperoni', wanted: true},
            {name: 'Sausage', wanted: false},
            {name: 'Black Olives', wanted: true},
            {name: 'Green Peppers', wanted: false}
        ];

        $scope.messages = [
            {id: 1, title: "Message A", selected: false},
            {id: 2, title: "Message B", selected: true},
            {id: 3, title: "Message C", selected: true},
        ];

        $scope.clickOptions = function(){
            alert("test");
        }
    }])
    .directive('testDirective', ()=>{
        return {
            restrict: 'E',
            templateUrl: '../partials/my-template.html'
        }
    })
var test1 = "hola willow pu";
console.log(test1);*/