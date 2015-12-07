/**
 * Created by willians on 06/12/15.
 */
/// <reference path="angular/angular.d.ts" />
var angular = require("angular");
angular.module('exampleApp', [])
    .directive('testDirective', function () {
    return {
        restrict: 'E',
        templateUrl: '../partials/my-template.html'
    };
});
var test1 = "hola willow";
console.log(test1);
//# sourceMappingURL=app.js.map