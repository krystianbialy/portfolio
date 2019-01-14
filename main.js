$(document).ready(function() {

  $('a[href^="#"]').on('click', function(event) {

    var target = $($(this).attr('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  $('.view').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },

    image: {
      titleSrc: 'title',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Kowalski</small>';
      }
    }


    // other options
  });

});
