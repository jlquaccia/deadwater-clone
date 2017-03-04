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
}]);