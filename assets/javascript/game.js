$(document).ready(function () {

    console.log("Wanna Play Again!! huh Lets Guess");

    var winCounter = 0;
    var looseCounter = 0;
    var GussessLeftCount = 10;
    var NewParaText = "0";
    var isPlayagain = false;

    //   Array for Alphabates- Here we are provided an initial array of letters.
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var PressedKeys = $("#PressedKey");
    var winCount = $("#WinPlaceHolder");
    var looseCount = $("#LoosesPlaceHolder");
    var guessLeft = $("#RemaningChances");
    var psychcPlayer = "0";

    //Reset Function to reset all variables and placeholders
    function resetAll() {
        GussessLeftCount = 9;
        winCounter = 0;
        looseCounter = 0;
        PressedKeys.text(" ");
        winCount.text(0);
        looseCount.text(0);
        guessLeft.text(9);
        console.log("Reset all variables-------");
    }
    //Call function Reset All
    resetAll();
    ////////////////////////////////////////////////////////
    document.onkeyup = function (event) {
        NewParaText = event.key;
        //NewPara.toLowerCase()
        NewParaText = NewParaText.toUpperCase();
        PressedKeys.append(NewParaText);


        var psychcPlayer = "0";
        var random = Math.floor(Math.random() * 26) + 1;
        psychcPlayer = letters[random];
        console.log(psychcPlayer);
        console.log(NewParaText);
        GussessLeftCount--;
        guessLeft.text(GussessLeftCount);
        if (NewParaText == psychcPlayer) {
            //Print counter variables on UI
            winCounter++
            winCount.text(winCounter);
        }
        else {
            looseCounter++
            looseCount.text(looseCounter);
        }
        //Game is over, user wants to play again
        if (GussessLeftCount == 0) {
            //isPlayagain = confirm("You Wanna Play Again??");
            resetAll();
        }
    }

});
