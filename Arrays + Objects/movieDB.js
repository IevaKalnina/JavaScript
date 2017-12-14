/* create an array of movie objects. Each movie should have a title, rating,
and hasWatched properties. Iterate trough the array and print out... */

//array0
var movies = [
    //object0
    {title: "In Bruges",
    rating: 5,
    hasWatched: false},

    //object1
    {title: "Frozen",
    rating: 4.5,
    hasWatched: true},

    //object2
    {title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: false},

    //object3
    {title: "Les Miserables",
    rating: 3.5,
    hasWatched: true}
]

movies.forEach(function(movie){
    console.log(buildString(movie))
});

function buildString(movie){
    var result = "You have ";
    if(movie.hasWatched){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars.";
    return result;
}