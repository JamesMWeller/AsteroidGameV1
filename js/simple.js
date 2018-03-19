var simpleState = {
	// this is used to create variables that are accessible in create and update (state scope) 
	// var is used to create variables that are only used within the current function (local scope) 
	create: function (){
		
		planetLife = 3;
		amountOfAsteroids = 0;
		
		game.physics.startSystem(Phaser.Physics.ARCADE);

		asteroids = game.add.physicsGroup(Phaser.Physics.ARCADE);
		planets = game.add.physicsGroup(Phaser.Physics.ARCADE);

		planets.enableBody = true;
		//asteroids.enableBody = true;

		text = game.add.text(16, 16, 'Your Planet has ' + planetLife + ' lives left.', { fill: '#ffffff' });
		
		for (var i = 0; i < 1; i++) {
			planet = planets.create(game.width / 2, game.height / 2, 'planet');
			planet.scale.setTo(0.5, 0.5);
			planet.body.setCircle(172);
			planet.body.collideWorldBounds = true;
			planet.inputEnabled = true;
			planet.anchor.setTo(0.5,0.5);
			planet.input.enableDrag();
			planet.input.useHandCursor = true;
		}
		
		var randElement = elementAttr[Math.floor(Math.random()*elementAttr.length)];
		var i = 0;
		while (i < 12) {
			var dx = game.world.randomX;
			var dy = game.world.randomY;
			
			
			if((dx > (game.width/2)-200 && dx < (game.width/2)+200)&&(dy > (game.height/2)-200 && (dy < game.height/2)+200)){
				
				
			} else {
				
				asteroid = asteroids.create(dx, dy, 'asteroid')
					{
						var planetAttribute = randElement;
						enableBody = true;
						game.physics.enable(asteroid, Phaser.Physics.ARCADE);
					};

			var rand = game.rnd.realInRange(0.5, 2);
			asteroid.scale.setTo(rand, rand);
			var alive = "true";
			asteroid.anchor.setTo(0.5,0.5);
			asteroid.body.setCircle(28);
			asteroid.body.collideWorldBounds = true;
			asteroid.inputEnabled = true;
			asteroid.input.enableDrag();
			asteroid.input.useHandCursor = true;
			asteroid.events.onDragStart.add(this.onDragStart, asteroid);
			asteroid.events.onDragStop.add(this.onDragStop, asteroid);

			i++;
			
			}
			
		}
		
		var graphics = game.add.graphics(0, 0);

    // graphics.lineStyle(2, 0xffd900, 1);

		graphics.beginFill(0xFF0000, 1);
		graphics.drawCircle(game.width/2, game.height/2, 172);
	

		
		
		var simpleButton = createButton(100, game.height - 50, 150, 50, "Home");
	    simpleButton.events.onInputUp.add(
			function(){
				game.state.start('createMedium');
			},this
		)
	},
	update: function (){
		
	while(pendingDestroy.length > 0) {
        pendingDestroy.pop().destroy();
    }
    if (game.physics.arcade.overlap(asteroids, planets, this.planetLoseLife)) {
        text.text = 'Your Planet has ' + planetLife + ' lives left.';
    }

    game.physics.arcade.overlap(asteroids, asteroids, this.addToPendingDestroy);

	/* asteroids.forEach(function(asteroid){ 
	
	 var executed = false;
		return function() {
        if (!executed) {
			amountOfAsteroids = amountOfAsteroids+1;
			console.log(amountOfAsteroids);
            executed = true;
            // do something
		
        }
    }; */
	
	if(asteroids.length === 0) {
		if(planetLife >= 1)
		{
			alert("Congratulations you've save the planet");
			game.state.restart();
		}else{
			console.log("123");
		}
	} else {
		//Still got asteroids
	}
		
	
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
		
		amountOfAsteroids = amountOfAsteroids - 1;

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
		} else {
				pendingDestroy.push(a)
				planetLife = planetLife - 1;
				
		}
		
	},
	
	render: function (){
		
		
		//game.debug.physicsGroup(asteroids);
		//game.debug.physicsGroup(planets);
	},
	
	
}