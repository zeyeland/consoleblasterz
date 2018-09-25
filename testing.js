/////////////////testing purposes
var tempBullet;
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        gameOver = false;
        console.log(livingBulletsArray);
    }
    if(e.keyCode == 80){
        tempBullet = new bulletComponnetAllen(allen1);
    }
    if(e.keyCode == 76){
        moveTestBullet(tempBullet);
    }
}


function moveTestBullet(bullet){
    
        bullet.xRaw -= squareWidth;
        bullet.xGrid --;
       
   
}
///////////////////// end of testing