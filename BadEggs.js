class BadEggs extends Eggs{

    eggCircles = 0;
    eggHearts = 1;
    eggWaves = 2;
    eggEllipses = 3;
    eggLines = 4;
    eggRombos = 5;
    eggFlowers = 6;
    eggOther = 7;

    type;

    BadEggs( posX, posY, health, speed, type){
        super(posX, posY, health, speed);
        this.type = type;
    }

    getType(){
        return this.type;
    }

    setType( type ){
        this.type = type;
    }


    move(){
        if( type == eggCircles || type == eggHearts || type == eggWaves || type == eggEllipses){
            posY = (posY - 1 * (this.speed)/ 2);

        }else if (type == eggLines || type == eggRombos || type == eggFlowers || type == eggOther ){
            posY = (posY - 1 * this.speed);
        }
    }

}