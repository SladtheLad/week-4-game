//GLOBALS
var wins = 0;
var losses = 0;
var currentScore = 0;
var numberToGuess = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

var counter = 0;
var currentTotal;

//adds random numbers to my characters
var fizgig = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
var aughra = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
var kira = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
var jen = Math.floor(Math.random() * ((12 - 1) + 1) + 1);


//updates counter
var updateCounter = function () {
    $("#current-score").empty();
    $("#current-score").append(currentScore);
    $("#wins").empty();
    $("#wins").append(wins);
    $("#losses").empty();
    $("#losses").append(losses);
}

//restart function
var restart = function () {
    currentScore = 0;
    numberToGuess = Math.floor((Math.random() * 100) + 19);

    $("#number-to-guess").empty();
    $("#number-to-guess").append(numberToGuess);

    fizgig = Math.floor((Math.random() * 12) + 1);
    aughra = Math.floor((Math.random() * 12) + 1);
    kira = Math.floor((Math.random() * 12) + 1);
    jen = Math.floor((Math.random() * 12) + 1);
    //alert('restart');
    updateCounter();
}

var play = function () {
    if (currentScore == numberToGuess) {
        wins = wins + 1;
        restart();
    } else if (currentScore > numberToGuess) {
        losses = losses + 1;
        restart();
    } else {
        updateCounter();
    }
}
$("#number-to-guess").append(numberToGuess);

$("current-score").append(currentScore);

$(document).ready(function () {

    $("#fizgig").click(function () {
        currentScore = currentScore + fizgig;
        play();
    })
    $("#aughra").click(function () {
        currentScore = currentScore + aughra;
        play();
    })
    $("#kira").click(function () {
        currentScore = currentScore + kira;
        play();
    })
    $("#jen").click(function () {
        currentScore = currentScore + jen;
        play();
    })
});


//Reset click event
$("#reset").on("click", function() {
    currentScore = 0;
    numberToGuess = Math.floor((Math.random() * 100) + 19);

    $("#number-to-guess").empty();
    $("#number-to-guess").append(numberToGuess);

    fizgig = Math.floor((Math.random() * 12) + 1);
    aughra = Math.floor((Math.random() * 12) + 1);
    kira = Math.floor((Math.random() * 12) + 1);
    jen = Math.floor((Math.random() * 12) + 1);
    //alert('restart');
    updateCounter();

    wins = 0;
    losses = 0;
    alert("You have regun the adventure to restore the shard!");
});


