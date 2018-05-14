var c;

var cWidth, cHeight;

var curkeys = [];
var newkeys = [];

var playfield = new playfieldClass();
var title = new titleClass();
var loading = new loadingClass();

var gamestate = "title";
var fadeOut = false;
var fadeIn = false;

var music = new Audio();
music.loop = false;

var titleVoice = new Audio();
titleVoice.src = "assets/snd/sfx/begin.wav";

var ldDon = new Image();
ldDon.src = "assets/ld/don.png";

var paused = false;

var score = 0;
var currentCombo = 0;
var comboMultiplier = 0;

var song = {
	id : null,
    tja : null,
    title : "",
    subtitle : "",
    course : "",
    difficulty : 0,
    bpm : 198,
    offset : -1.43,
    scoreinit : 0,
    scorediff : 0,
    songvol : 0,
    sevol : 0,
    wav : null,
    baloon : [],
    chart : [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    noteArray : [],
    position : 0
}

var songTime = 0;

function gameFrameworkInit(){
	for (i = 0; i < 256; i++){
		curkeys[i] = false;
		newkeys[i] = false;
	}
	
	c = myCanvas.getContext('2d');
	cWidth = myCanvas.width;
	cHeight = myCanvas.height;

	window.addEventListener('keydown',
							 function(e){
								if (!curkeys[e.keyCode]){
									curkeys[e.keyCode] = true;
									newkeys[e.keyCode] = true;
								}
							 }
						   );
	
	window.addEventListener('keyup',
							 function(e){ curkeys[e.keyCode] = false; }
						   );
                           
    titleVoice.addEventListener('ended',
                                    function(e) {fadeOut = true;}
                               );							   

    window.requestAnimationFrame(gameUpdate);
}


function gameUpdate(){
    if (gamestate == "play") {
		
		if (song.noteArray.length == 0) {
			if (playfield.gdhit.ar == false && playfield.grhit.ar == false) {
				gamestate = "finished";
			}
		}
		
		if (song.noteArray.length != 0) {
			var i = song.noteArray.findIndex(function(obj) {
				return obj.active == true;
			});
			
			if (i != -1) {
				if (song.noteArray[i].x <= 315 && song.noteArray[i].x >= 264) {
					song.noteArray[i].active = false;
				}
			}
			
			var j = song.noteArray.findIndex(function(obj) {	
				return obj.active == false && obj.clr.ar == false;
			});
			
			if (j != -1) {
				if (song.noteArray[j].x <= 263) {
					song.noteArray[j].cleared = true;
				}
			}
		}

		
		/*
		if (song.noteArray.length != 0 && song.noteArray[0].x <= 314 && song.noteArray[0].type > 0) {
			console.log("miss");
			song.noteArray.splice(0, 1);
			console.log(song.noteArray.length);
		}
		*/
		
		if (!paused) {
			playfield.mvbgUpdate();
			playfield.grhitUpdate();
			playfield.gdhitUpdate();
			playfield.rtlUpdate();
			playfield.rtrUpdate();
			playfield.btrUpdate();
			playfield.btlUpdate();
			playfield.donUpdate();

			if (newkeys[13]) {
				paused = true;
			}
			
			if (newkeys[71]) {
				playfield.rtl.bHit = true;
				playfield.rtl.ar = false;
				playfield.rtl.f = 0;
				playfield.rtl.uf = 0;
				
				playfield.drmh.don.currentTime = 0;
				playfield.drmh.don.play();
				
				playfield.timingCheck("don");
			}
			if (newkeys[72]) {
				playfield.rtr.bHit = true;
				playfield.rtr.ar = false;
				playfield.rtr.f = 0;
				playfield.rtr.uf = 0;
				
				playfield.drmh.don.currentTime = 0;
				playfield.drmh.don.play();
				
				playfield.timingCheck("don");
			}
			if (newkeys[70]) {
				playfield.btl.bHit = true;
				playfield.btl.ar = false;
				playfield.btl.f = 0;
				playfield.btl.uf = 0;
				
				playfield.drmh.kat.currentTime = 0;
				playfield.drmh.kat.play();
				
				playfield.timingCheck("kat");
			}
			if (newkeys[74]) {
				playfield.btr.bHit = true;
				playfield.btr.ar = false;
				playfield.btr.f = 0;
				playfield.btr.uf = 0;
				
				playfield.drmh.kat.currentTime = 0;
				playfield.drmh.kat.play();
				
				playfield.timingCheck("kat");
			}
			
			for (var i = 0; i < song.noteArray.length; i++) {
				song.noteArray[i].update();
			}
		}
		else if (paused){
			if (newkeys[13]) {
				paused = false;
			}
		}
    }
	else if (gamestate == "finished") {
		playfield.mvbgUpdate();
		playfield.grhitUpdate();
		playfield.gdhitUpdate();
		playfield.rtlUpdate();
		playfield.rtrUpdate();
		playfield.btrUpdate();
		playfield.btlUpdate();
		playfield.donUpdate();
	}
	else if (gamestate == "load") {
		loading.loadingTextUpdate();
	}
    else if (gamestate == "title") {
    }

	for (i = 0; i < 256; i++){
		newkeys[i] = false;
	}

	gameDraw();
		
	window.requestAnimationFrame(gameUpdate);
}


function gameDraw(){
	c.clearRect(0,0,cWidth,cHeight);
	c.imageSmoothingEnabled = false;
	
    if (gamestate == "play") {
        playfield.draw();
		
		playfield.noteDrawCheck(); //draw only necessary notes (ones that are supposed to be on screen)
	
		//draw drum area
		c.drawImage(playfield.drma.img, playfield.drma.x, playfield.drma.y);
		
		if (playfield.rtl.ar == true)
			c.drawImage(playfield.rtl.img, playfield.rtl.f * playfield.rtl.w, 0, playfield.rtl.w, playfield.rtl.h, playfield.rtl.x, playfield.rtl.y, playfield.rtl.w, playfield.rtl.h);
		
		if (playfield.rtr.ar == true)
			c.drawImage(playfield.rtr.img, playfield.rtr.f * playfield.rtr.w, 0, playfield.rtr.w, playfield.rtr.h, playfield.rtr.x, playfield.rtr.y, playfield.rtr.w, playfield.rtr.h);
		
		if (playfield.btl.ar == true)
			c.drawImage(playfield.btl.img, playfield.btl.f * playfield.btl.w, 0, playfield.btl.w, playfield.btl.h, playfield.btl.x, playfield.btl.y, playfield.btl.w, playfield.btl.h);
		
		if (playfield.btr.ar == true)
			c.drawImage(playfield.btr.img, playfield.btr.f * playfield.btr.w, 0, playfield.btr.w, playfield.btr.h, playfield.btr.x, playfield.btr.y, playfield.btr.w, playfield.btr.h);
		
		c.font = "30px Taiko";
		c.fillStyle = "white";
		c.textAlign = "right";
		c.fillText(score, 166, 220);
		
		if (fadeIn == true) { //fade in effect after loading screen
			playfield.fade();
		}
	}
	else if (gamestate == "finished") {
		playfield.draw();
		
		c.drawImage(playfield.drma.img, playfield.drma.x, playfield.drma.y);
		
		c.font = "30px Taiko";
		c.fillStyle = "white";
		c.textAlign = "right";
		c.fillText(score, 166, 220);
	}
    else if (gamestate == "title") {
        c.drawImage(title.bg.img, 0, 0);

        c.font = "12px Taiko";
        c.fillStyle = "white";
        c.fillText("Ver. 0.5 BETA", 1180, 710);
		
		c.font = "24px Taiko";
		
		c.fillText("- Instructions -", 530, 450);
		c.drawImage(title.instr.donImg, 680, 500);
		c.drawImage(title.instr.katImg, 500, 500);
		
		c.font = "18px Taiko";
		c.fillText("Red Notes", 668, 490);
		c.fillText("Blue Notes", 500, 490);
		
		if (fadeOut == true) { //fade out effect after song is picked
			title.fade();
		}
    }
	else if (gamestate == "load") {
		loading.draw();
	}
}