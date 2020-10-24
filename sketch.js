const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var bg,bgSprite,boy,boyRun,bomb,bombImg,trunk,trunkImg,branchImg,gameState;
var form,ground,branchGroup,bombGroup,coinGroup;
var boySprite,boyStand;
var trunkGroup,trunkImg,bgSound;
function preload(){
  bgSound = loadSound("background loop.wav");
  bg = loadImage("images/day_image.jpg");
  trunkImg = loadImage("images/trunk.png");
  bombImg = loadImage("images/bomb.png");
  branchImg = loadImage("images/branch 2.png");
  coinImg = loadImage("images/coins.png");
  boyStand = loadImage("images/1.png");
  boyRun = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png");
}
function setup() {
  createCanvas(1000,600);

  gameState="start";
  form=new Form();

  game = new Game();
  game.start();
}

function draw() {
  background(bg); 
 
  fill(255); 
  text(mouseX+","+mouseY,mouseX,mouseY);
  
   if(gameState==="start"){
     form.display();
     
   }
   if(gameState === "play"){
     game.play();
   }
}

