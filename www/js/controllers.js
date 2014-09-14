angular.module('starter.controllers', [])

.controller('NewsCtrl', function($scope) {
})

.controller('WeatherCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('PlacesCtrl', function($scope) {
})

.controller('RacesCtrl', function($scope) {
});
