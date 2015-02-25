window.onload = function() {
	// You might want to start with a template that uses GameStates:
	//     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic

	// You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
	// You will need to change the fourth parameter to "new Phaser.Game()" from
	// 'phaser-example' to 'game', which is the id of the HTML element where we
	// want the game to go.
	// The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
	// You will need to change the paths you pass to "game.load.image()" or any other
	// loading functions to reflect where you are putting the assets.
	// All loading functions will typically all be found inside "preload()".

	"use strict";

	var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );

	function preload() {
		// Load an image and call it 'logo'.
	}

	var testText;
	var textARect;
	function create() {
		
		// Add some text using a CSS style.
		// Center it in X, and position its top 15 pixels from the top of the world.
		var styleQ = { font: "25px Verdana", fill: "#9999ff", align: "center" };
		var styleA = { font: "16px Verdana", fill: "#ffffff", align: "left" };
		textARect = new Phaser.Rectangle(10, 390, 300, 150);
		testText = game.add.text(textARect.x, textARect.y, "This text is a test to see if the text wrapping works.  Does it?", styleA);

		testText.wordWrap = true;
		testText.wordWrapWidth = textARect.width;
		testText.inputEnabled = true;
		testText.buttonMode = true;
		testText.hitArea = textARect;
		var text = game.add.text( game.world.centerX, 15, "Build something awesome.", styleQ );
		text.anchor.setTo( 0.5, 0.0 );
	}

	function update() {
	}
};
