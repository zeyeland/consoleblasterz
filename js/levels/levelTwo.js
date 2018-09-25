var levelTwo = new Image(); 
levelTwo.src = "assets/maps/2-space.png";

var levelTwoConfig = {
    points: 10,
    spawn: 1,
}

var bossTwoActivated = false;
var boss2;
function generateAllensLevelTwo(){
    if(player1.score < 30){
        var whereY = Math.floor((Math.random() * 4) + 0) * squareHeight;

        var genNum = Math.floor((Math.random() * 100) + 1);
        if(genNum < 20){
            var allen1 = new allenComponnet(2,2,(squareWidth*10) ,(whereY) );
            console.log("ALLEN WAS MADE");
        }
        updateLiveAllens();
    }
    //check if player reached level points goal
    if(player1.score >= 30 && bossTwoActivated == false){
        bossTwoActivated = true;
        boss2 = new bossTwoComponnet();
        liveAllensArray = [];
    }
    if(bossTwoActivated == true){
       boss2.update();
    }
}