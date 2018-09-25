var livingBulletsArray = [];
//var allenBulletsArray = [];

function bulletComponnet(parent){
    //this.power = power;
    this.type = "green";

    this.whoShot = parent;
    this.xRaw = parent.xRaw;
    this.yRaw = parent.yRaw;
    
    this.xGrid = Math.round(this.xRaw / squareWidth); 
    this.yGrid = Math.round(this.yRaw / squareHeight);

    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "assets/bullets/laser-12.png";

    this.timer = 0;
    livingBulletsArray.push(this);

    this.update = function(){
        var parentThis = this;
        hitOtherBullets(parentThis);
        isBulletOffScreen(parentThis);
        moveBullet(parentThis);
        hitAllenShip(parentThis);
        drawBullet(parentThis);
    }//end of update function
}

function bulletComponnetAllen(parent){
    //this.power = 50;
    this.type = "red";

    this.whoShot = parent;
    this.xRaw = parent.xRaw;
    this.yRaw = parent.yRaw;
    
    this.xGrid = Math.round(this.xRaw / squareWidth); 
    this.yGrid = Math.round(this.yRaw / squareHeight);

    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "assets/bullets/laser-a.png";

    this.timer = 0;
    livingBulletsArray.push(this);

    this.update = function(){
        var parentThis = this;
        isBulletOffScreen(parentThis);
        moveBulletAllen(parentThis);
        hitPlayerShip(parentThis);
        drawBullet(parentThis);
    }//end of update function
}

function moveBullet(bullet){
    if(bullet.timer > 5){
        bullet.xRaw += squareWidth;
        bullet.xGrid ++;
        bullet.timer = 0;
    }
    else{
        bullet.timer++;
    }
}

function moveBulletAllen(bullet){
    if(bullet.timer > 5){
        bullet.xRaw -= squareWidth;
        bullet.xGrid --;
        bullet.timer = 0;
    }
    else{
        bullet.timer++;
    }
}

function drawBullet(bullet){
    ctx.drawImage(bullet.playerImage,bullet.xRaw,bullet.yRaw,squareWidth,squareHeight); 
}

 function updateLiveBullets(){
    if(livingBulletsArray.length > 0){
        for(var x = 0; x < livingBulletsArray.length; x++){
            livingBulletsArray[x].update();
        }
    }
}

function hitPlayerShip(bullet){
    
    if ( bullet.xGrid == player1.xGrid && bullet.yGrid == player1.yGrid){
        console.log("player was hit");
        //this bullet needs to be removed from arraylist
        removeBulletFromArray(bullet);
        playerLoseShip();
    }
}

function hitAllenShip(bullet){
    
    for( var x = 0; x < liveAllensArray.length; x++){
        if(bullet.xGrid == liveAllensArray[x].xGrid && bullet.yGrid == liveAllensArray[x].yGrid){
            allenLoseShip(liveAllensArray[x]);
            removeBulletFromArray(bullet); ///remove bullet from game
            console.log("allen ship was hit");
        }
    }
}

function hitOtherBullets(bullet){
    for( var x = 0; x < livingBulletsArray.length; x++){
        if(bullet.xGrid == livingBulletsArray[x].xGrid && bullet.yGrid == livingBulletsArray[x].yGrid && (livingBulletsArray[x].type == "red" || livingBulletsArray[x].type == "boss" ) ){
                removeBulletFromArray(livingBulletsArray[x]);
                removeBulletFromArray(bullet); ///remove bullet from game
                //removeBulletFromArray(livingBulletsArray[x]);
                console.log("two bullets hit and should clear each other");
        }
        ///special case for crash boss bullets
        if(bullet.xGrid == livingBulletsArray[x].xGrid && bullet.yGrid == livingBulletsArray[x].yGrid && (livingBulletsArray[x].type == "crash"  ) ){
        //nneed to create a spinning crash element
            var newSpinningCrash = new spinningCrashComponnet();
        }
        ///
    }
}

function removeBulletFromArray(bullet){
    if( livingBulletsArray.includes(bullet) ){
        var tempRemove = livingBulletsArray.indexOf(bullet);
        livingBulletsArray.splice(tempRemove,1);
        console.log('allen bullet was removed');
    }
}

function isBulletOffScreen(bullet){
    if(bullet.xGrid < 0 || bullet.xGrid > 10){
        var tempRemove = livingBulletsArray.indexOf(bullet);
        livingBulletsArray.splice(tempRemove,1);
        console.log('This bullet went off screen; Removed from array');
    }
}
