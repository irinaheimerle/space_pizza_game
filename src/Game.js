// Space Pizza: The Game
// Developed with HTML5 & CreateJS
// Developed by Rin Heimerle

(function() {
    // game variables
    let stage = null;
    let canvas = null;
    let downKey = false;
    let upKey = false;
    let leftKey = false;
    let rightKey = false;
    // frame rate of game
    const FRAME_RATE = 26;
    
    // game objects
    let assetManager;
    let astronaut;
    let asteroid;
    let background;
    let openingScreen;
    
    // event handlers
    function onReady(e) {
        console.log("setting up game");
        e.remove();

        openingScreen = assetManager.getSprite("spritesheet");
        openingScreen.gotoAndPlay("openingScreen");
        openingScreen.x = 0;
        openingScreen.y = 0;
        stage.addChild(openingScreen);
        
        
        // //construct game objects
        // astronaut = new Astronaut(stage, assetManager);
        
        
        // let asteroid = assetManager.getSprite("spritesheet");

        // asteroid.gotoAndStop("asteroidExplosion");

        // asteroid.x = 100;
        // asteroid.y = 100;

        // let asteroid1 = assetManager.getSprite("spritesheet");

        // asteroid1.gotoAndStop("asteroidExplosion");

        // asteroid1.x = 300;
        // asteroid1.y = 300;
        
        // // stage.addChild(asteroid);
        // // stage.addChild(asteroid1);

        // // startup the ticker
        createjs.Ticker.framerate = FRAME_RATE;
        createjs.Ticker.on("tick", onTick);

        // // current state of keys
        // leftKey = false;
        // rightKey = false;
        // upKey = false;
        // downKey = false;

        // // setup event listeners for keyboard keys
        // document.onkeydown = onKeyDown;
        // document.onkeyup = onKeyUp;
    }

    function onKeyDown(e) {
        // // which keystroke is down?
        if (e.keyCode == 37) leftKey = true;
        else if (e.keyCode == 39) rightKey = true;
        else if (e.keyCode == 38) upKey = true;
        else if (e.keyCode == 40) downKey = true;
    }

    function onKeyUp(e) {
        // // which keystroke is up?
        if (e.keyCode == 37) leftKey = false;
        else if (e.keyCode == 39) rightKey = false;
        else if (e.keyCode == 38) upKey = false;
        else if (e.keyCode == 40) downKey = false;
    }

    function onTick() {
        document.getElementById("fps").innerHTML = createjs.Ticker.getMeasuredFPS();

        // if (leftKey) {
        //     astronaut.startMe(Mover.LEFT);
        // } else if (rightKey) {
        //     astronaut.startMe(Mover.RIGHT);
        // } else if (upKey) {
        //     astronaut.startMe(Mover.UP);
        // } else if (downKey) {
        //     astronaut.startMe(Mover.DOWN);
        // } else {
        //     astronaut.stopMe();
        // }

        //astronaut.updateMe();

        stage.update();
    }

    function main() {
        console.log("intitializing");

        //get reference to canvas
        canvas = document.getElementById("myCanvas");
        //set canvas to as wide/high
        canvas.width = 1000;
        canvas.height = 600;

        //create stage object
        stage = new createjs.StageGL(canvas);
        stage.setClearColor("#003366");
        stage.enableMouseOver(10);

        //construct preloader object to load spritesheet and sound assets
        assetManager = new AssetManager(stage);
        stage.on("allAssetsLoaded", onReady);
        //load the assets
        assetManager.loadAssets(manifest);
    }

    main();
})();