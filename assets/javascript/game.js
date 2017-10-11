// * Want to input a reset button
// 
var targetNumber = 97;
var images = ["Aughra.jpg", "fizgig.jpg", "Kira.jpg", "Jen.jpg"];


$("#number-to-guess").text(targetNumber);

var counter = 0;
var numberOptions = [10, 5, 3, 1];

// I still want to figure out how to append different images in this for loop*****************8
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>", {class: "chracter-image", src: "assets/images/" + images[i]});
    imageCrystal.addClass("character-image");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#characters").append(imageCrystal);
}

$(".character-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
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