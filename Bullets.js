class Bullets{

    posX;
    posY;
    damage;
    speed;


    constructor (posX, posY, damage, speed){
        this.posX = posX;
        this.posY = posY;
        this.damage = damage;
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
    getSpeed(){
        return this.speed;
    }

     setSpeed( speed ){
        this.speed = speed;
    }
    getDamage(){
        return this.damage;
    }

    move(){
        this.posY = (this.posY - 30);
    }


}