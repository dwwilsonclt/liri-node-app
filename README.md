# liri-node-app
LIRI project WK10
In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

All liri execution logged into log.txt file 

Test scripts follow:/n/

1	node liri  my-tweets/n/
2	node liri  my-tweets,blah
3	node liri  spotify-this-song
4	node liri  spotify-this-song,desperado
5	node liri  spotify-this-song desperado
6	node liri  movie-this
7	node liri  movie-this the godfather
8	node liri  do-what-it-says
9	node liri  do-what-it-says,blah

Expectation and validation of results:

1	logging of recent tweets
2	verify running after programatically removing improper user entry of parameter
3	verify default of "The Sign" with no parameter entry
4	verify running after programatically removing improper user entry of parameter; should run song desperado
5	verify song desperado run
6	verify OMDB "Mr Nobody" is run with no parameter entry
7	verify OMDB the godfather
8	verify runs random.txt with song "I Want it That Way"
9	verify running after programatically removing improper user entry of parameter

NOTE: VERIFICATION PROVIDED IN testvalidation.txt file 4-25-2017 - Approved by Davis