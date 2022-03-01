$(document).ready(function () {
  console.log("first");

  const $input = $(".input");
  const $counter = $('counter1')

  $(".new-tweet").keydown(() => {
    console.log("keypress");    
    const inputVal = $input.val();
    const reamining = 140 - $('.input').val().length
    $('.counter1').text(reamining)
    if (reamining < 0) {
      $('.counter1').css('color', '#ff0000');
  }
    
  });
  
 
  $(".button-71").on("click", function () {
    event.preventDefault();
    const inputVal = $input.val();
    console.log(inputVal.length)
    $input.val('').focus();
  });
 

  // --- our code goes here ---
});
