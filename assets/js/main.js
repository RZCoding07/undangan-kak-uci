/* ==============
 ========= js documentation ==========================

 * theme name: Glamoure
 * version: 1.0
 * description: Wedding Html5 Template
 * author: pixelaxis
 * author url: https://themeforest.net/user/pixelaxis

    ==================================================

     01. preloader
     -------------------------------------------------
     02. navbar
     -------------------------------------------------
     03. window scroll
     -------------------------------------------------
     04. scroll progress
     -------------------------------------------------
     05. copyright
     -------------------------------------------------
     06. cart
     -------------------------------------------------
     07. count down

    ==================================================
============== */

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    // navbar
    $(".nav__bar").on("click", function () {
      $(this).toggleClass("nav__bar-toggle");
      $(".nav__menu").toggleClass("nav__menu-active");
      $(".backdrop").toggleClass("backdrop-active");
      $("body").toggleClass("body-active");
    });

    $(".backdrop, .nav__menu-close, .hide-nav").on("click", function () {
      $(".backdrop").removeClass("backdrop-active");
      $(".nav__bar").removeClass("nav__bar-toggle");
      $(".nav__menu").removeClass("nav__menu-active");
      $(".nav__dropdown").removeClass("nav__dropdown-active");
      $(".nav__menu-link--dropdown").next(".nav__dropdown").slideUp(500);
      $(".nav__menu-link--dropdown").removeClass(
        "nav__menu-link--dropdown-active"
      );
      $("body").removeClass("body-active");
    });

    $(window).on("resize", function () {
      $(".backdrop").removeClass("backdrop-active");
      $(".nav__bar").removeClass("nav__bar-toggle");
      $(".nav__menu").removeClass("nav__menu-active");
      $(".nav__dropdown").removeClass("nav__dropdown-active");
      $(".nav__menu-link--dropdown").removeClass(
        "nav__menu-link--dropdown-active"
      );
      $("body").removeClass("body-active");
      $(".ticket-modal").slideUp();
      $(".conference-modal").slideUp();
    });

    $(".nav__menu-link--dropdown").on("click", function () {
      $(this).next(".nav__dropdown").toggleClass("nav__dropdown-active");
      $(this).toggleClass("nav__menu-link--dropdown-active");
    });

    // on window scroll
    $(window).on("scroll", function () {
      // position navbar on scroll
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        $(".header").removeClass("header-active");
        $(".change-logo").attr("src", "assets/images/logo.png");
      } else {
        $(".header").addClass("header-active");
        $(".change-logo").attr("src", "assets/images/logo-dark.png");
      }
    });

    // scroll to top with progress
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });

    // copyright year
    $("#copyYear").text(new Date().getFullYear());

    // cart
    let quantity = 0;
    $(".increment").on("click", function () {
      if (quantity <= 4) {
        quantity++;
        $(".total-quantity").html(quantity);
      }
    });

    $(".decrement").on("click", function () {
      if (quantity >= 1) {
        quantity--;
        $(".total-quantity").html(quantity);
      }
    });

    $(".check-color").on("click", function () {
      $(".check-color").removeClass("check-color-active");
      $(this).addClass("check-color-active");
    });

    // count down
    function makeTimer() {
      // Set the event date and time
      var endTime = new Date("14 September 2024 00:00:00 GMT+07:00").getTime();
  
      // Get the current time
      var now = new Date().getTime();
  
      // Calculate the time left until the event
      var timeLeft = (endTime - now) / 1000;
  
      // Calculate days, hours, minutes, and seconds
      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft % 86400) / 3600);
      var minutes = Math.floor((timeLeft % 3600) / 60);
      var seconds = Math.floor(timeLeft % 60);
  
      // Format numbers to always show two digits
      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;
  
      // Update the HTML elements with the calculated time
      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
  
      // Repeat the function every second
      // setTimeout(makeTimer, 1000);
  }
  
    setInterval(function () {
      makeTimer();
    }, 1000);
  });
})(jQuery);
