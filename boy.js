class Boy{
    constructor(x,y,widht,height){
        this.body = Bodies.rectangle(x,y,width,height);

        this.width=width;
        this.height=height;
        this.image = loadImage("images/ykYbpg.jpg");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
}