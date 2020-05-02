"use strict";
var ask = prompt("What is your name");

document.getElementById("name").innerHTML="Hi "+ ask + ".";

var dob = prompt("what year is your birth year ?");

var age = 2020 - dob;
document.getElementById("my-p").innerHTML="you'r a "+ age + " years old so please check out these courses";

function FeedBack(){
    var ask2 = prompt("did you find what you looking for ?");
if (ask2 == "yes")
{
    document.getElementById("my-p").innerHTML="thank you for choosing our web";
}
else{
    document.getElementById("my-p2").innerHTML="sorry,please check out the page later";
}
}
function backgroundColor(){
 var ask3 = confirm("do you like our background color");
 console.log(ask3);
if (ask3 == true){
    alert("thank you -_-");
}
else{
document.body.style.backgroundColor = "#0CE856";
}
}
function FeedBack2(){
    var ask = prompt("Do you like my page");
    while(ask != "yes"){
        ask = prompt("Do you like my page");
    }
}
function greatuser(){
    var item = '';

    var ask4 = prompt("how many times you want us to Greating you");
    for (var i=0;i<ask4;i++){
        var id = i + 1;
     item = item + "<h4> " + id + " Hi " + ask + " </h4>";
    }
    return item;
}
FeedBack();
FeedBack2()
backgroundColor();
