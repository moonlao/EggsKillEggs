let backgroundCover; // Declarar variable 'img'.
let remolinoCover;
let backgroundCoverYes;
let backgroundCoverHow;
let backgroundGame;
let screen = 0;
let showHow;
let showYes;
let showCover = true;

let screenHow = false;

let pngGoodEgg;

let goodEgg;
let badEggs;
let evilEggs = [];

let eggCircles;
let eggElipses;
let eggFlowers;
let eggHearts;
let eggLines;
let eggOther;
let eggRombos;
let eggWaves;

var positions = [160, 400, 640, 880, 1120];

let screenPaused;
let screenGameover;

// crear lista de balas




function preload(){
  backgroundCover = loadImage('data/backgroundcover.png'); // Cargar la imagen
  remolinoCover = loadImage('data/remolino.png');
  huevoCover = loadImage('data/huevocover.png')
  backgroundGame = loadImage('data/gamebackground.png');
  screenHow = loadImage('data/instructions.png');
  pngGoodEgg = loadImage('data/goodegg.png');
  eggCircles = loadImage('data/eggcircles.png');
  eggElipses = loadImage('data/eggelipses.png');
  eggFlowers = loadImage('data/eggflowers.png');
  eggHearts = loadImage('data/egghearts.png');
  eggLines = loadImage('data/egglines.png');
  eggOther = loadImage('data/eggother.png');
  eggRombos = loadImage('data/eggsrombos.png');
  eggWaves = loadImage('data/eggwaves.png');
}


function setup() {
    createCanvas(1300, 900);
  
    monda();

    startGoodEgg();
}




function draw() {
    
    switch(screen){
        case 0:

            //movingRemolino();
            coverScreen();
            
            image(remolinoCover, 650, 450);
            image(huevoCover, 650, 450);
            text(mouseX+","+mouseY, mouseX, mouseY);
            fill(250);

            if (showHow == true && screen == 0){
                image(screenHow, 650, 450);
            }
            
            break;
        
        case 1:

            gameScreen();

            /*for (var i = 0; i < 10; i++) {
                showCiclic();
            }*/
            
            
            showBadEggs();
            paintGoodEgg();

            if(keyIsDown(39)){
                goodEgg.moveRight();
            }

            if(keyIsDown(37)){
                goodEgg.moveLeft();
            }

            
            
            text(mouseX+","+mouseY, mouseX, mouseY);
            fill(250);

            //pintar enemigos

            //recorrer arraylist para pintar enemigos

            //recorrer arraylist para pintar balas

            //arraylist para eliminar enemigo

            //pintar heroe

            break;
        

        case 2: 
            
            //imagen de game over
            //resumen de tiempo y score

            break;

    }
    
}




function coverScreen() {
    imageMode(CENTER);
    image(backgroundCover, 650, 450, 1300, 900);
}



function paintGoodEgg(){
    image(pngGoodEgg, goodEgg.getPosX(), goodEgg.getPosY(), 95, 140);
}



function startGoodEgg(){
    goodEgg = new GoodEgg(650, 812, 2, 10);
}



function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function monda(){
    //crear lista de enemigos 160, 400, 640, 880, 1120
    
    for (let i = 0; i < 50; i++){
        p = Math.floor (Math.random() * 5);
        if( p == 0 || p == 2 || p == 4){
            e = new BadEggs(positions[p], -5000+i*100, 1, 100, Math.floor (Math.random() * 3));
            evilEggs[i]= e;

        }else if (p == 1 || p == 3){
            e = new BadEggs(positions[p], -5000+i*100, 1, 100, randomIntFromInterval(4, 7));
            evilEggs[i]= e;
        }
        
        
    }
}




function showBadEggs(){
    for(i= 0; i< evilEggs.length; i++){
        if( evilEggs[i].getType()== 0){
            image(eggCircles, evilEggs[i].getPosX(), evilEggs[i].getPosY(), 120, 100);
        }
        if( evilEggs[i].getType()== 1){
            image(eggHearts, evilEggs[i].getPosX(), evilEggs[i].getPosY(), 120, 100);
        } 
        if( evilEggs[i].getType()== 2){
            image(eggWaves, evilEggs[i].getPosX(), evilEggs[i].getPosY(), 120, 100);
        } 
        if( evilEggs[i].getType()== 3){
            image(eggElipses, evilEggs[i].getPosX(), evilEggs[i].getPosY(), 120, 100);
        } 
        if( evilEggs[i].getType()== 4){
            image(eggLines, evilEggs[i].getPosX(), evilEggs[i].getPosY(), 120, 100);
        } 
        if( evilEggs[i].getType()== 5){
            image(eggRombos, evilEggs[i].getPosX(), evilEggs[i].getPosY(), 120, 100);
        } 
        if( evilEggs[i].getType()== 6){
            image(eggFlowers, evilEggs[i].getPosX(), evilEggs[i].getPosY(), 120, 100);
        } 
        if( evilEggs[i].getType()== 7){
            image(eggOther, evilEggs[i].getPosX(), evilEggs[i].getPosY(), 120, 100);
        } 
        evilEggs[i].move();
        
    }
}



function gameScreen() {
    image(backgroundGame, 650, 450, 1300, 900);
}



function createNewBadEggs(){
    for(i = 6; i <= 50; i++){
        e = new BadEggs(160 + i*240, 0, 1, 10);
        evilEggs[i]= e; 
    }
}

function removeDeadBadEggs(){
    for(i= 0; i< evilEggs.length; i++){
        if(evilEggs[i].getHealth() <= 0){
            evilEggs.splice(i, 1);
        }
}
}



function movingRemolino() {
    imageMode(CENTER);
    rotateZ(millis() / 1000);
    image(remolinoCover, 650, 450, 800,800);
}




function mouseMoved(){
    switch (screen) {
        case 0:
            if(mouseX>70 && mouseX<282 && mouseY>666 && mouseY<842 && screen == 0){
                backgroundCover = loadImage('data/backgroundcoverhow.png');
                showHow = true;
                //showYes = false;
                
    
            }else if(mouseX>1000 && mouseX<1226 && mouseY>680 && mouseY<828 && screen == 0){
                backgroundCover = loadImage('data/backgroundcoveryes.png');
                //showYes = true;
                showHow = false;
  
            }else{
                backgroundCover = loadImage('data/backgroundcover.png');
                showHow = false;
                //showYes = false;
            }
        break;

    }
}



function mousePressed() {
    switch (screen){
        case 0:
            if(mouseX>1000 && mouseX<1226 && mouseY>680 && mouseY<828 && screen == 0){
                screen = 1;
            }
            break;

        case 1:
            // presionables : botón de pausa, y de resume i guess
            break;
    }
}


/*function keyPressed(){

    if(keyCode== 39 && screen == 1){
        goodEgg.moveRight();
    }

    if(keyCode == 37 && screen == 1){
        goodEgg.moveLeft();
    }

    if(keyCode == 32){
        //crear una nueva bala en la pos del heroe
        
    }
}*/

