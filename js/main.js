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

	var answerText = [];
	var answerRect = [];
	var questionText;	
	var questionRect;

	var question = [];
	
	var q_index = 1;
	var a_index = 0;
	function create() {
		var styleQ = { font: "25px Verdana", fill: "#9999ff", align: "center" };
		var styleA = { font: "16px Verdana", fill: "#ffffff", align: "left" };

		populateQuestions(question);
		questionRect = new Phaser.Rectangle(20, 20, game.world.width -40, 50);

		for(var i=0; i<4; i++){
			answerRect[i] = new Phaser.Rectangle(i*game.world.width/4 + 15, 450, game.world.width/4 - 30, game.world.height-450);
			switch(i){
				case 0:
					answerText[i] = game.add.text(answerRect[i].x, answerRect[i].y, question[0].a1Text, styleA);
					break;
				case 1:
					answerText[i] = game.add.text(answerRect[i].x, answerRect[i].y, question[0].a2Text, styleA);
					break;
				case 2:
					answerText[i] = game.add.text(answerRect[i].x, answerRect[i].y, question[0].a3Text, styleA);
					break;
				case 3:
					answerText[i] = game.add.text(answerRect[i].x, answerRect[i].y, question[0].a4Text, styleA);
					break;
				}
			answerText[i].wordWrap = true;
			answerText[i].wordWrapWidth = answerRect[i].width;
			answerText[i].inputEnabled = true;

			answerText[i].events.onInputDown.add(down, this);
			answerText[i].events.onInputUp.add(up, this);
		}

		questionText = game.add.text( questionRect.x , questionRect.y, question[0].q, styleQ );
//		text.anchor.setTo( 0.5, 0.0 );
		questionText.wordWrap = true;
		questionText.wordWrapWidth = questionRect.width;

//		answerText[0].events.onInputDown.add(down, this);
//		answerText[0].events.onInputUp.add(up, this);
	}

	function update() {
	}

	function down(item) {

		item.text = "Arg, I've been clicked!"

	}

	function up(item) {

	    item.text = "thanks for clicking!";

	}
	function populateQuestions(question){
		question.push({});
		question[0].q ="Hello, come on in.  You can have a seat right here. Make yourself comfortable.  Is there anything I can get you before we start?";
		question[0].answerNum = 4;
		question[0].a1Text ="No, I'm fine thank you."
		question[0].a1Next =7;
		question[0].a2Text ="Yes, a bottle of water if you don't mind.";
		question[0].a2Next =7;
		question[0].a3Text ="Yes, if you have a Coke that would be great.";
		question[0].a3Next =3;
		question[0].a4Text ="Some Bourbon would actually be great right now.";
		question[0].a4Next =2;
/*
		question.push({});
		question[1].q =
		question[1].answerNum = 4;
		question[1].a1Text =
		question[1].a1Next =
		question[1].a2Text =
		question[1].a2Next =
		question[1].a3Text =
		question[1].a3Next =
		question[1].a4Text =
		question[1].a4Next =

		question.push({});
		question[2].q =
		question[2].answerNum = 4;
		question[2].a1Text =
		question[2].a1Next =
		question[2].a2Text =
		question[2].a2Next =
		question[2].a3Text =
		question[2].a3Next =
		question[2].a4Text =
		question[2].a4Next =

		question.push({});
		question[3].q =
		question[3].answerNum = 4;
		question[3].a1Text =
		question[3].a1Next =
		question[3].a2Text =
		question[3].a2Next =
		question[3].a3Text =
		question[3].a3Next =
		question[3].a4Text =
		question[3].a4Next =

		question.push({});
		question[4].q =
		question[4].answerNum = 4;
		question[4].a1Text =
		question[4].a1Next =
		question[4].a2Text =
		question[4].a2Next =
		question[4].a3Text =
		question[4].a3Next =
		question[4].a4Text =
		question[4].a4Next =

		question.push({});
		question[5].q =
		question[5].answerNum = 4;
		question[5].a1Text =
		question[5].a1Next =
		question[5].a2Text =
		question[5].a2Next =
		question[5].a3Text =
		question[5].a3Next =
		question[5].a4Text =
		question[5].a4Next =

		question.push({});
		question[6].q =
		question[6].answerNum = 4;
		question[6].a1Text =
		question[6].a1Next =
		question[6].a2Text =
		question[6].a2Next =
		question[6].a3Text =
		question[6].a3Next =
		question[6].a4Text =
		question[6].a4Next =

		question.push({});
		question[7].q =
		question[7].answerNum = 4;
		question[7].a1Text =
		question[7].a1Next =
		question[7].a2Text =
		question[7].a2Next =
		question[7].a3Text =
		question[7].a3Next =
		question[7].a4Text =
		question[7].a4Next =

		question.push({});
		question[8].q =
		question[8].answerNum = 4;
		question[8].a1Text =
		question[8].a1Next =
		question[8].a2Text =
		question[8].a2Next =
		question[8].a3Text =
		question[8].a3Next =
		question[8].a4Text =
		question[8].a4Next =

		question.push({});
		question[9].q =
		question[9].answerNum = 4;
		question[9].a1Text =
		question[9].a1Next =
		question[9].a2Text =
		question[9].a2Next =
		question[9].a3Text =
		question[9].a3Next =
		question[9].a4Text =
		question[9].a4Next =

		question.push({});
		question[10].q =
		question[10].answerNum = 4;
		question[10].a1Text =
		question[10].a1Next =
		question[10].a2Text =
		question[10].a2Next =
		question[10].a3Text =
		question[10].a3Next =
		question[10].a4Text =
		question[10].a4Next =

		question.push({});
		question[11].q =
		question[11].answerNum = 4;
		question[11].a1Text =
		question[11].a1Next =
		question[11].a2Text =
		question[11].a2Next =
		question[11].a3Text =
		question[11].a3Next =
		question[11].a4Text =
		question[11].a4Next =

		question.push({});
		question[12].q =
		question[12].answerNum = 4;
		question[12].a1Text =
		question[12].a1Next =
		question[12].a2Text =
		question[12].a2Next =
		question[12].a3Text =
		question[12].a3Next =
		question[12].a4Text =
		question[12].a4Next =

		question.push({});
		question[13].q =
		question[13].answerNum = 4;
		question[13].a1Text =
		question[13].a1Next =
		question[13].a2Text =
		question[13].a2Next =
		question[13].a3Text =
		question[13].a3Next =
		question[13].a4Text =
		question[13].a4Next =

		question.push({});
		question[14].q =
		question[14].answerNum = 4;
		question[14].a1Text =
		question[14].a1Next =
		question[14].a2Text =
		question[14].a2Next =
		question[14].a3Text =
		question[14].a3Next =
		question[14].a4Text =
		question[14].a4Next =

		question.push({});
		question[15].q =
		question[15].answerNum = 4;
		question[15].a1Text =
		question[15].a1Next =
		question[15].a2Text =
		question[15].a2Next =
		question[15].a3Text =
		question[15].a3Next =
		question[15].a4Text =
		question[15].a4Next =

		question.push({});
		question[16].q =
		question[16].answerNum = 4;
		question[16].a1Text =
		question[16].a1Next =
		question[16].a2Text =
		question[16].a2Next =
		question[16].a3Text =
		question[16].a3Next =
		question[16].a4Text =
		question[16].a4Next =

		question.push({});
		question[17].q =
		question[17].answerNum = 4;
		question[17].a1Text =
		question[17].a1Next =
		question[17].a2Text =
		question[17].a2Next =
		question[17].a3Text =
		question[17].a3Next =
		question[17].a4Text =
		question[17].a4Next =

		question.push({});
		question[18].q =
		question[18].answerNum = 4;
		question[18].a1Text =
		question[18].a1Next =
		question[18].a2Text =
		question[18].a2Next =
		question[18].a3Text =
		question[18].a3Next =
		question[18].a4Text =
		question[18].a4Next =

		question.push({});
		question[19].q =
		question[19].answerNum = 4;
		question[19].a1Text =
		question[19].a1Next =
		question[19].a2Text =
		question[19].a2Next =
		question[19].a3Text =
		question[19].a3Next =
		question[19].a4Text =
		question[19].a4Next =

		question.push({});
		question[20].q =
		question[20].answerNum = 4;
		question[20].a1Text =
		question[20].a1Next =
		question[20].a2Text =
		question[20].a2Next =
		question[20].a3Text =
		question[20].a3Next =
		question[20].a4Text =
		question[20].a4Next =

		question.push({});
		question[21].q =
		question[21].answerNum = 4;
		question[21].a1Text =
		question[21].a1Next =
		question[21].a2Text =
		question[21].a2Next =
		question[21].a3Text =
		question[21].a3Next =
		question[21].a4Text =
		question[21].a4Next =

		question.push({});
		question[22].q =
		question[22].answerNum = 4;
		question[22].a1Text =
		question[22].a1Next =
		question[22].a2Text =
		question[22].a2Next =
		question[22].a3Text =
		question[22].a3Next =
		question[22].a4Text =
		question[22].a4Next =

		question.push({});
		question[23].q =
		question[23].answerNum = 4;
		question[23].a1Text =
		question[23].a1Next =
		question[23].a2Text =
		question[23].a2Next =
		question[23].a3Text =
		question[23].a3Next =
		question[23].a4Text =
		question[23].a4Next =

		question.push({});
		question[24].q =
		question[24].answerNum = 4;
		question[24].a1Text =
		question[24].a1Next =
		question[24].a2Text =
		question[24].a2Next =
		question[24].a3Text =
		question[24].a3Next =
		question[24].a4Text =
		question[24].a4Next =

		question.push({});
		question[25].q =
		question[25].answerNum = 4;
		question[25].a1Text =
		question[25].a1Next =
		question[25].a2Text =
		question[25].a2Next =
		question[25].a3Text =
		question[25].a3Next =
		question[25].a4Text =
		question[25].a4Next =

		question.push({});
		question[26].q =
		question[26].answerNum = 4;
		question[26].a1Text =
		question[26].a1Next =
		question[26].a2Text =
		question[26].a2Next =
		question[26].a3Text =
		question[26].a3Next =
		question[26].a4Text =
		question[26].a4Next =

		question.push({});
		question[27].q =
		question[27].answerNum = 4;
		question[27].a1Text =
		question[27].a1Next =
		question[27].a2Text =
		question[27].a2Next =
		question[27].a3Text =
		question[27].a3Next =
		question[27].a4Text =
		question[27].a4Next =

		question.push({});
		question[28].q =
		question[28].answerNum = 4;
		question[28].a1Text =
		question[28].a1Next =
		question[28].a2Text =
		question[28].a2Next =
		question[28].a3Text =
		question[28].a3Next =
		question[28].a4Text =
		question[28].a4Next =

		question.push({});
		question[29].q =
		question[29].answerNum = 4;
		question[29].a1Text =
		question[29].a1Next =
		question[29].a2Text =
		question[29].a2Next =
		question[29].a3Text =
		question[29].a3Next =
		question[29].a4Text =
		question[29].a4Next =

		question.push({});
		question[30].q =
		question[30].answerNum = 4;
		question[30].a1Text =
		question[30].a1Next =
		question[30].a2Text =
		question[30].a2Next =
		question[30].a3Text =
		question[30].a3Next =
		question[30].a4Text =
		question[30].a4Next =

		question.push({});
		question[31].q =
		question[31].answerNum = 4;
		question[31].a1Text =
		question[31].a1Next =
		question[31].a2Text =
		question[31].a2Next =
		question[31].a3Text =
		question[31].a3Next =
		question[31].a4Text =
		question[31].a4Next =

		question.push({});
		question[32].q =
		question[32].answerNum = 4;
		question[32].a1Text =
		question[32].a1Next =
		question[32].a2Text =
		question[32].a2Next =
		question[32].a3Text =
		question[32].a3Next =
		question[32].a4Text =
		question[32].a4Next =

		question.push({});
		question[33].q =
		question[33].answerNum = 4;
		question[33].a1Text =
		question[33].a1Next =
		question[33].a2Text =
		question[33].a2Next =
		question[33].a3Text =
		question[33].a3Next =
		question[33].a4Text =
		question[33].a4Next =

		question.push({});
		question[34].q =
		question[34].answerNum = 4;
		question[34].a1Text =
		question[34].a1Next =
		question[34].a2Text =
		question[34].a2Next =
		question[34].a3Text =
		question[34].a3Next =
		question[34].a4Text =
		question[34].a4Next =

		question.push({});
		question[35].q =
		question[35].answerNum = 4;
		question[35].a1Text =
		question[35].a1Next =
		question[35].a2Text =
		question[35].a2Next =
		question[35].a3Text =
		question[35].a3Next =
		question[35].a4Text =
		question[35].a4Next =

		question.push({});
		question[36].q =
		question[36].answerNum = 4;
		question[36].a1Text =
		question[36].a1Next =
		question[36].a2Text =
		question[36].a2Next =
		question[36].a3Text =
		question[36].a3Next =
		question[36].a4Text =
		question[36].a4Next =

		question.push({});
		question[37].q =
		question[37].answerNum = 4;
		question[37].a1Text =
		question[37].a1Next =
		question[37].a2Text =
		question[37].a2Next =
		question[37].a3Text =
		question[37].a3Next =
		question[37].a4Text =
		question[37].a4Next =

		question.push({});
		question[38].q =
		question[38].answerNum = 4;
		question[38].a1Text =
		question[38].a1Next =
		question[38].a2Text =
		question[38].a2Next =
		question[38].a3Text =
		question[38].a3Next =
		question[38].a4Text =
		question[38].a4Next =

		question.push({});
		question[39].q =
		question[39].answerNum = 4;
		question[39].a1Text =
		question[39].a1Next =
		question[39].a2Text =
		question[39].a2Next =
		question[39].a3Text =
		question[39].a3Next =
		question[39].a4Text =
		question[39].a4Next =

		question.push({});
		question[40].q =
		question[40].answerNum = 4;
		question[40].a1Text =
		question[40].a1Next =
		question[40].a2Text =
		question[40].a2Next =
		question[40].a3Text =
		question[40].a3Next =
		question[40].a4Text =
		question[40].a4Next =

		question.push({});
		question[41].q =
		question[41].answerNum = 4;
		question[41].a1Text =
		question[41].a1Next =
		question[41].a2Text =
		question[41].a2Next =
		question[41].a3Text =
		question[41].a3Next =
		question[41].a4Text =
		question[41].a4Next =

		question.push({});
		question[42].q =
		question[42].answerNum = 4;
		question[42].a1Text =
		question[42].a1Next =
		question[42].a2Text =
		question[42].a2Next =
		question[42].a3Text =
		question[42].a3Next =
		question[42].a4Text =
		question[42].a4Next =
*/
	}
};
