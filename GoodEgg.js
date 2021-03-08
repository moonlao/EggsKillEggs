class GoodEgg extends Eggs{

    
    //speedGoodEgg = 10;
    //tamGoodEgg= 80;
    //health = 2;

    

    
    //pngGoodEgg = loadImage('data/goodegg.png');
    //posY = 550



    //goodEgg( posX, posY){
    //    super(450, 790);
    //}

constructor (posX, posY, health, speed){
    super(450, 790, 1, 2);
}

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