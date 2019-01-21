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

});
