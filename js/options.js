var optionState = {
	create: function (){
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