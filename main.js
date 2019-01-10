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
    // other options
  });

});
