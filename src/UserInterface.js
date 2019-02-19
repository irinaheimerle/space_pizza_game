class UserInterface {
    constructor(stage, assetManager, type) {
        this._stage = stage;
        this._startGame = new createjs.Event(this._onPlay == true);

        // if(type == 'btn') {
        //     this._sprite = assetManager.getSprite("spritesheet");
        //     this._sprite.gotoAndStop("playUp");
        //     this._sprite.x = -100;
        //     this._sprite.y = 100;
        //     let hitAreaSprite = assetManager.getSprite("spritesheet");
        //     this._sprite.buttonHelper = new createjs.ButtonHelper(this._sprite, "playUp", "playOver", 
        //     "playOver", false, hitAreaSprite, "playOver");
        //     this._sprite.active = false;
        //     this._stage.addChild(this._sprite);
            
        //     this._sprite.on("click", this._onPlay, this);
            

        // } 
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
        
        //class variables (access which way we're going here!)
        UserInterface.start = null;
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

    _onPlay() {
        this._stage.dispatchEvent(this._startGame);
        return true;
    }

    

    
}