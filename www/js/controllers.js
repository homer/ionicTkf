angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal){
  $ionicModal.fromTemplateUrl('info.html',function(modal){
    $scope.taskModal = modal;
  },{
    scope:$scope,
    animation: 'slide-in-up'
  });

  $scope.newTask = function() {
    $scope.taskModal.show();
  };
  $scope.closeNewTask = function(){
    $scope.taskModal.hide();
  }
})

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

.controller('RacesCtrl', function($scope, Races) {
  $scope.races = Races.all();
})

.controller('RaceCategoriesCtrl', function($scope, $stateParams, Races) {
  $scope.raceId = $stateParams.raceId;
  $scope.race = Races.getRace($scope.raceId);
})

.controller('RaceCategoryListCtrl', function($scope, $stateParams, Races) {
  $scope.raceId = $stateParams.raceId;
  $scope.catId  = $stateParams.raceCatId;

  $scope.race = Races.getRace($scope.raceId);
  $scope.raceCatList = Races.getRaceCategory($scope.raceId,$scope.catId);
});
