$(document).ready(function () {
  const $input = $(".input");

  const renderTweets = function (tweets) {
    for (let t in tweets) {
      const type = createTweetElement(tweets[t]);
      $("#tweetContainer").prepend(type);
    }
  };

  const createTweetElement = function (data1) {
    const $tweet = `<article class="displayTweet"> <header>      
    <p><img src="${data1.user.avatars}" /> ${data1.user.name}</p>
    <p>${data1.user.handle}</p>
    </header>
      <div class="showTweets">${data1.content.text}</div>
    <footer>
    <p>${timeago.format(data1.created_at)}</p>
        <ul class="icons">
        <li class="fa-solid fa-flag"></li>
        <li class="fa-solid fa-retweet"></li>
        <li class="fa-solid fa-heart"></li>
      </ul>
    </footer>
    </article>`;

    return $tweet;
  };

  const loadTweets = function () {
    $.ajax({
      url: "http://localhost:8080/tweets",
      method: "GET",
    })
      .then(function (data) {
        console.log("Passed2", data);
        renderTweets(data);
      })
      .catch(function (error) {
        console.log("error2", error);
      });
  };

  $("form").submit(function (event) {
    event.preventDefault();
    if ($(".input").val() === "" || $(".input").val() === null) {
      $(".errors").html("⚠ Please enter a tweet. ⚠").slideDown();
      return false;
    }
    if ($(".input").val().length > 140) {
      $(".errors").html("⚠ Please enter a tweet uner 140 charasters. ⚠").slideDown();
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
        $('.errors').slideUp();
        loadTweets();
      })
      .catch(function (error) {
        console.log("error", error);
      });
    $input.val("").focus();
  });

  loadTweets();
});
