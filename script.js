$(document).ready(function(){
// all jQuery methods go here...
$("#runningman-img").hover(enter, leave);
function enter(){
this.src = "images/runningman-giphy.gif"
}
function leave(){
  this.src = "images/runningman-icon.png"
}
$(document).ready(function(){
// all jQuery methods go here...
$("#Take The L-img").hover(enter, leave);
function enter(){
this.src = "images/Take The L -giphy.gif";
}
function leave(){
  this.src = "images/Take The L -icon.png";
}


//CHALLENGE 1
$("#title").html("some stuff...");

// CHALLENGE 2
$("#extra-text").remove();

//CHALLENGE 3
//On click of the fortnite logo,
//change the bg to "bg2.jpg"
$("body").css("background-image", "url('images/bg2.jpg')"


//CHALLENGE 4
//On click of the emote-info
$("#runningman-name").click(toggleRunningMan)
function toggleRunningMan() {
$("#runningman-info").slideToggle()















});
