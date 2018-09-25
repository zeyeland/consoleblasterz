function bossTwoComponnet(){
    this.health = 20;
    this.speed = 1; // this effects how fast they make decision 
    this.timer = 1;
    this.dying = false;

    this.xRaw = squareWidth*10; //raw postion on canvas
    this.yRaw = squareHeight*2;

    this.xGrid = Math.round(this.xRaw / squareWidth); //postion based on grid
    this.yGrid = Math.round(this.yRaw / squareHeight);

    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "assets/GameBoy/gameboy.png";

    bossArray.push(this);


    this.update = function(){
        var parentThis = this;
        bossMakeDecisonTwo(parentThis);
        bossHitByPlayerBullet(parentThis);
        bossCheckHealthTwo(parentThis);
        drawAllen(parentThis);      
    }//end of update function
}

var pokeBlue = "assets/GameBoy/blue.jpg";
var pokeYellow = "assets/GameBoy/yellow.jpg";
var pokeRed = "assets/GameBoy/red.jpg"

function bossMakeDecisonTwo(boss){ 
    var De = Math.floor((Math.random() * 700) + 1);
    if (De == 1 ){
        console.log("this boss moved");
         bossMoveShip(boss);
     }
    if (De == 2 ){
        console.log('this boss shot');
        bossTwoShootBullet(boss,pokeBlue,1);
     }
    if (De == 3){
        bossTwoShootBullet(boss,pokeRed,1);
     }

    if (De == 4){
        bossTwoShootBullet(boss,pokeYellow,1);
    }
 
     if(boss.timer > 10){
         
        boss.timer = 0;
     }
     else{
        boss.timer += boss.speed;
     }
}

function bossTwoShootBullet(boss,imgSource,speed){
    var whereY = Math.floor((Math.random() * 4) + 0) * squareHeight;
    var newBullet = new bulletComponnetBossTwo(boss,whereY,imgSource,speed);
}

function bulletComponnetBossTwo(parent,y,imgSource,speed){
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
        moveBulletAllenBossTwo(parentThis);
        hitPlayerShip(parentThis);//methods is in shot js
        drawBullet(parentThis);
    }//end of update function
}

function moveBulletAllenBossTwo(bullet){
    if(bullet.timer > 5){
        bullet.xRaw -= squareWidth;
        bullet.xGrid --;
        bullet.timer = 0;
    }
    else{
        bullet.timer+= bullet.speed;
    }
}

function bossCheckHealthTwo(boss){

    if(boss.health < 11){
        boss.playerImage.src = "assets/GameBoy/colorGameBoy.png"
        pokeBlue = "https://img.pokemondb.net/sprites/x-y/normal/suicune.png";
        pokeRed = "https://img.pokemondb.net/sprites/x-y/normal/entei.png";
        pokeYellow = "https://img.pokemondb.net/sprites/black-white/normal/raikou.png";
    }

    if(boss.health < 1){
        boss.dying = true;
        console.log('boss is died');
        currentLevel++;
        gameOver = 'pause';
        resetBossCrap();
    }

    
}