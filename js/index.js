$(document).ready(function() {
  $('.owl-item').addClass('flex');
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  navigationText: [
    "<i class='fa fa-angle-right'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 3,
      nav: false
    },
    1000: {
      items: 3,
      nav: false,
      loop: true
    }
  }
});

$(document).ready(function() {
  var owl = $(".owl-carousel");
  owl.owlCarousel();
  // Go to the next item
  $(".owl-next").click(function() {
    owl.trigger("next.owl.carousel");
  });
});

// hover template--item--1
$(document).ready(function() {
  $(".template--item--1").hover(
    function() {
      $(this).css(
        "background-image",
        "linear-gradient(135deg , #7f38f5, #1bd4db, #7f38f5)"
      );
      $(this).css("border", "none");
    },
    function() {
      $(this).css("background-image", "none");
      $(this).css("border", "2px solid #e8e8e8");
    }
  );
});

// hover template--item--2
$(document).ready(function() {
  $(".template--item--2").hover(
    function() {
      $(this).css(
        "background-image",
        "linear-gradient(135deg, #c165dd 0%, #5c27fe 100%)"
      );
      $(".template--overflow--2").css("background-color", "transparent");
      $(".template--overflow--2").css("border", "none");
      $(".template--img--b2")
        .removeClass("b2")
        .addClass("b3--hover");
      $(".template--title--2").css("color", "#ffffff");
      $(".template--text--2").css("color", "#c4c4c4");
    },
    function() {
      $(this).css("background-image", "none");
      $(".template--overflow--2").css("background-color", "#ffffff");
      $(".template--overflow--2").css("border", "none");
      $(".template--img--b2")
        .removeClass("b3--hover")
        .addClass("b2");
      $(".template--title--2").css("color", "#4f4e4d");
      $(".template--text--2").css("color", "#8c8c8c");
    }
  );


// hover button
  $(".template--button__content").hover(
    function() {
      $(this).css("background-color", "transparent");
      $(this).css("color", "#ffffff");
    },
    function() {
      $(this).css("background-color", "#ffffff");
      $(this).css("color", "#6f32f8");
    }
  );
});
