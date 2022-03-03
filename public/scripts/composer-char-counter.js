$(document).ready(function () {
  const $input = $(".input");

  $(".new-tweet").keydown(() => {
    const inputVal = $input.val();
    const reamining = 140 - $(".input").val().length;
    $(".counter1").text(reamining);
    if (reamining < 0) {
      $(".counter1").css("color", "#ff0000");
    }
  });

  $(".displayTweet")
    .mouseover(function () {
      $(this).css("box-shadow", "10px 10px 5px #888");
    })
    .mouseleave(function () {
      $(this).css("box-shadow", "0px 0px 0px #888");
    });

  // --- our code goes here ---
});
