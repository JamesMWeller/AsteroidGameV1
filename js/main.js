'use strict';
var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, "gameDiv");

 //* window.devicePixel

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

//Games won
var gamesWon = 0;

//Audio
var spaceMusic;
var musicOnOff = false;
var musicIsPlaying = false;

//Text
var livesLeftText;
var text2;

var bgX = game.rnd.realInRange(-1,1);
var	bgY = game.rnd.realInRange(-1,1);
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






