class Asteroid {
    constructor(stage, assetManager, astronaut) {
        //starter class (still need to work on)
        this._stage = stage;
        this._astronaut = astronaut;
        this._astronautSprite = astronaut.sprite;

        this._sprite = assetManager.getSprite("spritesheet");
        this._sprite.gotoAndStop("asteroidExplosion");
        this._sprite.x = 100;
        this._sprite.y = 100;

        this._stage.addChild(this._sprite);
    }
}