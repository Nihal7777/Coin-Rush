class Form{
constructor(){
    this.title=createElement('h2');
    this.title.style('color:gold');

    this.button=createButton('enter');

    this.greeting=createElement('h3');
    this.greeting.style('color:yellow');

    this.input=createInput('name');

    this.r=createElement('h3');
    this.r.style('color:white');
    
    this.r1 = createElement('p');
    this.r1.style('color:yellow');
    
    this.r2 = createElement('p');
    this.r2.style('color:orange');
    
    this.r3 = createElement('p');
    this.r3.style('color:yellow');
    
    this.r4 = createElement('p');
    this.r4.style('color:orange');
    
}
display(){
    
    this.title.html("Coin Rush");
    this.title.position(470,80);
    this.input.position(450,250);
    this.button.position(480,280);
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        var name=this.input.value();
        this.greeting.html("Hello "+ name);
        this.greeting.position(470,120); 
        this.r.html("RULES:")
        this.r.position(470,160)
        this.r1.html("1 - Use Arrow keys to move");
        this.r1.position(410,190);
        this.r2.html("2 - Press up arrow to jump");
        this.r2.position(410,220);
        this.r3.html("3 - Avoid the bombs")
        this.r3.position(410,250);
        this.r4.html("4 -  !! Enjoy the game !!");
        this.r4.position(410,280);
        this.button2 = createButton('Play');
        this.button2.position(480,330);
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
