var mediumState = {
	//Main Menu
	
	create : function (){

	//Mulitple buttons
	var playButton = createButton(game.width/2, game.height/2 - 60, 150, 50, "Play");
	playButton.events.onInputUp.add(
			function(){
				game.state.start('createSimple');
				ga('myGame', 'startGame');
	},this)
	
	var collectionButton = createButton(game.width/2, game.height/2 , 150, 50, "Collection");
	    collectionButton.events.onInputUp.add(
			function(){
				game.state.start('createComplex');
	},this)
	
	var optionsButton = createButton(game.width/2, game.height/2 + 60, 150, 50, "Options");
	    optionsButton.events.onInputUp.add(
			function(){
				game.state.start('createOptions');
	},this)

	var animPlanet = game.add.sprite(game.width/2 , game.height/2, 'planetSpin');
	var spin = animPlanet.animations.add('spin');
    animPlanet.animations.play('spin', 30, true);
	animPlanet.anchor.setTo(0.5,0.5);
	game.world.sendToBack(animPlanet);
	animPlanet.scale.setTo(2, 2);
	

	},
	
	update: function(){
		
	}

}