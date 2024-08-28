/* ==============
 ========= js documentation ==========================

 * theme name: Glamoure
 * version: 1.0
 * description: Wedding Html5 Template
 * author: pixelaxis
 * author url: https://themeforest.net/user/pixelaxis

    ==================================================

     01. wow init
     -------------------------------------------------
     02. banner one slider
     -------------------------------------------------
     03. odometer counter
     -------------------------------------------------
     04. presentation slider
     -------------------------------------------------
     05. gallery lightbox
     -------------------------------------------------
     06. gallery two lightbox
     -------------------------------------------------
     07. sponsor slider
     -------------------------------------------------
     08. team slider
     -------------------------------------------------
     09. testimonial slider
     -------------------------------------------------
     10. video modal
     -------------------------------------------------
     11. about three slider
     -------------------------------------------------
     12. gallery three slider
     -------------------------------------------------
     13. gallery three lightbox

    ==================================================
============== */

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    // wow init
    new WOW().init();

    // banner one slider
    $(".banner-one__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        speed: 900,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: false,
        centerPadding: 0,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });

    // odometer counter
    $(".odometer").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (
            var i = 0;
            i < document.querySelectorAll(".odometer").length;
            i++
          ) {
            var el = document.querySelectorAll(".odometer")[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });

    // presentation slider
    $(".presentation__slider").not(".slick-initialized").slick({
      infinite: true,
      autoplay: true,
      focusOnSelect: true,
      slidesToShow: 1,
      autoplaySpeed: 5000,
      speed: 1000,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      fade: true,
      cssEase: "ease-in-out",
      touchThreshold: 100,
    });

    function progressBar() {
      $(".slider-progress").find("span").removeAttr("style");
      $(".slider-progress").find("span").removeClass("active");
      setTimeout(function () {
        $(".slider-progress")
          .find("span")
          .css("transition-duration", 5000 / 1000 + "s")
          .addClass("active");
      }, 50);
    }
    progressBar();
    $(".presentation__slider").on("beforeChange", function (e, slick) {
      progressBar();
    });
    $(".presentation__slider").on(
      "beforeChange",
      function (e, slick, nextSlide) {
        titleAnim(nextSlide);
      }
    );

    function titleAnim(ele) {
      setTimeout(function () {}, 5000 - 500);
    }
    titleAnim();

    // gallery lightbox
    $(".gallery-popup").magnificPopup({
      delegate: "a",
      type: "image",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      callbacks: {
        beforeOpen: function () {
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure mfp-with-anim"
          );
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
    });

    // gallery two lightbox
    $(".gallery-two").magnificPopup({
      delegate: "a",
      type: "image",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      callbacks: {
        beforeOpen: function () {
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure mfp-with-anim"
          );
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
    });

    // sponsor slider
    $(".sponsor__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 4,
        speed: 1200,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });

    // team slider
    $(".team__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 4,
        speed: 700,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // testimonial slider
    $(".testimonial-two__slider").not(".slick-initialized").slick({
      infinite: true,
      autoplay: true,
      focusOnSelect: true,
      slidesToShow: 1,
      autoplaySpeed: 5000,
      speed: 1000,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      fade: true,
      cssEase: "ease-in-out",
      touchThreshold: 100,
    });

    function progressBar() {
      $(".slider-progress").find("span").removeAttr("style");
      $(".slider-progress").find("span").removeClass("active");
      setTimeout(function () {
        $(".slider-progress")
          .find("span")
          .css("transition-duration", 5000 / 1000 + "s")
          .addClass("active");
      }, 50);
    }
    progressBar();
    $(".testimonial-two__slider").on("beforeChange", function (e, slick) {
      progressBar();
    });
    $(".testimonial-two__slider").on(
      "beforeChange",
      function (e, slick, nextSlide) {
        titleAnim(nextSlide);
      }
    );

    function titleAnim(ele) {
      setTimeout(function () {}, 5000 - 500);
    }
    titleAnim();

    // video modal
    if (document.querySelector(".play-btn") !== null) {
      $(".play-btn").magnificPopup({
        disableOn: 768,
        type: "iframe",
        mainClass: "mfp-zoom-in",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        callbacks: {
          beforeOpen: function () {
            this.st.mainClass = this.st.el.attr("data-effect");
          },
        },
      });
    }

    // about three slider
    $(".about-three-slide")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        speed: 900,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });

    // gallery three slider
    $(".gallery-three__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 6,
        speed: 900,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: "120px",
        responsive: [
          {
            breakpoint: 1800,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              centerPadding: "120px",
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              centerPadding: "80px",
            },
          },
          {
            breakpoint: 424,
            settings: {
              slidesToShow: 1,
              centerPadding: "120px",
            },
          },
          {
            breakpoint: 350,
            settings: {
              slidesToShow: 1,
              centerPadding: "60px",
            },
          },
        ],
      });

    // gallery three lightbox
    $(".gallery-three").magnificPopup({
      delegate: "a",
      type: "image",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      callbacks: {
        beforeOpen: function () {
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure mfp-with-anim"
          );
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
    });

    // testimonial three slider
    $(".testimonial-three__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 1,
        speed: 700,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $(".slick-slider-dots"),
      });

    // team three slider
    $(".team-three__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 4,
        speed: 600,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // gallery four slider
    $(".gallery-four__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 7,
        speed: 600,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });

    // gallery three lightbox
    $(".gallery-four__slider").magnificPopup({
      delegate: "a",
      type: "image",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      callbacks: {
        beforeOpen: function () {
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure mfp-with-anim"
          );
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
    });

    // client slider
    $(".client__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        speed: 600,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: "0px",
        appendDots: $(".client-slider-dots"),
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // about lightbox
    $(".about-main__wrapper").magnificPopup({
      delegate: "a",
      type: "image",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      callbacks: {
        beforeOpen: function () {
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure mfp-with-anim"
          );
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
    });

    // client slider
    $(".about-main__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 4,
        speed: 600,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // about gallery lightbox
    $(".about-gallery__slider").magnificPopup({
      delegate: "a",
      type: "image",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      callbacks: {
        beforeOpen: function () {
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure mfp-with-anim"
          );
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
    });

    // client slider
    $(".about-gallery__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 4,
        speed: 600,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // portfolio gallery lightbox
    $(".portfolio-main").magnificPopup({
      delegate: "a",
      type: "image",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      callbacks: {
        beforeOpen: function () {
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure mfp-with-anim"
          );
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
    });

    $(".portfolio-main-two").magnificPopup({
      delegate: "a",
      type: "image",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      callbacks: {
        beforeOpen: function () {
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure mfp-with-anim"
          );
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
    });

    // shuffle product
    if ($(".shop-shuffle")[0]) {
      window.onload = function () {
        var Shuffle = window.Shuffle;
        var element = document.querySelector(".shop-shuffle");

        var shuffleInstance = new Shuffle(element, {
          itemSelector: ".shop-shuffle-item",
        });

        $(".shuffle-category").on("click", function (e) {
          e.preventDefault();
          var keyword = $(this).attr("data-target");
          shuffleInstance.filter(keyword);
        });
      };
    }

    $(".tab-btn").on("click", function () {
      $(".tab-btn").removeClass("tab-btn-active");
      $(this).addClass("tab-btn-active");
    });

    // latest product slider
    $(".latest-product")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 4,
        speed: 600,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // product image
    $(".product-thumb__for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".product-thumb__nav",
    });

    $(".product-thumb__nav").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      asNavFor: ".product-thumb__for",
      dots: false,
      arrows: false,
      focusOnSelect: true,
      verticalSwiping: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            verticalSwiping: false,
            vertical: false,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 2,
            verticalSwiping: false,
            vertical: false,
          },
        },
      ],
    });

    $(".banner-two-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      focusOnSelect: true,
      autoplay: false,
      focusOnSelect: true,
      speed: 500,
    });
  });
})(jQuery);
