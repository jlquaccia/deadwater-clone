angular.module('deadwater').controller('FooterCtrl', [function () {
  // footer link hovers---------------------------------------------------------------------------------------------------------------
  $('.footerLinks > li').mouseenter(function () {
    $(this).find('span.line.white').css('width', '5px');
    $(this).find('span.line.white').css('background-color', '#F2BA06');
    $(this).find('span.text').css('color', '#F2BA06');
    $(this).find('.ion-ios-arrow-right').delay(150).queue(function (next) {
      $(this).css({
        'opacity': '1',
        'left': '15px'
      });
      next();
    });
  });

  $('.footerLinks > li').mouseleave(function () {
    $(this).find('span.line.white').css('width', '20px');
    $(this).find('span.line.white').css('background-color', '#e7e6e0');
    $(this).find('span.text').css('color', '#B2B2B2');
    $(this).find('.ion-ios-arrow-right').css({
      'opacity': '0',
      'left': '5px'
    });
  });
  // end footer link hovers------------------------------------------------------------------------------------------------------------
}]);