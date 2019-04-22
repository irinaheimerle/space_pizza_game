class Astronaut {
    constructor(stage, assetManager) {
        // grab clip for Snake and add to stage canvas
        this._stage = stage;
        this._sprite = assetManager.getSprite("spritesheet");

        this._sprite.gotoAndPlay("generalAnimation");

        this._sprite.x = 0;
        this._sprite.y = 50;

        this._sprite.mover = new Mover(this._sprite, this._stage);
        //stage.addChild(this._sprite);
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
        //this._sprite.gotoAndPlay("generalAnimation");
    }

    updateMe() {
        this._sprite.mover.update();
    }

    //get / set methods
    get sprite() {return this._sprite;}
    

    resetMe() {
        this._sprite.x = 0;
        this._sprite.y = 50;
    }
}