angular.module('deadwater').controller('MainCtrl', ['$window', '$rootScope', 'ProgressBar', function ($window, $rootScope, ProgressBar) {
  $window.onload = function() {
    ProgressBar.progressBar();
  };

  $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
    $('.overlay-hugeinc').addClass('open');
    ProgressBar.progressBar();
  });
}]);