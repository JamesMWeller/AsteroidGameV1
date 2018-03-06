var complexState = {
	create: function (){
		
		this.player = JSON.parse(localStorage.getItem('planet')) || {
			air: 0,
			water: 1,
		};
		
		
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