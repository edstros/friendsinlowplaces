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

  .controller('LoginCtrl', function(/*$rootScope, $scope*/$http) {
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
            //$rootScope.auth = authData;
            // $location.path('/people');
            //$scope.$apply();
          }
        });

    };
    vm.onModalLoad = function () {
      $('#modal').modal('show');

      // $('#modal').on('hidden.bs.modal', function (e) {
      //   $location.path("loginPage.html");
      // });
    };
    vm.submitRegisterForm = function () {
      var ref = new Firebase("https://friendsinlowplaces.firebaseio.com");
      ref.createUser({
        email: vm.register.email,
        password: vm.register.password
      }, function(error, userData) {
        if (error) {
          switch (error.code) {
            case "EMAIL_TAKEN":
              console.log("The new user account cannot be created because the email is already in use.");
              break;
            case "INVALID_EMAIL":
              console.log("The specified email is not a valid email.");
              break;
            default:
              console.log("Error creating user:", error);
          }
        } else {
          $http.post('https://friendsinlowplaces.firebaseio.com/users.json', vm.register);
          console.log("Successfully created user account with uid:", userData.uid);
          $('#modal').modal('hide');
          location.href='#/drunks';
        }
      });
    };
    // vm.logOut = function () {
    //   var fb = new Firebase(vm.url);
    //   fb.unauth();
    //   location.href='/';
    //   console.log("You logged out");
    // }
  });



