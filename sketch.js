const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var bg,boy,boyRun,bomb,bombImg,trunk,trunkImg,branch1Img,branch2Img,gameState;
var form,ground,branch1,branch2;

function preload(){
  //bg = loadImage("images/day-background.jpg");
  trunkImg = loadImage("images/trunk.png");
  branch1Img = loadImage("images/branch.png");
  branch2Img = loadImage("images/branch 2.png");
  bombImg = loadImage("images/bomb.png");
  boyRun = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png");
}
function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;
 gameState="start";
 form=new Form();
 game = new Game();
 game.start();

}

function draw() {
  background(255); 
  Engine.update(engine); 
   if(gameState==="start"){
     form.display();
     
   }
   if(gameState === "play"){
     game.play();
   }
}