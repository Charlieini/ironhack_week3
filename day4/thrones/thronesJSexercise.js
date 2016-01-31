var fs = require('fs');
function fileActions(err, file){
    if (err) {
        throw err;
    }
    var episodes4 = JSON.parse(file);
	var episodes3=orderEpisodes(episodes4);
	var episodes2=filterEpisodes(episodes3,0);
	var episodes=indexEpisodes(episodes2,"some");


   	for (var i=0; i<episodes.length; i++){
	    console.log("Title: "+episodes[i].title+" #"+episodes[i].episode_number);
	    console.log(episodes[i].description);
	    console.log("Rating: "+episodes[i].rating+"*".repeat(episodes[i].rating));
    }
}


function orderEpisodes(vEpisodes){
		var newNumbers = vEpisodes.sort(function(a, b){
	   		return a.episode_number-b.episode_number;
	   	});
		return newNumbers
}
function filterEpisodes(vEpisodes,rate){
		var newNumbers = vEpisodes.filter(function(value){
	   		return value.rating>rate;
	   	});
		return newNumbers
}
function indexEpisodes(vEpisodes,word){
		var newNumbers = vEpisodes.filter(function(value){
	   		return value.description.indexOf(word)!==-1;
	   	});
		return newNumbers
}

fs.readFile("episodes.json", 'utf8', fileActions);
