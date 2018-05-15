class playfieldClass {
	constructor() {
		//static background
		this.stbg = {
			x : 0,
			y : 0,
			img : new Image()
		};
		this.stbg.img.src = "assets/fld/stbg.png";
		
		//moving top background
		this.mvbg = {
			x : 0,
			y : 0,
			w : 1328,
			h : 184,
			img : new Image()
		};
		this.mvbg.img.src = "assets/fld/mvbg.png";
		
		//drum area
		this.drma = {
			x : 0,
			y : 184,
			img : new Image()
		};
		this.drma.img.src = "assets/fld/drma.png";
		
		//receptor
		this.rcpt = {
			x : 361,
			y : 204,
			img : new Image()
		}
		this.rcpt.img.src = "assets/fld/recept.png";
        
        //great hit receptor animation
        this.grhit = {
            x : 376, //x position
            y : 220, //y position
            w : 76, //frame width
            h : 76, //frame height
            f : 0, //frame
            uf : 0, //update frame
			bHit : false,
            ar : false, //is animation running
            img : new Image()
        }
        this.grhit.img.src = "assets/fld/grhit.png";
        
        //great hit text animation
        this.grtext = {
            x : 387,
            y : 173,
            w : 54,
            h: 30,
            f: 0,
            uf : 0,
			bHit : false,
			ar : false,
            img : new Image()
        }
        this.grtext.img.src = "assets/fld/grtext.png";
        
        //good hit receptor animation
        this.gdhit = {
            x : 376, //x position
            y : 220, //y position
            w : 76, //frame width
            h : 76, //frame height
            f : 0, //frame
            uf : 0, //update frame
            img : new Image()
        }
        this.gdhit.img.src = "assets/fld/gdhit.png";
        
        //good hit text animation
        this.gdtext = {
            x : 387,
            y : 173,
            w : 54,
            h: 30,
            f: 0,
            uf : 0,
            img : new Image()
        }
        this.gdtext.img.src = "assets/fld/gdtext.png";
        
		//left don hit animation
		this.rtl = {
			x : 232,
			y : 225,
			w : 35,
			h : 61,
			f : 0,
			uf : 0,
			ar : false,
			bHit : false,
			img : new Image()
		}
		this.rtl.img.src = "assets/fld/rtl.png"
		
		//right don hit animation
		this.rtr = {
			x : 266,
			y : 225,
			w : 35,
			h : 61,
			f : 0,
			uf : 0,
			ar : false,
			bHit : false,
			img : new Image()
		}
		this.rtr.img.src = "assets/fld/rtr.png"
		
		//left kat hit animation
		this.btl = {
			x : 220,
			y : 216,
			w : 47,
			h : 90,
			f : 0,
			uf : 0,
			ar : false,
			bHit : false,
			img : new Image()
		}
		this.btl.img.src = "assets/fld/btl.png"
		
		//right kat hit animation
		this.btr = {
			x : 266,
			y : 216,
			w : 47,
			h : 90,
			f : 0,
			uf : 0,
			ar : false,
			bHit : false,
			img : new Image()
		}
		this.btr.img.src = "assets/fld/btr.png"
        
        this.drmh = {
            don : new Audio("assets/snd/sfx/don.wav"),
            kat: new Audio("assets/snd/sfx/kat.wav")
        }
		this.drmh.don.volume = 0.8;
		this.drmh.kat.volume = 0.8;
        
        this.don = {
            x : 0,
            y : 0,
            w : 360,
            h : 184,
            f : 0,
            uf : 0,
            img : new Image()
        }
        this.don.img.src = "assets/fld/normal.png";
		
		this.fading = false;
	}
	
	mvbgUpdate() {
		this.mvbg.x -= 0.5;
		
		if (this.mvbg.x <= -this.mvbg.w)
			this.mvbg.x = 0;
	}
    
    grhitUpdate() {
        if (this.grhit.ar == true) {
            this.grhit.uf += 1;
            
            if (this.grhit.f != 17) {
                if (this.grhit.uf == 2) {
                    this.grhit.f++;
                    this.grhit.uf = 0;
                }
            }
            else {
                this.grhit.f = 0;
                this.grhit.uf = 0;
                this.grhit.ar = false;
            }
        }
        else {
            if (this.grhit.bHit == true) {
                this.grhit.uf += 1;
                this.grhit.ar = true;
                this.grhit.bHit = false;
            }
        }
    }
    
    grtextUpdate() {
        this.grtext.uf += 1;
        
        if (this.grtext.f != 17) {
            if (this.grtext.uf == 2) {
                this.grtext.f++;
                this.grtext.uf = 0;
            }
        }
        else {
            this.grtext.f = 0;
        }
    }
    
    gdhitUpdate() {
        if (this.gdhit.ar == true) {
            this.gdhit.uf += 1;
            
            if (this.gdhit.f != 17) {
                if (this.gdhit.uf == 2) {
                    this.gdhit.f++;
                    this.gdhit.uf = 0;
                }
            }
            else {
                this.gdhit.f = 0;
                this.gdhit.uf = 0;
                this.gdhit.ar = false;
            }
        }
        else {
            if (this.gdhit.bHit == true) {
                this.gdhit.uf += 1;
                this.gdhit.ar = true;
                this.gdhit.bHit = false;
            }
        }
    }
    
    gdtextUpdate() {
        this.gdtext.uf += 1;
        
        if (this.gdtext.f != 17) {
            if (this.gdtext.uf == 2) {
                this.gdtext.f++;
                this.gdtext.uf = 0;
            }
        }
        else {
            this.gdtext.f = 0;
        }
    }
	
	rtlUpdate() {
        if (this.rtl.ar == true) {
            this.rtl.uf += 1;
            
            if (this.rtl.f != 17) {
                if (this.rtl.uf == 2) {
                    this.rtl.f++;
                    this.rtl.uf = 0;
                }
            }
            else {
                this.rtl.f = 0;
                this.rtl.uf = 0;
                this.rtl.ar = false;
            }
        }
        else {
            if (this.rtl.bHit == true) {
                this.rtl.uf += 1;
                this.rtl.ar = true;
                this.rtl.bHit = false;
            }
        }
	}
	
	rtrUpdate() {
        if (this.rtr.ar == true) {
            this.rtr.uf += 1;
            
            if (this.rtr.f != 17) {
                if (this.rtr.uf == 2) {
                    this.rtr.f++;
                    this.rtr.uf = 0;
                }
            }
            else {
                this.rtr.f = 0;
                this.rtr.uf = 0;
                this.rtr.ar = false;
            }
        }
        else {
            if (this.rtr.bHit == true) {
                this.rtr.uf += 1;
                this.rtr.ar = true;
                this.rtr.bHit = false;
            }
        }
	}

	btlUpdate() {
		if (this.btl.ar == true) {
			this.btl.uf += 1;
			
			if (this.btl.f != 17) {
				if (this.btl.uf == 2) {
					this.btl.f++;
					this.btl.uf = 0;
				}
			}
			else {
				this.btl.f = 0;
				this.btl.uf = 0;
				this.btl.ar = false;
			}
		}
		else {
			if (this.btl.bHit == true) {
				this.btl.uf += 1;
				this.btl.ar = true;
				this.btl.bHit = false;
			}
		}
	}
	
	btrUpdate() {
        if (this.btr.ar == true) {
            this.btr.uf += 1;
            
            if (this.btr.f != 17) {
                if (this.btr.uf == 2) {
                    this.btr.f++;
                    this.btr.uf = 0;
                }
            }
            else {
                this.btr.f = 0;
                this.btr.uf = 0;
                this.btr.ar = false;
            }
        }
        else {
            if (this.btr.bHit == true) {
                this.btr.uf += 1;
                this.btr.ar = true;
                this.btr.bHit = false;
            }
        }
	}
    
    donUpdate() {
        this.don.uf++
        
        if (this.don.uf >= (1440 / song.bpm) / 0.40) {
            if (this.don.f == 0) {
                this.don.f = 1;
                this.don.uf = 0;
            }
            else {
                this.don.f = 0;
                this.don.uf = 0;
            }
        }
    }
    
    lifebarUpdate() {
        
    }
	
	noteDrawCheck() {
		for (var i = 0; i < song.noteArray.length; i++) { //more than likely wont be more than 50 notes on the screen at once.
			if (song.noteArray[i].x < cWidth) {
				if (song.noteArray[i].cleared != true) {
					song.noteArray[i].draw();
				}
				else {
					song.noteArray[i].draw();
				}
			}
		}
	}
	/**
	 * Checks if you hit a note, and how on-time you hit it.
	 * @param {string} note Either "don" or "kat", depending on what type of note you want to check. 
	 */
	timingCheck(note) {
		var i = song.noteArray.findIndex(function(obj) {
			return obj.active == true;
		});

		if (typeof song.noteArray[i] == "undefined") {
			return;
		}
		
		if (song.noteArray[i].type == 1 && note == "don") {
			if (song.noteArray[i].x <= 460 
				&& song.noteArray[i].x >= 450 
				&& song.noteArray[i].type > 0) { //outside miss
				
				currentCombo = 0;
				
				song.noteArray[i].active = false;
				song.noteArray[i].cleared = true;
			}
			else if (song.noteArray[i].x <= 449 
					&& song.noteArray[i].x >= 421 
					&& song.noteArray[i].type > 0) { //good
					
				score += Math.round(1960 / 2);
				currentCombo++;
				
				song.noteArray[i].active = false;
				song.noteArray[i].clr.ar = true;
				
				this.gdhit.ar = true;
				this.gdhit.uf = 0;
				this.gdhit.f = 0;
				
				this.grhit.ar = false;
				this.grhit.uf = 0;
				this.grhit.f = 0;
			}
			else if (song.noteArray[i].x <= 420 
					&& song.noteArray[i].x >= 346 
					&& song.noteArray[i].type > 0) { //great
				
				score += 1960;
				currentCombo++;
				
				song.noteArray[i].active = false;
				song.noteArray[i].clr.ar = true;
				
				this.grhit.ar = true;
				this.grhit.uf = 0;
				this.grhit.f = 0;
				
				this.gdhit.ar = false;
				this.gdhit.uf = 0;
				this.gdhit.f = 0;
			}
			else if (song.noteArray[i].x <= 345 
					&& song.noteArray[i].x >= 316 
					&& song.noteArray[i].type > 0) { //good
				
				score += Math.round(1960 / 2);
				currentCombo++;
				
				song.noteArray[i].active = false;
				song.noteArray[i].clr.ar = true;
				
				this.gdhit.ar = true;
				this.gdhit.uf = 0;
				this.gdhit.f = 0;
				
				this.grhit.ar = false;
				this.grhit.uf = 0;
				this.grhit.f = 0;
			}
			else if (song.noteArray[i].x <= 315 
					&& song.noteArray[i].type > 0) { //outside miss
					
				currentCombo = 0;	
				
				song.noteArray[i].active = false;
				song.noteArray[i].cleared = true;
			}
		}
		else if (song.noteArray[i].type == 2 && note == "kat") {
			if (song.noteArray[i].x <= 460 
				&& song.noteArray[i].x >= 450 
				&& song.noteArray[i].type > 0) { //outside miss
				
				currentCombo = 0;
				
				song.noteArray[i].active = false;
				song.noteArray[i].cleared = true;
			}
			else if (song.noteArray[i].x <= 449 
					&& song.noteArray[i].x >= 421 
					&& song.noteArray[i].type > 0) { //good
					
				score += Math.round(1960 / 2);
				currentCombo++;	
				
				song.noteArray[i].active = false;
				song.noteArray[i].clr.ar = true;
				
				this.gdhit.ar = true;
				this.gdhit.uf = 0;
				this.gdhit.f = 0;
				
				this.grhit.ar = false;
				this.grhit.uf = 0;
				this.grhit.f = 0;
			}
			else if (song.noteArray[i].x <= 420 
					&& song.noteArray[i].x >= 346 
					&& song.noteArray[i].type > 0) { //great
					
				score += 1960;
				currentCombo++;
					
				song.noteArray[i].active = false;
				song.noteArray[i].clr.ar = true;
				
				this.grhit.ar = true;
				this.grhit.uf = 0;
				this.grhit.f = 0;
				
				this.gdhit.ar = false;
				this.gdhit.uf = 0;
				this.gdhit.f = 0;
			}
			else if (song.noteArray[i].x <= 345 
					&& song.noteArray[i].x >= 316 
					&& song.noteArray[i].type > 0) { //good
					
				score += Math.round(1960 / 2);
				currentCombo++;	
					
				song.noteArray[i].active = false;
				song.noteArray[i].clr.ar = true;
				
				this.gdhit.ar = true;
				this.gdhit.uf = 0;
				this.gdhit.f = 0;
				
				this.grhit.ar = false;
				this.grhit.uf = 0;
				this.grhit.f = 0;
			}
			else if (song.noteArray[i].x <= 315 
					&& song.noteArray[i].type > 0) { //outside miss
				
				currentCombo = 0;
				
				song.noteArray[i].active = false;
				song.noteArray[i].cleared = true;
			}
		}
	}
	
	
	/**
	 * Checks the leftmost note, then hits it when it overlaps the note receptor.
	 */
	timingCheckAutoplay()
	{
		var i = song.noteArray.findIndex(function(obj) {
			return obj.active == true;
		});

		if (typeof song.noteArray[i] == "undefined") {
			return;
		}
		
		if (song.noteArray[i].x <= 400)
		{
			if (song.noteArray[i].type == 1)
			{
				this.drmh.don.currentTime = 0; //Reset the sfx if it was played before (There's no way to play it over itself)
				this.drmh.don.play();
			}
			else if (song.noteArray[i].type == 2)
			{
				this.drmh.kat.currentTime = 0;
				this.drmh.kat.play();
			}
			score += 1960;
			currentCombo++;
			
			song.noteArray[i].active = false;
			song.noteArray[i].clr.ar = true;
			
			this.grhit.ar = true;
			this.grhit.uf = 0;
			this.grhit.f = 0;
			
			this.gdhit.ar = false;
			this.gdhit.uf = 0;
			this.gdhit.f = 0;
		}
	}
	
	draw() {
		//draw moving background
		c.drawImage(this.mvbg.img, this.mvbg.x, this.mvbg.y);
		c.drawImage(this.mvbg.img, this.mvbg.x + this.mvbg.w, this.mvbg.y);
		
		//draw static background
		c.drawImage(this.stbg.img, this.stbg.x, this.stbg.y);

		//draw receptor
		c.drawImage(this.rcpt.img, this.rcpt.x, this.rcpt.y);
        

        //draw great hit animation
        if (this.grhit.ar == true)
            c.drawImage(this.grhit.img, this.grhit.f * this.grhit.w, 0, this.grhit.w, this.grhit.h, this.grhit.x, this.grhit.y, this.grhit.w, this.grhit.h);
		
		//draw good hit animation
		if (this.gdhit.ar == true)
			c.drawImage(this.gdhit.img, this.gdhit.f * this.gdhit.w, 0, this.gdhit.w, this.gdhit.h, this.gdhit.x, this.gdhit.y, this.gdhit.w, this.gdhit.h);
		
        /*
        if (hit == "great")
            c.drawImage(this.grtext.img, this.grtext.f * this.grtext.w, 0, this.grtext.w, this.grtext.h, this.grtext.x, this.grtext.y, this.grtext.w, this.grtext.h);
        else
            c.drawImage(this.gdtext.img, this.gdtext.f * this.gdtext.w, 0, this.gdtext.w, this.gdtext.h, this.gdtext.x, this.gdtext.y, this.gdtext.w, this.gdtext.h);
        */
        
        c.drawImage(this.don.img, this.don.f * this.don.w, 0, this.don.w, this.don.h, this.don.x, this.don.y, this.don.w, this.don.h);
	}
	
	fade() {
		if (this.fading == false) {
			this.opacity = 0;
			this.fading = true;

		}
		else {
			if (this.opacity < 1) {
				this.opacity += 0.025;
				c.globalAlpha = this.opacity;
			}
			else {
				this.opacity = 1;
				c.globalAlpha = this.opacity;

                music.play();
			}
		}
	}
	
	endSong() {
		music.pause();
		music.currentTime = 0;
	}
}

class titleClass {
    constructor() {
        this.bg = {
            img : new Image()
        }
        this.bg.img.src = "assets/ttl/bg.png"
		
		this.instr = {
			donImg: new Image(),
			katImg: new Image()
		}
		this.instr.donImg.src = "assets/ttl/instrDon.png";
		this.instr.katImg.src = "assets/ttl/instrKat.png";
		
		this.opacity = 0;
		this.fading = false;
    }
	
	fade() {
		if (this.fading == false) {
			this.opacity = c.globalAlpha;
			this.fading = true;
		}
		else {
			if (this.opacity > 0) {
				this.opacity -= 0.025;
				c.globalAlpha = this.opacity;
			}
			else {
				this.opacity = 1;
				c.globalAlpha = this.opacity;
				gamestate = "load";
			}
		}
	}
}

class loadingClass {
	constructor() {
		this.don = {
			x : 60,
			y : 508,
			img : new Image()
		}
		this.don.img.src = "assets/ld/don.png";
		
		this.uf = 0;
		this.text = "Loading";
		
		this.loadingTime = 0;
	}
	
	draw() {
		c.fillStyle = "black";
		c.fillRect(0, 0, cWidth, cHeight);
		
		c.drawImage(this.don.img, this.don.x, this.don.y);
		
		c.fillStyle = "white";
		c.strokeStyle = "purple";
		c.lineWidth = "6";
		c.font = "45px Taiko";
		c.strokeText(this.text, 50, 700);
		c.fillText(this.text, 50, 700);
	}
	
	loadingTextUpdate() {
		this.uf++;
		this.loadingTime++;
		
		if (this.uf == 40) {
			this.text = "Loading.";
		}
		else if (this.uf == 80) {
			this.text = "Loading..";
		}
		else if (this.uf == 120) {
			this.text = "Loading...";
		}
		else if (this.uf == 160) {
			this.text = "Loading";
			this.uf = 0;
		}
		
		if (this.loadingTime >= 180) {
            c.globalAlpha = 0;
			gamestate = "play";
			fadeIn = true;
		}
	}
}

class note {
    constructor(nType) {
        this.type = nType;
		this.img = new Image();
		this.img.src = "assets/fld/1.png";
        
        this.x = 1200;
        this.y = 221;
		
		this.xy = {x : 1200, y : 221};
		
		this.active = true;
		
		this.cleared = false;
		
				
		//note clear animation
		this.clr = {
			ar : false,
			percent : 0,
			sX : 0,
			sY : 0
		}
    }
	
	update() {
		if (this.cleared == false) {
			this.x -= (song.bpm / 60.3) * 2;
		}
		else {
			clearNote(this);
		}
	}
	
	loadNote() {
		if (this.type == 1) {
			this.img.src = "assets/fld/1.png";
		}
		else if (this.type == 2) {
			this.img.src = "assets/fld/2.png";
		}
		else {
			this.img.src = "";
		}
	}

	draw() {
		if (this.clr.ar == false) {
			if (this.img.src != "") {
				c.drawImage(this.img, this.x, this.y);
			}
		}
		else {
			var percent = this.clr.percent / 100;
			var xy = {};
			
			if (this.clr.percent == 0) {
				this.clr.sX = this.x;
				this.clr.sY = this.y;
			}
			
			if (this.clr.percent <= 100) {
				xy = getCubicBezierXYatPercent({
					x : this.clr.sX,
					y : this.clr.sY
				}, {
					x : 700,
					y : -120
				}, {
					x : 890,
					y : -120
				}, {
					x : 1194,
					y : 130
				},	percent);
				
				this.clr.percent += 3.5;
				
				c.drawImage(this.img, xy.x, xy.y);
			}
			else {
				this.cleared = true;
			}
		}
	}
}
