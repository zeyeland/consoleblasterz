
document.getElementById("scoreTxt").innerHTML = player1.score;
document.getElementById("lifeTxt").innerHTML = player1.ships;
document.getElementById("levelText").innerHTML = currentLevel;


var gameOver = false;

function update(){
    if(gameOver==false){
        ctx.clearRect(0,0, 2000, 5000);
        drawMap();
        player1.update();
        //updateLiveAllens();
        //generateAllensLevelOne();
        updateAllenByLevel();
        updateLiveBullets();
    }
    if(gameOver == true){
        console.log('gameover');
        ctx.clearRect(0,0, 2000, 5000);
        drawMap();
        drawPlayer();
    }
    if(gameOver == "pause"){
        ctx.clearRect(0,0, 2000, 5000);
        liveAllensArray = [];
    }
    
}

setInterval(update,80);

function callGameOver(){  
    gameOver = true;
}

function updateAllenByLevel(){
    if(currentLevel == 1){
        generateAllensLevelOne();
   }
   else if ( currentLevel == 2 ){
        generateAllensLevelTwo();   
    }
    else if ( currentLevel == 3 ){
        generateAllensLevelThree();   
    }

    else if ( currentLevel == 4 ){
        generateAllensLevelFour();   
    }
}


