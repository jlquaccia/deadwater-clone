angular.module('deadwater').controller('MainCtrl', ['$window', '$rootScope', function ($window, $rootScope) {
  $window.onload = function() {
    progressBar();
  };

  $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
    $('.overlay-hugeinc').addClass('open');
    progressBar();
  });

  function randomInteger (min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    
    rand = Math.round(rand);
    console.log('inside randomInteger');
    return rand;
  }
  
  var progressBar = function () {
    var progress = document.querySelector('.js-progress');
    var currentValue = progress.value;
    var emulateProgress = setInterval(function () {
      currentValue = currentValue + randomInteger(1, 10);
      
      if (currentValue >= 100) {
        currentValue = 100;
        clearInterval(emulateProgress);
        $('.overlay-hugeinc.open').removeClass('open');
        currentValue = 0;
      }
      
      progress.value = currentValue;
    }, 250);
  };
}]);