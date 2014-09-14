angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/news');

  $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })

    // Each tab has its own nav history stack:

      .state('tab.news', {
        url: '/news',
        views: {
          "tab-news": {
            templateUrl: 'templates/tab-news.html',
            controller: 'NewsCtrl'
          }
        }
      })

      .state('tab.news-detail', {
        url: '/news/:newsId',
        views: {
          'tab-news': {
            templateUrl: 'templates/news-detail.html',
            controller: 'NewsDetailCtrl'
          }
        }
      })

      .state('tab.weather', {
        url: '/weather',
        views: {
          'tab-weather': {
            templateUrl: 'templates/tab-weather.html',
            controller: 'WeatherCtrl'
          }
        }
      })

      .state('tab.places', {
        url: '/places',
        views: {
          'tab-places': {
            templateUrl: 'templates/tab-places.html',
            controller: 'PlacesCtrl'
          }
        }
      })

      .state('tab.place-detail', {
        url: '/places/:placeId',
        views: {
          'tab-places': {
            templateUrl: 'templates/place-detail.html',
            controller: 'PlaceDetailCtrl'
          }
        }
      })

      .state('tab.races', {
        url: '/races',
        views: {
          'tab-races': {
            templateUrl: 'templates/tab-races.html',
            controller: 'RacesCtrl'
          }
        }
      })

      .state('tab.race-categories', {
        url: '/races/:raceId',
        views: {
          'tab-races': {
            templateUrl: 'templates/race-categories.html',
            controller: 'RaceCategoriesCtrl'
          }
        }
      })

      .state('tab.race-category-list', {
        url: '/races/:raceId/:raceCatId',
        views: {
          'tab-races': {
            templateUrl: 'templates/race-category-list.html',
            controller: 'RaceCategoryListCtrl'
          }
        }
      });
});

