angular.module('starter.controllers', [])

.controller('NewsCtrl', function($scope, News) {
  $scope.news = News.all();
})

.controller('NewsDetailCtrl', function($scope, $stateParams, News) {
  $scope.newsItem = News.get($stateParams.newsId);
})

.controller('WeatherCtrl', function($scope, Places) {
  $scope.places = Places.all();
})

.controller('PlacesCtrl', function($scope, Places) {
  $scope.places = Places.all();
})

.controller('PlaceDetailCtrl', function($scope, $stateParams, Places) {
  $scope.placeItem = Places.get($stateParams.placeId);
})

.controller('RacesCtrl', function($scope) {
});
