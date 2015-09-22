(function($){
  'use strict';
  $(function(){

  var base = $(window),
      head = $('#itop'),
      nav = $('nav');

  base.on('scroll', function(){
    if (base.scrollTop() > head.outerHeight()) {
      if (!nav.hasClass('sticky')) {
        nav.addClass('sticky');
      }
    } else {
      if (nav.hasClass('sticky')) {
        nav.removeClass('sticky');
      }
    }
  });

  })
}(jQuery));
