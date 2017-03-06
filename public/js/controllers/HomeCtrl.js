angular.module('deadwater').controller('HomeCtrl', ['$scope', function ($scope) {
  $scope.discoverWrapperHoverOver = function () {
    $('.ion-ios-arrow-right.before').css({
      'opacity': '1',
      'left': '40px'
    });
  };

  $scope.discoverWrapperHoverLeave = function () {
    $('.ion-ios-arrow-right.before').css({
      'opacity': '0',
      'left': '0'
    });
  };

  // waypoints
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

  $('.textTwoOuter').waypoint(function () {
    $('.textWrapperTwo .container-line').css({
      'width': '20px',
      'opacity': '1'
    });

    $('.textWrapperTwo > span em, .textWrapperTwo h1 span.one, .textWrapperTwo h1 span.two').css({
      'width': '100%',
      'opacity': '1'
    });
  }, {
    offset: '75%'
  });
}]);