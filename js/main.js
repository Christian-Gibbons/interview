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
		game.load.audio("question1", "assets/voice/1.wav");
		game.load.audio("question2", "assets/voice/2.wav");
		game.load.audio("question3", "assets/voice/3.wav");
		game.load.audio("question4", "assets/voice/4.wav");
		game.load.audio("question5", "assets/voice/5.wav");
		game.load.audio("question6", "assets/voice/6.wav");
		game.load.audio("question7", "assets/voice/7.wav");
		game.load.audio("question8", "assets/voice/8.wav");
		game.load.audio("question9", "assets/voice/9.wav");
		game.load.audio("question10", "assets/voice/10.wav");
		game.load.audio("question11", "assets/voice/11.wav");
		game.load.audio("question12", "assets/voice/12.wav");
		game.load.audio("question13", "assets/voice/13.wav");
		game.load.audio("question14", "assets/voice/14.wav");
		game.load.audio("question15", "assets/voice/15.wav");
		game.load.audio("question16", "assets/voice/16.wav");
		game.load.audio("question17", "assets/voice/17.wav");
		game.load.audio("question18", "assets/voice/18.wav");
		game.load.audio("question19", "assets/voice/19.wav");
		game.load.audio("question20", "assets/voice/20.wav");
		game.load.audio("question21", "assets/voice/21.wav");
		game.load.audio("question22", "assets/voice/22.wav");
		game.load.audio("question23", "assets/voice/23.wav");
		game.load.audio("question24", "assets/voice/24.wav");
		game.load.audio("question25", "assets/voice/25.wav");
		game.load.audio("question26", "assets/voice/26.wav");
		game.load.audio("question27", "assets/voice/27.wav");
		game.load.audio("question28", "assets/voice/28.wav");
		game.load.audio("question29", "assets/voice/29.wav");
		game.load.audio("question30", "assets/voice/30.wav");
		game.load.audio("question31", "assets/voice/31.wav");
		game.load.audio("question32", "assets/voice/32.wav");
		game.load.audio("question33", "assets/voice/33.wav");
		game.load.audio("question34", "assets/voice/34.wav");
		game.load.audio("question35", "assets/voice/35.wav");
		game.load.audio("question36", "assets/voice/36.wav");
		game.load.audio("question37", "assets/voice/37.wav");
		game.load.audio("question38", "assets/voice/38.wav");
		game.load.audio("question39", "assets/voice/39.wav");
		game.load.audio("question40", "assets/voice/40.wav");
		game.load.audio("question41", "assets/voice/41.wav");
		game.load.audio("question42", "assets/voice/42.wav");
		game.load.audio("question43", "assets/voice/43.wav");
	}

	var answerText = [];
	var answerRect = [];
	var questionText;	
	var questionRect;

	var question = [];
	var questionAudio = [];
	var q_index = 0;
	var a_index = 0;

	const numQuestions = 43;
	var start = 1;

	var points = 0;
	function create() {
		var styleQ = { font: "25px Verdana", fill: "#9999ff", align: "center" };
		var styleA = { font: "16px Verdana", fill: "#ffffff", align: "left" };

		populateQuestions(question);
		questionRect = new Phaser.Rectangle(20, 20, game.world.width -40, 50);

		for(var i=0; i<4; i++){
			answerRect[i] = new Phaser.Rectangle(i*game.world.width/4 + 15, 450, game.world.width/4 - 30, game.world.height-450);

			answerText[i] = game.add.text(answerRect[i].x, answerRect[i].y, "", styleA);
			answerText[i].name = "answer "+i;
			answerText[i].wordWrap = true;
			answerText[i].wordWrapWidth = answerRect[i].width;
			answerText[i].inputEnabled = true;

			answerText[i].events.onInputDown.add(down, this);
			answerText[i].events.onInputUp.add(up, this);
		}

		var click = game.add.text(game.world.width/2, game.world.height/2, "Click here to start", styleQ);
		click.name = "begin";
		click.anchor.setTo(0.5,0.5);
		click.inputEnabled = true;
		click.events.onInputDown.add(down, this);
		click.events.onInputUp.add(up, this);

		questionText = game.add.text( questionRect.x , questionRect.y,"", styleQ );
		questionText.wordWrap = true;
		questionText.wordWrapWidth = questionRect.width;

		for(var i=1; i<=numQuestions; i++){
			questionAudio.push(game.add.audio('question' + i));
		}
	}

	function update() {/*
		if(start === 0){
			questionAudio[q_index].play();
			for(var i=0; i<4; i++){
				answerText[i].text = question[q_index].text[i];
			}
		}*/
	}

	function down(item) {
		if(item.name === "begin"){
			item.destroy(true);
			start = 0;
		}
	}

	function up(item) {
		if(item.name === "begin"){
			item.destroy(true);
			start = 0;
			q_index = 0;
		}
		else{
			for(var i=0; i<question[q_index].answerNum;i++){
				if(item.name === "answer " + i){
					points += question[q_index].points[i];
					q_index = question[q_index].next[i];
					break;
				}
			}
		}
		loadQuestion();
//	    item.text = "thanks for clicking!";

	}
	function loadQuestion(){
		for(var i=0; i<4; i++){
			answerText[i].text = "";
		}
		var q = questionAudio[q_index].play();
		q.onStop.add(loadAnswers);
		questionText.text = question[q_index].q;
		
	}
	function loadAnswers(){
		for(var i=0; i<4; i++){
			answerText[i].text = question[q_index].text[i];
		}
	}
	function populateQuestions(question){
		question.push({});
		question[0].text = new Array();
		question[0].next = new Array();
		question[0].points = new Array();
		question[0].q ="Hello, come on in.  You can have a seat right here. Make yourself comfortable.  Is there anything I can get you before we start?";
		question[0].answerNum = 4;
		question[0].text[0] = "No, I'm fine thank you."
		question[0].next[0] = 6;
		question[0].points[0] = 0;
		question[0].text[1] = "Yes, a bottle of water if you don't mind.";
		question[0].next[1] = 6;
		question[0].points[1] = 0;
		question[0].text[2] = "Yes, if you have a Coke that would be great.";
		question[0].next[2] = 2;
		question[0].points[2] = 0;
		question[0].text[3] = "Some Bourbon would actually be great right now.";
		question[0].next[3] = 1;
		question[0].points[3] = 0;

		question.push({});
		question[1].text = new Array();
		question[1].next = new Array();
		question[1].points = new Array();
		question[1].q = "Very funny... But, if you're serious, I do happen to have a bottle of Jefferson's Reserve in my desk.  Would you like a glass?"
		question[1].answerNum = 3;
		question[1].text[0] = "No, that's ok, I was just joking.";
		question[1].next[0] = 6;
		question[1].points[0] = 0;
		question[1].text[1] = "Yes, that would be wonderful.";
		question[1].next[1] = 3;
		question[1].points[1] = 0;
		question[1].text[2] = "Maybe after we are done.";
		question[1].next[2] = 6;
		question[1].points[2] = 0;
		question[1].text[3] = "";
		question[1].next[3] = q_index;
		question[1].points[3] = 0;

		question.push({});
		question[2].text = new Array();
		question[2].next = new Array();
		question[2].points = new Array();
		question[2].q ="Is Pepsi Ok?";
		question[2].answerNum = 4;
		question[2].text[0] = "Yes, Even Better";
		question[2].next[0] = 6;
		question[2].points[0] = 0;
		question[2].text[1] = "That will be just fine.";
		question[2].next[1] = 6;
		question[2].points[1] = 0;
		question[2].text[2] = "That's Okay, I'll pass.";
		question[2].next[2] = 6;
		question[2].points[2] = 0;
		question[2].text[3] = "Ugh, no, did I ASK for Pepsi? No! Then why would that be OK?";
		question[2].next[3] = 5;
		question[2].points[3] = 0;

		question.push({});
		question[3].text = new Array();
		question[3].next = new Array();
		question[3].points = new Array();
		question[3].q = "Perfect, here you are, how did you like it, let me know if you would like another?";
		question[3].answerNum = 4;
		question[3].text[0] = "It was Great, and I would like another";
		question[3].next[0] = 4;
		question[3].points[0] = 0;
		question[3].text[1] = "It was Great, maybe after we are done we will do another";
		question[3].next[1] = 6;
		question[3].points[1] = 0;
		question[3].text[2] = "Ugh, it was awful, and yes, I'll have another";
		question[3].next[2] = 4;
		question[3].points[2] = 0;
		question[3].text[3] = "That was disgusting, you have all the choice in the world but you choose that cat piss, I don't get people like you";
		question[3].next[3] = 6;
		question[3].points[3] = 0;

		question.push({});
		question[4].text = new Array();
		question[4].next = new Array();
		question[4].points = new Array();
		question[4].q = "Very well, here is another, are you a big drinker?";
		question[4].answerNum = 3;
		question[4].text[0] = "Yes, I am drunk all the time.";
		question[4].next[0] = 7
		question[4].points[0] = 0;
		question[4].text[1] = "I just have a weak spot for good Bourbon.";
		question[4].next[1] = 7
		question[4].points[1] = 0;
		question[4].text[2] = "Some say that I am, but I am in control.";
		question[4].next[2] = 7
		question[4].points[2] = 0;
		question[4].text[3] = "";
		question[4].next[3] = q_index;
		question[4].points[3] = 0;

		question.push({});
		question[5].text = new Array();
		question[5].next = new Array();
		question[5].points = new Array();
		question[5].q = "Well, I am sorry I couldn't get you anything that you liked";
		question[5].answerNum = 3;
		question[5].text[0] = "You should be sorry, it is an embarrassment to yourself and your firm.";
		question[5].next[0] = 6;
		question[5].points[0] = 0;
		question[5].text[1] = "That's ok, let's just get started, shall we?";
		question[5].next[1] = 6;
		question[5].points[1] = 0;
		question[5].text[2] = "I'm sorry, I have just been under a lot of stress lately.";
		question[5].next[2] = 6;
		question[5].points[2] = 0;
		question[5].text[3] = "";
		question[5].next[3] = q_index;
		question[5].points[3] = 0;

		question.push({});
		question[6].text = new Array();
		question[6].next = new Array();
		question[6].points = new Array();
		question[6].q = "Ok, here we go, let's get started then. How are you doing today?";
		question[6].answerNum = 4;
		question[6].text[0] = "Just fine, how are you?";
		question[6].next[0] = 12;
		question[6].points[0] = 0;
		question[6].text[1] = "Dude, I am SOOO hung over.";
		question[6].next[1] = 8;
		question[6].points[1] = 0;
		question[6].text[2] = "Good."
		question[6].next[2] = 12;
		question[6].points[2] = 0;
		question[6].text[3] = "How am I? Well that is a unique question to ask. Instead of asking something insightful, you ask a pointless question in the assumption that it will make us more comfortable. How am I? I'll tell you: I'm irritated and annoyed.";
		question[6].next[3] = 12;
		question[6].points[3] = 0;

		question.push({});
		question[7].text = new Array();
		question[7].next = new Array();
		question[7].points = new Array();
		question[7].q ="Ok, here we go, lets get started then. How are you doing today?";
		question[7].answerNum = 4;
		question[7].text[0] = "Just fine, how are you?";
		question[7].next[0] = 12;
		question[7].points[0] = 0;
		question[7].text[1] = "Dude, I am SOOO hung over.";
		question[7].next[1] = 9;
		question[7].points[1] = 0;
		question[7].text[2] = "Good.";
		question[7].next[2] = 12;
		question[7].points[2] = 0;
		question[7].text[3] = "How am I? Well that is a unique question to ask. Instead of asking something insightful, you ask a pointless question in the assumption that it will make us more comfortable. How am I? I'll tell you, I'm irritated and annoyed.";
		question[7].next[3] = 12;
		question[7].points[3] = 0;

		question.push({});
		question[8].text = new Array();
		question[8].next = new Array();
		question[8].points = new Array();
		question[8].q = "I'm sorry to hear that, is there anything I can do to help?";
		question[8].answerNum = 3;
		question[8].text[0] = "Just hurry up and get this over with.";
		question[8].next[0] = 12;
		question[8].points[0] = 0;
		question[8].text[1] = "No, I will be okay.";
		question[8].next[1] = 12;
		question[8].points[1] = 0;
		question[8].text[2] = "A shot of Bourbon might help.";
		question[8].next[2] = 10;
		question[8].points[2] = 0;
		question[8].text[3] = "";
		question[8].next[3] = q_index;
		question[8].points[3] = 0;

		question.push({});
		question[9].text = new Array();
		question[9].next = new Array();
		question[9].points = new Array();
		question[9].q = "I'm sorry to hear that, is there anything I can do to help?";
		question[9].answerNum = 3;
		question[9].text[0] = "Just hurry up and get this over with.";
		question[9].next[0] = 12;
		question[9].points[0] = 0;
		question[9].text[1] = "No, I will be okay.";
		question[9].next[1] = 12;
		question[9].points[1] = 0;
		question[9].text[2] = "A shot of Bourbon might help.";
		question[9].next[2] = 11;
		question[9].points[2] = 0;
		question[9].text[3] = "";
		question[9].next[3] = q_index;
		question[9].points[3] = 0;

		question.push({});
		question[10].text = new Array();
		question[10].next = new Array();
		question[10].points = new Array();
		question[10].q = "Here is my bottle of Jefferson Reserve, and here is your drink.";
		question[10].answerNum = 2;
		question[10].text[0] = "Thank you.";
		question[10].next[0] = 12;
		question[10].points[0] = 0;
		question[10].text[1] = "It isn't that good.";
		question[10].next[1] = 12;
		question[10].points[1] = 0;
		question[10].text[2] = "";
		question[10].next[2] = q_index;
		question[10].points[2] = 0;
		question[10].text[3] = "";
		question[10].next[3] = q_index;
		question[10].points[3] = 0;

		question.push({});
		question[11].text = new Array();
		question[11].next = new Array();
		question[11].points = new Array();
		question[11].q = "Here is my bottle of Jefferson Reserve, and here is your drink.";
		question[11].answerNum = 4;
		question[11].text[0] = "Thank you.";
		question[11].next[0] = 13;
		question[11].points[0] = 0;
		question[11].text[1] = "It isn't that good.";
		question[11].next[1] = 13;
		question[11].points[1] = 0;
		question[11].text[2] = "";
		question[11].next[2] = q_index;
		question[11].points[2] = 0;
		question[11].text[3] = "";
		question[11].next[3] = q_index;
		question[11].points[3] = 0;

		question.push({});
		question[12].text = new Array();
		question[12].next = new Array();
		question[12].points = new Array();
		question[12].q = "I'm actually really excited to meet you. What brings you here today?";
		question[12].answerNum = 4;
		question[12].text[0] = "I am here to interview for the opening.";
		question[12].next[0] = 18;
		question[12].points[0] = 0;
		question[12].text[1] = "I'm not sure, could you help me to understand what this is all about?";
		question[12].next[1] = 16;
		question[12].points[1] = 0;
		question[12].text[2] = "I'm here to impress the cute receptionist you have in your lobby.";
		question[12].next[2] = 14;
		question[12].points[2] = 0;
		question[12].text[3] = "For the job."
		question[12].next[3] = 18;
		question[12].points[3] = 0;
/*
		question.push({});
		question[13].text = new Array();
		question[13].next = new Array();
		question[13].points = new Array();
		question[13].q =
		question[13].answerNum = 4;
		question[13].text[0] = 
		question[13].next[0] = 
		question[13].points[0] = 0;
		question[13].text[1] = 
		question[13].next[1] = 
		question[13].points[1] = 0;
		question[13].text[2] = 
		question[13].next[2] = 
		question[13].points[2] = 0;
		question[13].text[3] = 
		question[13].next[3] = 
		question[13].points[3] = 0;

		question.push({});
		question[14].text = new Array();
		question[14].next = new Array();
		question[14].points = new Array();
		question[14].q =
		question[14].answerNum = 4;
		question[14].text[0] = 
		question[14].next[0] = 
		question[14].points[0] = 0;
		question[14].text[1] = 
		question[14].next[1] = 
		question[14].points[1] = 0;
		question[14].text[2] = 
		question[14].next[2] = 
		question[14].points[2] = 0;
		question[14].text[3] = 
		question[14].next[3] = 
		question[14].points[3] = 0;

		question.push({});
		question[15].text = new Array();
		question[15].next = new Array();
		question[15].points = new Array();
		question[15].q =
		question[15].answerNum = 4;
		question[15].text[0] = 
		question[15].next[0] = 
		question[15].points[0] = 0;
		question[15].text[1] = 
		question[15].next[1] = 
		question[15].points[1] = 0;
		question[15].text[2] = 
		question[15].next[2] = 
		question[15].points[2] = 0;
		question[15].text[3] = 
		question[15].next[3] = 
		question[15].points[3] = 0;

		question.push({});
		question[16].text = new Array();
		question[16].next = new Array();
		question[16].points = new Array();
		question[16].q =
		question[16].answerNum = 4;
		question[16].text[0] = 
		question[16].next[0] = 
		question[16].points[0] = 0;
		question[16].text[1] = 
		question[16].next[1] = 
		question[16].points[1] = 0;
		question[16].text[2] = 
		question[16].next[2] = 
		question[16].points[2] = 0;
		question[16].text[3] = 
		question[16].next[3] = 
		question[16].points[3] = 0;

		question.push({});
		question[17].text = new Array();
		question[17].next = new Array();
		question[17].points = new Array();
		question[17].q =
		question[17].answerNum = 4;
		question[17].text[0] = 
		question[17].next[0] = 
		question[17].points[0] = 0;
		question[17].text[1] = 
		question[17].next[1] = 
		question[17].points[1] = 0;
		question[17].text[2] = 
		question[17].next[2] = 
		question[17].points[2] = 0;
		question[17].text[3] = 
		question[17].next[3] = 
		question[17].points[3] = 0;

		question.push({});
		question[18].text = new Array();
		question[18].next = new Array();
		question[18].points = new Array();
		question[18].q =
		question[18].answerNum = 4;
		question[18].text[0] = 
		question[18].next[0] = 
		question[18].points[0] = 0;
		question[18].text[1] = 
		question[18].next[1] = 
		question[18].points[1] = 0;
		question[18].text[2] = 
		question[18].next[2] = 
		question[18].points[2] = 0;
		question[18].text[3] = 
		question[18].next[3] = 
		question[18].points[3] = 0;

		question.push({});
		question[19].text = new Array();
		question[19].next = new Array();
		question[19].points = new Array();
		question[19].q =
		question[19].answerNum = 4;
		question[19].text[0] = 
		question[19].next[0] = 
		question[19].points[0] = 0;
		question[19].text[1] = 
		question[19].next[1] = 
		question[19].points[1] = 0;
		question[19].text[2] = 
		question[19].next[2] = 
		question[19].points[2] = 0;
		question[19].text[3] = 
		question[19].next[3] = 
		question[19].points[3] = 0;

		question.push({});
		question[20].text = new Array();
		question[20].next = new Array();
		question[20].points = new Array();
		question[20].q =
		question[20].answerNum = 4;
		question[20].text[0] = 
		question[20].next[0] = 
		question[20].points[0] = 0;
		question[20].text[1] = 
		question[20].next[1] = 
		question[20].points[1] = 0;
		question[20].text[2] = 
		question[20].next[2] = 
		question[20].points[2] = 0;
		question[20].text[3] = 
		question[20].next[3] = 
		question[20].points[3] = 0;

		question.push({});
		question[21].text = new Array();
		question[21].next = new Array();
		question[21].points = new Array();
		question[21].q =
		question[21].answerNum = 4;
		question[21].text[0] = 
		question[21].next[0] = 
		question[21].points[0] = 0;
		question[21].text[1] = 
		question[21].next[1] = 
		question[21].points[1] = 0;
		question[21].text[2] = 
		question[21].next[2] = 
		question[21].points[2] = 0;
		question[21].text[3] = 
		question[21].next[3] = 
		question[21].points[3] = 0;

		question.push({});
		question[22].text = new Array();
		question[22].next = new Array();
		question[22].points = new Array();
		question[22].q =
		question[22].answerNum = 4;
		question[22].text[0] = 
		question[22].next[0] = 
		question[22].points[0] = 0;
		question[22].text[1] = 
		question[22].next[1] = 
		question[22].points[1] = 0;
		question[22].text[2] = 
		question[22].next[2] = 
		question[22].points[2] = 0;
		question[22].text[3] = 
		question[22].next[3] = 
		question[22].points[3] = 0;

		question.push({});
		question[23].text = new Array();
		question[23].next = new Array();
		question[23].points = new Array();
		question[23].q =
		question[23].answerNum = 4;
		question[23].text[0] = 
		question[23].next[0] = 
		question[23].points[0] = 0;
		question[23].text[1] = 
		question[23].next[1] = 
		question[23].points[1] = 0;
		question[23].text[2] = 
		question[23].next[2] = 
		question[23].points[2] = 0;
		question[23].text[3] = 
		question[23].next[3] = 
		question[23].points[3] = 0;

		question.push({});
		question[24].text = new Array();
		question[24].next = new Array();
		question[24].points = new Array();
		question[24].q =
		question[24].answerNum = 4;
		question[24].text[0] = 
		question[24].next[0] = 
		question[24].points[0] = 0;
		question[24].text[1] = 
		question[24].next[1] = 
		question[24].points[1] = 0;
		question[24].text[2] = 
		question[24].next[2] = 
		question[24].points[2] = 0;
		question[24].text[3] = 
		question[24].next[3] = 
		question[24].points[3] = 0;

		question.push({});
		question[25].text = new Array();
		question[25].next = new Array();
		question[25].points = new Array();
		question[25].q =
		question[25].answerNum = 4;
		question[25].text[0] = 
		question[25].next[0] = 
		question[25].points[0] = 0;
		question[25].text[1] = 
		question[25].next[1] = 
		question[25].points[1] = 0;
		question[25].text[2] = 
		question[25].next[2] = 
		question[25].points[2] = 0;
		question[25].text[3] = 
		question[25].next[3] = 
		question[25].points[3] = 0;

		question.push({});
		question[26].text = new Array();
		question[26].next = new Array();
		question[26].points = new Array();
		question[26].q =
		question[26].answerNum = 4;
		question[26].text[0] = 
		question[26].next[0] = 
		question[26].points[0] = 0;
		question[26].text[1] = 
		question[26].next[1] = 
		question[26].points[1] = 0;
		question[26].text[2] = 
		question[26].next[2] = 
		question[26].points[2] = 0;
		question[26].text[3] = 
		question[26].next[3] = 
		question[26].points[3] = 0;

		question.push({});
		question[27].text = new Array();
		question[27].next = new Array();
		question[27].points = new Array();
		question[27].q =
		question[27].answerNum = 4;
		question[27].text[0] = 
		question[27].next[0] = 
		question[27].points[0] = 0;
		question[27].text[1] = 
		question[27].next[1] = 
		question[27].points[1] = 0;
		question[27].text[2] = 
		question[27].next[2] = 
		question[27].points[2] = 0;
		question[27].text[3] = 
		question[27].next[3] = 
		question[27].points[3] = 0;

		question.push({});
		question[28].text = new Array();
		question[28].next = new Array();
		question[28].points = new Array();
		question[28].q =
		question[28].answerNum = 4;
		question[28].text[0] = 
		question[28].next[0] = 
		question[28].points[0] = 0;
		question[28].text[1] = 
		question[28].next[1] = 
		question[28].points[1] = 0;
		question[28].text[2] = 
		question[28].next[2] = 
		question[28].points[2] = 0;
		question[28].text[3] = 
		question[28].next[3] = 
		question[28].points[3] = 0;

		question.push({});
		question[29].text = new Array();
		question[29].next = new Array();
		question[29].points = new Array();
		question[29].q =
		question[29].answerNum = 4;
		question[29].text[0] = 
		question[29].next[0] = 
		question[29].points[0] = 0;
		question[29].text[1] = 
		question[29].next[1] = 
		question[29].points[1] = 0;
		question[29].text[2] = 
		question[29].next[2] = 
		question[29].points[2] = 0;
		question[29].text[3] = 
		question[29].next[3] = 
		question[29].points[3] = 0;

		question.push({});
		question[30].text = new Array();
		question[30].next = new Array();
		question[30].points = new Array();
		question[30].q =
		question[30].answerNum = 4;
		question[30].text[0] = 
		question[30].next[0] = 
		question[30].points[0] = 0;
		question[30].text[1] = 
		question[30].next[1] = 
		question[30].points[1] = 0;
		question[30].text[2] = 
		question[30].next[2] = 
		question[30].points[2] = 0;
		question[30].text[3] = 
		question[30].next[3] = 
		question[30].points[3] = 0;

		question.push({});
		question[31].text = new Array();
		question[31].next = new Array();
		question[31].points = new Array();
		question[31].q =
		question[31].answerNum = 4;
		question[31].text[0] = 
		question[31].next[0] = 
		question[31].points[0] = 0;
		question[31].text[1] = 
		question[31].next[1] = 
		question[31].points[1] = 0;
		question[31].text[2] = 
		question[31].next[2] = 
		question[31].points[2] = 0;
		question[31].text[3] = 
		question[31].next[3] = 
		question[31].points[3] = 0;

		question.push({});
		question[32].text = new Array();
		question[32].next = new Array();
		question[32].points = new Array();
		question[32].q =
		question[32].answerNum = 4;
		question[32].text[0] = 
		question[32].next[0] = 
		question[32].points[0] = 0;
		question[32].text[1] = 
		question[32].next[1] = 
		question[32].points[1] = 0;
		question[32].text[2] = 
		question[32].next[2] = 
		question[32].points[2] = 0;
		question[32].text[3] = 
		question[32].next[3] = 
		question[32].points[3] = 0;

		question.push({});
		question[33].text = new Array();
		question[33].next = new Array();
		question[33].points = new Array();
		question[33].q =
		question[33].answerNum = 4;
		question[33].text[0] = 
		question[33].next[0] = 
		question[33].points[0] = 0;
		question[33].text[1] = 
		question[33].next[1] = 
		question[33].points[1] = 0;
		question[33].text[2] = 
		question[33].next[2] = 
		question[33].points[2] = 0;
		question[33].text[3] = 
		question[33].next[3] = 
		question[33].points[3] = 0;

		question.push({});
		question[34].text = new Array();
		question[34].next = new Array();
		question[34].points = new Array();
		question[34].q =
		question[34].answerNum = 4;
		question[34].text[0] = 
		question[34].next[0] = 
		question[34].points[0] = 0;
		question[34].text[1] = 
		question[34].next[1] = 
		question[34].points[1] = 0;
		question[34].text[2] = 
		question[34].next[2] = 
		question[34].points[2] = 0;
		question[34].text[3] = 
		question[34].next[3] = 
		question[34].points[3] = 0;

		question.push({});
		question[35].text = new Array();
		question[35].next = new Array();
		question[35].points = new Array();
		question[35].q =
		question[35].answerNum = 4;
		question[35].text[0] = 
		question[35].next[0] = 
		question[35].points[0] = 0;
		question[35].text[1] = 
		question[35].next[1] = 
		question[35].points[1] = 0;
		question[35].text[2] = 
		question[35].next[2] = 
		question[35].points[2] = 0;
		question[35].text[3] = 
		question[35].next[3] = 
		question[35].points[3] = 0;

		question.push({});
		question[36].text = new Array();
		question[36].next = new Array();
		question[36].points = new Array();
		question[36].q =
		question[36].answerNum = 4;
		question[36].text[0] = 
		question[36].next[0] = 
		question[36].points[0] = 0;
		question[36].text[1] = 
		question[36].next[1] = 
		question[36].points[1] = 0;
		question[36].text[2] = 
		question[36].next[2] = 
		question[36].points[2] = 0;
		question[36].text[3] = 
		question[36].next[3] = 
		question[36].points[3] = 0;

		question.push({});
		question[37].text = new Array();
		question[37].next = new Array();
		question[37].points = new Array();
		question[37].q =
		question[37].answerNum = 4;
		question[37].text[0] = 
		question[37].next[0] = 
		question[37].points[0] = 0;
		question[37].text[1] = 
		question[37].next[1] = 
		question[37].points[1] = 0;
		question[37].text[2] = 
		question[37].next[2] = 
		question[37].points[2] = 0;
		question[37].text[3] = 
		question[37].next[3] = 
		question[37].points[3] = 0;

		question.push({});
		question[38].text = new Array();
		question[38].next = new Array();
		question[38].points = new Array();
		question[38].q =
		question[38].answerNum = 4;
		question[38].text[0] = 
		question[38].next[0] = 
		question[38].points[0] = 0;
		question[38].text[1] = 
		question[38].next[1] = 
		question[38].points[1] = 0;
		question[38].text[2] = 
		question[38].next[2] = 
		question[38].points[2] = 0;
		question[38].text[3] = 
		question[38].next[3] = 
		question[38].points[3] = 0;

		question.push({});
		question[39].text = new Array();
		question[39].next = new Array();
		question[39].points = new Array();
		question[39].q =
		question[39].answerNum = 4;
		question[39].text[0] = 
		question[39].next[0] = 
		question[39].points[0] = 0;
		question[39].text[1] = 
		question[39].next[1] = 
		question[39].points[1] = 0;
		question[39].text[2] = 
		question[39].next[2] = 
		question[39].points[2] = 0;
		question[39].text[3] = 
		question[39].next[3] = 
		question[39].points[3] = 0;

		question.push({});
		question[40].text = new Array();
		question[40].next = new Array();
		question[40].points = new Array();
		question[40].q =
		question[40].answerNum = 4;
		question[40].text[0] = 
		question[40].next[0] = 
		question[40].points[0] = 0;
		question[40].text[1] = 
		question[40].next[1] = 
		question[40].points[1] = 0;
		question[40].text[2] = 
		question[40].next[2] = 
		question[40].points[2] = 0;
		question[40].text[3] = 
		question[40].next[3] = 
		question[40].points[3] = 0;

		question.push({});
		question[41].text = new Array();
		question[41].next = new Array();
		question[41].points = new Array();
		question[41].q =
		question[41].answerNum = 4;
		question[41].text[0] = 
		question[41].next[0] = 
		question[41].points[0] = 0;
		question[41].text[1] = 
		question[41].next[1] = 
		question[41].points[1] = 0;
		question[41].text[2] = 
		question[41].next[2] = 
		question[41].points[2] = 0;
		question[41].text[3] = 
		question[41].next[3] = 
		question[41].points[3] = 0;

		question.push({});
		question[42].text = new Array();
		question[42].next = new Array();
		question[42].points = new Array();
		question[42].q =
		question[42].answerNum = 4;
		question[42].text[0] = 
		question[42].next[0] = 
		question[42].points[0] = 0;
		question[42].text[1] = 
		question[42].next[1] = 
		question[42].points[1] = 0;
		question[42].text[2] = 
		question[42].next[2] = 
		question[42].points[2] = 0;
		question[42].text[3] = 
		question[42].next[3] = 
		question[42].points[3] = 0;
*/
	}
};
