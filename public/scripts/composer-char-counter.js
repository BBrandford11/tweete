$(document).ready(function () {
  const $input = $(".input");
  //function to change countdown based on characters inputed//
  $(".new-tweet").on("input", function () {
    const inputVal = $input.val();
    const remaining = 140 - $(".input").val().length;
    $(".counter1").text(remaining);
    if (remaining < 0) {
      $(".counter1").css("color", "#ff0000");
    } else {
      $(".counter1").css("color", "#000000");
    }
  });
});
