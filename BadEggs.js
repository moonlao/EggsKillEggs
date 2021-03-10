class BadEggs extends Eggs{

    
    type;


    constructor (posX, posY, health, speed, type){
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
        if( this.type == 0 || this.type == 1 || this.type == 2 || this.type == 3){
            this.posY = (this.posY + 0.3);

        }else if (this.type == 4 || this.type == 5 || this.type == 6 || this.type == 7){
            this.posY = (this.posY + 0.5);
        }
    }

}