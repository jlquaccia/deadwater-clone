angular.module('deadwater').config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeCtrl as home',
      templateUrl: '/views/home.html'
    })
    .state('achievements', {
      url: '/achievements',
      controller: 'AchievementsCtrl as achievements',
      templateUrl: '/views/achievements.html'
    })
    .state('contact', {
      url: '/contact',
      controller: 'ContactCtrl as contact',
      templateUrl: '/views/contact.html'
    })
    .state('studio', {
      url: '/studio',
      controller: 'StudioCtrl as studio',
      templateUrl: '/views/studio.html'
    });

  $urlRouterProvider
    .otherwise('/');
}]);