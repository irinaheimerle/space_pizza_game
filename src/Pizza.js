class Pizza {
    constructor(stage, assetManager, astronaut) {
        //point local stage to passed in stage
        this._stage = stage;
        //point local astronaut to passed in astronaut
        this._astronaut = astronaut;
        //create an astronaut sprite
        this._astronautSprite = astronaut.sprite;

        //construct custom event objects
        this._eventPizzaCaught = new createjs.Event("pizzaCaught", true);

        //get spritesheet for sprite
        this._sprite = assetManager.getSprite("spritesheet");
        //locate main animation / sprite
        this._sprite.gotoAndStop("pizza");

        //this pizza will eventually move
        //this._sprite.mover = new Mover(this._sprite, stage);

        //add to the stage
        //this._stage.addChild(this._sprite);
    }

    // Custom functions for class
    updateMe() {
        let a = this._astronautSprite.x - this._sprite.x;
        let b = this._astronautSprite.y - this._sprite.y;
        let c = Math.sqrt((a * a) + (b * b));

        if(c >= 120) {
            this._sprite.dispatchEvent(this._eventPizzaCaught);
            this._burntPizza();
        }
    }

    randomize(high, low) {return Math.round(Math.random() * (high - low)) + low;}

    setUpMe(index) {
        this._sprite.y = this.randomize(250, 0);
        this._sprite.x = this.randomize(0, 150);
        
        this._stage.addChild(this._sprite);
        
    }

    //"private" functions
    _pizzaCaught() {
        //update level
    }

    _burntPizza() {
        //recycle pizza, put back in loop for next level
        this._stage.removeChild(this._sprite);
    }

    
}