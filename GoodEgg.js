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
    super(posX, posY, health, speed);
}

moveLeft() {
    if(this.posX >= 0){
    this.posX = (this.posX - (1*this.speed));
    }else{
        this.posX = 0
    }
}

moveRight(){
    if(this.posX <=1300){
    this.posX = (this.posX + (1*this.speed));
    }else{
        this.posX= 1300;
    }
}



}