$(document).ready(function () {
  const $input = $(".input");
  //function to change countdown based on characters inputed//
  $(".new-tweet").keydown(() => {
    const inputVal = $input.val();
    const reamining = 140 - $(".input").val().length;
    $(".counter1").text(reamining);
    if (reamining < 0) {
      $(".counter1").css("color", "#ff0000");
    } else {
      $(".counter1").css("color", "#000000");
    }
  });
});
