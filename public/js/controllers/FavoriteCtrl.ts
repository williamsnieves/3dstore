/**
 * Created by willians on 15/01/16.
 */

export module Application.Controllers{
    export class FavoriteCtrl{
        public static $inject = ['$scope'];
        constructor(private $scope){
            $scope.favoriteTitle = "Favorites items";
        }
    }
}