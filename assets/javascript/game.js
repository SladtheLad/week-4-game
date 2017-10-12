// * Want to input a reset button
// 
var numberToGuess = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
$("#number-to-guess").text(numberToGuess);

var images = [ "fizgig.jpg", "Aughra.jpg", "Kira.jpg", "Jen.jpg"];
var imageCharacter;
var characterValue;


// Still need to append wins or losses to the screen**********
var wins = 0;
$("#wins").append(wins);

var losses = 0;
$("#losses").append(losses);

var counter = 0;
var currentTotal;



var numberOptions = [Math.floor(Math.random() * ((12 - 1) + 1) + 1), Math.floor(Math.random() * ((12 - 1) + 1) + 1), 
    Math.floor(Math.random() * ((12 - 1) + 1) + 1), Math.floor(Math.random() * ((12 - 1) + 1) + 1),];


//Creates a for loop to create my images to click and assigns them a number
for (var i = 0; i < numberOptions.length; i++) {
    imageCharacter = $("<img>", {class: "character-image", css: {margin: "0 50px 0 50px"}, src: "assets/images/" + images[i]});
    imageCharacter.addClass("character-image");
    imageCharacter.attr("data-characterValue", numberOptions[i]);
    $("#characters").append(imageCharacter);
}



//My click event
$(".character-image").on("click", function () {
    characterValue = ($(this).attr("data-characterValue"));
    characterValue = parseInt(characterValue);
    counter += characterValue;
    $("#counter").append(counter);

    alert("New score: " + counter);

    if (counter === numberToGuess) {
        alert("You win!");

    }

    else if (counter >= numberToGuess) {
        alert("You lose!!");

    }

});

//Reset click event
var reset = $("<img>", {id: "reset", src: "assets/images/DarkCrystalPoster.jpg"});
$("#reset").append(reset);

$("#reset").on("click", function() {
    counter = 0;
    characterValue = 0;
});