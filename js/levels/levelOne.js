var levelOne = new Image(); 
levelOne.src = "assets/maps/seamlessSpace.png";

var levelOneConfig = {
    points: 10,
    spawn: 1,
}

var bossOneActivated = false;
var boss1;
function generateAllensLevelOne(){
    if(player1.score < 10){
        var whereY = Math.floor((Math.random() * 4) + 0) * squareHeight;

        var genNum = Math.floor((Math.random() * 200) + 1);
        if(genNum < 10){
            var allen1 = new allenComponnet(1,1,(squareWidth*10) ,(whereY) );
            console.log("ALLEN WAS MADE");
        }
        updateLiveAllens();
    }
    //check if player reached level points goal
    if(player1.score >= 10 && bossOneActivated == false){
        bossOneActivated = true;
        boss1 = new bossOneComponnet();
        liveAllensArray = [];
    }
    if(bossOneActivated == true){
       boss1.update();
    }
}