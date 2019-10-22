$(document).ready(function () {

    var randvalue; //random value
    var gem1;
    var gem2;
    var gem3;
    var gem4;
    var score;
    var losses;
    var win;

    function ranGen() {
        randvalue = Math.floor(Math.random() * 300) + 50;
    };
    ranGen();


    $(".rando").text(randvalue);

    function gemGen() {   //generates gem values
        gem1 = Math.floor(Math.random() * 25);
        gem2 = Math.floor(Math.random() * 3 + 1);
        gem3 = Math.floor(Math.random() * 35);
        gem4 = Math.floor(Math.random() * 15);
    };
    gemGen();

    console.log(gem1, gem2, gem3, gem4);

    $(".gembtn").on("click", function (event) {
        event.target.value
        var userInput = event.target.value
        console.log(event.target.value)
    })


})


