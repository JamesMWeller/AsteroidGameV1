'use strict';
var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, "gameDiv");

//Button Variables
var buttonSimple;
var buttonComplex;

//Group Variables
var asteroids;
var planets;

//Sprite Variables
var asteroid;
var planet;

//Array for destroying asteroids
var pendingDestroy = [];

//Lives and Amount of asteroids
var planetLife = 3;
var amountOfAsteroids = 0;

//Text
var livesLeftText;
var text2;

//Constances for future use in the game
const FIRE = "fire";
const WATER = "water";
const EARTH = "earth";
const AIR = "air";
const ENERGY = "energy";

//Array with the constance in
var elementAttr = [
		"Air",
		"Water",
		"Fire",
		"Energy"
		];
		
//Loading all the used states to the game
game.state.add('preload', preloadState);
game.state.add('createSimple', simpleState);
game.state.add('createComplex', complexState);
game.state.add('createMedium', mediumState);
game.state.add('createOptions',optionState);
game.state.start('preload');






