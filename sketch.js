var game,player,form,database;
var gameState=0;
var playerCount=0;
var allPlayers;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(800,800);
game=new Game();
game.getState();
console.log(gameState+"jdkje")
game.start();


}

function draw(){
  background("white");
 // console.log(gameState)
  if(playerCount===4){
    game.update(1);
  }
 // console.log(gameState)
   if(gameState===1)
   {
    clear();
    game.play();
   }
}

