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

  // ===== Scroll to Top ====
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
      $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function() { // When arrow is clicked
    $('body,html').animate({
      scrollTop: 0 // Scroll to top of body
    }, 1000);
  });

  $("body").click(function(event) {
    // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called
    if ($(".navbar-collapse").is(":visible") && $(".navbar-toggler").is(":visible")) {
      $('.navbar-collapse').collapse('toggle');
    }
  });

  $(function() {
    $('a[href*=#skok]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });



});
