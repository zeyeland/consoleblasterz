/*  Varables defined in canvas.js
//  squareHeight = canvas.height / 6; 
//  squareWidth = canvas.width /5;    */
var currentLevel = 1;

var mapGrid = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
];

function drawMap(){
    if(currentLevel == 1){
         ctx.drawImage(levelOne,0,0,canvas.width,canvas.height);
    }
    else if ( currentLevel == 2 ){
        ctx.drawImage(levelTwo,0,0,canvas.width,canvas.height);
    }

    else if ( currentLevel == 3 ){
        ctx.drawImage(levelThree,0,0,canvas.width,canvas.height);
    }

    else if ( currentLevel == 4 ){
        ctx.drawImage(levelFour,0,0,canvas.width,canvas.height);
    }
   

}