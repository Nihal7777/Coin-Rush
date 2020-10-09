const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var bg,boy,boyRun,bomb,bombImg,trunk,trunkImg,branch1Img,branch2Img,gameState;
var form,ground,branch1,branch2;
var boySprite,boyStand;
function preload(){
  bg = loadImage("images/day_image.jpg");
 
  
  boyStand = loadImage("images/1.png");
  boyRun = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png");
}
function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;
 gameState="start";
 form=new Form();
 boySprite = createSprite(80,430);
 boySprite.addAnimation("run",boyRun);
 boySprite.addAnimation("stand",boyStand);
 
 boySprite.scale = 0.6;
 game = new Game();
 game.start();

}

function draw() {
  background(bg); 
  Engine.update(engine); 
  fill(255); 
  text(mouseX+","+mouseY,mouseX,mouseY);
  
   if(gameState==="start"){
     form.display();
     
   }
   if(gameState === "play"){
     game.play();
     if(keyDown("space") && boy.body.position.y>400){
      
      Matter.Body.setVelocity(boy.body,{x:0,y:-10});
      boySprite.changeAnimation("stand");
     }
     
     boySprite.x = boy.body.position.x;
     boySprite.y = boy.body.position.y;
     drawSprites();
   }
}