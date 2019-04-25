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
    }

    //get / sets
    get active() {
        return this._active;
    }

    set active(value) {
        this._active = value;
    }    
    
    // private methods
    _randomize(low, high) {
        return Math.round(Math.random() * (high - low)) + low;
    }

    //public methods
    setUpMe() {
        
        // get bounds of sprite so we can determine width / height
        let dimensions = this._sprite.getBounds();

        // move left
        this._sprite.x = this._stage.canvas.width + 55;
        this._sprite.y = this._randomize(300,400);

        this._sprite.rotation = this._randomize(135, 225);

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

        //check to see the bounds
        let bounds = Object;

        bounds.x = this._stage.canvas.width;
        bounds.y = this._stage.canvas.width;

        if(this._sprite.x < bounds.x && this._sprite.y < bounds.y) {
            //collision detection
            let a = this._sprite.x - this._astronautSprite.x;
            let b = this._sprite.y - this._astronautSprite.y;
            let c = Math.sqrt((Math.pow(a,2)) + (Math.pow(b, 2)));

            if (c <= 17) {
                createjs.Sound.play("explosion");
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
        
        // put asteroid back in the pool
        this._active = false;
    }
}