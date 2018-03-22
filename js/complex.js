var complexState = {
	create: function (){
		
		//LocalStorage Testing its functionality
		var gameOverCountText = game.add.text(0, 0, "You have Game Over'd " + localStorage.gameovercount + " times", { font: "24px Arial", fill: "#ff0044", align: "center" });
		var asteroidsDestroyed = game.add.text(0, 25, "Asteroids Destroyed: "+ localStorage.asteroidsdestroyed, { font: "24px Arial", fill: "#ff0044", align: "center" });
		
	
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