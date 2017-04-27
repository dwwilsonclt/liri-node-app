//LOAD NPM - TWITTER
var Twitter = require('twitter');
var keys = require("./keys.js");
var config = keys.twitterKeys;
var client = new Twitter(config);

// LOAD NPM - SPOTIFY
var  spotify  =  require('spotify');

// LOAD NPM - REQUEST
var request = require("request");

//LOAD FS FOR readFile (if required)
var fs = require("fs");

//GLOBAL VARIABLES FOR PARAMETERS
var paramEntered = "";
var commandEntered = "";
var allParams = process.argv.splice(2)

//CHECK USER INPUT FOR ANOMOLIES RETURNING CLEAN commandEntered and paramEntered
validateParameters(allParams);

//EXECUTE COMMAND
executeLIRI();

//FUNCTION TO EXECUTE COMMAND PRESENTED
function executeLIRI() {
    // MAIN LOGIC FOLLOWS
    switch (commandEntered) {   
        case "my-tweets":
                  twittersearch();       
            break;   
        case "spotify-this-song":
                  spotifysearch();       
            break;   
        case "movie-this":
                  omdbsearch();       
            break;   
        case "do-what-it-says":
                  dowhatitsays();       
            break;   
        default:
                  console.log("UNRECOGNIZED REQUEST - TRY AGAIN")
    }
}

function omdbsearch() {
    //OMDB SEARCH CODE FOLLOWS
    var searchOMDB = "Mr.+Nobody";
    if (paramEntered !== "") {
        searchOMDB = paramEntered.replace(/ /g, "+")
    }
    var queryURLBase = "http://www.omdbapi.com/?t="
    var queryURLParams = "&y=&plot=short&r=json"
    var queryURL = queryURLBase + searchOMDB + queryURLParams;

    request(queryURL, function(error, response, body) {

        if (!error && response.statusCode === 200) {
            console.log("========================")
            console.log("OMDB SEARCH FOLLOWS:")
            console.log("The movie's name is : " + JSON.parse(body).Title);
            console.log(" Year movie came out : " + JSON.parse(body).Year);
            console.log(" IMDB rating  : " + JSON.parse(body).imdbRating);
            console.log(" Country produced : " + JSON.parse(body).Country);
            console.log(" Language : " + JSON.parse(body).Language);
            console.log(" Plot of the movie : " + JSON.parse(body).Plot);
            console.log(" Actors : " + JSON.parse(body).Actors);
            //LOG TO FILE
            fs.appendFile("log.txt", "========================" + "\r\n", function() {});
            fs.appendFile("log.txt", "OMDB SEARCH FOLLOWS:" + "\r\n", function() {});
            fs.appendFile("log.txt", "The movie's name is : " + JSON.parse(body).Title + "\r\n", function() {});
            fs.appendFile("log.txt", " Year movie came out : " + JSON.parse(body).Year + "\r\n", function() {});
            fs.appendFile("log.txt", " IMDB rating  : " + JSON.parse(body).imdbRating + "\r\n", function() {});
            fs.appendFile("log.txt", " Country produced : " + JSON.parse(body).Country + "\r\n", function() {});
            fs.appendFile("log.txt", " Language : " + JSON.parse(body).Language + "\r\n", function() {});
            fs.appendFile("log.txt", " Plot of the movie : " + JSON.parse(body).Plot + "\r\n", function() {});
            fs.appendFile("log.txt", " Actors : " + JSON.parse(body).Actors + "\r\n", function() {});
            var ratings = JSON.parse(body).Ratings;
            for (var i = ratings.length - 1; i >= 0; i--) {
                if (ratings[i].Source === "Rotten Tomatoes") {
                    console.log(" Rotten Tomatoes Rating : " + ratings[i].Value);
                    fs.appendFile("log.txt", " Rotten Tomatoes Rating : " + ratings[i].Value + "\r\n", function() {});

                }
            }

            console.log(" Website : " + JSON.parse(body).Website);
            fs.appendFile("log.txt", " Website : " + JSON.parse(body).Website + "\r\n", function() {});

        }
    });
}

//TWITTER ACCESS CODE FOLLOWS
function twittersearch() {
    var params = {
        q: 'BidDaddyCLT'
    };

    client.get('search/tweets', params, function(error, tweets, response) {
        if (!error) {

        } else {
            console.log(error);
        }
        fs.appendFile("log.txt", "========================" + "\r\n", function() {});
        fs.appendFile("log.txt", "TWEETS FOLLOW" + "\r\n", function() {});
        console.log("========================");
        console.log("TWEETS FOLLOW");
        for (var i = tweets.statuses.length - 1; i >= 0; i--) {
            console.log(tweets.statuses[i].created_at);
            console.log("   " + tweets.statuses[i].text);
            fs.appendFile("log.txt", tweets.statuses[i].created_at + "\r\n", function() {});
            fs.appendFile("log.txt", "   " + tweets.statuses[i].text + "\r\n", function() {});
        }
    });
}

//SPOTIFY ACCESS CODE FOLLOWS
function spotifysearch() {
    var paramsSpotify = {
        type: 'track',
        query: ''
    } 
    var queryTrack = "The Sign"
    if (paramEntered !== "") {
        queryTrack = paramEntered;
    }
    paramsSpotify.query = queryTrack;
    spotify.search(paramsSpotify,  function(err,  data)  {    
        if  ( err )  {        
            console.log('Error occurred: '  +  err);        
            return;    
        }
        var itemData = data.tracks.items
        console.log("========================");
        console.log("SPOTIFY FOLLOWS");
        fs.appendFile("log.txt", "========================" + "\r\n", function() {});
        fs.appendFile("log.txt", "SPOTIFY FOLLOWS" + "\r\n", function() {});
        console.log("Song search - " + paramsSpotify.query)
        fs.appendFile("log.txt", "Song search - " + paramsSpotify.query + "\r\n", function() {});
        for (var i = itemData.length - 1; i >= 0; i--) {
            var trackArtists = itemData[i].album.artists
            var albumName = itemData[i].album.name;
            console.log("Album name - " + albumName);
            fs.appendFile("log.txt", "Album name - " + albumName + "\r\n", function() {});
            var previewLink = itemData[i].album.external_urls.spotify;
            console.log("    Album preview link: " + previewLink);
            fs.appendFile("log.txt", "    Album preview link: " + previewLink + "\r\n", function() {});
            for (var j = trackArtists.length - 1; j >= 0; j--) {
                var trackArtist = trackArtists[j].name;
                console.log("    Performed by artist - " + trackArtist);
                fs.appendFile("log.txt", "    Performed by artist - " + trackArtist + "\r\n", function() {});
            }
        }
    });
}

// RANDOM REQUEST CODE FOLLOWS
// READ THE REQUEST AND EXECUTE THE COMMAND
function dowhatitsays() {
    console.log("DO WHAT IT SAYS===========================");
    fs.appendFile("log.txt", "DO WHAT IT SAYS===========================");
    fs.readFile("random.txt", "utf8", function(error, data) {
        var dataArr = data.split(",");
        commandEntered = dataArr[0];
        if (dataArr.length > 1) {
            paramEntered = dataArr[1];
        }
        executeLIRI();
    });
}

//FUNCTION FOLLOWS TO "BULLET PROOF" USER PARAMETER ENTRY PROVIDING FUNCTIONS WITH CLEAN 'commandEntered' & 'paramEntered'
function validateParameters(params) {

    var parsedParams = "";

    //BUILD A STRING - first remove any stray commas (cleaning a parameter) AND seperating each parameter with a ','
    for (var i = 0; i < params.length; i++) {
        var str = params[i].split(",")
        parsedParams += str.join() + ","
        str = []
    }

    parsedParams = parsedParams.trim();

    //NOW RE-BUILD THE ARRAY TO CONTAIN ALL PARAMETERS SANS ','
    params = parsedParams.split(",")

    //params[0] is the command
    commandEntered = params[0];

    //slice param[0] out of the array and join them seperated by a space
    if (params.length > 1) {
        params = params.slice(1);
        paramEntered = params.join(" ");
    }
}
