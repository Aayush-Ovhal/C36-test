
var canvas, backgroundImg, playerCount, database;
var form, player, game,allPlayers;
var gameState = 0; 

function setup(){
  database = firebase.database();
  canvas = createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){

  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }
 
}