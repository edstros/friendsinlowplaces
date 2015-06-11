angular
  .module('lowPlaces', ['ngRoute'])
  //.constant('API_URL', 'https://friendsinlowplaces.firebaseio.com')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/loginPage.html'
    });
  })

  .controller('LoginCtrl', function() {
    var vm = this;
    vm.url = 'https://friendsinlowplaces.firebaseio.com';
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
            // $rootScope.auth = authData;
            // $location.path('/people');
            // $scope.$apply();
          }
        });

    }
  });
