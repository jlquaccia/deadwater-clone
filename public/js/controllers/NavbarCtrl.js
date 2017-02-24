angular.module('deadwater').controller('NavbarCtrl', ['$rootScope', function ($rootScope) {
  $rootScope.hamburgerOpen = false;
  var width = $(window).width();

  // nav link hovers-------------------------------------------------------------------------------------------------------------------
    if (width >= 900) {
      $('.navLinks a').mouseenter(function () {
        $(this).prev().css('width', '5px');
        $(this).next().css('opacity', '1');
      });

      $('.navLinks a').mouseleave(function () {
        $(this).prev().css('width', '20px');
        $(this).next().css('opacity', '0');
      });
    }
  // end nav link hovers---------------------------------------------------------------------------------------------------------------
  // hamburger hover-------------------------------------------------------------------------------------------------------------------
    if (width >= 900) {
      $('.container-lines').mouseenter(function () {
        $('.navbarMenuWrapper').css({
          'height': width >= 1050 ? '108px' : '158px',
          'opacity': '1'
        });

        setTimeout(function () {
          $('.navLinks li').css({
            'opacity': '1',
            'top': '0'
          });
        }, 300);
      });

      $('.navbarMenuWrapper').on('mouseleave click', function () {
        $('.navbarMenuWrapper').css({
          'height': '0',
          'opacity': '0'
        });

        $('.navLinks li').css({
          'top': '-10px',
          'opacity': '0'
        });
      });
    }
  // end hamburger hover---------------------------------------------------------------------------------------------------------------
  // click toggle hamburger -----------------------------------------------------------------------------------------------------------
    $rootScope.toggleHamburger = function () {
      if (width < 900) {
        if (!$rootScope.hamburgerOpen) {
          $rootScope.hamburgerOpen = true;

          $('.navbarMenuWrapper').css({
            'height': '158px',
            'opacity': '1'
          });

          setTimeout(function () {
            $('.navLinks li').css({
              'opacity': '1',
              'top': '0'
            });
          }, 300);
        } else {
          $rootScope.hamburgerOpen = false;

          $('.navbarMenuWrapper').css({
            'height': '0',
            'opacity': '0'
          });

          $('.navLinks li').css({
            'top': '-10px',
            'opacity': '0'
          });
        }
      }
    };
  // end click toggle hamburger -------------------------------------------------------------------------------------------------------
}]);