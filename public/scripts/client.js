$(document).ready(function () {
  
  // const data = [
  //   {
  //     user: {
  //       name: "Newton",
  //       avatars: "https://i.imgur.com/73hZDYK.png",
  //       handle: "@SirIsaac",
  //     },
  //     content: {
  //       text: "If I have seen further it is by standing on the shoulders of giants",
  //     },
  //     created_at: 1461116232227,
  //   },
  //   {
  //     user: {
  //       name: "Descartes",
  //       avatars: "https://i.imgur.com/nlhLi3I.png",
  //       handle: "@rd",
  //     },
  //     content: {
  //       text: "Je pense , donc je suis",
  //     },
  //     created_at: 1469088,
  //   },
  // ];

  const renderTweets = function (tweets) {
    for (let t in tweets) {
      const type = createTweetElement(tweets[t]);
      $("#tweetContainer").append(type);
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

  const loadTweets = function() {
    $.ajax({
      url: "http://localhost:8080/tweets",
      method: "GET",
      
    })
      .then(function (data) {
        console.log("Passed2", data);        
        renderTweets(data)
      })
      .catch(function (error) {
        console.log("error2", error);
      });
  }


  
  loadTweets()
  
});
