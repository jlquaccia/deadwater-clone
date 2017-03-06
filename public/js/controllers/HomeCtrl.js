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

  $('.projectWrapper .imgWrapper.one').waypoint(function () {
    $('.projectWrapper .imgWrapper.one').css('width', '680px');
  }, {
    offset: '75%'
  });

  $('.projectWrapper .inner.one').waypoint(function () {
    $('.projectWrapper .inner.one').css('width', '100%');
  }, {
    offset: '75%'
  });

  $('.projectWrapper .imgWrapper.two').waypoint(function () {
    $('.projectWrapper .imgWrapper.two').css('width', '680px');
  }, {
    offset: '75%'
  });

  $('.projectWrapper .inner.two').waypoint(function () {
    $('.projectWrapper .inner.two').css('width', '100%');
  }, {
    offset: '75%'
  });

  $('.projectWrapper .imgWrapper.three').waypoint(function () {
    $('.projectWrapper .imgWrapper.three').css('width', '680px');
  }, {
    offset: '75%'
  });

  $('.projectWrapper .inner.three').waypoint(function () {
    $('.projectWrapper .inner.three').css('width', '100%');
  }, {
    offset: '75%'
  });

  $('.discoverWrapper').waypoint(function () {
    $('.discoverWrapper').css('width', '283.3px');
  }, {
    offset: '75%'
  });
}]);