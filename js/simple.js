var simpleState = {
	// this is used to create variables that are accessible in create and update (state scope) 
	// var is used to create variables that are only used within the current function (local scope) 
	create: function (){
		
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
		
		var randElement = elementAttr[Math.floor(Math.random()*elementAttr.length)];

		for (var i = 0; i < 12; i++) {
			asteroid = asteroids.create(game.world.randomX, game.world.randomY, 'asteroid')
			{
				var planetAttribute = randElement;
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
			asteroid.events.onDragStart.add(this.onDragStart, asteroid);
			asteroid.events.onDragStop.add(this.onDragStop, asteroid);

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
		
		var simpleButton = createButton(100, game.height - 50, 150, 50, "Home");
	    simpleButton.events.onInputUp.add(
			function(){
				game.state.start('createMedium');
			},this
		)
	},
	update: function (){
		
		 while (pendingDestroy.length > 0) {
        pendingDestroy.pop().destroy();
    }
    if (game.physics.arcade.overlap(asteroids, planets, this.planetLoseLife)) {
        text.text = 'Your Planet has ' + planetLife + ' lives left.';
    }

    game.physics.arcade.overlap(asteroids, asteroids, this.addToPendingDestroy);

		
	},
	
	onDragStart: function (){
		this.dragStartLocation = { x: this.x, y: this.y };
		console.log(this.dragStartLocation);
		console.log(this.planetAttribute);
	},
	
	onDragStop: function (){
		this.dragStopLocation = { x: this.x, y: this.y };
		console.log(this.dragStopLocation.y);
		var x = this.dragStopLocation.x + (this.dragStopLocation.x - this.dragStartLocation.x);
		var y = this.dragStopLocation.y + (this.dragStopLocation.y - this.dragStartLocation.y);
		console.log("dx = " + x);
		console.log("dy = " + y);
		game.physics.arcade.moveToXY(this, x, y);
	},
	
	addToPendingDestroy: function (a,b){
		pendingDestroy.push(a);
		pendingDestroy.push(b);
		if(typeof(Storage) !== "undefined")
				{
					if (localStorage.asteroidsdestroyed){
						localStorage.asteroidsdestroyed = Number(localStorage.asteroidsdestroyed)+1;
				} else {
					localStorage.asteroidsdestroyed = 1;
				}		
			}
	},
	
	overlapDestroy: function (a, b) {

		var boundsA = a.getBounds();
		var boundsB = b.getBounds();

		var x = (a.x + b.x) / 2;
		var y = (a.y + b.y) / 2;
	
	},

	planetLoseLife: function(a, b)
	{
		if (planetLife == 0) {
			
			alert("Game Over");
			game.state.restart();
				if(typeof(Storage) !== "undefined")
				{
					if ( localStorage.gameovercount){
						localStorage.gameovercount = Number(localStorage.gameovercount)+1;
				} else {
					localStorage.gameovercount = 1;
				}		
			}
		} else if (planetLife > 0) {
				pendingDestroy.push(a)
				planetLife = planetLife - 1;
		}
		
	},
	
	
	
	
}