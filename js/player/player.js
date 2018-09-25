var player1 = new playerComponnet();

//playerComponnet
function playerComponnet(){
    //this.health = 100;
    this.score = 0;
    this.ships = 3;
    this.cantKill = false;
    this.cantKillTimer = 0;
    this.xRaw = squareWidth*0; //raw postion on canvas
    this.yRaw = squareHeight*1;

    this.xGrid = Math.round(this.xRaw / squareWidth ); //postion based on grid
    this.yGrid = Math.round(this.yRaw / squareHeight );

    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "assets/playerImages/ship1.png";

    this.update = function(){
        var parentThis = this;

        if( parentThis.cantKill == true){ //if player is killed change image and set few seconds of invunerabliltiy
            player1.cantKillTimer++
            if(player1.cantKillTimer > 20){
                player1.cantKill = false;
                player1.cantKillTimer = 0;
                player1.playerImage.src = "assets/playerImages/ship1.png";
            }
        }// end of cant kill variable
        else{ // else do normal activity

        }
        drawPlayer()
    }//end of update function

} // end of playerComponnet

function drawPlayer(){
   ctx.drawImage(player1.playerImage,player1.xRaw,player1.yRaw,squareWidth,squareHeight); 
}

/*function checkHealth(){
    if(player1.ships == 0){
        gameOver = true;
    }
}*/

function playerLoseShip(){
    player1.ships--;
    console.log('player has ' + player1.ships + " left");
    player1.playerImage.src = "assets/playerImages/shipExplode.png";
    player1.cantKill = true;
    document.getElementById("lifeTxt").innerHTML = player1.ships;
    if(player1.ships < 1){
        console.log('calling game over function');
        callGameOver();
    }
}

function addToPlayerScore(scored){
    player1.score += scored;
    document.getElementById("scoreTxt").innerHTML = player1.score;
}


////////////////////
document.getElementById("panel1").addEventListener("click", function(event){
   /* console.log("before clicked was processed: " + player1.yRaw);
    findMyClick(event);
    console.log(event);
    console.log("AFTER clicked was processed: " + player1.yRaw); */
    findMyClick(event);
    var bullet1 = new bulletComponnet(player1);
});

function findMyClick(thisClick){
    if(thisClick.clientY < (player1.yRaw) ){
        player1.yRaw -= squareHeight;
        player1.yGrid --;
    }

   else if(thisClick.clientY > (player1.yRaw + squareHeight)){
        player1.yRaw += squareHeight;
        player1.yGrid ++;
    }
    
}

