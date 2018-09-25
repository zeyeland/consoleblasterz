function bossThreeComponnet(){
    this.health = 20;
    this.speed = 1; // this effects how fast they make decision 
    this.timer = 1;
    this.dying = false;

    this.xRaw = squareWidth*10; //raw postion on canvas
    this.yRaw = squareHeight*2;

    this.xGrid = Math.round(this.xRaw / squareWidth); //postion based on grid
    this.yGrid = Math.round(this.yRaw / squareHeight);

    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "assets/ps1/ps1.png";

    bossArray.push(this);


    this.update = function(){
        var parentThis = this;
        bossMakeDecisonThree(parentThis);
        bossHitByPlayerBullet(parentThis);
        bossCheckHealthThree(parentThis);
        drawAllen(parentThis);      
    }//end of update function
}

function bossMakeDecisonThree(boss){ 
    var De = Math.floor((Math.random() * 200) + 1);
    var DeHP = Math.floor((Math.random() * 3) + 1);
    if (De == 1 ){
        console.log("this boss moved");
         bossMoveShip(boss);
     }
    if (De == 2 || De == 4 || De == 5){
        //crate sneak box
        var sneakWaitTime = Math.floor((Math.random() * 100) );
        var sneakBox = new sneakBoxComponnent(sneakWaitTime,1);
     }
    if (De == 3){
        var sneakWaitTime = Math.floor((Math.random() * 200) );
        var sneakBox = new sneakBoxComponnent(sneakWaitTime,DeHP);
        var sneakBox = new sneakBoxComponnent(sneakWaitTime,DeHP);
     }
     if(De == 50){
        var sneakWaitTime = Math.floor((Math.random() * 400) + 100 );
        var sneakBox = new sneakBoxComponnent(sneakWaitTime,5);
     }
 
     if(boss.timer > 10){
         
        boss.timer = 0;
     }
     else{
        boss.timer += boss.speed;
     }
}

var boxArray = [];
function sneakBoxComponnent(time,hp){
    this.health = hp;
    this.counter = 1; // this effects how fast they make decision 
    this.timer = time;
    //this.dying = false;
    this.randX = Math.floor((Math.random() * 11) );
    this.randY = Math.floor((Math.random() * 4) );
    this.xRaw = squareWidth*this.randX; //raw postion on canvas
    this.yRaw = squareHeight*this.randY;

    this.xGrid = Math.round(this.xRaw / squareWidth); //postion based on grid
    if(this.xGrid == 0){
        this.xGrid = 1;
        this.xRaw = this.xGrid * squareWidth;
    }
    this.yGrid = Math.round(this.yRaw / squareHeight);

    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "assets/ps1/sneak.png";

    boxArray.push(this);


    this.update = function(){
        var parentThis = this;
       // bossMakeDecisonThree(parentThis);
        boxHitByPlayerBullet(parentThis);
        boxCheckHealth(parentThis);
        drawAllen(parentThis);
        if(parentThis.counter >= parentThis.timer){
            //shoot bullet and get ride of box
            var newBullet = new bulletComponnetBossThree(parentThis,"assets/ps1/snakeShark.gif",1);
            if( boxArray.includes(parentThis) ){
                var tempRemove = boxArray.indexOf(parentThis);
                boxArray.splice(tempRemove,1);
                console.log('box ship was removed from array');
            }
        }
        parentThis.counter++;
    }//end of update function
}

function boxHitByPlayerBullet(box){
    for(var x = 0; x < livingBulletsArray.length; x++){
        if(box.xGrid == livingBulletsArray[x].xGrid && 
           box.yGrid == livingBulletsArray[x].yGrid && livingBulletsArray[x].type == "green")
        {
            removeBulletFromArray(livingBulletsArray[x]);
            box.health--; 
            console.log('boss was hit by player bullet');
        }
    }
}

function boxCheckHealth(box){
    if(box.health < 1){
        if( boxArray.includes(box) ){
            var tempRemove = boxArray.indexOf(box);
            boxArray.splice(tempRemove,1);
            console.log('box ship was removed from array');
        }
    }
}

function bulletComponnetBossThree(parent,imgSource,speed){
    //this.power = 50;
    this.type = "boss";
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
        hitPlayerShip(parentThis);//methods is in shot js
        drawBullet(parentThis);
    }//end of update function
}

function bossCheckHealthThree(boss){
    if(boss.health < 1){
        boss.dying = true;
        console.log('boss is died');
        currentLevel++;
        gameOver = 'pause';
        resetBossCrap();
    }
}