$(document).ready(function() {

  //===== SMOOTH SCROLLING =====
  $('a[href^="#"]').on('click', function(event) {

    var target = $($(this).attr('href'));

    if (window.innerWidth > 767) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 60
      }, 1000);
    } else {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 200
      }, 1000);
    }

  });

  $('a[href^="#navigation"]').on('click', function(event) {

    var target = $($(this).attr('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);
    }
  });

  //===== MAGNIFIC POPUP/PROJECTS =====
  $('.view').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
    image: {
      titleSrc: 'title',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Krystian Biały</small>';
      }
    }
  });

  // ===== SCROLL TO TOP =====
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 550) {
      $('#return-to-top').fadeIn(10);
    } else {
      $('#return-to-top').fadeOut(10);
    }
  });

  $('#return-to-top').click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
  });

  //===== ONCLICK NAVBAR COLLAPSE TOGGLE =====
  $("body").click(function(event) {
    if ($(".navbar-collapse").is(":visible") && $(".navbar-toggler").is(":visible")) {
      $('.navbar-collapse').collapse('toggle');
    }
  });

  //===== SCROLL REVEAL/SKILLS =====
  ScrollReveal().reveal('.tech1', {
    reset: true,
    delay: 300,
    distance: 0,
  });

  ScrollReveal().reveal('.tech2', {
    reset: true,
    delay: 500,
    distance: 0,
  });

  ScrollReveal().reveal('.tech3', {
    reset: true,
    delay: 700,
    distance: 0,
  });

  ScrollReveal().reveal('.tech4', {
    reset: true,
    delay: 900,
    distance: 0,
  });

  ScrollReveal().reveal('.tech5', {
    reset: true,
    delay: 1100,
    distance: 0,
  });

  ScrollReveal().reveal('.tech6', {
    reset: true,
    delay: 1300,
    distance: 0,
  });

});
