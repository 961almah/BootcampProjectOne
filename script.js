var APIkey = "b7c2391a"
var movies = []
var title = "tt3896198"

var queryURL = "http://www.omdbapi.com/?i=" + title + "&apikey=" + APIkey
$.ajax ({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response)
})


var APIkey = "6c8eb1beb2msh577158598f1662ap15db2cjsn96ca57bdafd2"
var movies = []
var cocktail = ""

var queryURL = "https://rapidapi.p.rapidapi.com/popular.php" 
$.ajax ({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response)
})


const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://rapidapi.p.rapidapi.com/popular.php",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "6c8eb1beb2msh577158598f1662ap15db2cjsn96ca57bdafd2"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
