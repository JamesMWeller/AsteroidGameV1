var optionState = {
	create: function (){
		
		
		var musicButton = createButton(game.width/2, game.height/2, 150, 50, "Music");
			musicButton.events.onInputUp.add(
			function(){
				musicOnOff =! musicOnOff;
				console.log(musicOnOff);
			},this 
		)
		

		
		
		
		//Button to different page
	    var simpleButton = createButton(100, game.height - 50, 150, 50, "Home");
	    simpleButton.events.onInputUp.add(
			function(){
				game.state.start('createMedium');
			},this
		)
	},
	update: function (){
		
	}
}