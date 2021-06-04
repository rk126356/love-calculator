// var name1 = prompt("Enter your name").toLowerCase();
// var name2 = prompt("Enter your GF name").toLowerCase();







function myFunction() {

  var name1 = document.getElementById("name1").value.toLowerCase();
  var name2 = document.getElementById("name2").value.toLowerCase();

  var n = Math.random();
  n *= 100;

if (name1 == "babu" && name2 == "abul") {
  n = 87;
}
 else if (name1 == "abul" && name2 == "babu"){
  n = 87;
} else if (name1 == "hasan" && name2 == "piya"){
  n = 100;
} else if (name1 == "abul" && name2 == "saniya"){
  n = 05;
} else if (name1 == "nayan" && name2 == "nurtaj"){
  n = 99;
} else if (name1 == "abdul" && name2 == "piya"){
  n = 100;
} else if (name1 == "abul" && name2 == "piya"){
  n = 12;
} else if (name1 == "abul" && name2 == "nadiya"){
  n = 50;
} else if (name1 == "babu" && name2 == "abida"){
  n = 66;
} else if (name1 == "hasan" && name2 == "trisha"){
  n = 92;
} else if (name1 == "abul" && name2 == "trisha"){
  n = 35;
} else if (name1 == "suraj" && name2 == "neha"){
  n = 20;
} else if (name1 == "babu" && name2 == "neha"){
  n = 69;
} else if (name1 == "abul" && name2 == "neha"){
  n = 42;
} else if (name1 == "suraj" && name2 == "saniya"){
  n = 36;
} else if (name1 == "babu" && name2 == "trisha"){
  n = 100;
} else if (name1 == "nayan" && name2 == "saniya"){
  n = 02;
} else if (name1 == "abul" && name2 == "natasha"){
  n = 53;
} else if (name1 == "babu" && name2 == "saniya"){
  n = 100;
} else if (name1 == "babu" && name2 == "trisha"){
  n = 99;
} else if (name1 == "hasan" && name2 == "saniya"){
  n = 10;
} else if (name1 == "rahul" && name2 == "football"){
  n = 100;
} else if (name1 == "" && name2 == ""){
  n = 0; } else {
    n = n;
}

var x = ""; 

function trueLove(x) {
   document.getElementById("true-love").style.visibility = "visible";
   document.getElementById("rfbtn").style.visibility = "visible";
   return x;
}
function okayLove(x) {
  document.getElementById("okay-love").style.visibility = "visible";
  document.getElementById("rfbtn").style.visibility = "visible";
  return x;
}
function fakeLove(x) {
  document.getElementById("fake-love").style.visibility = "visible";
  document.getElementById("rfbtn").style.visibility = "visible";
  return x;
}

if (n >= 70) {
  var x = name1.toUpperCase() + " Loves " + name2.toUpperCase() + " " + Math.floor(n) + "% (WoW True Love)" + trueLove(x);
} else if (n <=30 ){
  var x = name1.toUpperCase() + " Loves " + name2.toUpperCase() + " " + Math.floor(n) + "% (LoL Fake Love)" + fakeLove(x);
} else {
var x = name1.toUpperCase() + " Loves " + name2.toUpperCase() + " " + Math.floor(n) + "% (ItZ Okay Love)" + okayLove(x);
}

  document.getElementById("demo").innerHTML = x;
}