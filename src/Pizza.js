class Pizza {
    constructor(stage, assetManager, astronaut) {
        //point local stage to passed in stage
        this._stage = stage;
        //point local astronaut to passed in astronaut
        this._astronaut = astronaut;
        //create an astronaut sprite
        this._astronautSprite = astronaut.sprite;

        //get spritesheet for sprite
        this._sprite = assetManager.getSprite("spritesheet");
        //locate main animation / sprite
        this._sprite.gotoAndStop("pizza");
        //eventually this will be moved to a "setup me"
        this._sprite.x = 100;
        this._sprite.y = 100;

        //this pizza will eventually move
        //this._sprite.mover = new Mover(this._sprite, stage);

        //add to the stage
        this._stage.addChild(this._sprite);

        this._firstLevel = false;
        this._secondLevel = false;
        this._thirdLevel = false;

        this._pizzaSlices = 0;
    }

    // Custom functions for class
    updateMe() {
        //TO-DO: add collision detection
        // //let point = this._astronautSprite.globalToLocal(this._sprite.x, this._sprite.y);
        // let pt = this._astronautSprite.globalToLocal(this._sprite.x, this._sprite.y);
        // if (this._astronautSprite.hitTest(pt.x, pt.y)) {
        //     console.log("collision!");
        //     // collision detection with snake
        //     //this._sprite.dispatchEvent(this._pizzaCaught);
        //     //this._burntPizza();
        // }
    }

    //"private" functions
    _pizzaCaught() {
        //update level
    }

    _burntPizza() {
        //recycle pizza, put back in loop for next level
    }

    _setUpMe() {
        if(this._firstLevel) this._pizzaSlices = 4;
        else if(this._secondLevel) this._pizzaSlices = 6;
        else if(this._thirdLevel) this._pizzaSlices = 8;
    }
}