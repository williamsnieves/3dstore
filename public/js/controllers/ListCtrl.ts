/**
 * Created by willians on 15/01/16.
 */

export module Application.Controllers{
    export class ListCtrl{
        public static  $inject = ['$scope'];

        constructor(private $scope){
            $scope.toppings = [
                {name: 'Pepperoni', wanted: true},
                {name: 'Sausage', wanted: false},
                {name: 'Black Olives', wanted: true},
                {name: 'Green Peppers', wanted: false}
            ];
        }
    }
}