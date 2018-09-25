var levelFive= new Image(); 
levelFive.src = "assets/maps/Background-4.png";


var bossFiveActivated = false;
var boss5 ;
function generateAllenslevelFive(){
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
    if(player1.score >= 80 && bossFiveActivated == false){
        bossFiveActivated = true;
        boss5 = new bossFiveComponnet();
        liveAllensArray = [];
    }
    if(bossFiveActivated == true){
       //boss5.update();
       for(var y=0; y < bossArray.length; y++){
        bossArray[y].update();
       }
    }
}