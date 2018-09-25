function bossFourComponnet(){
    this.health = 20;
    this.speed = 1; // this effects how fast they make decision 
    this.timer = 1;
    this.dying = false;

    this.xRaw = squareWidth*10; //raw postion on canvas
    this.yRaw = squareHeight*2;

    this.xGrid = Math.round(this.xRaw / squareWidth); //postion based on grid
    this.yGrid = Math.round(this.yRaw / squareHeight);

    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "assets/ps2/ps2.png";

    bossArray.push(this);


    this.update = function(){
        var parentThis = this;
        bossMakeDecisonFour(parentThis);
        bossHitByPlayerBullet(parentThis);
        bossCheckHealthFour(parentThis);
        drawAllen(parentThis);      
    }//end of update function
}

function bulletComponnetBossFour(parent,y,imgSource,speed){
    //this.power = 50;
    this.type = "boss";
    this.whoShot = parent;
    this.xRaw = parent.xRaw;
    this.yRaw = y * squareHeight;
    this.speed = speed;
    
    this.xGrid = Math.round(this.xRaw / squareWidth); 
    this.yGrid = Math.round(this.yRaw / squareHeight);

    this.playerImage = new Image(); //player img with src
    this.playerImage.src = imgSource; 

    this.timer = 0;
    livingBulletsArray.push(this);

    this.update = function(){
        var parentThis = this;
        isBulletOffScreen(parentThis);
        moveBulletAllenBossTwo(parentThis);
        hitPlayerShip(parentThis);
        drawBullet(parentThis);
    }//end of update function
}

function bossMakeDecisonFour(boss){ 
    var De = Math.floor((Math.random() * 200) + 1);
    //var DeHP = Math.floor((Math.random() * 3) + 1);
    if (De == 1 ){
        console.log("this boss moved");
         bossMoveShip(boss);
     }
    if (De == 2 || De == 4 || De == 5){
        //create a sword on each row
        var createKingdomChar = new kingdomCharacterComponnet(boss);
        var newBullet = new bulletComponnetBossFour(boss,0,"assets/ps2/key2.png",1);
        var newBullet = new bulletComponnetBossFour(boss,1,"assets/ps2/keyType1.png",1);
        var newBullet = new bulletComponnetBossFour(boss,2,"assets/ps2/keyType1.png",1);
        var newBullet = new bulletComponnetBossFour(boss,3,"assets/ps2/key2.png",1);
     }
    
 
     if(boss.timer > 10){
         
        boss.timer = 0;
     }
     else{
        boss.timer += boss.speed;
     }
}

function bossCheckHealthFour(boss){
    if(boss.health < 1){
        boss.dying = true;
        console.log('boss is died');
        currentLevel++;
        gameOver = 'pause';
        resetBossCrap();
    }
}

function kingdomCharacterComponnet(boss){
    this.timer = 1;

    this.xRaw = boss.xRaw; //raw postion on canvas, gets from parent
    this.yRaw = boss.yRaw;

    this.xGrid = Math.round(this.xRaw / squareWidth); //postion based on grid
    this.yGrid = Math.round(this.yRaw / squareHeight);

    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "assets/ps2/kingdomHeartImg.png";

    bossArray.push(this);


    this.update = function(){
        var parentThis = this; 
        if(parentThis.timer > 10){
            if( bossArray.includes(parentThis) ){
                var tempRemove = bossArray.indexOf(parentThis);
                bossArray.splice(tempRemove,1);
                console.log('kingdom hears was removed from array');
            }
        }
        drawAllen(parentThis);   
        parentThis.timer++;
    }//end of update function
}