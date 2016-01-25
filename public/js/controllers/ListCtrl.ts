/**
 * Created by willians on 15/01/16.
 */

export module Application.Controllers{
    export class ListCtrl{
        public static  $inject = ['$scope', '$rootScope'];
        private _rootScope;
        constructor(private $scope,private $rootScope){

            this._rootScope = $rootScope;
            $rootScope.categories = [
                {title: 'Balls', name: 'balls'},
                {title: 'Poster', name: 'poster'}
            ];

            $rootScope.filterCategories = this.filterCategories.bind(this);
        }

        filterCategories(category){
            console.log(category);

            this._rootScope.categoryFilter = category;
        }
    }
}