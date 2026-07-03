(function ($) {
  "use strict";

  /* ----------------------------------------------------------- */
  /*  STOP YOUTUBE VIDEOS IN PORTFOLIO SECTION
    /* ----------------------------------------------------------- */

  function stop_videos() {
    $("iframe").each(function () {
      $(this)[0].contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    });
  }

  $(window).on("load", function () {
    /* ----------------------------------------------------------- */
    /*  PAGE PRELOADER
    /* ----------------------------------------------------------- */

    var preloader = $("#preloader");
    setTimeout(function () {
      preloader.addClass("preloaded");
    }, 800);
    if ($(window).width() > 1024) {
      setTimeout(function () {
        $(".header-inner").addClass("animated fadeInDown");
      }, 1500);
      setTimeout(function () {
        $(".home>div>div h1 span span").addClass("animated fadeInUp");
        $(".home>div>div .intro").addClass("animated fadeInUp");
        $(".home .cta").addClass("animated fadeInUp");
      }, 2200);
    } else {
      setTimeout(function () {
        $(".header-inner").addClass("animated fadeInDown");
      }, 1100);
      setTimeout(function () {
        $(".home>div>div h1 span span").addClass("animated fadeInUp");
        $(".home>div>div .intro").addClass("animated fadeInUp");
        $(".home .cta").addClass("animated fadeInUp");
      }, 1800);
    }

    /* ----------------------------------------------------------- */
    /*  SET ACTIVE MENU ITEM ON SCROLL
    /* ----------------------------------------------------------- */

    var aboutwidth = $(".info").width() - 10;
    var skillwidth = aboutwidth + $(".skills").width() - 10;
    var resumewidth = skillwidth + $(".resume").width() - 10;
    var portfoliowidth =
      resumewidth +
      $(".portfolio .single-item .main-content").width() +
      $(".portfolio .single-item .details").width() -
      10;
    var contactwidth = portfoliowidth + $(".contact").width() - 10;
    var copyrightwidth = contactwidth + $(".copyright").width() - 10;

    /* ----------------------------------------------------------- */
    /*  HORIZONTAL SCROLL & REVEAL ANIMATIONS
    /* ----------------------------------------------------------- */

    function animateContent() {
      var divWidth = $("#wrapper").width() - $(window).width() / 2 + 270;
      var animated = $(".animated-layer");
      animated.each(function () {
        var anim = $(this);
        var offset = $(this).offset().left;
        if (offset < divWidth) {
          // Image Reveal Animation
          if (anim.hasClass("image-animation")) {
            anim.addClass("animated");
          }
          // Fade In Up Animation
          else if (anim.hasClass("fade-in-up-animation")) {
            anim.addClass("animated fadeInUp");
          }
          // Fade In Animation
          else if (anim.hasClass("fade-in-animation")) {
            anim.addClass("animated fadeIn");
          }
          // Fade In Down Animation
          else if (anim.hasClass("fade-in-down-animation")) {
            anim.addClass("animated fadeInDown");
          }
          // Fade In Right Animation
          else if (anim.hasClass("fade-in-right-animation")) {
            anim.addClass("animated fadeInRight");
          }
          // Fade In Right Animation
          else if (anim.hasClass("fade-in-left-animation")) {
            anim.addClass("animated fadeInLeft");
          }
        }
      });
    }

    if ($("#wrapper").length) {
      if ($(window).width() > 1024) {
        $("#wrapper").mCustomScrollbar({
          axis: "x",
          theme: "dark-3",
          keyboard: { enable: true, scrollType: "stepless" },
          advanced: {
            autoExpandHorizontalScroll: true,
          },
          mouseWheel: {
            scrollAmount: 400,
          },
          callbacks: {
            whileScrolling: function () {
              animateContent();
            },
          },
        });

        /* ------------------------------------------------------- */
        /*  RECALCULATE SCROLL WIDTH AFTER LAYOUT SETTLES
        /*  (swiper loop clones, typed.js, web fonts, images can
        /*  all change content width slightly after mCustomScrollbar
        /*  has already measured it, causing the next section to
        /*  peek through / leak on the right)
        /* ------------------------------------------------------- */
        function refreshScrollbar() {
          $("#wrapper").mCustomScrollbar("update");
        }

        setTimeout(refreshScrollbar, 600);
        setTimeout(refreshScrollbar, 1500);
        setTimeout(refreshScrollbar, 3000);

        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(refreshScrollbar);
        }

        $(window).on("resize", function () {
          clearTimeout(window._scrollbarResizeTimer);
          window._scrollbarResizeTimer = setTimeout(refreshScrollbar, 300);
        });
      } else {
        WOW = new WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 100,
          mobile: true,
          live: true,
        });
        WOW.init();
      }
    }
  });

  $(document).ready(function () {
    /* ----------------------------------------------------------- */
    /*  SAFARI BROWSER FIXES
    /* ----------------------------------------------------------- */

    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
      $("body").addClass("body-safari");
    }

    /* ----------------------------------------------------------- */
    /*  REMOVE # FROM URL
    /* ----------------------------------------------------------- */

    $("a[href='#']").on("click", function (e) {
      e.preventDefault();
    });

    function removeHash() {
      history.replaceState(
        "",
        document.title,
        window.location.origin +
          window.location.pathname +
          window.location.search
      );
    }

    $("#menu li a").on("click", function (e) {
      setTimeout(() => {
        removeHash();
      }, 5);
    });

    /* ----------------------------------------------------------- */
    /*  REMOVE ANIMATIONS CLASSES IN DESKTOP
    /* ----------------------------------------------------------- */

    if ($(window).width() > 1024) {
      $(".fadeIn").removeClass("fadeIn");
      $(".fadeInUp").removeClass("fadeInUp");
      $(".fadeInDown").removeClass("fadeInDown");
      $(".fadeInRight").removeClass("fadeInRight");
      $(".fadeInLeft").removeClass("fadeInLeft");
    }

    /* ----------------------------------------------------------- */
    /*  MENU LINKS
    /* ----------------------------------------------------------- */



    $("#about-link").on("click", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#about", {
        scrollInertia: 1100,
      });
    });

    $("#competencies-link").on("click", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#my-testimonials", {
        scrollInertia: 1100,
      });
    });

    $("#skill-link").on("click", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#my-skills", {
        scrollInertia: 1100,
      });
    });
    $("#resume-link").on("click", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#my-resume", {
        scrollInertia: 1100,
      });
    });

    $("#clients-link").on("click", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#my-clients", {
        scrollInertia: 1100,
      });
    });

    $("#portfolio-link").on("click", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#portfolio", {
        scrollInertia: 1100,
      });
    });

    $("#contact-link").on("click", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#contact", {
        scrollInertia: 1100,
      });
    });

    $("#menu li a").on("click", function () {
      $("#checkboxmenu").trigger("click");
    });

    /* ----------------------------------------------------------- */
    /*  CALL TO ACTION HOME
    /* ----------------------------------------------------------- */

    $("#cta").on("click", function () {
      if ($(window).width() > 1024) {
        $("#wrapper").mCustomScrollbar("scrollTo", "#about", {
          scrollInertia: 1100,
        });
      } else {
        $("html, body").animate({
          scrollTop: $("#my-photo").offset().top,
        });
      }
    });

    /* ----------------------------------------------------------- */
    /*  SWIPER PORTFOLIO
    /* ----------------------------------------------------------- */

    var swiperportfolio = new Swiper(".swiper-portfolio", {
      loop: true,
      navigation: {
        nextEl: ".next-item",
        prevEl: ".prev-item",
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 30,
          navigation: false,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 0,
        },
        1025: {
          direction: "vertical",
        },
      },
    });

    $('[data-inline-image]').each(function () {
      var imageKey = $(this).data('inline-image');
      if (window.PORTFOLIO_IMAGE_ASSETS && window.PORTFOLIO_IMAGE_ASSETS[imageKey]) {
        $(this).attr('src', window.PORTFOLIO_IMAGE_ASSETS[imageKey]);
        $(this).closest('a[data-inline-image-href]').attr('href', window.PORTFOLIO_IMAGE_ASSETS[imageKey]);
      }
    });

    /* ----------------------------------------------------------- */
    /*  Text Animation - Typed JS
    /* ----------------------------------------------------------- */

    function updateExperienceYears() {
      $(".experience-years").each(function () {
        var startYear = parseInt($(this).data("experience-start-year"), 10);
        var startMonth = parseInt($(this).data("experience-start-month"), 10);
        if (!Number.isNaN(startYear) && !Number.isNaN(startMonth)) {
          var today = new Date();
          var currentYear = today.getFullYear();
          var currentMonth = today.getMonth() + 1;

          var totalMonths = (currentYear - startYear) * 12 + (currentMonth - startMonth);
          totalMonths = Math.max(totalMonths, 0);

          var fullYears = Math.floor(totalMonths / 12);
          var remainderMonths = totalMonths % 12;
          var decimalYears = (fullYears + remainderMonths / 12).toFixed(1);

          $(this).text(decimalYears + "+ years");
        }
      });
    }

    updateExperienceYears();

    var typed = new Typed("#typed-text", {
      strings: [
        "Senior BI Analyst",
        "Power BI Developer",
        "Embedded Analytics Specialist",
        "Prompt Engineer",
      ],
      typeSpeed: 20,
      backSpeed: 20,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    });

    $('header .header-inner .menu ul li span').click(function() {
      $('header .header-inner .menu ul li span').removeClass('active');
      $(this).addClass('active');
    });

    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    }, false);
  });
})(jQuery);