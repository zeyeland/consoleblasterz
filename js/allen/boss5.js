function bossFiveComponnet(){
    this.health = 20;
    this.speed = 1; // this effects how fast they make decision 
    this.timer = 1;
    this.dying = false;

    this.xRaw = squareWidth*10; //raw postion on canvas
    this.yRaw = squareHeight*2;

    this.xGrid = Math.round(this.xRaw / squareWidth); //postion based on grid
    this.yGrid = Math.round(this.yRaw / squareHeight);

    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "assets/switch/switch.png";

    bossArray.push(this);


    this.update = function(){
        var parentThis = this;
        //bossMakeDecisonFour(parentThis);
        bossHitByPlayerBullet(parentThis);
        //bossCheckHealthFour(parentThis);
        drawAllen(parentThis);      
    }//end of update function
}

function bossMakeDecisonFive(boss){ 
    var De = Math.floor((Math.random() * 200) + 1);
    //var DeHP = Math.floor((Math.random() * 3) + 1);
    if (De == 1 ){
        console.log("this boss moved");
         bossMoveShip(boss);
     }
    if (De == 2 || De == 4 || De == 5){
        var newBullet = new bulletComponnetBossFive(boss,0,"assets/switch/carCoop.png",3);
     }
    
 
     if(boss.timer > 10){
         
        boss.timer = 0;
     }
     else{
        boss.timer += boss.speed;
     }
}

function bulletComponnetBossFive(parent,y,imgSource,speed){
    //this.power = 50;
    this.type = "crash";
    this.whoShot = parent;
    this.xRaw = parent.xRaw;
    this.yRaw = parent.yRaw;
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

function spinningCrashComponnet(){
    this.speed = 1; // this effects how fast they make decision 
    this.timer = 1;

    this.goingUp = true;

    this.ranX = Math.floor((Math.random() * 11) );
    this.ranY = Math.floor((Math.random() * 4) );

    this.xRaw = squareWidth * this.ranX; //raw postion on canvas
    this.yRaw = squareHeight * this.ranY;

    this.xGrid = Math.round(this.xRaw / squareWidth); //postion based on grid
    this.yGrid = Math.round(this.yRaw / squareHeight);

    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "assets/switch/crashSpin.png";

    bossArray.push(this);


    this.update = function(){
        var parentThis = this;
        moveSpinningCrash(parentThis);
        drawAllen(parentThis);      
    }//end of update function
}

function moveSpinningCrash(crash){
    if(crash.goingUp == true && crash.yGrid == 0){
        crash.goingUp = false;
    }
    else if(crash.goingUp == true){
        crash.yGrid--;
        crash.yRaw -= squareHeight;
    }
    else if (crash.goingUp == false && crash.yGrid == 3){
        crash.goingUp = true
    }
    else if (crash.goingUp == false){
        crash.yGrid++;
        crash.yRaw += squareHeight; 
    }
}