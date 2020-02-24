var p1 = 6, p2 = 6 ;

var p1 = Math.random();
p1 = Math.floor( (p1*6) + 1 ) ;
var p2 = Math.random();
p2 = Math.floor( (p2*6) + 1 ) ;

document.getElementsByClassName("score_1")[0].innerHTML=p1;
document.getElementsByClassName("score_2")[0].innerHTML=p2;

document.querySelectorAll("img")[0].src="images/dice_" + p1 + ".png";
document.querySelectorAll("img")[1].src="images/dice_" + p2 + ".png";

var winner ;

if ( p1 > p2 )
    winner = 1 ;
else if ( p1 < p2 )
    winner = 2 ;
else
    winner = 0 ;

if ( winner == 0 )
    document.querySelector("h1").innerHTML = "TIE" ;
else 
    document.querySelector("h1").innerHTML = "Player " + winner + " wins" ;
