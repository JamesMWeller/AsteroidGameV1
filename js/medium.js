var mediumState = {
//
	create : function (){
	//
	console.log("Menu Loaded")
	
	var playButton = createButton(game.width/2, game.height/2 - 60, 150, 50, "Play");
	playButton.events.onInputUp.add(
			function(){
				game.state.start('createSimple');
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
	
	//
	},
	
	update: function(){
		
	}
//
}