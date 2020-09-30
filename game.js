class Game{
    constructor(){}

    start(){
        ground = new Ground();
        trunk = new Obstacle();
        //trunk.image = trunkImg;
        branch1=new Obstacle();
        //branch1.image = branch1Img;
        branch2=new Obstacle();
        //branch2.image=branch2Img;
        bomb=new Obstacle();
       // bomb.image = bombImg;
        boy=new Boy();
        //boy.image=boyRun;
    }
   
    play(){
        trunk.display();
        branch1.display();
        branch2.display();
        bomb.display();
        boy.display();
    }
    
}