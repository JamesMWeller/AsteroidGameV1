'use strict';
// utils do not use state - this is just a separate JS file for handy functions that can be referenced by any state
function createButton(x,y,w,h,label){
       var btnTexture = game.add.graphics(0, 0);
          btnTexture.beginFill(0xCCCCCC, 1)
          btnTexture.drawRoundedRect(0, 4, w, h, 5)
          btnTexture.endFill()
         var btnImage =  btnTexture.generateTexture();
         btnTexture.destroy();


      var btnTextureHover = game.add.graphics(0, 0);
          btnTextureHover.beginFill(0xFFFFFF, 1);
          btnTextureHover.drawRoundedRect(0, 4, w, h, 5);
          btnTextureHover.endFill();
          var btnHoverImage = btnTextureHover.generateTexture();
          btnTextureHover.destroy();
      var btnText = game.add.text(0, 0, label, {font: "30px Arial", fill: "#333333"});
        btnText.anchor.setTo(0.5);

       var btn = game.add.image(x, y, btnImage);
        btn.addChild(btnText);
        btn.anchor.setTo(0.5, 0.5);

        btn.inputEnabled = true;
        btn.input.useHandCursor = true;
        btn.events.onInputOver.add(function() {
          		btn.setTexture(btnHoverImage);
          } , this);
        btn.events.onInputOut.add(function() {
          		btn.setTexture(btnImage);
          } , this);
        return btn
}
function createOrb(colour) {
    var sprite, outlineSprite;
    var circle = game.add.graphics(0, 0);
    circle.beginFill(colour, 1);
    circle.drawCircle(0, 0, 50);
    sprite = game.add.sprite(25, 25, circle.generateTexture());
    circle.destroy();
    sprite.anchor.set(0.5);
    game.physics.enable(sprite, Phaser.Physics.ARCADE);
    sprite.body.collideWorldBounds = true;
    sprite.body.bounce.set(1);
    var outline = game.add.graphics(0, 0);
    outline.lineStyle(2, colour, 1);
    outline.drawCircle(0, 0, 200);
    outlineSprite = game.add.sprite(0, 0, outline.generateTexture());
    outline.destroy();
    outlineSprite.anchor.set(0.5);
    sprite.addChild(outlineSprite);
    return sprite;
}