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
    }

    get sprite() {return this._sprite;}

    // Custom functions for class
    updateMe() {
        //collision detection
        let a = this._astronautSprite.x - this._sprite.x;
        let b = this._astronautSprite.y - this._sprite.y;
        let c = Math.sqrt((Math.pow(a,2)) + (Math.pow(b, 2)));
        
        if(c <= 32) {
            let pizzaSound = createjs.Sound.play("pizzaPick");
            this._sprite.dispatchEvent(this._eventPizzaCaught);
            this._burntPizza(pizzaSound);
        }
    }

    //randomize number
    randomize(low, high) {return Math.round(Math.random() * (high - low)) + low;}

    setUpMe() {
        //position slice
        this._sprite.x = this.randomize(50, 250);
        this._sprite.y = this.randomize(100, 200);

        return this._sprite;
    }

    //private functions
    _burntPizza(sound) {
        sound.volume = .2;
        this._stage.removeChild(this._sprite);
    }

    
}