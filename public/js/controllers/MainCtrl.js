angular.module('deadwater').controller('MainCtrl', ['$window', '$rootScope', 'ProgressBar', function ($window, $rootScope, ProgressBar) {
  $window.onload = function() {
    ProgressBar.progressBar(function () {
      $('.homeImgOneWrapper').waypoint(function () {
        $('.homeImgOneWrapper').css('width', '100%');
        $('.textWrapperOne .container-line').css({
          'width': '20px',
          'opacity': '1'
        });
        $('.textWrapperOne > span em, .textWrapperOne h1 span.one, .textWrapperOne h1 span.two').css({
          'width': '100%',
          'opacity': '1'
        });
      });
    });
  };

  $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
    $('.overlay-hugeinc').addClass('open');
    ProgressBar.progressBar(function () {
      $('.homeImgOneWrapper').waypoint(function () {
        $('.homeImgOneWrapper').css('width', '100%');
        $('.textWrapperOne .container-line').css({
          'width': '20px',
          'opacity': '1'
        });
        $('.textWrapperOne > span em, .textWrapperOne h1 span.one, .textWrapperOne h1 span.two').css({
          'width': '100%',
          'opacity': '1'
        });
      });
    });
  });
}]);