var color = ["green", "red", "yellow", "blue"];
var level = 0;
var gamePattern = [];
var userPattern = [];

$(document).keypress(function(){
  if(!level){
    setTimeout(function(){
      Pattern();}, 500);
  }
});

function sound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function button(name){
  $("."+name).addClass("pressed");
  setTimeout(function(){
    $("."+name).removeClass("pressed");
  } , 100);
}

function Pattern(){
  userPattern = [];
  level++;
  $("h1").text("Level " + level);
  var a = Math.floor(Math.random() * 4);
  gamePattern.push(color[a]);
  sound(color[a]);
  button(color[a]);
}

$(".btn").click(function(){
  var userColor =  $(this).attr("id");
  sound(userColor);
  button(userColor);
  userPattern.push(userColor);
  checkPattern(userPattern.length-1);
});

function checkPattern(n){
  if(userPattern[n] === gamePattern[n]){
    if(userPattern.length === gamePattern.length){
      setTimeout(function(){
        Pattern();
      }, 1000);
    }
  }
  else{
    sound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press any key to Restart");
    level = 0;
    gamePattern = [];
}}
