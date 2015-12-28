/**
 * Created by willians on 06/12/15.
 */
/// <reference path="angular/angular.d.ts" />
var angular = require("angular");
angular.module('exampleApp', ['ngMaterial', 'ngMdIcons'])
    .controller("appCtrl", ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
        $scope.openLeftMenu = function () {
            console.log("abrir");
            $mdSidenav('left').toggle();
        };
    }])
    .controller('ListCtrl', ['$scope', function ($scope) {
        $scope.toppings = [
            { name: 'Pepperoni', wanted: true },
            { name: 'Sausage', wanted: false },
            { name: 'Black Olives', wanted: true },
            { name: 'Green Peppers', wanted: false }
        ];
        $scope.messages = [
            { id: 1, title: "Message A", selected: false },
            { id: 2, title: "Message B", selected: true },
            { id: 3, title: "Message C", selected: true },
        ];
        $scope.clickOptions = function () {
            alert("test");
        };
    }])
    .directive('testDirective', function () {
    return {
        restrict: 'E',
        templateUrl: '../partials/my-template.html'
    };
});
var test1 = "hola willow pu";
console.log(test1);
//# sourceMappingURL=app.js.map