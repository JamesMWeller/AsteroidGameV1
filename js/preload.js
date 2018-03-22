var preloadState = {
	preload : function (){
		//Loading the images
		game.load.image('asteroid', 'images/asteroidNew.png');
		game.load.image('planet', 'images/planetSmall.png');
		
		//Adding extra pointers for multi touch capability
		game.input.addPointer();
		game.input.addPointer();
		game.input.addPointer();
		game.input.addPointer();	
	},
		create: function (){
		game.state.start('createMedium');
	}
}