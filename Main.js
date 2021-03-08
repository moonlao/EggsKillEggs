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

let screenPaused;
let screenGameover;



// crear lista de balas


//
goodEgg = new GoodEgg(450, 950, 1, 2);





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
  //backgroundCover = loadImage('data/backgroundcover.png'); // Cargar la imagen
  
  //remolinoCover = loadImage('data/remolino.png');
  //huevoCover = loadImage('data/huevocover.png')
  //backgroundGame = loadImage('data/gamebackground.png');
  
  //screenHow = loadImage('data/instructions.png');

  //pngGoodEgg = loadImage('data/goodegg.png');

    
    monda();
    

  
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

            for(i= 0; i< evilEggs.length; i++){
                if( evilEggs[i].getType()== 0){
                    image(eggCircles, evilEggs[i].getPosX(), evilEggs[i].getPosY());
                }
                if( evilEggs[i].getType()== 1){
                    image(eggHearts, evilEggs[i].getPosX(), evilEggs[i].getPosY());
                } 
                if( evilEggs[i].getType()== 2){
                    image(eggWaves, evilEggs[i].getPosX(), evilEggs[i].getPosY());
                } 
                if( evilEggs[i].getType()== 3){
                    image(eggElipses, evilEggs[i].getPosX(), evilEggs[i].getPosY());
                } 
                if( evilEggs[i].getType()== 4){
                    image(eggLines, evilEggs[i].getPosX(), evilEggs[i].getPosY());
                } 
                if( evilEggs[i].getType()== 5){
                    image(eggRombos, evilEggs[i].getPosX(), evilEggs[i].getPosY());
                } 
                if( evilEggs[i].getType()== 6){
                    image(eggFlowers, evilEggs[i].getPosX(), evilEggs[i].getPosY());
                } 
                if( evilEggs[i].getType()== 7){
                    image(eggOther, evilEggs[i].getPosX(), evilEggs[i].getPosY());
                } 
                evilEggs[i].move();
                
            }

            //paintHero();

            text(mouseX+","+mouseY, mouseX, mouseY);
            fill(250);

            

            //pintar enemigos

            //recorrer arraylist para pintar enemigos

            //recorrer arraylist para pintar balas

            //arraylist para eliminar enemigo

            //pintar heroe





            //GoodEgg.prototype.paintGoodEgg();

          
            //image(pngGoodEgg, 0,0);
            //GoodEgg.paintGoodEgg();
            //GoodEgg.GoodEgg(0,0,1,2);
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
  
    
        
    /*image(remolinoCover, 650, 450);
    image(huevoCover, 650, 450);*/

    /*if(showHow == true){
        backgroundCover = loadImage('data/backgroundcoverhow.png');
    }else if(showYes == true){
        backgroundCover = loadImage('data/backgroundcoveryes.png');
    }else{
        backgroundCover = loadImage('data/backgroundcover.png');
    }*/

}

function paintHero(){
    image(pngGoodEgg, 650, 790);
    //fill(250);
    //rect(100, 100, 200, 200);
}

function startPlayer(){
    player = new GoodEgg( 650, 790, 2, 2);
}

/*function paintGoodEgg() {
    
    imageMode(CENTER);
    image(pngGoodEgg, , 790);
}*/

function monda(){
    //crear lista de enemigos
    for (let i = 0; i < 6; i++){
        e = new BadEggs(160 + i*240, 0, 1, 10);
        evilEggs[i]= e;
    }

}



function gameScreen() {
    image(backgroundGame, 650, 450, 1300, 900);

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

/*function mousePressed() {
    switch (screen){
        case 0:
            if(mouseX>70 && mouseX<282 && mouseY>666 && mouseY<842){
                screen = 1;
            }
            break;
        

    

    }else if(mouseX>1000 && mouseX<1226 && mouseY>680 && mouseY<828){
        showGame = true;
    }

}

}*/



function keyPressed(){

    if(keyCode== RIGHT_ARROW){
        //método que mueva a la derecha
    }

    if(keyCode == LEFT_ARROW){
        //método que mueve a la izquierda
    }

    if(keyCode == 32){
        //crear una nueva bala en la pos del heroe
        
    }
}

