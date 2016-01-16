/**
 * Created by willians on 06/12/15.
 */
/// <reference path="_all.ts" />
var AppCtrl = require('./controllers/AppCtrl');
var ListCtrl = require('./controllers/ListCtrl');
var CardsCtrl = require('./controllers/CardsCtrl');
var FavoriteCtrl = require('./controllers/FavoriteCtrl');
var WishCtrl = require('./controllers/WishCtrl');
var soccerStore;
(function (soccerStore) {
    "use strict";
    angular.module("soccerStore", ['ngMaterial', 'ngMdIcons'])
        .controller("AppCtrl", ['$scope', '$mdToast', function ($scope, $mdToast) { return new AppCtrl.Application.Controllers.AppCtrl($scope, $mdToast); }])
        .controller("ListCtrl", ['$scope', function ($scope) { return new ListCtrl.Application.Controllers.ListCtrl($scope); }])
        .controller("FavoriteCtrl", ['$scope', function ($scope) { return new FavoriteCtrl.Application.Controllers.FavoriteCtrl($scope); }])
        .controller("WishCtrl", ['$scope', function ($scope) { return new WishCtrl.Application.Controllers.WishCtrl($scope); }])
        .controller("CardsCtrl", ['$scope', function ($scope) { return new CardsCtrl.Application.Controllers.CardsCtrl($scope); }]);
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