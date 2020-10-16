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
var posterDiv = $("<div class='poster-div'>");
var metascoreP = $("<p class='metascore-p>")
var genreP = $("<p class='genre-p>")
var directorP = $("<p class='director-p>")
var releaseP = $("<p class='release-p>") 
var ratedP = $("<p class='rated-p>") 
var actorsP = $("<p class='actors-p>") 

$("#movie-search-info").append(posterDiv);
$("poster-div").append(metascoreP);
$("poster-div").append(genreP);
$("poster-div").append(directorP);
$("poster-div").append(releaseP);
$("poster-div").append(ratedP);
$("poster-div").append(actorsP);


$(function() {
    $("#image1").attr("src", "https://example2.com/image2.png")
})
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
    movies.push(title)
var queryURL = "http://www.omdbapi.com/?t=" + title + "&apikey=" + APIkey
$.ajax ({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
    var moviePoster = response.Poster;
    var metaScore = response.Metascore;
    var actors = response.Actors;
    var director = response.Director;
    var genre = response.Genre;
    var rated = response.Rated;
    var released = response.Released;
   
    
    // movieDetailsList.text("Genre: " + genre);
    // movieDetailsList.text("Rated: " + rated);
    // movieDetailsList.text("Released: " + released);
    // movieDetailsList.text("Director: " + director);
    var image = $("<img class='search-image'>").attr("src", moviePoster);
    posterDiv.empty()
    // add items to the poster div
    posterDiv.append(image);
    posterDiv.append("Metascore: " + metaScore);
    posterDiv.append("Director: " + director);
    posterDiv.append("Genre :" + genre);
    posterDiv.append("Release Date: " + released);
    posterDiv.append("Movie Rating: " + rated);
    posterDiv.append("Starring: " + actors);
    
    // local storage set
    localStorage.setItem("movies", JSON.stringify(movies))
})
})

var popularArray = []
var APIkey1 = "a46d6d3d751f284d301081cabfeabbc3"
var queryURL1 = "https://api.themoviedb.org/3/movie/popular?api_key=" + APIkey1 + "&language=en-US&page=1"


$.ajax ({
    url: queryURL1,
    method: "GET"
}).then(function(response){
    console.log(response)
    popularArray = response.results;
    console.log("result", popularArray);
    console.log('popularityDataType', typeof(popularArray[0].popularity));
    var sortedPopularArray = popularArray.sort(function(a,b){
        return b.popularity - a.popularity;
    }).slice(0,10);
    console.log("sortedPopularArray", sortedPopularArray)
})



// popularArray.sort(function(a,b){
//     return a.value - b.value
// })
// sort array method 




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



$("#drama").on("click", function() {
    document.getElementById("movie-suggestions").style.display = "none";
    document.getElementById("drama-suggestions").style.display = "block";
})
$("#comedy").on("click", function() {
    document.getElementById("movie-suggestions").style.display = "none";
    document.getElementById("comedy-suggestions").style.display = "block";
})


// question display ===================================

var questions = [
    {
        question: "What genre?",
        options: [
            "Comedy",
            "Horror",
            "Action"
        ],
        answerKey: "genrePick"
    },

    {
        question: "Minimum allowable metascore value?",
        options: [
            25,
            50,
            75,
        ],
        answerKey: "metascorePick"
    },

    {
        question: "maximum movie length (minutes)",
        options: [
            90,
            120,
            150,
        ],
        answerKey: "movieLengthPick"
    },
]

// AJAX call for movie rec
function getMovieRec () {
    var queryURL2 = "https://api.themoviedb.org/3/discover/movie?api_key=" + APIkey1 + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
$.ajax ({
    url: queryURL2,
    method: "GET"
}).then(function(response){
    console.log(response);
    $("#question-container .title").text(response.results[0].title)
    $(".buttons").text("")
    $.ajax(settings).done(function (drinksList) {
        console.log(drinksList);
        var randomDrink = drinksList.drinks[0].strDrink;
        $(".buttons").text(randomDrink)
    });
})}

var answers = {}

var currentQuestionIndex = 0


function displayQuestion() {
    $("#question-container .title").text(questions[currentQuestionIndex].question)
    $("#question-container .buttons").empty();
    // go through each question
   
    // go throught the current question options
    // for each one
        for (var i=0; i < questions[currentQuestionIndex].options.length; i++) {
            var option = questions[currentQuestionIndex].options[i];
            var answerKey = questions[currentQuestionIndex].answerKey;
            // create a button
            var button = $("<button class='optionButton button is-dark'>")

        // add a data-answer attribute
        button.attr("data-answer", option)
        button.attr("data-answerKey", answerKey)
        // add some text
        button.text(option)
        // put the button in the buttons div
        $("#question-container .buttons").append(button)
// run function for second question

        }
        $(".optionButton").click(function(){

            // put the answer into the answers object
            answers[$(this).attr("data-answerKey")] = $(this).attr("data-answer");
            // answers.genrePick = "comedy"
            // go to the next question
            currentQuestionIndex++
            console.log(answers);
           if (currentQuestionIndex < 3) displayQuestion();
            else {getMovieRec()}
        })
        
}

displayQuestion();






