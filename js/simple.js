var simpleState = {
	// this is used to create variables that are accessible in create and update (state scope) 
	// var is used to create variables that are only used within the current function (local scope) 
	create: function (){

		var simpleButton = createButton(100, game.height - 50, 150, 50, "Home");
	    simpleButton.events.onInputUp.add(
			function(){
				game.state.start('createMedium');
			},this
		)
		game.physics.startSystem(Phaser.Physics.ARCADE);

    asteroids = game.add.physicsGroup(Phaser.Physics.ARCADE);
    planets = game.add.physicsGroup(Phaser.Physics.ARCADE);

    planets.enableBody = true;
    asteroids.enableBody = true;

    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();

    text = game.add.text(16, 16, 'Your Planet has ' + planetLife + ' lives left.', { fill: '#ffffff' });


    for (var i = 0; i < 12; i++) {
        asteroid = asteroids.create(game.world.randomX, game.world.randomY, 'asteroid')
        {
            this.worldType = randomElement();
            enableBody = true;
            game.physics.enable(asteroid, Phaser.Physics.ARCADE);
        };

        var rand = game.rnd.realInRange(1, 2);
        asteroid.scale.setTo(rand, rand);
        asteroid.body.setCircle();
        asteroid.body.collideWorldBounds = true;
        asteroid.inputEnabled = true;
        asteroid.input.enableDrag();
        asteroid.input.useHandCursor = true;
        //asteroid.events.onDragStart.add(onDragStart, asteroid);
        //asteroid.events.onDragStop.add(onDragStop, asteroid);

    }

    for (var i = 0; i < 1; i++) {
        planet = planets.create(game.width / 2, game.height / 2, 'planet');
        planet.scale.setTo(0.3, 0.3);
        planet.body.setCircle(345, 280, 375);
        planet.body.collideWorldBounds = true;
        planet.inputEnabled = true;
        planet.input.enableDrag();
        planet.input.useHandCursor = true;
    }
	},
	update: function (){
		   
	},
	
	randomElement: function(){
		
	},
	
}