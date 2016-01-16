/**
 * Created by willians on 08/01/16.
 */


export module Application.Controllers {
    export class AppCtrl {
        public static $inject = ['$scope', '$mdToast'];
        private mdSidenav;

        constructor(private $scope, private $mdToast:angular.material.IToastService) {
            //console.log($mdSidenav);
            //this.$mdSidenav = $mdSidenav;
            $scope.openLeftMenu = this.openLeftMenu;
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Welcome to the 3d store!!!'));
        }

        openLeftMenu() {
            console.log("hola");
            //this.mdSidenav('left').toggle();
        }
    }
}

