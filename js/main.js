$(document).ready(function () {
  // Mobile Nav-bar
  $(".mobile-btn").click(function () {
    $("nav").toggleClass("show");
    $(".mobile-btn").toggleClass("close-sign");
    $(".overlay").fadeToggle();
    $(".drop-down a svg").addClass("fa-chevron-down");
    $(".drop-down-list, .deep-drop-down").slideUp();
    $("body").toggleClass("mobile-nav");
  });

  // Drop Down List in Small Screen
  $(".drop-down > a").click(function () {
    if (window.innerWidth < 992) {
      $(".drop-down-list").slideToggle();
      $(".drop-down > a svg").toggleClass("fa-chevron-up fa-chevron-down");
      $(".deep-drop .drop-down-link svg").addClass("fa-chevron-down");
      $(".deep-drop-down").slideUp();
    };
  });

  // Child Drop Down List
  $(".deep-drop .drop-down-link").click(function () {
    if (window.innerWidth < 992) {
      $(".deep-drop-down").slideToggle();
      $(".deep-drop .drop-down-link svg").toggleClass("fa-chevron-up fa-chevron-down");
    };
  });

  // Reset Mobile Nav-bar By Click on The Overlay
  $(".overlay").click(function () {
    $("nav").removeClass("show");
    $(".mobile-btn").removeClass("close-sign");
    $(".overlay").fadeOut();
    $(".drop-down a svg").addClass("fa-chevron-down");
    $(".drop-down-list, .deep-drop-down").slideUp();
    $("body").removeClass("mobile-nav");
  });

  // Drop Down List in Big Screen
  $(".drop-down").hover(function () {
    if (window.innerWidth > 991) {
      $(".drop-down-list").show();
      $(".drop-down-list").animate({
        top: '85%'
      }, 80, "linear");
      $(".deep-drop .drop-down-link svg").addClass("fa-chevron-right");
    };
  }, function () {
    if (window.innerWidth > 991) {
      $(".drop-down-list").animate({
        top: '-25%'
      }, 100, "linear", function () {
        $(".drop-down-list").hide();
      });
    }
  });

  // Toggle Class Fixed and Show to Navbar When Scroll
  if ($(window).scrollTop() > 70) {
    $("header, .icons-box, .top-bar-container").addClass("fixed");
    $(".go-to-top").fadeIn();
  } else {
    $("header, .icons-box, .top-bar-container").removeClass("fixed");
    $(".go-to-top").fadeOut();
  };

  $(window).scroll(function () {
    if ($(window).scrollTop() > 70) {
      $("header, .icons-box, .top-bar-container").addClass("fixed");
      $(".go-to-top").fadeIn();
    } else {
      $("header, .icons-box, .top-bar-container").removeClass("fixed");
      $(".go-to-top").fadeOut();
    };
  });

  // Toggle Class Active at The Top of Each Section
  $(".section").each(function () {
    if ($(window).scrollTop() > $(this).offset().top - 70) {
      var sectionId = $(this).attr("id");
      $("header .top-bar nav ul li a").removeClass("active");
      $('header .top-bar nav ul li a[class="' + sectionId + '"]').addClass("active");
    } else if ($(window).scrollTop() < $("#about").offset().top + 70) {
      $("header .top-bar nav ul li a").removeClass("active");
      $('header .top-bar nav ul li a[class="home"]').addClass("active");
    };
  });

  $(window).scroll(function () {
    $(".section").each(function () {
      if ($(window).scrollTop() > $(this).offset().top - 70) {
        var sectionId = $(this).attr("id");
        $("header .top-bar nav ul li a").removeClass("active");
        $('header .top-bar nav ul li a[class="' + sectionId + '"]').addClass("active");
      } else if ($(window).scrollTop() < $("#about").offset().top + 70) {
        $("header .top-bar nav ul li a").removeClass("active");
        $('header .top-bar nav ul li a[class="home"]').addClass("active");
      };
    });
  });

  // Count Numbers
  $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

  // Portfolio Section
  var portfolioIsotope = $('.grid').isotope({
    itemSelector: '.grid-item',
    masonry: {
      gutter: 30
    }
  });
  $('.portfolio .title .title-links a').on('click', function () {
    event.preventDefault();
    $(".portfolio .title .title-links a").removeClass('active');
    $(this).addClass('active');
    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
  });

  // Testimonials swiper
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    centeredSlides: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Clients swiper
  var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 6
      }
    }
  });

  // Frequently Section
  $(".frequently-box-link a").on("click", function () {
    event.preventDefault();
    $(this).toggleClass("active");
    $(this).parents(".frequently-box").siblings().find("a").removeClass("active");
    $(".frequently-box-link a svg").addClass("fa-plus");
    $(this).find("svg").toggleClass("fa-minus");
    $(this).parent().next(".frequently-box-text").slideToggle();
    $(this).parents(".frequently-box").siblings().children(".frequently-box-text").slideUp();
  });

  // Animate on scroll Plugin
  AOS.init();
  window.addEventListener('load', AOS.refresh);

  // Preloader
  $('.preloader').delay(500).fadeOut();
})