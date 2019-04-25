class Astronaut {
    constructor(stage, assetManager) {
        this._stage = stage;
        this._sprite = assetManager.getSprite("spritesheet");

        this._sprite.gotoAndPlay("generalAnimation");

        this._sprite.x = 0;
        this._sprite.y = 275;

        this._sprite.mover = new Mover(this._sprite, this._stage);

        this.lives = 3;
    }

    //get / sets
    get lives() {
        return this._active;
    }

    set lives(value) {
        this._active = value;
    }

    setUpMe() {
        this._stage.addChild(this._sprite);
    }

    startMe(direction) {
        this._sprite.mover.direction = direction;
        if (!this._sprite.mover.moving) {
            this._sprite.gotoAndPlay("generalAnimation");
            this._sprite.mover.startMe();
        }
    }

    stopMe() {
        // stop movement
        this._sprite.mover.stopMe();
    }

    updateMe() {
        this._sprite.mover.update();
    }

    //get / set methods
    get sprite() {return this._sprite;}
    

    resetMe() {
        this._sprite.x = 0;
        this._sprite.y = 275;
    }
}