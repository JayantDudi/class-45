var player ;
var playerImg,BASKET;
var lives;
var gameState;

function preload(){
  playerImg = loadImage("realBoy.png")
  BASKET = loadImage("basket.png")
}


function setup() {
  createCanvas(1000,550);


 

  
  

  player=createSprite(50,70,50,50);
  player.addImage(playerImg);
  player.scale = 0.15;

  h1=createSprite(89,155,150,20);
  v1=createSprite(280,92,20,155);
  h2=createSprite(280,280,155,20);
  v2=createSprite(50,280,20,155);
  v3=createSprite(500,280,20,155);
  h3=createSprite(450,100,155,20);
  h4=createSprite(450,420,155,20);
  v4=createSprite(180,420,20,155);
  h5=createSprite(640,320,155,20);
  v7=createSprite(661,91,20,155);
  v5=createSprite(660,480,20,96);
  v6=createSprite(793,458,20,155);
  h6=createSprite(915,389,85,20);
  h7=createSprite(840,138,155,20);
  v8=createSprite(897,259,20,155);


  h1.shapeColor = "red";
  h2.shapeColor = "red";
  h3.shapeColor = "red";
  h4.shapeColor = "red";
  h5.shapeColor = "red";
  h6.shapeColor = "red";
  h7.shapeColor = "red";

  v1.shapeColor="blue";
  v2.shapeColor="blue";
  v3.shapeColor="blue";
  v4.shapeColor="blue";
  v5.shapeColor="blue";
  v6.shapeColor="blue";
  v7.shapeColor="blue";
  v8.shapeColor="blue";

  basket=createSprite(897,480,50,50);
  basket.addImage(BASKET);
  basket.scale=0.1;

  b1=createSprite(530,5,1060,10);
  b2=createSprite(530,545,1060,10);
  b3=createSprite(993,240,10,600);
  b4=createSprite(5,240,10,600);

  b1.shapeColor="black";
  b2.shapeColor="black";
  b3.shapeColor="black";
  b4.shapeColor="black";


  //player.setCollider("rectangle",0,0,player.width,player.height);
 //player.debug=true;

  


  
}

function draw() {
  background("pink");

 

  player.collide(b1);
  player.collide(b2);
  player.collide(b3);
  player.collide(b4);

  if(keyDown(LEFT_ARROW)){
    player.x=player.x-5;
  }

  if(keyDown(RIGHT_ARROW)){
    player.x=player.x+5;
  }

  if(keyDown(DOWN_ARROW)){
    player.y=player.y+5;
  }

  if(keyDown(UP_ARROW)){
    player.y=player.y-5;
  }
  

  if(keyDown(109)){
    player.scale=player.scale-0.001;
  }

  
  if(keyDown(107)){
    player.scale=player.scale+0.001;
  }
  
  if(player.isTouching(h1)){
    player.x=50;
    player.y=70;
    
  }

  if(player.isTouching(h2)){
    player.x=50;
    player.y=70;
    
  }

  if(player.isTouching(h3)){
    player.x=50;
    player.y=70;
    
  }

  if(player.isTouching(h4)){
    player.x=50;
    player.y=70;
    
  }

  if(player.isTouching(h5)){
    player.x=50;
    player.y=70;
    
  }

  if(player.isTouching(h6)){
    player.x=50;
    player.y=70;
    
  }

  if(player.isTouching(h7)){
    player.x=50;
    player.y=70;
    
  }

  if(player.isTouching(v1)){
    player.x=50;
    player.y=70;
    
  }

  if(player.isTouching(v2)){
    player.x=50;
    player.y=70;
    
  }

  if(player.isTouching(v3)){
    player.x=50;
    player.y=70;
    
  }

  if(player.isTouching(v4)){
    player.x=50;
    player.y=70;
    
  }

  if(player.isTouching(v5)){
    player.x=50;
    player.y=70;
    
  }

  if(player.isTouching(v6)){
    player.x=50;
    player.y=70;
    
  }

  if(player.isTouching(v7)){
    player.x=50;
    player.y=70;
    
  }

  if(player.isTouching(v8)){
    player.x=50;
    player.y=70;
    
  }

  if(player.isTouching(basket)){
    textSize(47);
    
    text("You Won !" , 550,300);
    background("green");

    player.destroy();
    
    
    
  }









  //text(mouseX+","+mouseY,mouseX,mouseY)
 


  drawSprites();


  
   
}

