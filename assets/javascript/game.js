// * Want to input a reset button
// 
var targetNumber = Math.floor(Math.random() * ((200 - 50) + 1) + 50);
var images = [ "fizgig.jpg", "Aughra.jpg", "Kira.jpg", "Jen.jpg"];
var crystalValue;

var reset = $("<img>", {id: "reset", src: "assets/images/DarkCrystalPoster.jpg"});
$("#reset").append(reset);

$("#number-to-guess").text(targetNumber);
var counter = 0;
var numberOptions = [10, 5, 3, 1];

//Creates a for loop to create my images to click
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>", {class: "chracter-image", src: "assets/images/" + images[i]});
    imageCrystal.addClass("character-image");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#characters").append(imageCrystal);
}


//My click event
$(".character-image").on("click", function () {
    crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    alert("New score: " + counter);

    if (counter === targetNumber) {
        alert("You win!");
    }

    else if (counter >= targetNumber) {
        alert("You lose!!");
    }

});

//Reset click event
$("#reset").on("click", function() {
    counter = 0;
    crystalValue = 0;
    alert("You restarted!");
});