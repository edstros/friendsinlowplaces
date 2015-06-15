app.factory('CountMeetings', function($firebase,
  $rootScope, API_URL) {

  var ref = new Firebase(API_URL + '/users/' +
    $rootScope.currentUser.$id + '/meetings');

  var meetingsInfo = $firebase(ref);

  var meetingsArray = meetingsInfo.$asArray();

  meetingsArray.$loaded(function(data) {
    $rootScope.howManyMeetings = meetingsArray.length;
  });

  meetingsArray.$watch(function(data) {
    $rootScope.howManyMeetings = meetingsArray.length;
  });

  return true;

}); //CountMeetings
