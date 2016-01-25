/**
 * Created by willians on 06/12/15.
 */
/// <reference path="_all.ts" />
var AppCtrl = require('./controllers/AppCtrl');
var ListCtrl = require('./controllers/ListCtrl');
var ThreeCtrl = require('./controllers/ThreeCtrl');
var TabsCtrl = require('./controllers/TabsCtrl');
var ApiService = require('./services/ApiService');
var soccerStore;
(function (soccerStore) {
    "use strict";
    angular.module("soccerStore", ['ngMaterial', 'ngMdIcons'])
        .service("ApiService", ['$scope', function ($scope) { return new ApiService.Application.Services.ApiService($scope); }])
        .controller("AppCtrl", ['$scope', '$mdToast', function ($scope, $mdToast) { return new AppCtrl.Application.Controllers.AppCtrl($scope, $mdToast); }])
        .controller("ListCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) { return new ListCtrl.Application.Controllers.ListCtrl($scope, $rootScope); }])
        .controller("TabsCtrl", ['$scope', '$http', '$q', '$mdToast', function ($scope, $http, $q, $mdToast) { return new TabsCtrl.Application.Controllers.TabsCtrl($scope, $http, $q, $mdToast); }])
        .controller("ThreeCtrl", ['$scope', function ($scope) { return new ThreeCtrl.Application.Controllers.ThreeCtrl($scope); }]);
})(soccerStore || (soccerStore = {}));
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
//# sourceMappingURL=app.js.map