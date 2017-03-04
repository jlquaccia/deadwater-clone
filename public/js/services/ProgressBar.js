angular.module('deadwater').factory('ProgressBar', [function () {
  return {
    progressBar: progressBar
  };

  function progressBar () {
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
  }

  function randomInteger (min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    
    rand = Math.round(rand);
    
    return rand;
  }
}]);