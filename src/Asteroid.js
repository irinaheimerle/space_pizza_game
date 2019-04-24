class Asteroid {
    
    constructor(stage, assetManager, astronaut) {
        // initialization
        this._stage = stage;
        this._astronaut = astronaut;
        this._astronautSprite = astronaut.sprite;
        
        // construct sprite for this object and add to stage
        this._sprite = assetManager.getSprite("spritesheet");
        this._sprite.gotoAndStop("asteroid");

        this._sprite.mover = new MoverDiagonal(this._sprite, stage);
        this._active = false;

        this._hitAstronaut = new createjs.Event("astronautHit", true);

        this._result;
    }

    // ---------------------------------------------- get/set methods
    get active() {
        return this._active;
    }

    set active(value) {
        this._active = value;
    }    
    
    // --------------------------------------------- private methods
    _randomMe(low, high) {
        return Math.round(Math.random() * (high - low)) + low;
    }

    // ---------------------------------------------- public methods
    setUpMe() {
        
        // get bounds of sprite so we can determine width / height
        let dimensions = this._sprite.getBounds();

        // move left
        this._sprite.x = this._stage.canvas.width
        this._sprite.y = this._randomMe(0, 400);

        this._sprite.rotation = this._randomMe(135, 225);

        this._sprite.on("stageExitDiagonal", this._burntAsteroid, this);
    }

    fireMe() {
        this._sprite.mover.startMe();
        this._stage.addChildAt(this._sprite, this._stage.getChildIndex(this._astronautSprite));
    }

    setSpeed(given) {
        this._sprite.mover.speed = given;
    }

    updateMe() {
        if (!this._sprite.mover.moving) return;

        let bounds = Object;

        bounds.x = this._stage.canvas.width;
        bounds.y = this._stage.canvas.width;

        if(this._sprite.x < bounds.x && this._sprite.y < bounds.y) {
            let a = this._sprite.x - this._astronautSprite.x;
            let b = this._sprite.y - this._astronautSprite.y;

            // Get distance with Pythagoras
            let c = Math.sqrt((a * a) + (b * b));

            if (c <= 20) {
                //put sound here
                this._sprite.dispatchEvent(this._hitAstronaut);
                this._burntAsteroid();
            }
        }

        this._sprite.mover.update();
    }
    
    _burntAsteroid() {
        // cleanup event listeners
        this._sprite.removeAllEventListeners();
        // remove displayobject
        this._stage.removeChild(this._sprite);
        // console.log("asteroid burned");

        // put bug back in the pool
        this._active = false;
    }
}