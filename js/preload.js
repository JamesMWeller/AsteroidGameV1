var preloadState = {
	preload : function (){
		game.load.image('asteroid', 'images/asteroidNew.png');
		game.load.image('planet', 'images/planetNew.png');
	},
		create: function (){
		game.state.start('createMedium');
	}
}