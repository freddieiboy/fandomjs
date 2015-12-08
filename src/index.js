var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var fs = require('fs');

var startingUrl = "http://www.nwanime.com/"
var searchQuery = "One Piece"

request (startingUrl, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    // Parse the document body
    var $ = cheerio.load(body);
    var videoLink = $('a[href^="http"]:contains(' + searchQuery + ')').attr("href");
    var videoTitle = $('a[href^="http"]:contains(' + searchQuery + ')').attr("title");
    //TODO: clean up title

    console.log("This link is: " + videoTitle + videoLink);
  }

});
