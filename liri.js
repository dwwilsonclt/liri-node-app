var Twitter = require('twitter-node-sdk');
var keys = require("./keys.js");
var config = keys.twitterKeys;
console.log(config)
var twitter = new Twitter(config);

// twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, error, success);
// twitter.getMentionsTimeline({ count: '10'}, error, success);
// twitter.getHomeTimeline({ count: '10'}, error, success);
// twitter.getReTweetsOfMe({ count: '10'}, error, success);
// twitter.getTweet({ id: '72906212'}, error, success);

// twitter.getTweet('favorites/list', function(error, tweets, response) {
//   if(error) throw error;
//   console.log(tweets);  // The favorites. 
//   console.log(response);  // Raw response object. 
// });

twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, error, success);