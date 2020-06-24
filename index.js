function start()
{
var numberDicee1 = Math.floor((Math.random()*6)+1);
var numberDicee2 = Math.floor((Math.random()*6)+1);
document.querySelector('.img1').src ="images/dice"+numberDicee1 +".png";
document.querySelector('.img2').src ="images/dice"+numberDicee2 + ".png";
if (numberDicee1===numberDicee2) {document.querySelector('h1').innerHTML = 'Draw <i class="fa fa-flag fa-1x"></i>';}
else if (numberDicee1>numberDicee2) {document.querySelector('h1').innerHTML = 'Win Player 1 <i class="fa fa-flag fa-1x"></i>';}
else {document.querySelector('h1').innerHTML = 'Win Player 2 <i class="fa fa-flag fa-1x"></i>';}
}
