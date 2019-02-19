class Pizza {
    constructor(stage, assetManager, astronaut) {
        this._stage = stage;
        this._astronaut = astronaut;
        this._astronautSprite = astronaut.sprite;

        this._sprite = assetManager.getSprite("spritesheet");
        this._sprite.gotoAndStop("pizza");
        this._sprite.x = 100;
        this._sprite.y = 100;

        this._stage.addChild(this._sprite);
    }


    updateMe() {
        //TO-DO: add collision detection
        // //let point = this._astronautSprite.globalToLocal(this._sprite.x, this._sprite.y);
        // let pt = this._astronautSprite.globalToLocal(this._sprite.x, this._sprite.y);
        // if (this._astronautSprite.hitTest(pt.x, pt.y)) {
        //     console.log("collision!");
        //     // collision detection with snake
        //     //this._sprite.dispatchEvent(this._eventBugEaten);
        //     //this._onKillMe();
        // }
    }
}