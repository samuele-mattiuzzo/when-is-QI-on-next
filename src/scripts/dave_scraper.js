const qi_url = "https://uktvplay.uktv.co.uk/shows/qi/watch-online",
      qixl_url = "https://uktvplay.uktv.co.uk/shows/qi-xl/watch-online";

fetch(qi_url)
  .then(function(response) {
    // handle the response
    console.log(response);
  })
  .catch(function() {
    // handle the error
  });


var episodes = document.querySelectorAll(".episode-row");

episodes.forEach(function(episode) {
  console.log(episode.innerText.replace('Dave', ''));
});
