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
	
	var q_index = 0;
	var a_index = 0;

	var points = 0;
	function create() {
		var styleQ = { font: "25px Verdana", fill: "#9999ff", align: "center" };
		var styleA = { font: "16px Verdana", fill: "#ffffff", align: "left" };

		populateQuestions(question);
		questionRect = new Phaser.Rectangle(20, 20, game.world.width -40, 50);

		for(var i=0; i<4; i++){
			answerRect[i] = new Phaser.Rectangle(i*game.world.width/4 + 15, 450, game.world.width/4 - 30, game.world.height-450);

			answerText[i] = game.add.text(answerRect[i].x, answerRect[i].y, question[0].text[i], styleA);
			answerText[i].name = "answer "+i;
			answerText[i].wordWrap = true;
			answerText[i].wordWrapWidth = answerRect[i].width;
			answerText[i].inputEnabled = true;

			answerText[i].events.onInputDown.add(down, this);
			answerText[i].events.onInputUp.add(up, this);
		}

		questionText = game.add.text( questionRect.x , questionRect.y, question[0].q, styleQ );
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
		for(var i=0; i<question[q_index].answerNum;i++){
			if(item.name === "answer " + i){
				points += question[q_index].points[i];
				break;
			}
		}
//	    item.text = "thanks for clicking!";

	}
	function populateQuestions(question){
		question.push({});
		question[0].text = new Array();
		question[0].next = new Array();
		question[0].points = new Array();

		question[0].q ="Hello, come on in.  You can have a seat right here. Make yourself comfortable.  Is there anything I can get you before we start?";
		question[0].answerNum = 4;
		question[0].text[0] = "No, I'm fine thank you."
		question[0].next[0] = 7;
		question[0].points[0] = 0;
		question[0].text[1] = "Yes, a bottle of water if you don't mind.";
		question[0].next[1] = 7;
		question[0].points[1] = 0;
		question[0].text[2] = "Yes, if you have a Coke that would be great.";
		question[0].next[2] = 3;
		question[0].points[2] = 0;
		question[0].text[3] = "Some Bourbon would actually be great right now.";
		question[0].next[3] = 2;
		question[0].points[3] = 0;
/*
		question.push({});
		question[1].q =
		question[1].answerNum = 4;
		question[1].text[j] = 
		question[1].next[j] = 
		question[1].points[j] = 0;
		question[1].text[j] = 
		question[1].next[j] = 
		question[1].points[j] = 0;
		question[1].text[j] = 
		question[1].next[j] = 
		question[1].points[j] = 0;
		question[1].text[j] = 
		question[1].next[j] = 
		question[1].points[j] = 0;

		question.push({});
		question[2].q =
		question[2].answerNum = 4;
		question[2].text[j] = 
		question[2].next[j] = 
		question[2].points[j] = 0;
		question[2].text[j] = 
		question[2].next[j] = 
		question[2].points[j] = 0;
		question[2].text[j] = 
		question[2].next[j] = 
		question[2].points[j] = 0;
		question[2].text[j] = 
		question[2].next[j] = 
		question[2].points[j] = 0;

		question.push({});
		question[3].q =
		question[3].answerNum = 4;
		question[3].text[j] = 
		question[3].next[j] = 
		question[3].points[j] = 0;
		question[3].text[j] = 
		question[3].next[j] = 
		question[3].points[j] = 0;
		question[3].text[j] = 
		question[3].next[j] = 
		question[3].points[j] = 0;
		question[3].text[j] = 
		question[3].next[j] = 
		question[3].points[j] = 0;

		question.push({});
		question[4].q =
		question[4].answerNum = 4;
		question[4].text[j] = 
		question[4].next[j] = 
		question[4].points[j] = 0;
		question[4].text[j] = 
		question[4].next[j] = 
		question[4].points[j] = 0;
		question[4].text[j] = 
		question[4].next[j] = 
		question[4].points[j] = 0;
		question[4].text[j] = 
		question[4].next[j] = 
		question[4].points[j] = 0;

		question.push({});
		question[5].q =
		question[5].answerNum = 4;
		question[5].text[j] = 
		question[5].next[j] = 
		question[5].points[j] = 0;
		question[5].text[j] = 
		question[5].next[j] = 
		question[5].points[j] = 0;
		question[5].text[j] = 
		question[5].next[j] = 
		question[5].points[j] = 0;
		question[5].text[j] = 
		question[5].next[j] = 
		question[5].points[j] = 0;

		question.push({});
		question[6].q =
		question[6].answerNum = 4;
		question[6].text[j] = 
		question[6].next[j] = 
		question[6].points[j] = 0;
		question[6].text[j] = 
		question[6].next[j] = 
		question[6].points[j] = 0;
		question[6].text[j] = 
		question[6].next[j] = 
		question[6].points[j] = 0;
		question[6].text[j] = 
		question[6].next[j] = 
		question[6].points[j] = 0;

		question.push({});
		question[7].q =
		question[7].answerNum = 4;
		question[7].text[j] = 
		question[7].next[j] = 
		question[7].points[j] = 0;
		question[7].text[j] = 
		question[7].next[j] = 
		question[7].points[j] = 0;
		question[7].text[j] = 
		question[7].next[j] = 
		question[7].points[j] = 0;
		question[7].text[j] = 
		question[7].next[j] = 
		question[7].points[j] = 0;

		question.push({});
		question[8].q =
		question[8].answerNum = 4;
		question[8].text[j] = 
		question[8].next[j] = 
		question[8].points[j] = 0;
		question[8].text[j] = 
		question[8].next[j] = 
		question[8].points[j] = 0;
		question[8].text[j] = 
		question[8].next[j] = 
		question[8].points[j] = 0;
		question[8].text[j] = 
		question[8].next[j] = 
		question[8].points[j] = 0;

		question.push({});
		question[9].q =
		question[9].answerNum = 4;
		question[9].text[j] = 
		question[9].next[j] = 
		question[9].points[j] = 0;
		question[9].text[j] = 
		question[9].next[j] = 
		question[9].points[j] = 0;
		question[9].text[j] = 
		question[9].next[j] = 
		question[9].points[j] = 0;
		question[9].text[j] = 
		question[9].next[j] = 
		question[9].points[j] = 0;

		question.push({});
		question[10].q =
		question[10].answerNum = 4;
		question[10].text[j] = 
		question[10].next[j] = 
		question[10].points[j] = 0;
		question[10].text[j] = 
		question[10].next[j] = 
		question[10].points[j] = 0;
		question[10].text[j] = 
		question[10].next[j] = 
		question[10].points[j] = 0;
		question[10].text[j] = 
		question[10].next[j] = 
		question[10].points[j] = 0;

		question.push({});
		question[11].q =
		question[11].answerNum = 4;
		question[11].text[j] = 
		question[11].next[j] = 
		question[11].points[j] = 0;
		question[11].text[j] = 
		question[11].next[j] = 
		question[11].points[j] = 0;
		question[11].text[j] = 
		question[11].next[j] = 
		question[11].points[j] = 0;
		question[11].text[j] = 
		question[11].next[j] = 
		question[11].points[j] = 0;

		question.push({});
		question[12].q =
		question[12].answerNum = 4;
		question[12].text[j] = 
		question[12].next[j] = 
		question[12].points[j] = 0;
		question[12].text[j] = 
		question[12].next[j] = 
		question[12].points[j] = 0;
		question[12].text[j] = 
		question[12].next[j] = 
		question[12].points[j] = 0;
		question[12].text[j] = 
		question[12].next[j] = 
		question[12].points[j] = 0;

		question.push({});
		question[13].q =
		question[13].answerNum = 4;
		question[13].text[j] = 
		question[13].next[j] = 
		question[13].points[j] = 0;
		question[13].text[j] = 
		question[13].next[j] = 
		question[13].points[j] = 0;
		question[13].text[j] = 
		question[13].next[j] = 
		question[13].points[j] = 0;
		question[13].text[j] = 
		question[13].next[j] = 
		question[13].points[j] = 0;

		question.push({});
		question[14].q =
		question[14].answerNum = 4;
		question[14].text[j] = 
		question[14].next[j] = 
		question[14].points[j] = 0;
		question[14].text[j] = 
		question[14].next[j] = 
		question[14].points[j] = 0;
		question[14].text[j] = 
		question[14].next[j] = 
		question[14].points[j] = 0;
		question[14].text[j] = 
		question[14].next[j] = 
		question[14].points[j] = 0;

		question.push({});
		question[15].q =
		question[15].answerNum = 4;
		question[15].text[j] = 
		question[15].next[j] = 
		question[15].points[j] = 0;
		question[15].text[j] = 
		question[15].next[j] = 
		question[15].points[j] = 0;
		question[15].text[j] = 
		question[15].next[j] = 
		question[15].points[j] = 0;
		question[15].text[j] = 
		question[15].next[j] = 
		question[15].points[j] = 0;

		question.push({});
		question[16].q =
		question[16].answerNum = 4;
		question[16].text[j] = 
		question[16].next[j] = 
		question[16].points[j] = 0;
		question[16].text[j] = 
		question[16].next[j] = 
		question[16].points[j] = 0;
		question[16].text[j] = 
		question[16].next[j] = 
		question[16].points[j] = 0;
		question[16].text[j] = 
		question[16].next[j] = 
		question[16].points[j] = 0;

		question.push({});
		question[17].q =
		question[17].answerNum = 4;
		question[17].text[j] = 
		question[17].next[j] = 
		question[17].points[j] = 0;
		question[17].text[j] = 
		question[17].next[j] = 
		question[17].points[j] = 0;
		question[17].text[j] = 
		question[17].next[j] = 
		question[17].points[j] = 0;
		question[17].text[j] = 
		question[17].next[j] = 
		question[17].points[j] = 0;

		question.push({});
		question[18].q =
		question[18].answerNum = 4;
		question[18].text[j] = 
		question[18].next[j] = 
		question[18].points[j] = 0;
		question[18].text[j] = 
		question[18].next[j] = 
		question[18].points[j] = 0;
		question[18].text[j] = 
		question[18].next[j] = 
		question[18].points[j] = 0;
		question[18].text[j] = 
		question[18].next[j] = 
		question[18].points[j] = 0;

		question.push({});
		question[19].q =
		question[19].answerNum = 4;
		question[19].text[j] = 
		question[19].next[j] = 
		question[19].points[j] = 0;
		question[19].text[j] = 
		question[19].next[j] = 
		question[19].points[j] = 0;
		question[19].text[j] = 
		question[19].next[j] = 
		question[19].points[j] = 0;
		question[19].text[j] = 
		question[19].next[j] = 
		question[19].points[j] = 0;

		question.push({});
		question[20].q =
		question[20].answerNum = 4;
		question[20].text[j] = 
		question[20].next[j] = 
		question[20].points[j] = 0;
		question[20].text[j] = 
		question[20].next[j] = 
		question[20].points[j] = 0;
		question[20].text[j] = 
		question[20].next[j] = 
		question[20].points[j] = 0;
		question[20].text[j] = 
		question[20].next[j] = 
		question[20].points[j] = 0;

		question.push({});
		question[21].q =
		question[21].answerNum = 4;
		question[21].text[j] = 
		question[21].next[j] = 
		question[21].points[j] = 0;
		question[21].text[j] = 
		question[21].next[j] = 
		question[21].points[j] = 0;
		question[21].text[j] = 
		question[21].next[j] = 
		question[21].points[j] = 0;
		question[21].text[j] = 
		question[21].next[j] = 
		question[21].points[j] = 0;

		question.push({});
		question[22].q =
		question[22].answerNum = 4;
		question[22].text[j] = 
		question[22].next[j] = 
		question[22].points[j] = 0;
		question[22].text[j] = 
		question[22].next[j] = 
		question[22].points[j] = 0;
		question[22].text[j] = 
		question[22].next[j] = 
		question[22].points[j] = 0;
		question[22].text[j] = 
		question[22].next[j] = 
		question[22].points[j] = 0;

		question.push({});
		question[23].q =
		question[23].answerNum = 4;
		question[23].text[j] = 
		question[23].next[j] = 
		question[23].points[j] = 0;
		question[23].text[j] = 
		question[23].next[j] = 
		question[23].points[j] = 0;
		question[23].text[j] = 
		question[23].next[j] = 
		question[23].points[j] = 0;
		question[23].text[j] = 
		question[23].next[j] = 
		question[23].points[j] = 0;

		question.push({});
		question[24].q =
		question[24].answerNum = 4;
		question[24].text[j] = 
		question[24].next[j] = 
		question[24].points[j] = 0;
		question[24].text[j] = 
		question[24].next[j] = 
		question[24].points[j] = 0;
		question[24].text[j] = 
		question[24].next[j] = 
		question[24].points[j] = 0;
		question[24].text[j] = 
		question[24].next[j] = 
		question[24].points[j] = 0;

		question.push({});
		question[25].q =
		question[25].answerNum = 4;
		question[25].text[j] = 
		question[25].next[j] = 
		question[25].points[j] = 0;
		question[25].text[j] = 
		question[25].next[j] = 
		question[25].points[j] = 0;
		question[25].text[j] = 
		question[25].next[j] = 
		question[25].points[j] = 0;
		question[25].text[j] = 
		question[25].next[j] = 
		question[25].points[j] = 0;

		question.push({});
		question[26].q =
		question[26].answerNum = 4;
		question[26].text[j] = 
		question[26].next[j] = 
		question[26].points[j] = 0;
		question[26].text[j] = 
		question[26].next[j] = 
		question[26].points[j] = 0;
		question[26].text[j] = 
		question[26].next[j] = 
		question[26].points[j] = 0;
		question[26].text[j] = 
		question[26].next[j] = 
		question[26].points[j] = 0;

		question.push({});
		question[27].q =
		question[27].answerNum = 4;
		question[27].text[j] = 
		question[27].next[j] = 
		question[27].points[j] = 0;
		question[27].text[j] = 
		question[27].next[j] = 
		question[27].points[j] = 0;
		question[27].text[j] = 
		question[27].next[j] = 
		question[27].points[j] = 0;
		question[27].text[j] = 
		question[27].next[j] = 
		question[27].points[j] = 0;

		question.push({});
		question[28].q =
		question[28].answerNum = 4;
		question[28].text[j] = 
		question[28].next[j] = 
		question[28].points[j] = 0;
		question[28].text[j] = 
		question[28].next[j] = 
		question[28].points[j] = 0;
		question[28].text[j] = 
		question[28].next[j] = 
		question[28].points[j] = 0;
		question[28].text[j] = 
		question[28].next[j] = 
		question[28].points[j] = 0;

		question.push({});
		question[29].q =
		question[29].answerNum = 4;
		question[29].text[j] = 
		question[29].next[j] = 
		question[29].points[j] = 0;
		question[29].text[j] = 
		question[29].next[j] = 
		question[29].points[j] = 0;
		question[29].text[j] = 
		question[29].next[j] = 
		question[29].points[j] = 0;
		question[29].text[j] = 
		question[29].next[j] = 
		question[29].points[j] = 0;

		question.push({});
		question[30].q =
		question[30].answerNum = 4;
		question[30].text[j] = 
		question[30].next[j] = 
		question[30].points[j] = 0;
		question[30].text[j] = 
		question[30].next[j] = 
		question[30].points[j] = 0;
		question[30].text[j] = 
		question[30].next[j] = 
		question[30].points[j] = 0;
		question[30].text[j] = 
		question[30].next[j] = 
		question[30].points[j] = 0;

		question.push({});
		question[31].q =
		question[31].answerNum = 4;
		question[31].text[j] = 
		question[31].next[j] = 
		question[31].points[j] = 0;
		question[31].text[j] = 
		question[31].next[j] = 
		question[31].points[j] = 0;
		question[31].text[j] = 
		question[31].next[j] = 
		question[31].points[j] = 0;
		question[31].text[j] = 
		question[31].next[j] = 
		question[31].points[j] = 0;

		question.push({});
		question[32].q =
		question[32].answerNum = 4;
		question[32].text[j] = 
		question[32].next[j] = 
		question[32].points[j] = 0;
		question[32].text[j] = 
		question[32].next[j] = 
		question[32].points[j] = 0;
		question[32].text[j] = 
		question[32].next[j] = 
		question[32].points[j] = 0;
		question[32].text[j] = 
		question[32].next[j] = 
		question[32].points[j] = 0;

		question.push({});
		question[33].q =
		question[33].answerNum = 4;
		question[33].text[j] = 
		question[33].next[j] = 
		question[33].points[j] = 0;
		question[33].text[j] = 
		question[33].next[j] = 
		question[33].points[j] = 0;
		question[33].text[j] = 
		question[33].next[j] = 
		question[33].points[j] = 0;
		question[33].text[j] = 
		question[33].next[j] = 
		question[33].points[j] = 0;

		question.push({});
		question[34].q =
		question[34].answerNum = 4;
		question[34].text[j] = 
		question[34].next[j] = 
		question[34].points[j] = 0;
		question[34].text[j] = 
		question[34].next[j] = 
		question[34].points[j] = 0;
		question[34].text[j] = 
		question[34].next[j] = 
		question[34].points[j] = 0;
		question[34].text[j] = 
		question[34].next[j] = 
		question[34].points[j] = 0;

		question.push({});
		question[35].q =
		question[35].answerNum = 4;
		question[35].text[j] = 
		question[35].next[j] = 
		question[35].points[j] = 0;
		question[35].text[j] = 
		question[35].next[j] = 
		question[35].points[j] = 0;
		question[35].text[j] = 
		question[35].next[j] = 
		question[35].points[j] = 0;
		question[35].text[j] = 
		question[35].next[j] = 
		question[35].points[j] = 0;

		question.push({});
		question[36].q =
		question[36].answerNum = 4;
		question[36].text[j] = 
		question[36].next[j] = 
		question[36].points[j] = 0;
		question[36].text[j] = 
		question[36].next[j] = 
		question[36].points[j] = 0;
		question[36].text[j] = 
		question[36].next[j] = 
		question[36].points[j] = 0;
		question[36].text[j] = 
		question[36].next[j] = 
		question[36].points[j] = 0;

		question.push({});
		question[37].q =
		question[37].answerNum = 4;
		question[37].text[j] = 
		question[37].next[j] = 
		question[37].points[j] = 0;
		question[37].text[j] = 
		question[37].next[j] = 
		question[37].points[j] = 0;
		question[37].text[j] = 
		question[37].next[j] = 
		question[37].points[j] = 0;
		question[37].text[j] = 
		question[37].next[j] = 
		question[37].points[j] = 0;

		question.push({});
		question[38].q =
		question[38].answerNum = 4;
		question[38].text[j] = 
		question[38].next[j] = 
		question[38].points[j] = 0;
		question[38].text[j] = 
		question[38].next[j] = 
		question[38].points[j] = 0;
		question[38].text[j] = 
		question[38].next[j] = 
		question[38].points[j] = 0;
		question[38].text[j] = 
		question[38].next[j] = 
		question[38].points[j] = 0;

		question.push({});
		question[39].q =
		question[39].answerNum = 4;
		question[39].text[j] = 
		question[39].next[j] = 
		question[39].points[j] = 0;
		question[39].text[j] = 
		question[39].next[j] = 
		question[39].points[j] = 0;
		question[39].text[j] = 
		question[39].next[j] = 
		question[39].points[j] = 0;
		question[39].text[j] = 
		question[39].next[j] = 
		question[39].points[j] = 0;

		question.push({});
		question[40].q =
		question[40].answerNum = 4;
		question[40].text[j] = 
		question[40].next[j] = 
		question[40].points[j] = 0;
		question[40].text[j] = 
		question[40].next[j] = 
		question[40].points[j] = 0;
		question[40].text[j] = 
		question[40].next[j] = 
		question[40].points[j] = 0;
		question[40].text[j] = 
		question[40].next[j] = 
		question[40].points[j] = 0;

		question.push({});
		question[41].q =
		question[41].answerNum = 4;
		question[41].text[j] = 
		question[41].next[j] = 
		question[41].points[j] = 0;
		question[41].text[j] = 
		question[41].next[j] = 
		question[41].points[j] = 0;
		question[41].text[j] = 
		question[41].next[j] = 
		question[41].points[j] = 0;
		question[41].text[j] = 
		question[41].next[j] = 
		question[41].points[j] = 0;

		question.push({});
		question[42].q =
		question[42].answerNum = 4;
		question[42].text[j] = 
		question[42].next[j] = 
		question[42].points[j] = 0;
		question[42].text[j] = 
		question[42].next[j] = 
		question[42].points[j] = 0;
		question[42].text[j] = 
		question[42].next[j] = 
		question[42].points[j] = 0;
		question[42].text[j] = 
		question[42].next[j] = 
		question[42].points[j] = 0;

*/
	}
};
