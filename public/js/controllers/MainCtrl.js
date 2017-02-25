angular.module('deadwater').controller('MainCtrl', ['$window', function ($window) {
  $window.onload = function() {
    setTimeout(function () {
      $('#overlay.open').css('background', 'transparent');
      $('#logo').css('opacity', '0');

      setTimeout(function () {
        $('#overlay').removeClass('open');
        $('#logo').css('display', 'none');
      }, 1500);
    }, 2000);
  };
}]);