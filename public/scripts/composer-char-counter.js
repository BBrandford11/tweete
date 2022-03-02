$(document).ready(function () {
  
  const $input = $(".input");
  // const $counter = $('counter1')

  $(".new-tweet").keydown(() => {    
    const inputVal = $input.val();
    const reamining = 140 - $(".input").val().length;
    $(".counter1").text(reamining);
    if (reamining < 0) {
      $(".counter1").css("color", "#ff0000");
    }
  });

  $(".button-71").on("click", function () {
    event.preventDefault();
    const inputVal = $input.val();
    $input.val("").focus();
  });

  $(".displayTweet")
    .mouseover(function () {
      console.log("2")
      $(this).css("box-shadow", "10px 10px 5px #888");
    })
    .mouseleave(function () {
      $(this).css("box-shadow", "0px 0px 0px #888");
    });

  $(".fa-solid fa-retweet")
    .mouseover(function () {
      console.log("first2222")
      $(this).css("color", "#ff0000");
    })
    .mouseleave(function () {
      $(this).css("color", "#ffffff");
    });

  // --- our code goes here ---
});
