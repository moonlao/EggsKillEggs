class GoodEgg extends Eggs{

    
    speedGoodEgg = 10;
    tamGoodEgg= 80;
    health = 2;

    

    
    //pngGoodEgg = loadImage('data/goodegg.png');
    //posY = 550



    goodEgg( posX, posY){
        this.posX = width/2;
        this.posY = 790;
        super(posX, posY);
    }

    paintGoodEgg(){

        fill(255);
        rect(80, 80, 80);
    }

    
/*goodEgg( posX, posY, health, speed){
    this.posx = width/2;
    this.posY = 790;
    this.health = 1;
    this.speed = 2;
    

    super(posX, posY, health, speed);
}*/

moveLeft() {
    posX = (posX - (1*speed));
}

moveRight(){
    posX = (posX + (1*speed));
}

getHealth() {
    return this.health;
}

setHealth( health){
    this.health = health;
}

//paintGoodEgg(){
  //  imageMode(CENTER);
    //image( this.pngGoodEgg, posX, posY);
//}

getPosX(){
    return posX;

}

setPosX( posX ){
    this.posX = posX 
}

getPosY(){
    return posY;
}


}