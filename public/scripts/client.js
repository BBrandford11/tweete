$(document).ready(function () {
  // Fake data taken from initial-tweets.json
  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];

  const renderTweets = function (tweets) {
    for (let t in tweets) {
      console.log(tweets[t])
      const type = createTweetElement(tweets[t])
      $("#tweetContainer").append(type);      
    }
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  };

  /*
   * Client-side JS logic goes here
   * jQuery is already loaded
   * Reminder: Use (and do all your DOM work in) jQuery's document ready function
   */

  const createTweetElement = function (data1) {
    const $tweet = `<article class="displayTweet"> <header> 
    <p><img src="${data1.user.avatars}" /> ${data1.user.name}</p>
    <p>${data1.user.handle}</p>
    </header>
      <div class="showTweets">${data1.content.text}</div>
    <footer>
    <p>${data1.created_at}</p>
        <ul class="icons">
        <li class="fa-solid fa-flag"></li>
        <li class="fa-solid fa-retweet"></li>
        <li class="fa-solid fa-heart"></li>
      </ul>
    </footer>
    </article>`;

    return $tweet;
  };

  renderTweets(data)

  // const $tweet = createTweetElement(tweetData);

  // // Test / driver code (temporary)
  // console.log("tweet", $tweet); // to see what it looks like
  // $("#tweetContainer").append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
