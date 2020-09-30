class Form{
constructor(){
    this.title=createElement('h2');
    this.button=createButton('enter');
    this.greeting=createElement('h3');
    this.input=createInput('name');
    this.r=createElement('h3');
    this.r1 = createElement('p');
    this.r2 = createElement('p');
    this.r3 = createElement('p');
    this.r4 = createElement('p');
    
}
display(){
    
    this.title.html("Coin Rush");
    this.title.position(470,30);
    this.input.position(450,200);
    this.button.position(480,230);
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        var name=this.input.value();
        this.greeting.html("Hello "+ name);
        this.greeting.position(470,60); 
        this.r.html("RULES:")
        this.r.position(470,80)
        this.r1.html("1 - Use Arrow keys to move");
        this.r1.position(400,120);
        this.r2.html("2 - Press up arrow to jump");
        this.r2.position(400,150);
        this.r3.html("3 - Avoid the bombs")
        this.r3.position(400,180);
        this.r4.html("4 -  !! Enjoy the game !!");
        this.r4.position(400,210);
        this.button2 = createButton('Play');
        this.button2.position(470,250);
        this.button2.mousePressed(()=>{
            gameState="play";
        });
    });
}

hide(){
    this.greeting.hide();
    this.title.hide();
    this.r.hide();
    this.r1.hide();
    this.r2.hide();
    this.r3.hide();
    this.r4.hide();
    this.button2.hide();
}



}
