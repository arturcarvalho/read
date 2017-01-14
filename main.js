
window.onload = function() {
	var obama = {
	    "name" : "obama",
	    "l1" : "pt",
	    "l2" : "en",
	    "description" : "Discurso do Obama",
	    "pages" : [
	        {
	            "l1" : "O presidente: Olá a todos – Como está todo mundo hoje?",
	            "l2" : "The President: Hello everyone – how’s everybody doing today?"
	        },
	        {
	            "l1" : "Eu estou aqui com alunos na Wakefield High School em Arlington, Virginia.",
	            "l2" : "I’m here with students at Wakefield High School in Arlington, Virginia."
	        }
	        ]
	      };

	var	currentIdx = 0;
	var currentTxt = obama;
	var next = function() {
		$('.l1').html(currentTxt.pages[currentIdx].l1);
		$('.l2').html(currentTxt.pages[currentIdx].l2);
		currentIdx++;
	}

	// show first line when loading
	next();

	$('#next').click(function(e) {
		e.preventDefault();
		console.log(obama.name);
		next();

	})
}
