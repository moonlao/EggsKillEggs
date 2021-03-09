class Eggs {

    posX;
    posY;
    health;
    speed;

    constructor (posX, posY, health, speed){
    this.posX = posX;
    this.posY = posY;
    this.health = health;
    this.speed = speed;
    }

     getPosX() {
        return this.posX;
    }

     getPosY() {
        return this.posY;
    }

     setPosX( posX ) {
        this.posX = posX;
    }

     setPosY( posY ) {
        this.posY = posY;
    }

    getHealth(){
        return this.health;
    }

     setHealth( health ){
        this.health = health;
    }

     getSpeed(){
        return this.speed;
    }

     setSpeed( speed ){
        this.speed = speed;
    }


}