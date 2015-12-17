var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var fs = require('fs');

var startingUrl = "http://www.nwanime.com"
var searchQuery = "Fairy Tail"

request(startingUrl, function(error, response, body) {
  if (!error && response.statusCode == 200)
    // Parse the document body
    var $ = cheerio.load(body);
    var videoLink = $('a[href^="http"]:contains(' + searchQuery + ')').attr("href");
    var videoTitle = $('a[href^="http"]:contains(' + searchQuery + ')').attr("title");

    videoCollection($, videoTitle, videoLink);
});

// function searchVideo($) {
//   console.log(videoTitle +  videoLink);
//   //TODO: clean up title
//   // fs.appendFile('videos-to-watch.txt', videoTitle + '\n' + videoLink, function(err) {
//   //   if (err) throw err;
//   //   console.log('Your anime\'s have been added!');
//   // });
// };

function videoCollection($, videoTitle, videoLink) {
  var animeToWatch = [];

  animeToWatch.push({
    title: videoTitle,
    link: videoLink
  });

  console.log(animeToWatch);
}
