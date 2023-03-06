$(function () {
  var $win = $(window),
    $header = $("header"),
    animationClass = "is-animation";

  $win.on("load scroll", function () {
    var value = $(this).scrollTop();
    if (value > 800) {
      $header.addClass("is-animation");
      $("#ttl").css("background", "");
      $("#btn").hover(
        function () {
          $(this).css("background", "#0089cd");
        },
        function () {
          $(this).css("background", "#fff");
        }
      );
    } else {
      $header.removeClass("is-animation");
      $("#ttl").css("background", "#000");
      $("#btn").hover(
        function () {
          $(this).css("background", "#000");
        },
        function () {
          $(this).css("background", "#fff");
        }
      );
    }
  });
});
