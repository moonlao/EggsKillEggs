//Declaración de variables
let backgroundCover;
let remolinoCover;

let backgroundGame;
let screen = 0;
let showHow;
let showYes;


let screenHow;

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

let pngGameOver;

var enemycount = 0;

//let font;
let font2;
let webofinal;

function preload(){

    //carga de imágenes
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
  //font = loadFont('data/DPComiccopy.ttf');
  font2 = loadFont('data/font2.ttf');
  webofinal = loadImage('data/finalgoodegg.png')
}


function setup() {
    createCanvas(1300, 900);
    
    //inicialización de método que crea los enemigos
    monda();

    //inicialización de método que crea un Good Egg
    startGoodEgg();

}




function draw() {
    
    // switch para cambiar entre pantallas
    switch(screen){
        case 0:

            // llamando método que pinta el fondo
            coverScreen();
            
            //imágenes
            image(remolinoCover, 650, 450,600,600);
            image(huevoCover, 650, 450, 2000, 2000);
            
            // condicional para mostrar las instrucciones
            if (showHow == true && screen == 0){
                image(screenHow, 650, 450);
            }
            
            break;
        
        case 1:

            // llamando método para pintar fondo
            gameScreen();

            // llamando método para crear Bad Eggs
            monda();            
            
            // método para pintar Bad Eggs
            showBadEggs();

            // método para pintar Good Egg
            paintGoodEgg();
            
            // condicional para llamar los métodos que mueven el Good Egg
            if(keyIsDown(39)){
                goodEgg.moveRight();
            }
            if(keyIsDown(37)){
                goodEgg.moveLeft();
            }

            
            // recorriendo el array de balas para pintarlas
            for( i= 0; i < bullet.length; i++){    
                    
                image(pngBullet, bullet[i].getPosX(), bullet[i].getPosY(), 30);
                bullet[i].move();
            }


            // método para matar y remover del array al enemigo y la bala
            kill();


            // método para pintar el puntaje
            showScore();
            

            // recorriendo el arreglo de Bad Eggs para que se acabe el juego
            // si un Bad Egg toca al Good Egg o si un Bad Egg llega a la parte inferior del lienzo
            for(i = 0; i < evilEggs.length; i++){
                if(evilEggs[i].getPosY() >= goodEgg.getPosY() - 80 && 
                    evilEggs[i].getPosX() >= goodEgg.getPosX() - 90 &&
                    evilEggs[i].getPosX() <= goodEgg.getPosX() + 90){
                    screen = 2;
                    
                    break;
                }
                if(evilEggs[i].getPosY() >= 890){
                    screen = 2;
                    
                    break;
                }
            }


            // agregando una unidad al timer cada 60 frames
            if (frameCount % 60 == 0 ) {
                timer ++;
            }


            // metodo para pintar el timer
            showTimer();
            

            break;
        

        case 2: 
            
            //imagen de game over
            image(pngGameOver, 650,450, 1300, 900);


            //resumen de tiempo y score
            fill(255);
            textSize(40);
            textFont(font2);
            text("Time in segs: "+timer, 380, 450, 400, 200);
            text("Score: "+score, 380, 600, 200, 200);
            image(webofinal, 850, 550, 250, 240);

            break;

    }
    
}



// pinta el tiempo
function showTimer(){
    fill(255);
    textSize(30);
    textFont(font2);
    text("Time in segs: "+timer, 1080, 800, 200, 200);
    //text("enemi "+enemycount, 0, 0, 200, 200);
}


// método para pintar el fondo de la primera pantalla
function coverScreen() {
    imageMode(CENTER);
    image(backgroundCover, 650, 450, 1300, 900);
}



// pinta el Good Egg
function paintGoodEgg(){
    image(pngGoodEgg, goodEgg.getPosX(), goodEgg.getPosY(), 95, 140);
}


// crea el Good Egg
function startGoodEgg(){
    goodEgg = new GoodEgg(650, 812, 2, 10);
}


// método para crear un tipo de Bad Egg random
function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// crea lista de enemigos
function monda(){

    //posiciones de enegmigos 160, 400, 640, 880, 1120
    
    if ( timer <= 15){
        if (enemycount < 8){
            p = Math.floor (Math.random() * 5);
            if( p == 0 || p == 2 || p == 4){
                e = new BadEggs(positions[p], -100 -(50*enemycount), 2, 900000, Math.floor (Math.random() * 3));
                for (i=0; i<evilEggs.length; i++){
                    if(e.getPosY()==evilEggs[i].getPosY() && e.getPosX()== evilEggs[i].getPosX()){
                        e.setPosY(e.getPosY()+200);
                    }
                }
                evilEggs.push(e);
                enemycount++;

            }else if (p == 1 || p == 3){
                e = new BadEggs(positions[p], -100 -(50*enemycount), 2, 500000, randomIntFromInterval(4, 7));
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
                e = new BadEggs(positions[p], -100 -(50*enemycount), 15, 900000*2, Math.floor (Math.random() * 3));
                for (i=0; i<evilEggs.length; i++){
                    if(e.getPosY()==evilEggs[i].getPosY() && e.getPosX()== evilEggs[i].getPosX()){
                       e.setPosY(e.getPosY()+200);
                    }
                }
                evilEggs.push(e);
                enemycount++;

                } else if (p == 1 || p == 3){
                e = new BadEggs(positions[p], -100 -(50*enemycount), 15, 500000*2, randomIntFromInterval(4, 7));
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
                e = new BadEggs(positions[p], -100 -(50*enemycount), 50, 900000*3, Math.floor (Math.random() * 3));
                for (i=0; i<evilEggs.length; i++){
                    if(e.getPosY()==evilEggs[i].getPosY() && e.getPosX()== evilEggs[i].getPosX()){
                       e.setPosY(e.getPosY()+200);
                    }
               }
                evilEggs.push(e);
                enemycount++;

            }else if (p == 1 || p == 3){
                e = new BadEggs(positions[p], -100 -(50*enemycount), 50, 500000*3, randomIntFromInterval(4, 7));
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




// método para recorrer el arreglo de Bad Eggs y pintarlos
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


// pinta el fondo del juego
function gameScreen() {
    image(backgroundGame, 650, 450, 1300, 900);
}


// crea una bala nueva
function createNewBullet(){
    bullet.push(new Bullets(goodEgg.getPosX(), goodEgg.getPosY(), 1, 0.5)); 
    
}


// recorre el arreglo de Bad Eggs, eliminando los que están muertos y agregando el puntaje, además de eliminar la bala
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


// método que pinta el puntaje
function showScore(){
    fill(255);
    textSize(30);
    textFont(font2);
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

            break;
    }
}


function keyPressed(){

    if(keyCode == 32){
        //crear una nueva bala en la pos del heroe
        createNewBullet();
    }
}

