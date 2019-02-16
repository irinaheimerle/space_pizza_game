class Astronaut {
    constructor(stage, assetManager) {
        // grab clip for Snake and add to stage canvas
        this._sprite = assetManager.getSprite("spritesheet");

        this._sprite.play("generalAnimation");

        this._sprite.x = 0;
        this._sprite.y = 100;

        //to-do figure this out so he's not so flippy floppy
        //this._sprite.regX = this._sprite.getBounds().width/2;
        //this._sprite.regY = this._sprite.getBounds().height/2 + 15;
        //this._sprite.setBounds(0, 100, 0, 100);
        
        this._sprite.mover = new Mover(this._sprite, stage);
        stage.addChild(this._sprite);
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
    get sprite() {
        return this._sprite;
    }

    resetMe() {
        
        
    }
}