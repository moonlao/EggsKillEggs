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

let bullet = [];

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

let pngBullet;

var positions = [160, 400, 640, 880, 1120];

let score = 0;

var timer = 0;

let screenPaused;
let screenGameover;
let pngGameOver;

var enemycount = 0;

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
  pngBullet = loadImage('data/bullet.png');
  pngGameOver = loadImage('data/gameover.png');
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
            

            if (showHow == true && screen == 0){
                image(screenHow, 650, 450);
            }
            
            break;
        
        case 1:

            gameScreen();

            monda();            
            
            showBadEggs();
            paintGoodEgg();
            //paintBullet();

            if(keyIsDown(39)){
                goodEgg.moveRight();
            }

            if(keyIsDown(37)){
                goodEgg.moveLeft();
            }

            
        
            for( i= 0; i < bullet.length; i++){    
                    
                image(pngBullet, bullet[i].getPosX(), bullet[i].getPosY(), 30);
                bullet[i].move();
            }
            kill();
            removeBullet();

            showScore();
            
            for(i = 0; i < evilEggs.length; i++){
                if(evilEggs[i].getPosY() >= goodEgg.getPosY() - 80 && 
                    evilEggs[i].getPosX() >= goodEgg.getPosX() - 90 &&
                    evilEggs[i].getPosX() <= goodEgg.getPosX() + 90){
                    screen = 2;
                    console.log("se topo con el webo bueno");
                    break;
                }
                
                if(evilEggs[i].getPosY() >= 890){
                    screen = 2;
                    console.log("se paso de vrga");
                    break;
                }

            }

            if (frameCount % 60 == 0 ) {
                timer ++;
            }

            showTimer();
            

            
            //pintar enemigos

            //recorrer arraylist para pintar enemigos

            //recorrer arraylist para pintar balas

            //arraylist para eliminar enemigo

            //pintar heroe

            break;
        

        case 2: 
            
            //imagen de game over
            image(pngGameOver, 650,450, 1300, 900);
            //resumen de tiempo y score

            break;

    }
    
}


function showTimer(){
    fill(255);
    textSize(30);
    text("Time in segs: "+timer, 1080, 800, 200, 200);
    text("enemi "+enemycount, 0, 0, 200, 200);
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
    
    if ( timer <= 15){
        if (enemycount < 8){
        p = Math.floor (Math.random() * 5);
        if( p == 0 || p == 2 || p == 4){
            e = new BadEggs(positions[p], -100 -(50*enemycount), 1, 100 , Math.floor (Math.random() * 3));
            for (i=0; i<evilEggs.length; i++){
                if(e.getPosY()==evilEggs[i].getPosY() && e.getPosX()== evilEggs[i].getPosX()){
                   e.setPosY(e.getPosY()+200);
                }
           }
            evilEggs.push(e);
            enemycount++;

        }else if (p == 1 || p == 3){
            e = new BadEggs(positions[p], -100 -(50*enemycount), 1, 100, randomIntFromInterval(4, 7));
            for (i=0; i<evilEggs.length; i++){
                if(e.getPosY()==evilEggs[i].getPosY() && e.getPosX()== evilEggs[i].getPosX()){
                   e.setPosY(e.getPosY()+200);
                }
           }
            evilEggs.push(e);
            enemycount++;
        }
    }

    }if (timer <= 30 && timer > 15){
        p = Math.floor (Math.random() * 5);
        if (enemycount < 16){
            if( p == 0 || p == 2 || p == 4){
                e = new BadEggs(positions[p], -100 -(50*enemycount), 2, 150, Math.floor (Math.random() * 3));
                for (i=0; i<evilEggs.length; i++){
                    if(e.getPosY()==evilEggs[i].getPosY() && e.getPosX()== evilEggs[i].getPosX()){
                       e.setPosY(e.getPosY()+200);
                    }
               }
                evilEggs.push(e);
                enemycount++;

            }  else if (p == 1 || p == 3){
                e = new BadEggs(positions[p], -100 -(50*enemycount), 2, 150, randomIntFromInterval(4, 7));
                for (i=0; i<evilEggs.length; i++){
                    if(e.getPosY()==evilEggs[i].getPosY() && e.getPosX()== evilEggs[i].getPosX()){
                       e.setPosY(e.getPosY()+200);
                    }
               }
                evilEggs.push(e);
                enemycount++;
            }
        }
    
    
    } if (timer <= 45 && timer > 30){
        p = Math.floor (Math.random() * 5);
        if (enemycount < 24){
            if( p == 0 || p == 2 || p == 4){
                e = new BadEggs(positions[p], -100 -(50*enemycount), 3, 200, Math.floor (Math.random() * 3));
                for (i=0; i<evilEggs.length; i++){
                    if(e.getPosY()==evilEggs[i].getPosY() && e.getPosX()== evilEggs[i].getPosX()){
                       e.setPosY(e.getPosY()+200);
                    }
               }
                evilEggs.push(e);
                enemycount++;

            }else if (p == 1 || p == 3){
                e = new BadEggs(positions[p], -100 -(50*enemycount), 3, 200, randomIntFromInterval(4, 7));
                for (i=0; i<evilEggs.length; i++){
                    if(e.getPosY()==evilEggs[i].getPosY() && e.getPosX()== evilEggs[i].getPosX()){
                       e.setPosY(e.getPosY()+200);
                    }
               }
                evilEggs.push(e);
                enemycount++;
            }
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



function removeBullet(){
    for(i= 0; i < bullet.length; i++){
        if(bullet[i].getPosY() < -10){
            bullet.splice(i, 1);
        }
    }
}




function createNewBullet(){
    bullet.push(new Bullets(goodEgg.getPosX(), goodEgg.getPosY(), 1, 0.5)); 
    //b = new Bullets(goodEgg.getPosX(), goodEgg.getPosY(), 1, 10);
    //bullet[i] = b;
}

function kill(){
    for ( i= 0; i< evilEggs.length; i++){
        for( j = 0; j< bullet.length; j++){
            console.log(bullet.length+",");
            if(bullet[j].getPosX() >= evilEggs[i].getPosX() - 60 &&
                bullet[j].getPosX() <= evilEggs[i].getPosX() + 60 &&
                bullet[j].getPosY() >= evilEggs[i].getPosY() - 50 &&
                bullet[j].getPosY() <= evilEggs[i].getPosY() + 50){
                    if(evilEggs[i].getHealth() > 0){
                        evilEggs[i].setHealth(evilEggs[i].getHealth() - bullet[j].getDamage());
                        if( evilEggs[i].getHealth() == 0){
                            evilEggs.splice(i, 1);
                            score = (score + 10);
                            
                        }
                    }else if(evilEggs[i].getHealth() <= 0 ){
                        evilEggs.splice(i, 1);
                        
                        score = (score + 10);
                        

                    }
                    bullet.splice(j, 1);
                    
                }
        } 
    }
}



function showScore(){
    fill(255);
    textSize(30);
    text("Score:"+score, 20, 800, 200, 200);
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


function keyPressed(){

    if(keyCode == 32){
        //crear una nueva bala en la pos del heroe
        createNewBullet();
    }
}

