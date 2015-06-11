angular
  .module('lowPlaces', [])
  .constant('API_URL', 'https://friendsinlowplaces.firebaseio.com');

  .controller('ASDFCtrl', function() {
    var vm = this;
    vm.login = function(){
      var fb = new Firebase(API_URL);

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
