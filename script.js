// add ten most popular movies to top ten movies subtitle 


// create search button on click event to populate side bar with movie details 

// make API key variables
var APIkey = "b7c2391a"
// make variables for OMDB API
var movies = JSON.parse(localStorage.getItem("movies")) || [];
var uniqueMovies = [];
$.each(movies, function(i, el){
    if($.inArray(el,uniqueMovies) === -1) uniqueMovies.push(el);
});
 var title = "";
// make variables for MDB API
 var posterDiv = $("<div>");
$("#movie-search-info").append(posterDiv);
// load previous items from local storage and add the enxt one after the movie is added for side bar
 for (var i = 0; i < movies.length; i++){
    var mostRecentSearch = movies.length - 1; 
    var lastSearch = movies[mostRecentSearch];
     console.log(lastSearch)
    }

// make variables for drink API

// variables for searching a movie in the side bar



// on search submit click add movie to movie tile in side bar
$("#movie-search-submit").on("click", function(){
    var title = $("#movie-search").val()
    movies.push(title);
   

var queryURL = "http://www.omdbapi.com/?t=" + title + "&apikey=" + APIkey
$.ajax ({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response.Poster);
    var moviePoster = response.Poster;
    var image = $("<img>").attr("src", moviePoster);
    posterDiv.append(image);
    // local storage set
    localStorage.setItem("movies", JSON.stringify(movies))
})
})


var APIkey1 = "a46d6d3d751f284d301081cabfeabbc3"
var queryURL1 = "https://api.themoviedb.org/3/trending/all/day?api_key=" + APIkey1

$.ajax ({
    url: queryURL1,
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