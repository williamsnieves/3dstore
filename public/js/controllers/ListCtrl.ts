/**
 * Created by willians on 15/01/16.
 */

export module Application.Controllers{
    export class ListCtrl{
        public static  $inject = ['$scope', '$rootScope', '$window'];
        private _rootScope;
        private _window;
        constructor(private $scope,private $rootScope, private $window){
            this._window = $window;
            this._rootScope = $rootScope;
            $rootScope.categories = [
                {title: 'Balls', name: 'balls'},
                {title: 'Poster', name: 'poster'}
            ];

            if($window.localStorage.getItem("category")){
                $window.localStorage.removeItem("category");
            }

            $rootScope.filterCategories = this.filterCategories.bind(this);
        }

        filterCategories(category){
            console.log(category);

            this._window.localStorage.setItem("category", category);


            this._rootScope.categoryFilter = category;
        }
    }
}