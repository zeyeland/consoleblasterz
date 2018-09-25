var levelThree = new Image(); 
levelThree.src = "assets/maps/space-6.jpg";


var bossThreeActivated = false;
var boss3 ;
function generateAllensLevelThree(){
    if(player1.score < 60){
        var whereY = Math.floor((Math.random() * 4) + 0) * squareHeight;

        var genNum = Math.floor((Math.random() * 100) + 1);
        if(genNum < 30){
            var allen1 = new allenComponnet(2,2,(squareWidth*10) ,(whereY) );
            console.log("ALLEN WAS MADE");
        }
        updateLiveAllens();
    }
    //check if player reached level points goal
    if(player1.score >= 60 && bossThreeActivated == false){
        bossThreeActivated = true;
        boss3 = new bossThreeComponnet();
        liveAllensArray = [];
    }
    if(bossThreeActivated == true){
       boss3.update();
       for(var y=0; y < boxArray.length; y++){
           boxArray[y].update();
       }
    }
}