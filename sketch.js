//creating all the variables
var sea,ship;
var seaImg,shipImg;

function preload(){

//loading the animation and the image
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  seaImg = loadImage("sea.png");
}

function setup(){

  //create the canvas and background colour
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  //create the ship
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {

//give the controls for the ship
  if(keyIsDown(UP_ARROW)){
    ship.y = ship.y-1;

  }

  if(keyIsDown(DOWN_ARROW)){
    ship.y = ship.y+1;

  }

  //give the background and velocity or the sea
  background(0);
  sea.velocityX = -3;

  //Infinite Playground
  if(sea.x < 0){
    sea.x = sea.width/8;

  }
  //make the ship stay on the screen
  if(ship.y<172){
    ship.y=172

  }

  if(ship.y>299){
    ship.y=299

  }
 
  //draw all the sprites
  drawSprites();
}