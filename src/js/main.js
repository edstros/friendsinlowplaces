angular
  .module('lowPlaces', ['ngRoute'])
  //.constant('API_URL', 'https://friendsinlowplaces.firebaseio.com')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/loginPage.html'
      })
      .when('/drunks', {
        templateUrl: 'views/loggedIn.html'
      })
      .when('/register', {
        templateUrl: 'views/loginPage.html'
      });
  })

  .controller('LoginCtrl', function() {
    var vm = this;
    vm.url = 'https://friendsinlowplaces.firebaseio.com';
    vm.register = {};
    vm.authenticate = function(){
      var fb = new Firebase(vm.url);

        fb.authWithPassword({
          email: vm.email,
          password: vm.password
        }, function (err, authData) {
          if (err) {
            console.log('Error', err)
          } else {
            console.log("logged in successfully")
            location.href='#/drunks'
            // $rootScope.auth = authData;
            // $location.path('/people');
            // $scope.$apply();
          }
        });

    };
    vm.onModalLoad = function () {
      $('#modal').modal('show');

      $('#modal').on('hidden.bs.modal', function (e) {
        $location.path("loginPage.html");
      });
    };
    vm.submitRegisterForm = function () {

    }
  });



