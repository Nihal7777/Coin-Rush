class Game{
    constructor(){}

    start(){
        bgSprite = createSprite(500,300,1000,60);
        bgSprite.addImage(bg);

        boySprite = createSprite(180,480);
        boySprite.addAnimation("run",boyRun);
        boySprite.addAnimation("stand",boyStand);

        ground = createSprite(500,530,1000,20);
        ground.shapeColor = color(0,50,0);
        
        boySprite.scale = 0.6;
        trunkGroup = new Group();
        branchGroup = new Group();
        bombGroup = new Group();
        coinGroup =new Group();
    }
   
    play(){
        form.hide();

       if(keyDown("space")){
        boySprite.velocityY = -10;
        boySprite.changeAnimation("stand");
       }

       if(boySprite.isTouching(trunkGroup)||boySprite.isTouching(branchGroup)||boySprite.y<220){
        boySprite.velocityY = 0;
       }

       boySprite.velocityY =  boySprite.velocityY+0.8;
       boySprite.collide(ground);

       if(boySprite.y>480){
        boySprite.changeAnimation("run");
       }

       this.spawnBomb();
       this.spawnBranch();
       this.spawnCoin();

       drawSprites();
    }
    
    spawnBomb(){
        if(frameCount % 300 === 0){
            var bomb = createSprite(width,510);
            bomb.addImage(bombImg);
            bomb.scale = 0.05;
            bomb.velocityX = -5;
            bomb.lifetime = 400;
            bombGroup.add(bomb);
        }
    }
    spawnBranch(){ 
        if(frameCount % 250 === 0){
            var branch = createSprite(width,random(250,360));
            branch.addImage(branchImg);
            branch.scale = 0.25;
            branch.velocityX = -5;
            branch.lifetime = 400;
            branchGroup.add(branch);
        }
    }

    spawnCoin(){
        if(frameCount % 275 === 0){
            var coin = createSprite(width,350);
            coin.addImage(coinImg);
            coin.scale =0.5;
            coin.velocityX =-3;
            coin.lifetime =400;
            coinGroup.add(coin);
        }
    }
    }