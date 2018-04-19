var preloadState = {
	preload : function (){
		//Loading the images
		game.load.image('asteroid', 'images/asteroidNew.png');
		game.load.image('planet', 'images/planetSmall.png');
		game.load.image('bg', 'images/space_0.png');
		game.load.spritesheet('planetSpin', 'images/animPlanet.png', 320, 240, 31);
		//58 on old png 31 on new
		
		//Audio
		game.load.audio('spaceMusic', ['assets/Music/spaceMusic.ogg', 'assets/Music/spaceMusic.mp3'])
		
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