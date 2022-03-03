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

  // $(".button-71").on("click", function () {
  //   event.preventDefault();
  //   const inputVal = $input.val();
  //   $input.val("").focus();
  // });

  $("form").submit(function (event) {
    event.preventDefault();
    if ($(".input").val() === "" || $(".input").val() === null) {
      alert("Please enter a tweet!");
      return false;
    }
    if ($(".input").val().length > 140) {
      alert("Tweets can only be 140 characters long!");
      return false;
    }
    
    let serialize = $(".input").serialize();
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: serialize,
    })
      .then(function (data) {
        console.log("Passed", data);
      })
      .catch(function (error) {
        console.log("error", error);
      });
    $input.val("").focus();
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
