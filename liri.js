var keys = require("./keys.js");

console.log(keys);

var Twitter = require("twitter");

var spotify = require("spotify");

var getTweets = function(){

  var client = new Twitter(keys.twitterKeys);

  var parameters = {screen_name: 'lalalilyc'};
  client.get('statuses/user_timeline', parameters, function(error, tweets, response){
	  if (!error){
		for(var i = 0; i < tweets.length; i++){
			console.log(tweets[i].created_at);
			console.log(" ");
			console.log(tweets[i].text);
		}
	}

});

}

var getSpotify = function(songName) {

var client = new spotify(keys.spotifyKeys);

spotify.search({ type: 'track', query: songName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

    var songs = data.tracks.items;
    for(var i  = 0; i < songs.length; i++) {
    	console.log(i);
    	console.log("artist: " + songs[i].artists.map(getArtistNames));
    	console.log("preview song: " + songs[i].preview_url);
    	console.log("album: " + songs[i].album.name);
    	console.log("---------");
    }
});

}
 //choose tweets/song/movie
var pick = function(caseData, functionData){
	switch(caseData){
		case "my-tweets":
		getTweets();
		break;
		case "name-song":
		getSpotify(functionData);
		break;
		default:
		console.log("Liri does not know that");

	}
}

var runThis = function(argOne, ArgTwo){
	pick(argOne, ArgTwo);
};

runThis(process.argv[2], process.argv[3]);
