
//globl boss functions
var bossArray = [];

function bossMoveShip(boss){
    var whereY = Math.floor((Math.random() * 4) + 0) * squareHeight;
    boss.yRaw = whereY;
    boss.yGrid = boss.yRaw/squareHeight;
}

function bossHitByPlayerBullet(boss){
    document.getElementById("bossHealth").innerHTML =boss.health;
    for(var x = 0; x < livingBulletsArray.length; x++){
        if(boss.xGrid == livingBulletsArray[x].xGrid && 
           boss.yGrid == livingBulletsArray[x].yGrid && livingBulletsArray[x].type == "green")
        {
            removeBulletFromArray(livingBulletsArray[x]);
            boss.health--; 
            console.log('boss was hit by player bullet');
        }
    }
}

function resetBossCrap(){
    liveAllensArray = [];// this piece of code refreshed/removes excisting allens on field
    bossArray = [];
    document.getElementById("bossHealth").innerHTML = "";
    document.getElementById("levelText").innerHTML = currentLevel;

}
