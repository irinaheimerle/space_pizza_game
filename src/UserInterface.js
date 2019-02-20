class UserInterface {
    constructor(stage, assetManager, type) {
        //this local stage will point to the passed in stage
        this._stage = stage;
        
        //build sprite based on type
        if(type == 'background')  {
            this._sprite = assetManager.getSprite("spritesheet");
            this._sprite.gotoAndPlay("background");
            this._sprite.x = 0;
            this._sprite.y = 0;
            this._stage.addChild(this._sprite);
        } else if(type == 'screen') {
            this._sprite = assetManager.getSprite("spritesheet");
            this._sprite.gotoAndPlay("openingScreen");
            this._sprite.x = 0;
            this._sprite.y = 0;
            this._stage.addChild(this._sprite);
            
        }
    }

    showMe() {
        this._stage.addChild(this._sprite);
    }

    hideMe() {
        this._stage.removeChild(this._sprite);
    }

    //get / set methods
    get sprite() {
        return this._sprite;
    }

    // _onPlay() {
    //     this._stage.dispatchEvent(this._startGame);
    //     return true;
    // }

    

    
}