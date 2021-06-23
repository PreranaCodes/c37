class Form{
constructor(){
    this.input=createInput("Name");
     this.button=createButton("play");
    this.greeting=createElement("h3");
}
hide()
{
       this.input.hide();
       this.button.hide();
       this.greeting.hide();
}
display(){
    var title=createElement("h1");
    title.html("Car Racing Game");
    title.position(130,0)
    
   //var input=createInput("Name");
   //var button=createButton("play");
   //var greeting=createElement("h3");


   this.input.position(500,160);
   this.button.position(500,200);

    this.button.mousePressed(()=>{
        this.input.hide();
       this.button.hide();
        player.name=this.input.value();
        playerCount=playerCount+1;
     player.index=playerCount;
        player.update();
        player.updateCount(playerCount);

        this.greeting.html("hello"+player.name);
       this.greeting.position(500,160);


    });
}
}