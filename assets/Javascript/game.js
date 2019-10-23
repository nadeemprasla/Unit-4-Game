$(document).ready(function () {

    var randvalue; //random value
    var gem1;
    var gem2;
    var gem3;
    var gem4;
    var score = 0;
    var losses = 0;
    var win = 0;
    var canClick = true;
    function reset() {
        canClick = true;
        score = 0;
        randvalue = 0;
        gemGen();
        ranGen();
        writeScreen();
        $("#Score").text(score);
        $(".rando").text(randvalue);
    }

    function ranGen() {
        randvalue = Math.floor(Math.random() * 50) + 25;
    };
    ranGen();
    $(".rando").text(randvalue);



    function gemGen() {   //generates gem values
        gem1 = Math.floor(Math.random() * 6 + 3);
        gem2 = Math.floor(Math.random() * 7 + 1);
        gem3 = Math.floor(Math.random() * 2 + 1);
        gem4 = Math.floor(Math.random() * 3 + 11);
        console.log(gem1, gem2, gem3, gem4);
    };
    gemGen();


    g1 = document.getElementById("gem1");
    g2 = document.getElementById("gem2");
    g3 = document.getElementById("gem3");
    g4 = document.getElementById("gem4");

    g1.onclick = function (g1Event) {
        g1Event = gem1;
        if (canClick) {
            return sumation(g1Event);
        }
        else {
            playAgain("");

        }
    }
    g2.onclick = function (g2Event) {
        g2Event = gem2;
        if (canClick) {
            return sumation(g2Event);
        }
        else {
            playAgain("");

        }
    }
    g3.onclick = function (g3Event) {
        g3Event = gem3;
        if (canClick) {
            return sumation(g3Event);
        }
        else {
            playAgain("");

        }
    }
    g4.onclick = function (g4Event) {
        g4Event = gem4;
        if (canClick) {
            return sumation(g4Event);
        }
        else {
            playAgain("");

        }
    }



    function sumation(numValue) {
        score += numValue;
        console.log(score);
        $("#Score").text(score);
        //check function to see if score is correct or not
        if (score === randvalue) {
            canClick = false
            win++;
            writeScreen();
            playAgain("You Win. ");
        }
        else if (score > randvalue) {
            canClick = false
            losses++;
            writeScreen();
            playAgain("You Lose. ");

        }
    }


    function writeScreen() {
        $("#wins").text(win);
        $("#losses").text(losses);
    }

    function playAgain(arg) {
        if (confirm(arg + "Play again?")) {
            reset();
        }
    }


})
