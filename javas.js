$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js-section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    /* Scroll on buttons */
    $('.js-scroll-plan').click(function () {
       $('html, body').animate({scrollTop: $('.js-section-plan').offset().top}, 1000); 
    });
    
    $('.js-scroll-start').click(function () {
       $('html, body').animate({scrollTop: $('.js-section-features').offset().top}, 1000); 
    });
    
    
    /* Navigation scroll */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* animation on scroll */
    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js-wp-2').waypoint(function(direction) {
        $('.js-wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js-wp-3').waypoint(function(direction) {
        $('.js-wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js-wp-4').waypoint(function(direction) {
        $('.js-wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    /* mobile nav */
    
    
    $('.js-nav-icon').click(function() {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-md-menu')) {
            icon.addClass('icon ion-md-close');
            icon.removeClass('ion-md-menu');
        }
            else {
            icon.addClass('ion-md-menu');
            icon.removeClass('icon ion-md-close');
        }  
    });
    
    
    /* maps*/
    
  var map = new GMaps({
  div: '.map',
  lat: 35.220406,
  lng: -80.8,
    zoom: 12
    });
    
    map.addMarker({
      lat: 35.220406,
      lng: -80.839466,
      title: 'Charlotte',
      infoWindow: {
  content: '<p>Our Charlotte Headquarters</p>'
  }
});
    
    });
    
    
    
    
    
    
    
    
    
    
    
    
    