var Twitter = require('twitter');
var keys = require("./keys.js");
var config = keys.twitterKeys;
// console.log(config)
var client = new Twitter(config);

// twitter.get('favorites/list', error, tweets, response) 

// var params = {screen_name: 'cnn'};
// twitter.get('statuses/user_timeline', params, error, tweets, response)

// function error(err) {
//     console.log(err);
// };

// function tweets(data) {
//     console.log("tweets")
//     console.log(data);
// };
// function response(data) {
// 	console.log("response")
//     console.log("response " + data);
// };

var params = {
    q: '@JonahNRO'
};

client.get('search/tweets', params, function(error, tweets, response) {
    if (!error) {
        console.log(JSON.parse(response,null,2));
        // console.log(JSON.stringify(response,null,2));
    } else {
        console.log(error);
    }
});

var  spotify  =  require('spotify');
var paramsSpotify = {
    type: 'track',
    query: 'the sign'
} 
spotify.search(paramsSpotify,  function(err,  data)  {    
    if  ( err )  {         console.log('Error occurred: '  +  err);        
        return;     }
    var itemData = data.tracks.items
        // console.log("items: " + itemData.length)

    for (var i = itemData.length - 1; i >= 0; i--) {
        var trackArtists = itemData[i].album.artists
        var albumName = itemData[i].album.name;
        console.log("Album name - " + albumName)
        var previewLink = itemData[i].album.external_urls.spotify;
        console.log("    Album preview link: " + previewLink)
        for (var j = trackArtists.length - 1; j >= 0; j--) {
            var trackArtist = trackArtists[j].name;
            console.log("    Performed by artist - " + trackArtist)

        }
    }
    // console.log("data.tracks.items[0].album.artists[0].name")
    // console.log(data.tracks.items[0].album.artists[0].name);


          // Do something with 'data' 

});
