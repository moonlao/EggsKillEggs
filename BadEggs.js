class BadEggs extends Eggs{

    eggCircles = 0;
    eggHearts = 1;
    eggWaves = 2;
    eggElipses = 3;
    eggLines = 4;
    eggRombos = 5;
    eggFlowers = 6;
    eggOther = 7;

    type;


    constructor (posX, posY, health, speed){
        super(posX, posY, health, speed);
        this.type = 0;
    }

    getType(){
        return this.type;
    }

    setType( type ){
        this.type = type;
    }


    move(){
        if( this.type == eggCircles || this.type == eggHearts || this.type == eggWaves || this.type == eggElipses){
            this.posY = (this.posY + 10 );

        }else if (this.type == eggLines || this.type == eggRombos || this.type == eggFlowers || this.type == eggOther ){
            this.posY = (this.posY + 1 * this.speed);
        }
    }

}