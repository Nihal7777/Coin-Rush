class Game{
    constructor(){}

    start(){
        ground = new Ground(500,500,1000,40);
        trunk = new Obstacle(520,550,30,10);
        trunk.image = loadImage("images/trunk.png");
        //branch1=new Obstacle(30,200,200,30);
        //branch1.image = loadImage("images/branch.png");
        branch2=new Obstacle(30,300,200,30);
        branch2.image=loadImage("images/branch 2.png");
        bomb=new Obstacle(170,550,20,20);
        bomb.image =loadImage("images/bomb.png"); 
        boy=new Boy(80,430,30,50);
    }
   
    play(){
        form.hide();
        trunk.display();
        //branch1.display();
        branch2.display();
        bomb.display();
       boy.display();
    }
    
}