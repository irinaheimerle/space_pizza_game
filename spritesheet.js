﻿(function(window) {
spritesheet = function() {
	this.initialize();
}
spritesheet._SpriteSheet = new createjs.SpriteSheet({images: ["spritesheet.png"], frames: [[2,2,101,117,0,-161.4,-70.80000000000001],[103,2,101,117,0,-161.4,-69.80000000000001],[204,2,101,117,0,-161.4,-68.80000000000001],[305,2,101,117,0,-161.4,-67.80000000000001],[406,2,101,117,0,-161.4,-66.80000000000001],[507,2,101,117,0,-161.4,-65.80000000000001],[608,2,101,117,0,-161.4,-64.80000000000001],[709,2,101,117,0,-161.4,-63.80000000000001],[810,2,101,117,0,-161.4,-62.80000000000001],[911,2,101,117,0,-161.4,-61.80000000000001],[1012,2,101,117,0,-161.4,-60.80000000000001],[1113,2,101,117,0,-161.4,-59.80000000000001],[1214,2,101,117,0,-161.4,-58.80000000000001],[1315,2,101,117,0,-161.4,-57.80000000000001],[1416,2,101,117,0,-161.4,-56.80000000000001],[1517,2,101,117,0,-161.4,-55.80000000000001],[1618,2,101,117,0,-161.4,-54.80000000000001],[1719,2,101,117,0,-161.4,-53.80000000000001],[1820,2,101,117,0,-161.4,-52.80000000000001],[1921,2,101,117,0,-161.4,-51.80000000000001],[2022,2,101,117,0,-161.4,-50.80000000000001],[2123,2,101,117,0,-161.4,-51.80000000000001],[2224,2,101,117,0,-161.4,-52.80000000000001],[2325,2,101,117,0,-161.4,-53.80000000000001],[2426,2,101,117,0,-161.4,-54.80000000000001],[2527,2,101,117,0,-161.4,-55.80000000000001],[2628,2,101,117,0,-161.4,-56.80000000000001],[2729,2,101,117,0,-161.4,-57.80000000000001],[2830,2,101,117,0,-161.4,-58.80000000000001],[2931,2,101,117,0,-161.4,-59.80000000000001],[3032,2,101,117,0,-161.4,-60.80000000000001],[3133,2,101,117,0,-161.4,-61.80000000000001],[3234,2,101,117,0,-161.4,-62.80000000000001],[3335,2,101,117,0,-161.4,-63.80000000000001],[3436,2,101,117,0,-161.4,-64.80000000000001],[3537,2,101,117,0,-161.4,-65.80000000000001],[3638,2,101,117,0,-161.4,-66.80000000000001],[3739,2,102,118,0,-26.400000000000006,-95.80000000000001],[3841,2,102,118,0,-26.400000000000006,-95.80000000000001],[3943,2,102,118,0,-26.400000000000006,-95.80000000000001],[2,120,102,118,0,-26.400000000000006,-95.80000000000001],[104,120,102,118,0,-26.400000000000006,-95.80000000000001],[206,120,102,118,0,-26.400000000000006,-95.80000000000001],[308,120,102,118,0,-60.400000000000006,-165.8],[410,120,102,118,0,-60.400000000000006,-165.8],[512,120,102,118,0,-60.400000000000006,-165.8],[614,120,102,118,0,-60.400000000000006,-165.8],[716,120,102,118,0,-136.4,-123.80000000000001],[818,120,102,118,0,-136.4,-123.80000000000001],[920,120,102,118,0,-136.4,-123.80000000000001],[1022,120,102,118,0,-136.4,-123.80000000000001],[1124,120,102,118,0,-136.4,-123.80000000000001],[1226,120,102,118,0,-136.4,-123.80000000000001],[1328,120,369,311,0,-154.4,-96.80000000000001],[1697,120,369,311,0,-154.4,-96.80000000000001],[2066,120,369,311,0,-154.4,-96.80000000000001],[2435,120,369,311,0,-154.4,-96.80000000000001],[2804,120,527,362,0,-74.4,-44.80000000000001],[3331,120,527,362,0,-74.4,-44.80000000000001],[2,482,527,362,0,-74.4,-44.80000000000001],[529,482,527,362,0,-74.4,-44.80000000000001],[1056,482,619,409,0,-12.400000000000006,-14.800000000000011],[1675,482,619,409,0,-12.400000000000006,-14.800000000000011],[2294,482,619,409,0,-12.400000000000006,-14.800000000000011],[2913,482,619,409,0,-12.400000000000006,-14.800000000000011],[2,891,715,471,0,32.599999999999994,16.19999999999999],[717,891,715,471,0,32.599999999999994,16.19999999999999],[1432,891,715,471,0,32.599999999999994,16.19999999999999],[2147,891,715,471,0,32.599999999999994,16.19999999999999],[2862,891,849,560,0,103.6,60.19999999999999],[2,1451,849,560,0,103.6,60.19999999999999],[851,1451,849,560,0,103.6,60.19999999999999],[1700,1451,849,560,0,103.6,60.19999999999999],[2549,1451,1081,713,0,201.6,137.2],[2,2164,1081,713,0,201.6,137.2],[1083,2164,1081,713,0,201.6,137.2],[2164,2164,1081,713,0,201.6,137.2],[2,2877,1032,684,0,175.6,121.19999999999999],[1034,2877,1032,684,0,175.6,121.19999999999999],[2066,2877,1032,684,0,175.6,121.19999999999999],[2,3561,1032,684,0,175.6,121.19999999999999],[1034,3561,1032,684,0,175.6,121.19999999999999],[2066,3561,57,57,0,-325.4,-192.8],[2123,3561,82,81,0,-311.4,-179.8],[2205,3561,105,104,0,-298.4,-167.8],[2310,3561,130,129,0,-284.4,-154.8],[2440,3561,153,151,0,-271.4,-141.8],[2593,3561,147,145,0,-288.4,-145.8],[2740,3561,141,140,0,-304.4,-149.8],[2881,3561,135,134,0,-321.4,-153.8],[3016,3561,143,144,0,-330.4,-149.8],[3159,3561,108,109,0,-374.4,-175.8],[3267,3561,73,74,0,-418.4,-201.8],[3340,3561,168,168,0,-397.4,-163.8],[3508,3561,151,152,0,-396.4,-173.8],[3659,3561,135,135,0,-395.4,-184.8],[3794,3561,154,150,0,-376.4,-178.8],[2,4245,1025,581,0,144.6,54.19999999999999],[1027,4245,1025,581,0,144.6,54.19999999999999],[2052,4245,1025,581,0,144.6,54.19999999999999],[2,4826,1025,581,0,144.6,54.19999999999999],[1027,4826,1025,581,0,144.6,54.19999999999999],[2052,4826,1025,581,0,144.6,54.19999999999999],[2,5407,1025,581,0,144.6,54.19999999999999],[1027,5407,1025,581,0,144.6,54.19999999999999],[2052,5407,612,518,0,-37.400000000000006,38.19999999999999],[2664,5407,612,518,0,-37.400000000000006,38.19999999999999],[3276,5407,612,518,0,-37.400000000000006,38.19999999999999],[2,5988,612,518,0,-37.400000000000006,38.19999999999999],[614,5988,612,518,0,-37.400000000000006,38.19999999999999],[1226,5988,296,88,0,-181.4,-190.8],[1522,5988,296,88,0,-181.4,-190.8],[1818,5988,296,88,0,-181.4,-190.8],[2114,5988,296,88,0,-181.4,-190.8],[2410,5988,296,88,0,-181.4,-190.8],[2706,5988,296,88,0,-181.4,-190.8],[3002,5988,296,88,0,-181.4,-190.8],[3298,5988,296,88,0,-181.4,-190.8],[3594,5988,219,219,0,-219.4,-120.80000000000001],[3813,5988,219,219,0,-219.4,-120.80000000000001],[2,6506,219,219,0,-219.4,-120.80000000000001],[221,6506,219,219,0,-219.4,-120.80000000000001],[440,6506,180,181,0,-263.4,-147.8],[620,6506,180,181,0,-263.4,-147.8],[800,6506,180,181,0,-263.4,-147.8],[980,6506,180,181,0,-263.4,-147.8],[1160,6506,529,316,0,-61.400000000000006,-52.80000000000001],[1689,6506,529,316,0,-61.400000000000006,-52.80000000000001],[2218,6506,529,316,0,-61.400000000000006,-52.80000000000001],[2747,6506,529,316,0,-61.400000000000006,-52.80000000000001],[3276,6506,258,257,0,-209.4,-104.80000000000001],[3534,6506,258,257,0,-209.4,-104.80000000000001],[3792,6506,258,257,0,-209.4,-104.80000000000001],[2,6822,258,257,0,-209.4,-104.80000000000001],[260,6822,70,69,0,-286.4,-200.8],[330,6822,70,69,0,-286.4,-200.8],[400,6822,70,69,0,-286.4,-200.8],[470,6822,70,69,0,-286.4,-200.8],[540,6822,960,540,0,139.6,35.19999999999999],[1500,6822,960,540,0,139.6,35.19999999999999],[2460,6822,960,540,0,139.6,35.19999999999999],[2,7362,960,540,0,139.6,35.19999999999999],[962,7362,296,88,0,-189.4,-151.8],[1258,7362,296,88,0,-189.4,-151.8],[1554,7362,296,88,0,-189.4,-151.8],[1850,7362,296,88,0,-189.4,-151.8]],  animations: {generalAnimation:[0,36, true], astronaut:[37,52, true], astronautDeath:[53,81, true], asteroidExplosion:[82,96, true], background:[97,104, true], openingScreen:[105,109, true], playUp:[110,113, true], playOver:[114,117, true], earthish:[118,121, true], mars:[122,125, true], saturn:[126,129, true], moon:[130,133, true], pizza:[134,137, true], spaceship:[138,141, true], level1:[142,145, true]}});
var spritesheet_p = spritesheet.prototype = new createjs.Sprite();
spritesheet_p.Sprite_initialize = spritesheet_p.initialize;
spritesheet_p.initialize = function() {
	this.Sprite_initialize(spritesheet._SpriteSheet);
	this.paused = false;
}
spritesheet_p.generalAnimation = function(){
	this.gotoAndPlay("generalAnimation");
}
spritesheet_p.astronaut = function(){
	this.gotoAndPlay("astronaut");
}
spritesheet_p.astronautDeath = function(){
	this.gotoAndPlay("astronautDeath");
}
spritesheet_p.asteroidExplosion = function(){
	this.gotoAndPlay("asteroidExplosion");
}
spritesheet_p.background = function(){
	this.gotoAndPlay("background");
}
spritesheet_p.openingScreen = function(){
	this.gotoAndPlay("openingScreen");
}
spritesheet_p.playUp = function(){
	this.gotoAndPlay("playUp");
}
spritesheet_p.playOver = function(){
	this.gotoAndPlay("playOver");
}
spritesheet_p.earthish = function(){
	this.gotoAndPlay("earthish");
}
spritesheet_p.mars = function(){
	this.gotoAndPlay("mars");
}
spritesheet_p.saturn = function(){
	this.gotoAndPlay("saturn");
}
spritesheet_p.moon = function(){
	this.gotoAndPlay("moon");
}
spritesheet_p.pizza = function(){
	this.gotoAndPlay("pizza");
}
spritesheet_p.spaceship = function(){
	this.gotoAndPlay("spaceship");
}
spritesheet_p.level1 = function(){
	this.gotoAndPlay("level1");
}
window.spritesheet = spritesheet;
}(window));

