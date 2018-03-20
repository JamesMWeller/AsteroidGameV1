var preloadState = {
	preload : function (){
		game.load.image('asteroid', 'images/asteroidNew.png');
		game.load.image('planet', 'images/planetSmall.png');
		
		game.input.addPointer();
		game.input.addPointer();
		game.input.addPointer();
		game.input.addPointer();	
	},
		create: function (){
		game.state.start('createMedium');
	}
}