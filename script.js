"use strict";
var ask = prompt("What is your name");

document.getElementById("name").innerHTML="Hi "+ ask + ".";

var dob = prompt("what year is your birth year ?");

var age = 2020 - dob;
document.getElementById("my-p").innerHTML="you'r a "+ age + " years old so please check out these courses";

var ask2 = prompt("did you find what you looking for ?");
if (ask2 == "yes")
{
    document.getElementById("my-p").innerHTML="thank you for choosing our web";
}
else{
    document.getElementById("my-p2").innerHTML="sorry,please check out the page later";
}
ask3 = confirm("do you like our background color");
 console.log(ask3);
if (ask3 == true){
    alert("thank you -_-");
}
else{
document.body.style.background = "rgb(92, 236, 255)";
}