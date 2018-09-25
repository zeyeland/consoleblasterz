var levelFour = new Image(); 
levelFour.src = "assets/maps/Background-3.png";


var bossFourActivated = false;
var boss4 ;
function generateAllensLevelFour(){
    if(player1.score < 80){
        var whereY = Math.floor((Math.random() * 4) + 0) * squareHeight;

        var genNum = Math.floor((Math.random() * 100) + 1);
        if(genNum < 10){
            var allen1 = new allenComponnet(2,2,(squareWidth*10) ,(whereY) );
            console.log("ALLEN WAS MADE");
        }
        updateLiveAllens();
    }
    //check if player reached level points goal
    if(player1.score >= 80 && bossFourActivated == false){
        bossFourActivated = true;
        boss4 = new bossFourComponnet();
        liveAllensArray = [];
    }
    if(bossFourActivated == true){
       //boss4.update();
       for(var y=0; y < bossArray.length; y++){
        bossArray[y].update();
       }
    }
}