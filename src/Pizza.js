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

        this.counter = 0;
    }

    // Custom functions for class
    updateMe() {
        let astronautBounds = this._astronautSprite.getBounds();
        let sliceBounds = this._sprite.getBounds();

        // let c = 
        //     ( ( astronautBounds.y + astronautBounds.height ) < ( sliceBounds.y ) ) ||
        //     ( astronautBounds.y > ( sliceBounds.y + sliceBounds.height ) ) ||
        //     ( ( astronautBounds.x + astronautBounds.width ) < sliceBounds.x ) ||
        //     ( astronautBounds.x > ( sliceBounds.x + sliceBounds.width ) )
        // ;

        // let c = ((astronautBounds.y + astronautBounds.height) > (sliceBounds.y));

        // if(c) console.log("collision now!");
    }

    randomize(low, high) {return Math.round(Math.random() * (high - low)) + low;}

    setUpMe() {
        let restrictions = this._astronautSprite.getBounds();

        this._sprite.x = this.randomize(175, 300);
        console.log(this._sprite.x);
        // this._sprite.y = this.randomize(restrictions.y + 100, 300);

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