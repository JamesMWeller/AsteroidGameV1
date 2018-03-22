var simpleState = {
	
	create: function (){
		
		//Variables set to...from main.js
		planetLife = 3;
		amountOfAsteroids = 0;
		
		//ARCADE physics system implmented
		game.physics.startSystem(Phaser.Physics.ARCADE);

		//ARCADE physics applied to groups
		asteroids = game.add.physicsGroup(Phaser.Physics.ARCADE);
		planets = game.add.physicsGroup(Phaser.Physics.ARCADE);

		//Body enabled on groups
		planets.enableBody = true;
		asteroids.enableBody = true;

		//Creating the Lives left in top left, Using planetLife
		livesLeftText = game.add.text(16, 16, 'Your Planet has ' + planetLife + ' lives left.', { fill: '#ffffff' });
		
		//For Loop, does once to create planet
		for (var i = 0; i < 1; i++) {
			//Creates object using the variable planet
			planet = planets.create(game.width / 2, game.height / 2, 'planet');
			planet.scale.setTo(0.5, 0.5);
			planet.body.setCircle(172);
			planet.body.collideWorldBounds = true;
			planet.inputEnabled = true;
			planet.anchor.setTo(0.5,0.5);
			planet.input.enableDrag();
			planet.input.useHandCursor = true;
		}
		//Variable Created to randomise future attributes for asteroid distribution
		var randElement = elementAttr[Math.floor(Math.random()*elementAttr.length)];
		
		//While statement for creating the asteroids
		var i = 0;
		while (i < 12) {
			//variables created for randon X and Y 
			var dx = game.world.randomX;
			var dy = game.world.randomY;
			
			//If statement that makes sure nothing spawns in the parameters set 
			if((dx > (game.width/2)-200 && dx < (game.width/2)+200)&&(dy > (game.height/2)-200 && (dy < game.height/2)+200)){
				
				//Illegal Spawn zones
				
			} else {
				
				//Create Asteroids In random positions using the preloaded images in preload name 'asteroid'
				asteroid = asteroids.create(dx, dy, 'asteroid')
					{
						//This is supposed to give attributes to asteroids, but doesnt work at the moment
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

			//this adds 1 to the i variable
			i++;
			
			}
			
		}
		
		/* var graphics = game.add.graphics(0, 0);

		graphics.lineStyle(2, 0xffd900, 1);

		graphics.beginFill(0xFF0000, 1);
		graphics.drawCircle(game.width/2, game.height/2, 172); */
	

		
		//Creates button to move to different state
		var simpleButton = createButton(100, game.height - 50, 150, 50, "Home");
	    simpleButton.events.onInputUp.add(
			function(){
				game.state.start('createMedium');
			},this
		)
	},
	
	
	update: function (){
		
	//Pop things in the pendingDestroy array created in main
	while(pendingDestroy.length > 0) {
        pendingDestroy.pop().destroy();
    }
	
	//when an asteroid and planet overlap planetLoseLife function runs and the life text is updated
    if (game.physics.arcade.overlap(asteroids, planets, this.planetLoseLife)) {
        livesLeftText.text = 'Your Planet has ' + planetLife + ' lives left.';
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
	//this checks if there are any asteroids still in the asteroid group and if not restarts the state
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
	//When the drag starts the x and y position is recorded for later use
	onDragStart: function (){
		this.dragStartLocation = { x: this.x, y: this.y };
		console.log(this.dragStartLocation);
		console.log(this.planetAttribute);
	},
	
	//When drag released a new x and y is created from both the start and finish position to calculate the travel
	onDragStop: function (){
		this.dragStopLocation = { x: this.x, y: this.y };
		console.log(this.dragStopLocation.y);
		var x = this.dragStopLocation.x + (this.dragStopLocation.x - this.dragStartLocation.x);
		var y = this.dragStopLocation.y + (this.dragStopLocation.y - this.dragStartLocation.y);
		console.log("dx = " + x);
		console.log("dy = " + y);
		game.physics.arcade.moveToXY(this, x, y);
	},
	
	//To destroy the colliding asteroid I push both the asteroids to the pendingDestroy
	addToPendingDestroy: function (a,b){
		pendingDestroy.push(a);
		pendingDestroy.push(b);
		
		//This creates localStorage names for future use
		if(typeof(Storage) !== "undefined")
				{
					if (localStorage.asteroidsdestroyed){
						localStorage.asteroidsdestroyed = Number(localStorage.asteroidsdestroyed)+1;
				} else {
					localStorage.asteroidsdestroyed = 1;
				}		
			}
	},
	
	//This grabs the location of two asteroids and gives a new position
	overlapDestroy: function (a, b) {

		var boundsA = a.getBounds();
		var boundsB = b.getBounds();
		
		amountOfAsteroids = amountOfAsteroids - 1;

		var x = (a.x + b.x) / 2;
		var y = (a.y + b.y) / 2;
	
	},

	//Planet loses life when an asteroid hits it
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