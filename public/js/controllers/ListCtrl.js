/**
 * Created by willians on 15/01/16.
 */
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var ListCtrl = (function () {
            function ListCtrl($scope, $rootScope, $window) {
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.$window = $window;
                this._window = $window;
                this._rootScope = $rootScope;
                $rootScope.categories = [
                    { title: 'Balls', name: 'balls' },
                    { title: 'Poster', name: 'poster' }
                ];
                if ($window.localStorage.getItem("category")) {
                    $window.localStorage.removeItem("category");
                }
                $rootScope.filterCategories = this.filterCategories.bind(this);
            }
            ListCtrl.prototype.filterCategories = function (category) {
                console.log(category);
                this._window.localStorage.setItem("category", category);
                this._rootScope.categoryFilter = category;
            };
            ListCtrl.$inject = ['$scope', '$rootScope', '$window'];
            return ListCtrl;
        })();
        Controllers.ListCtrl = ListCtrl;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application = exports.Application || (exports.Application = {}));
//# sourceMappingURL=ListCtrl.js.map