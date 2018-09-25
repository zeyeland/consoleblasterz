function bossOneComponnet(){
    this.health = 10;
    this.speed = 1; // this effects how fast they make decision 
    this.timer = 1;
    this.dying = false;
    this.xRaw = squareWidth*10; //raw postion on canvas
    this.yRaw = squareHeight*2;

    this.xGrid = Math.round(this.xRaw / squareWidth); //postion based on grid
    this.yGrid = Math.round(this.yRaw / squareHeight);

    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "assets/atari/atari1.png";
    bossArray.push(this);
    this.update = function(){
        var parentThis = this;
        bossMakeDecisonOne(parentThis);
        bossHitByPlayerBullet(parentThis);
        bossCheckHealthOne(parentThis);
        drawAllen(parentThis);      
    }//end of update function
}

function bossMakeDecisonOne(boss){
    var De = Math.floor((Math.random() * 700) + 1);
    
    if (De == 1 ){
        console.log("this boss moved");
         bossMoveShip(boss);
     }
    if (De == 2 ){
        console.log('this boss shot');
        bossShootBullet(boss,"assets/atari/orange.png",1);
     }
    if (De == 3){
        bossOneShootBullet(boss,"assets/atari/lightBlue.png",1);
     }

    if (De == 4){
        bossOneShootBullet(boss,"assets/atari/Pinky.png",1);
    }

    if (De == 4){
        bossOneShootBullet(boss,"assets/atari/red.png",1);
    }

    if (De == 5){
        bossOneShootBullet(boss,"assets/atari/hydrant.png",4);
    }
 
     if(boss.timer > 10){
         
        boss.timer = 0;
     }
     else{
        boss.timer += boss.speed;
     }
}

function bossOneShootBullet(boss,imgSource,speed){
    var whereY = Math.floor((Math.random() * 4) + 0) * squareHeight;
    var newBullet = new bulletComponnetBossOne(boss,whereY,imgSource,speed);
}

function bulletComponnetBossOne(parent,y,imgSource,speed){
    //this.power = 50;
    this.type = "boss";
    this.whoShot = parent;
    this.xRaw = parent.xRaw;
    this.yRaw = y;
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
        moveBulletAllenBossOne(parentThis);
        hitPlayerShip(parentThis);
        drawBullet(parentThis);
    }//end of update function
}

function bossCheckHealthOne(boss){
    if(boss.health < 1){
        boss.dying = true;
        console.log('boss is died');
        currentLevel++;
        gameOver = 'pause';
        resetBossCrap();
    }
}

function moveBulletAllenBossOne(bullet){
    if(bullet.timer > 5){
        bullet.xRaw -= squareWidth;
        bullet.xGrid --;
        bullet.timer = 0;
    }
    else{
        bullet.timer += bullet.speed;
    }
}