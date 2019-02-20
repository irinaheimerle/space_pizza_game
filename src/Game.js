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

    
    //did the astronaut catch any pizza?
    let pizzaCaught = 0;
    
    // game objects
    let assetManager;
    let astronaut;
    let level1;
    let pizza;
    let background;

    //TO ADD BACK INTO THE GAME
    // let openingScreen;
    // let btnPlay;
    //let asteroid;
    
    // event handlers
    function onReady(e) {
        console.log("setting up game");
        e.remove();

        //opening screen set up / btnPlay set up
        // openingScreen = new UserInterface(stage,assetManager, 'screen');

        // btnPlay = assetManager.getSprite("spritesheet");
        // btnPlay.gotoAndStop("playUp");
        // btnPlay.x = -100;
        // btnPlay.y = 100;
        // let hitAreaSprite = assetManager.getSprite("spritesheet");
        // btnPlay.buttonHelper = new createjs.ButtonHelper(btnPlay, "playUp", "playOver", 
        // "playOver", false, hitAreaSprite, "playOver");
        // btnPlay.active = false;
        // stage.addChild(btnPlay);

        // btnPlay.on("click", startGame);

        //make label depedning for first level
        //level1 = new UserInterface(stage, assetManager, "label");
        
        startGame(e);
        
        // // startup the ticker
        createjs.Ticker.framerate = FRAME_RATE;
        createjs.Ticker.on("tick", onTick);

    }

    function startGame(e) {
        //stage.removeChild(openingScreen, btnPlay);
        background = new UserInterface(stage, assetManager, "background");

        // remove click event on background
        e.remove();

        //create astronaut object
        astronaut = new Astronaut(stage, assetManager);
        
        //create new pizza object
        pizza = new Pizza(stage, assetManager, astronaut);

        // current state of keys
        leftKey = false;
        rightKey = false;
        upKey = false;
        downKey = false;

        // setup event listeners for keyboard keys
        document.onkeydown = onKeyDown;
        document.onkeyup = onKeyUp;

        //if(UserInterface.levelStart) stage.removeChild(level1);
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

        //for moving astronaut
        if (leftKey) astronaut.startMe(Mover.LEFT);
        else if (rightKey) astronaut.startMe(Mover.RIGHT);
        else if (upKey) astronaut.startMe(Mover.UP);
        else if (downKey) astronaut.startMe(Mover.DOWN);
        //else stop the astronaut
        else astronaut.stopMe();
        
        //always check update me for both astronaut and pizza
        astronaut.updateMe();
        pizza.updateMe();

        //and always update the stage
        stage.update();
    }

    function main() {
        console.log("intitializing");

        //get reference to canvas
        canvas = document.getElementById("myCanvas");
        //set canvas to as wide/high
        canvas.width = 640;
        canvas.height = 480;

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