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
    let pizzaCaught = 0;
    let btnPlay;
    let openingScreen;
    let background;
    let levelComplete;
    let displaySlices;
    let sliceExists = false;

    let gameTimer;
    
    let pizzaMax = 0;
    let firstLevel = false;
    let secondLevel = false;
    let thirdLevel = false;
    let pizzaSlices = [];
    let asteroids = [];
    let currentGameSlices;
    
    // event handlers
    function onReady(e) {
        e.remove();

        //opening screen set up / btnPlay set up
        openingScreen = new UserInterface(stage,assetManager, 'screen');

        //set up the play button 
        btnPlay = assetManager.getSprite("spritesheet");
        btnPlay.gotoAndStop("playUp");
        btnPlay.x = -100;
        btnPlay.y = 100;
        let hitAreaSprite = assetManager.getSprite("spritesheet");
        btnPlay.buttonHelper = new createjs.ButtonHelper(btnPlay, "playUp", "playOver", 
        "playOver", false, hitAreaSprite, "playOver");
        btnPlay.active = false;
        stage.addChild(btnPlay);

        //animation for when a pizza is caught
        displaySlices = assetManager.getSprite("spritesheet");
        displaySlices.x = 400;
        displaySlices.y = -300;

        //create astronaut object
        astronaut = new Astronaut(stage, assetManager);

        //create asteroid objects to use during the entire game
        for (let i=0; i<10; i++) asteroids.push(new Asteroid(stage, assetManager, astronaut));

        btnPlay.on("click", startGame, firstLevel = true);
        
        stage.on("pizzaCaught", onPizzaCaught);
        stage.on("levelOver", onLevelOver);
        stage.on("astronautHit", onLoseLives);
        stage.on("outOfLives", onGameLose);

        // startup the ticker
        createjs.Ticker.framerate = FRAME_RATE;
        createjs.Ticker.on("tick", onTick);
    }

    function startGame() {
        //hide intial game screens / btnPlay
        openingScreen.hideMe();
        //hide level complete screen if it exists
        if(levelComplete) levelComplete.hideMe();
        stage.removeChild(btnPlay);

        //set the background for the game
        background = new UserInterface(stage, assetManager, "background");

        gameTimer = window.setInterval(onAddAsteroid, 500);

        //set up the astronaut
        astronaut.setUpMe();

        //sets the astronaut back to the original x and y values
        if(secondLevel || thirdLevel) astronaut.resetMe();

        //set game specs depending on level
        if(firstLevel) {
            pizzaMax = 4;
            currentGameSlices = pizzaMax - 2;
        } 
        else if(secondLevel) {
            pizzaMax = 6;
            currentGameSlices = pizzaMax - 3;
            // window.setInterval(onAddAsteroid, 300);    
        } else if(thirdLevel) {
            pizzaMax = 8;
            currentGameSlices = pizzaMax - 4;
            // window.setInterval(onAddAsteroid, 500);
        }

        //make pizza slices based on the current game slice (we'll show the rest on the second part of the level)
        for(let x=0; x<currentGameSlices; x++) pizzaSlices.push(new Pizza(stage, assetManager, astronaut));

        //call this for slice set up (x and y values)
        prepareSlices();

        // current state of keys
        leftKey = false;
        rightKey = false;
        upKey = false;
        downKey = false;

        // setup event listeners for keyboard keys
        document.onkeydown = onKeyDown;
        document.onkeyup = onKeyUp;

        //add more slices to the round
        stage.on("stageExit", prepareSlices);
        stage.on("stageExitLeft", astronaut.stopMe);

        //prevent collision detection until after game is completely loaded
        afterLoad = true;
    }

    function prepareSlices() {
        pizzaSlices.forEach((slice) => {
            currentSlice = slice.setUpMe();
            stage.addChild(currentSlice);
        });
    }

    function onAddAsteroid() {
        asteroids.forEach((asteroid) => {
            if(asteroid.active === false) {
                asteroid.active = true;
                asteroid.setUpMe();
                if(firstLevel) asteroid.setSpeed(4);
                else if(secondLevel) asteroid.setSpeed(6);
                else if(thirdLevel) asteroid.setSpeed(8);
                asteroid.fireMe();
            }
        });
    }

    function onPizzaCaught() {
        pizzaCaught++;

        if(sliceExists == false) {
            displaySlices.gotoAndStop(`slice${pizzaCaught}`);
            stage.addChild(displaySlices);
            sliceExists = true;
        } else {
            stage.removeChild(displaySlices);
            displaySlices.gotoAndStop(`slice${pizzaCaught}`);
            stage.addChild(displaySlices);
        }

        if(pizzaCaught === pizzaMax) stage.dispatchEvent("levelOver");
        
    }

    function onLoseLives() {
        astronaut.lives -= 1;

        if(astronaut.lives <= 0) stage.dispatchEvent("outOfLives");
    }

    function onGameLose() {
        console.log("GAME OVER!");
    }

    function onLevelOver() {
        window.clearInterval();
        //set a timeout so the screen popping up isn't so jarring
        setTimeout(() => {
            // background.hideMe();
            if(firstLevel || secondLevel) levelComplete = new UserInterface(stage,assetManager, 'screen', 'levelComplete');
            // else levelComplete = new UserInterface(stage,assetManager, 'screen', 'levelComplete');
            else console.log("GAME OVER!");
            
            btnPlay = assetManager.getSprite("spritesheet");
            btnPlay.gotoAndStop("playUp");
            btnPlay.x = 25;
            btnPlay.y = 250;
            let hitAreaSprite = assetManager.getSprite("spritesheet");
            btnPlay.buttonHelper = new createjs.ButtonHelper(btnPlay, "nextLevel", "nextLevelOver", 
            "nextLevelOver", false, hitAreaSprite, "nextLevelOver");
            btnPlay.active = false;
            stage.addChild(btnPlay);

            if(firstLevel) btnPlay.on("click", resetGame, firstLevel = false, secondLevel = true);
            else if(secondLevel) btnPlay.on("click", resetGame, firstLevel = false, secondLevel = false, thirdLevel = true);
        }, 1500);
    }

    function resetGame() {
        pizzaMax = 0;
        pizzaSlices = [];
        pizzaCaught = 0;
        stage.removeChild(displaySlices);
        startGame();
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

        astronaut.updateMe();
        for(let slice of pizzaSlices) slice.updateMe();
        for(let asteroid of asteroids) if(asteroid.active) asteroid.updateMe();

        //and always update the stage
        stage.update();
    }

    function main() {
        // console.log("intitializing");

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