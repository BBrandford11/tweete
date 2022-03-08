$(document).ready(function () {
  const $input = $(".input");
  
  const btn = $("#myBtn");


  // scroll up button function
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  //resets tweet input form after submiting a tweet
  $(".newTweet").click(function () {
    $(".new-tweet").slideToggle();
    $input.val("").focus();
  });

  //loops thru the database and calls create tweet to sytle each one and prepend it to the body
  const renderTweets = function (tweets) {
    let tweetToPrepend;
    $("#tweetContainer").empty();
    for (const tweet in tweets) {
      tweetToPrepend = createTweetElement(tweets[tweet]);
      $("#tweetContainer").prepend(tweetToPrepend);
    }
  };

  // takes in a tweet and applies the correct htmls styles for it
  const createTweetElement = function (tweet) {
    const $tweet = `<article class="displayTweet"> <header>      
    <p><img src="${tweet.user.avatars}" /> ${tweet.user.name}</p>
    <p>${tweet.user.handle}</p>
    </header>
      <div class="showTweets">${tweet.content.text}</div>
    <footer>
    <p>${timeago.format(tweet.created_at)}</p>
        <ul class="icons">
        <li class="fa-solid fa-flag"></li>
        <li class="fa-solid fa-retweet"></li>
        <li class="fa-solid fa-heart"></li>
      </ul>
    </footer>
    </article>`;

    return $tweet;
  };

  // ajax get request to get all the tweets from database
  const loadTweets = function () {
    $.ajax({
      url: "http://localhost:8080/tweets",
      method: "GET",
    })
      .then(function (data) {
        renderTweets(data);
      })
      .catch(function (error) {
        console.log("error2", error);
      });
  };

  //ajax post request and handling of errors if tweet is empty or over 140 characters
  $("form").submit(function (event) {
    const inputVal = $(".input").val();
    event.preventDefault();
    if (!inputVal) {
      $(".errors").html("⚠ Please enter a tweet. ⚠").slideDown();
      return false;
    }
    if (inputVal.length > 140) {
      $(".errors")
        .html("⚠ Please enter a tweet under 140 charasters. ⚠")
        .slideDown();
      return false;
    }

    let serialize = $(".input").serialize();
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: serialize,
    })
      .then(function (data) {
        $(".errors").slideUp();
        loadTweets();
        $(".counter1").text(140);
      })
      .catch(function (error) {
        console.log("error", error);
      });
    $input.val("").focus();
  });
  //calls the load tweet function to start the loop of tweets
  loadTweets();
});
