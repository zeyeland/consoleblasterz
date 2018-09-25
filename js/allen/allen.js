var liveAllensArray = [];

//var allen1 = new allenComponnet(1,1,(squareWidth*10) ,(squareHeight) );
//var allen2 = new allenComponnet(1,1,(squareWidth*10) ,(squareHeight*2) );


//playerComponnet
function allenComponnet(level,points,x,y){
    this.level = level;
    this.points = points;

    this.dying = false;
    this.dyingTimer = 0;
    this.speed = level; // this effects how fast they make decision 
    this.timer = 1;
    
    this.xRaw = x; //raw postion on canvas
    this.yRaw = y;

    this.xGrid = Math.round(this.xRaw / squareWidth); //postion based on grid
    this.yGrid = Math.round(this.yRaw / squareHeight);

    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "assets/allenShip.png";
    liveAllensArray.push(this);

    this.update = function(){
        var parentThis = this;
        if(parentThis.dying == true){
            drawAllen(parentThis);
            if(parentThis.dyingTimer > 6){
                console.log(parentThis.dyingTimer);
                removeAllenFromArray(parentThis);
            }
            parentThis.dyingTimer++;
        }
        else{
            shipsCollide(parentThis);
            allenMakeDecison(parentThis);
            drawAllen(parentThis);
        }
        
    }//end of update function

} // end of playerComponnet

function drawAllen(allen){
//console.log('where is the allen');
   ctx.drawImage(allen.playerImage,allen.xRaw,allen.yRaw,squareWidth,squareHeight); 
}

function checkHealthAllen(){
    
}

function updateLiveAllens(){
    if(liveAllensArray.length > 0){
        for(var x = 0; x < liveAllensArray.length; x++){
            liveAllensArray[x].update();
        }
    }
 }
///////////////// allen gets three decisions move;shoot;
function allenMakeDecison(allen){
   var De = Math.floor((Math.random() * 500) + 1);
   if (De == 1 || De == 50){
       console.log("this allen moved");
        allenMoveShip(allen);
    }
   if (De == 2 || De == 30){
       console.log('this allen shot');
       allenShootBullet(allen);
    }
    if (De == 3){
        
    }

    if(allen.timer > 10){
        
        allen.timer = 0;
    }
    else{
        allen.timer += allen.speed;
    }
}

function allenMoveShip(allen){
    allen.xRaw -= squareWidth;
        allen.xGrid --;
    console.log("Ship just moved");
}

function allenShootBullet(allen){
    var ranNum = Math.floor((Math.random() * 10) + 1);
    if (ranNum){
        var bulletAllen = new bulletComponnetAllen(allen);
    }
    
}

function removeAllenFromArray(allen){
    if( liveAllensArray.includes(allen) ){
        addToPlayerScore(allen.points);
        var tempRemove = liveAllensArray.indexOf(allen);
        liveAllensArray.splice(tempRemove,1);
        console.log('allen ship was removed from array');
    }
}

function allenLoseShip(allen){
    allen.playerImage.src = "assets/explodeA.png"; // dying ship image
    allen.dying = true;
}

function shipsCollide(allen){
    if(allen.xGrid == player1.xGrid && allen.yGrid == player1.yGrid){
        allenLoseShip(allen);
        playerLoseShip();
    }
}