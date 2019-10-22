var rand //random value

function rangen(){
    rand = Math.floor(Math.random()*300) + 50;
}
rangen()


$(".rando").text(rand)


