/* COPY PASTE AREA
,{
	"l1" : "",
	"l2" : ""
}
*/


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
		,{
			"l1" : "E nós temos alunos se conectando em todo o país, do jardim de infância ao último ano do ensino médio.",
			"l2" : "And we’ve got students tuning in from all across America, kindergarten through twelfth grade."
		}
,{
	"l1" : "Fico feliz que todos vocês puderam se juntar a nós no dia de hoje.",
	"l2" : "I’m glad you all could join us today."
}
,{
	"l1" : "Eu sei que para muitos de vocês hoje é o primeiro dia de aula.",
	"l2" : "I know that for many of you, today is the first day of school."
}
,{
	"l1" : "E, para aqueles do jardim de infância, ou começando o ensino fundamental II, ou ensino médio,",
	"l2" : "And for those of you in kindergarten, or starting middle or high school,"
}
,{
	"l1" : "este é o seu primeiro dia em uma nova escola,",
	"l2" : "it’s your first day in a new school,"
}
,{
	"l1" : "então é compreensível se estiver um pouco nervoso<b>s</b> (ansioso).",
	"l2" : "so it’s understandable if you’re a little nervous."
}
,{
	"l1" : "Eu imagino que existam alguns veteranos que estão se sentindo muito bem agora,",
	"l2" : "I imagine there are some seniors out there who are feeling pretty good right now,"
}
,{
	"l1" : "faltando apenas mais um ano para terminar.",
	"l2" : "with just one more year to go."
}
,{
	"l1" : "E não importa em qual série você está,",
	"l2" : "And no matter what grade you’re in,"
}
,{
	"l1" : "alguns de vocês estão provavelmente desejando que ainda fosse verão,",
	"l2" : "some of you are probably wishing it were still summer,"
}
,{
	"l1" : "para que pudessem ficar na cama mais um pouco hoje de manhã.",
	"l2" : "and you could’ve stayed in bed just a little longer this morning."
}





	        ]
	      };

	var	currentIdx = 0;
	 currentTxt = obama;
	var next = function() {
		if(currentIdx >=currentTxt.pages.length) {
			$('.l1').html('');
			$('.l2').html('');
			$('.end').html('FIM!');
			return;
		}

		$('.l1').html(currentTxt.pages[currentIdx].l1);
		$('.l2').html(currentTxt.pages[currentIdx].l2);
		currentIdx++;
	}

	// show first line when loading
	next();

	$('#next').click(function(e) {
		e.preventDefault();
		next();

	})
}
