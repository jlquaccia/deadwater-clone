angular.module('deadwater').controller('HomeCtrl', ['$scope', function ($scope) {
  var viewportWidth = $(window).width();

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
  // one
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

  // two
  $('.textTwoOuter.two').waypoint(function () {
    $('.textWrapperTwo.two .container-line').css({
      'width': '20px',
      'opacity': '1'
    });

    $('.textWrapperTwo.two > span em, .textWrapperTwo.two h1 span.one, .textWrapperTwo.two h1 span.two').css({
      'width': '100%',
      'opacity': '1'
    });
  }, {
    offset: '75%'
  });

  // three
  if (viewportWidth >= 992) {
    $('.projectWrapper .imgWrapper.one').waypoint(function () {
      $('.projectWrapper .imgWrapper.one').css('width', '680px');
      console.log('bigger than 992px');
    }, {
      offset: '75%'
    });
  }

  // four
  $('.projectWrapper .inner.one').waypoint(function () {
    $('.projectWrapper .inner.one').css('width', '100%');
  }, {
    offset: '75%'
  });

  // five
  if (viewportWidth >= 992) {
    $('.projectWrapper .imgWrapper.two').waypoint(function () {
      $('.projectWrapper .imgWrapper.two').css('width', '680px');
    }, {
      offset: '75%'
    });
  }

  // six
  $('.projectWrapper .inner.two').waypoint(function () {
    $('.projectWrapper .inner.two').css('width', '100%');
  }, {
    offset: '75%'
  });

  // seven
  if (viewportWidth >= 992) {
    $('.projectWrapper .imgWrapper.three').waypoint(function () {
      $('.projectWrapper .imgWrapper.three').css('width', '680px');
    }, {
      offset: '75%'
    });
  }

  // eight
  $('.projectWrapper .inner.three').waypoint(function () {
    $('.projectWrapper .inner.three').css('width', '100%');
  }, {
    offset: '75%'
  });

  // nine
  $('.discoverWrapper').waypoint(function () {
    $('.discoverWrapper').css('width', '283.3px');
  }, {
    offset: '75%'
  });

  // ten
  $('.textTwoOuter.three').waypoint(function () {
    $('.textWrapperTwo.three .container-line').css({
      'width': '20px',
      'opacity': '1'
    });

    $('.textWrapperTwo.three > span em, .textWrapperTwo.three h1 span.one, .textWrapperTwo.three h1 span.two').css({
      'width': '100%',
      'opacity': '1'
    });
  }, {
    offset: '75%'
  });

  // eleven
  if (viewportWidth >= 992) {
    $('.social').waypoint(function () {
      $('.social').css('width', '100%');
    }, {
      offset: '75%'
    });
  }
}]);