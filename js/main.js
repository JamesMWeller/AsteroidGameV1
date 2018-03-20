'use strict';
var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, "gameDiv");
var blueCircle, arrow, buttonSimple, buttonComplex;

var asteroids;
var planets;
var asteroid;
var planet;
var pendingDestroy = [];
var planetLife = 3;

var amountOfAsteroids = 0;

var text;
var text2;

const FIRE = "fire";
const WATER = "water";
const EARTH = "earth";
const AIR = "air";
const ENERGY = "energy";

var elementAttr = [
		"Air",
		"Water",
		"Fire",
		"Energy"
		];
		
			

const ARROW_GRAPHIC = "arrow_graphic";
game.state.add('preload', preloadState);
game.state.add('createSimple', simpleState);
game.state.add('createComplex', complexState);
game.state.add('createMedium', mediumState);
game.state.add('createOptions',optionState);
game.state.start('preload');






