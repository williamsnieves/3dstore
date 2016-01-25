/**
 * Created by willians on 15/01/16.
 */
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var ListCtrl = (function () {
            function ListCtrl($scope, $rootScope) {
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this._rootScope = $rootScope;
                $rootScope.categories = [
                    { title: 'Balls', name: 'balls' },
                    { title: 'Poster', name: 'poster' }
                ];
                $rootScope.filterCategories = this.filterCategories.bind(this);
            }
            ListCtrl.prototype.filterCategories = function (category) {
                console.log(category);
                this._rootScope.categoryFilter = category;
            };
            ListCtrl.$inject = ['$scope', '$rootScope'];
            return ListCtrl;
        })();
        Controllers.ListCtrl = ListCtrl;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application = exports.Application || (exports.Application = {}));
//# sourceMappingURL=ListCtrl.js.map