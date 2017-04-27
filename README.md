# liri-node-app
LIRI project WK10
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

Installation:
==============
node modules are required
**refer to package.json

*keys included for grading purposes

All liri execution logged into log.txt file 

Test scripts follow:
====================

 - 'node liri  my-tweets'[  logging of recent tweets]
 - 'node liri  my-tweets,blah'[  verify running after programatically removing improper user entry of parameter]
 - 'node liri  spotify-this-song'[  verify default of "The Sign" with no parameter entry]
 - 'node liri  spotify-this-song,desperado'[  verify running after programatically removing improper user entry of parameter; should run song desperado]
 - 'node liri  spotify-this-song desperado'[  verify song desperado run]
 - 'node liri  movie-this'[  verify OMDB "Mr Nobody" is run with no parameter entry]
 - 'node liri  movie-this the godfather'[  verify OMDB the godfather]
 - 'node liri  do-what-it-says'[  verify runs random.txt with song "I Want it That Way"]
 - 'node liri  do-what-it-says,blah'[  verify running after programatically removing improper user entry of parameter]


**NOTE: VERIFICATION PROVIDED IN testvalidation.txt file 4-25-2017 - Approved by Davis