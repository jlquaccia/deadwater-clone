angular.module('deadwater').controller('MainCtrl', ['$window', '$rootScope', function ($window, $rootScope) {
  $window.onload = function() {
    setTimeout(function () {
      $('.overlay-hugeinc.open').removeClass('open');
    }, 2000);
  };

  $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
    $('.overlay-hugeinc').addClass('open');

    setTimeout(function () {
      $('.overlay-hugeinc.open').removeClass('open');
    }, 2000);
  });
}]);