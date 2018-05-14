var parsing = true;

function load(files) {
    var name1 = files[0].name;
    var name2 = files[1].name;
    
    if (name1.split(".").pop() == "tja") {
        song.tja = files[0];
    }
    else if (name2.split(".").pop() == "tja") {
        song.tja = files[1];
    }
    
    if (name1.split(".").pop() == "wav"
            || name1.split(".").pop() == "mp3"
            || name1.split(".").pop() == "ogg") {
        song.wav = files[0];
    }
    else if (name2.split(".").pop() == "wav"
            || name2.split(".").pop() == "mp3"
            || name2.split(".").pop() == "ogg") {
        song.wav = files[1];
    }
    
	if (parsing == true) {
		parse(song.tja);
	}
	
	//i is for the position in the song.chart array
	//j is basically i but will not increment if the note being added is a blank or unimplemented note.
	
	//run through entire chart array
	for (i = 0, j = 0; i < song.chart.length; i++) {
		//if the note isnt a blank note or unimplemented		
		if (song.chart[i] != 0 && song.chart[i] != 3 && song.chart[i] != 4) {
			//instantiate new note and push to the noteArray
			song.noteArray.push(new note(song.chart[i]));
			//calculate note position based on array position and song timing offset
			song.noteArray[j].x += 35 * i;
			song.noteArray[j].id = j;
			//increment j since the last note was valid.
			j++; 
		}
    }
	
	for (i = 0; i < song.noteArray.length; i++) {
		song.noteArray[i].loadNote();
	}
	
    startGame();
}

function parse(tja) {
    var reader = new FileReader();
	var meta = [];
	var chart = [];
	
	reader.onload = function(e) {
		var content = reader.result;
		
		var lines = content.split("\r");
		
		for (var i = 0; i < lines.length; i++) {
			if (lines[i] == "\n") {
				lines.splice(i, 1);
			}
		}
		
		for (var i = 0; i < lines.length; i++) {
			if (lines[i].includes("\n")) {
				lines[i] = lines[i].replace("\n", "");
			}
			
			if (lines[i].includes(",")) {
				lines[i] = lines[i].replace(",", "");
			}
		}
		
		for (var i = 0; i < lines.length; i++) {
			if (lines[i] == "#START") {
				
				meta = lines.slice(0, i);
				chart = lines.slice(i+1, lines.length-1);
			}
		}
		
		for (var i = 0; i < meta.length; i++) {
			if (meta[i].includes("DEMOSTART:")) {
				meta[i] = meta[i].replace("DEMOSTART:", "");
			}
		}
		
		var tmpChart = [];
		
		for (var i = 0; i < chart.length; i++) {
			if (chart[i] != "#GOGOSTART" && chart[i] != "#GOGOEND") {
				tmpChart.push(chart[i]);
			}
		}
		
		chart = tmpChart.slice(0);
		
		chart = chart.join("");
		
		chart = chart.split("");
		
		for (var i = 0; i < chart.length; i++) { 
			chart[i] = parseInt(chart[i], 10); 
		}
	}
	reader.readAsText(tja);
	
	song.chart = chart.slice(0);
}

function startGame() {
    music.src = URL.createObjectURL(song.wav);
    
    music.onend = function() {
        URL.revokeObjectURL(this.src);
    }
	
    playfield.drmh.don.play();
    titleVoice.play();
}

function clearNote(note) {
	var id = note.id;
	
	var result = song.noteArray.findIndex(function(obj) {
		return obj.id == id;
	});
	
	song.noteArray.splice(result, 1);
	
	console.log("cleared note, id: " + result + " noteArray length: " + song.noteArray.length);
}

// cubic bezier percent is 0-1
function getCubicBezierXYatPercent(startPt, controlPt1, controlPt2, endPt, percent) {
	
    var x = CubicN(percent, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
    var y = CubicN(percent, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
    
	return ({
        x: x,
        y: y
    });
}

// cubic helper formula at percent distance
function CubicN(pct, a, b, c, d) {
    var t2 = pct * pct;
    var t3 = t2 * pct;
	
    return a + (-a * 3 + pct * (3 * a - a * pct)) * pct + (3 * b + pct * (-6 * b + b * 3 * pct)) * pct + (c * 3 - c * 3 * pct) * t2 + d * t3;
}

function endAfter3Seconds() {
	
}
