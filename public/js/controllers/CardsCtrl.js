/**
 * Created by willians on 15/01/16.
 */
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var CardsCtrl = (function () {
            function CardsCtrl($scope) {
                this.$scope = $scope;
                this._render = new THREE.WebGLRenderer({ alpha: true });
                this._renderPoster = new THREE.WebGLRenderer({ alpha: true });
                this._scene = new THREE.Scene();
                this._scenePoster = new THREE.Scene();
                this._camera = new THREE.PerspectiveCamera();
                this._loader = new THREE.TextureLoader();
                this._SCREEN_HEIGHT = document.getElementById('containerBall').offsetHeight;
                this._SCREEN_WIDTH = document.getElementById('containerBall').offsetWidth;
                this.init();
                this.animation();
            }
            CardsCtrl.prototype.init = function () {
                this._render.setClearColor(0xffffff, 1);
                this._render.setSize(this._SCREEN_WIDTH - 2, this._SCREEN_HEIGHT - 2);
                this._renderPoster.setClearColor(0x000000, 1);
                this._renderPoster.setSize(this._SCREEN_WIDTH - 2, this._SCREEN_HEIGHT - 2);
                //this._render.setSize(640,480);
                document.getElementById("containerBall").appendChild(this._render.domElement);
                document.getElementById("containerPlane").appendChild(this._renderPoster.domElement);
                this._camera.position.z = 50;
                this._scene.add(this._camera);
                this._scenePoster.add(this._camera);
                this.loadBall();
                this.loadPoster();
                //this.animation();
                this._render.render(this._scene, this._camera);
                this._renderPoster.render(this._scenePoster, this._camera);
                console.log("hola 3d mundo");
            };
            CardsCtrl.prototype.loadBall = function () {
                //this._geometry = new THREE.SphereGeometry( 15, 8, 8, 6, 0, 6.3, 0, 3.1);
                this._geometry = new THREE.SphereGeometry(15, 8, 8);
                this._material = new THREE.MeshBasicMaterial({ color: 0x303F9F });
                this._ball = new THREE.Mesh(this._geometry, this._material);
                this._scene.add(this._ball);
                var wireframe = new THREE.WireframeHelper(this._ball, 0xffffff);
                this._scene.add(wireframe);
            };
            CardsCtrl.prototype.loadPoster = function () {
                this._geometry_plane = new THREE.PlaneGeometry(20, 30, 1, 1);
                this._texture_plane = new THREE.ImageUtils.loadTexture("img/messi.jpg");
                this._texture_plane.wrapS = THREE.RepeatWrapping;
                this._texture_plane.wrapT = THREE.RepeatWrapping;
                //this._texture_plane.repeat.set(0, 0);
                this._material_plane = new THREE.MeshBasicMaterial({
                    map: this._texture_plane,
                    side: THREE.DoubleSide
                });
                this._poster = new THREE.Mesh(this._geometry_plane, this._material_plane);
                //this._poster.rotation.y = -0.5;
                //this._poster.rotation.x =Math.PI/2;
                this._scenePoster.add(this._poster);
                /*var planeGeometry = new THREE.PlaneGeometry(20,30,1,1);
                var planeMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
                var plane = new THREE.Mesh(planeGeometry,planeMaterial);
                //plane.rotation.x=-0.5*Math.PI;
    
                plane.position.x = 0;
                plane.position.y = 0;
                plane.position.z = 0;
                this._scenePoster.add(plane);*/
            };
            CardsCtrl.prototype.animation = function () {
                var animation = function () {
                    requestAnimationFrame(animation);
                    this.renderModel();
                }.bind(this);
                animation();
            };
            CardsCtrl.prototype.renderModel = function () {
                this._ball.rotation.y = this._ball.rotation.y + 0.01;
                this._poster.rotation.y = this._poster.rotation.y + 0.01;
                this._render.render(this._scene, this._camera);
                this._renderPoster.render(this._scenePoster, this._camera);
            };
            CardsCtrl.$inject = ['$scope'];
            return CardsCtrl;
        })();
        Controllers.CardsCtrl = CardsCtrl;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application = exports.Application || (exports.Application = {}));
//# sourceMappingURL=CardsCtrl.js.map