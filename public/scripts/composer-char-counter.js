$(document).ready(function () {
  const $input = $(".input");

  $(".new-tweet").keydown(() => {
    const inputVal = $input.val();
    const reamining = 140 - $(".input").val().length;
    $(".counter1").text(reamining);
    if (reamining < 0) {
      $(".counter1").css("color", "#ff0000");
    }else {
      $(".counter1").css("color", "#000000");
    }
  });

  $(".displayTweet")
    .mouseover(function () {
      $(this).css("box-shadow", "10px 10px 5px #888");
    })
    .mouseleave(function () {
      $(this).css("box-shadow", "0px 0px 0px #888");
    });

    $(".newTweet").click(function(){
      $('.new-tweet').slideToggle()      
      $input.val("").focus();
    });

    

  // --- our code goes here ---
});
