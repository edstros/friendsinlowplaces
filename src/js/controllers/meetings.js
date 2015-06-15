app.controller('MeetingsController',
  function($scope, $rootScope, $firebase,
    CountMeetings, API_URL) {

  var ref = new Firebase(API_URL + '/users/' +
    $rootScope.currentUser.$id + '/meetings');

  var meetingsInfo = $firebase(ref);
  var meetingsObj = meetingsInfo.$asObject();

  meetingsObj.$loaded().then(function(data) {
    $scope.meetings = data;
  }); //make sure meetings data is loaded


  $scope.addMeeting = function() {
    meetingsInfo.$push({
      name: $scope.meetingname,
      date: Firebase.ServerValue.TIMESTAMP
    }).then(function() {
      $scope.meetingname='';
    });
  }; //addmeeting

  $scope.deleteMeeting = function(key) {
    meetingsInfo.$remove(key);
  }; //deleteMeeting


}); //MeetingsController
