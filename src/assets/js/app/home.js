$(document).ready(function () {
  AOS.init();
  let video = document.getElementById("fvideo");
  $(".video_playr .play_btn").click(function () {
    $("body").addClass("video_playback_open");
    setTimeout(() => {
      video.play();
    }, 400);
  });
  $(".about_intro .video_playr .video-wrap .close_btn").click(function () {
    $("body").removeClass("video_playback_open");
    video.pause();
  });
  $(".bg_overlay_blade").click(function () {
    $("body").removeClass("overlay");
    $("body").removeClass("nav_bar_open");
    $("body").removeClass("video_playback_open");
    $(".service_card").removeClass("service_open");
    $("body").removeClass("service_popup_open");
  });
  $(".service_card .open_popup").click(function () {
    $(this).closest(".service_card").addClass("service_open");
    $("body").addClass("overlay");
    $("body").addClass("service_popup_open");
  });
  $(".service_card .popup_description .popup_header svg").click(function () {
    $("body").removeClass("overlay");
    $(".service_card").removeClass("service_open");
    $("body").removeClass("service_popup_open");
  });
  $(window).scroll(function () {
    if (window.scrollY > 20) {
      $("body").addClass("header_sticky");
    } else {
      $("body").removeClass("header_sticky");
    }
  });
  $("header .nav_inner_wrapper .right_nav_wrap .hamburger_menu").click(
    function () {
      $("body").toggleClass("nav_bar_open");
    }
  );
  $(".sidebar .close_bt").click(function () {
    $("body").removeClass("nav_bar_open");
  });

  $("header nav ul li a").click(function (e) {
    e.preventDefault();
    gotoId($(this).attr("href").split("#")[1]);
    $("body").removeClass("nav_bar_open");
  });
  $("footer nav ul li a").click(function (e) {
    e.preventDefault();

    gotoId($(this).attr("href").split("#")[1]);
  });
  $(".main_banner .scroll_down_btn").click(function (e) {
    e.preventDefault();

    gotoId($(this).attr("href").split("#")[1]);
  });
  function gotoId(id) {
    var scrollElm = document.getElementById(`${id}`);
    let top = scrollElm.offsetTop;
    window.scrollTo({
      top: top - 0,
      behavior: "smooth",
    });
  }
});
