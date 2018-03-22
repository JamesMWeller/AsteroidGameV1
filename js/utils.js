'use strict';

//This is the fuction that allows me to create buttons in any state
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
