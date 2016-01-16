/**
 * Created by willians on 15/01/16.
 */
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var ListCtrl = (function () {
            function ListCtrl($scope) {
                this.$scope = $scope;
                $scope.toppings = [
                    { name: 'Pepperoni', wanted: true },
                    { name: 'Sausage', wanted: false },
                    { name: 'Black Olives', wanted: true },
                    { name: 'Green Peppers', wanted: false }
                ];
            }
            ListCtrl.$inject = ['$scope'];
            return ListCtrl;
        })();
        Controllers.ListCtrl = ListCtrl;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application = exports.Application || (exports.Application = {}));
//# sourceMappingURL=ListCtrl.js.map