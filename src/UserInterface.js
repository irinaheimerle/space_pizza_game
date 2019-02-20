class UserInterface {
    constructor(stage, assetManager, type) {
        //this local stage will point to the passed in stage
        this._stage = stage;
        UserInterface.levelStart = false;
        
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
            
        } else if(type == 'label') {
            //this._txtLevel = new createjs.BitmapText("0", assetManager.getSpriteSheet("spritesheet"));
            this._sprite = assetManager.getSprite("spritesheet");
            //TO-DO: swap this out depending on current level
            this._sprite.gotoAndPlay("level1");
            this._sprite.x = 0;
            this._sprite.y = 5;
            this._stage.addChild(this._sprite);
            UserInterface.levelStart = true;
            
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