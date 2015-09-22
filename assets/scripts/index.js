(function($){
  'use strict';
  $(function(){

  var base = $(window),
      body = $('body'),
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
