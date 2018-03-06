'use strict';
function update() {
    var angle = game.physics.arcade.angleToXY(arrow, blueCircle.x, blueCircle.y);
    arrow.rotation = angle;
    game.physics.arcade.moveToObject(arrow, blueCircle, 100);
}