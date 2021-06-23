class Game{
constructor(){}
        getState(){
            var gameStateRef=database.ref('gameState');
            gameStateRef.on("value",function(data){
             gameState=data.val();
            })
        }
update(state){
            database.ref('/').update({
                    'gameState':state
                });
}
async start(){
        if(gameState===0){
                player=new Player();
                var playerCountRef=await database.ref('playerCount').once("value")
                if(playerCountRef.exists()){
                        playerCount=playerCountRef.val();
                         player.getCount();
                }
                form=new Form();
                form.display();
                }
}

play()
{
       form.hide();
        textSize(30);
        text("GameStart",300,100);
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
                var display_position=300;
               
                textSize(20);
                console.log(allPlayers)
                for(var i=1;i<=4;i++){
                        display_position+=20;
                        var playerIndex="player"+i;
                        if(player.index===i)
                        {
                                fill("red");
                        }
                        else{
                                fill("black");
                        }
                        text(allPlayers[playerIndex].name+" :: "+allPlayers[playerIndex].distance,300,display_position)
                }

        }
        if(keyIsDown(UP_ARROW)&& player.index!==null){
                player.distance+=50;
                player.update();
        }
}
}