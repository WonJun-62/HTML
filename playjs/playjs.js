window.onload = setCTime; //윈도우에 페이지 로드가 완료되면 동작 수행

function calc(){
	var a = document.getElementById("x").value;
	var b = document.getElementById("y").value;
	var s = Number(a) + Number(b);
	document.getElementById("sum").value = s;
}

var computerNumber = Math.floor(Math.random()*100*1); //정답
var nGuesses = 0; //추측 횟수

function guess(){
	var num = parseInt(document.getElementById("user").value);
	//var result = document.getElementById("result").value
	nGuesses++;

	if(num == computerNumber)
		document.getElementById("result").value = "정답";
	else if (num > computerNumber)
		document.getElementById("result").value = "큽니다";
	else
		document.getElementById("result").value = "작습니다";

	document.getElementById("guesses").value = nGuesses;
}

function replay(){
	document.getElementById("guesses").value = "";
	nGuesses = 0; //추측 횟수 초기화
	document.getElementById("result").value = "";
	computerNumber = Math.floor(Math.random()*100*1);
	document.getElementById("answer").value = computerNumber;
}

function setCTime(){
	var now = new Date();
	var month;

	if(now.getMonth()==0)
		month = 'Jan';
	else if(now.getMonth()==1)
		month = 'Feb';
	else if(now.getMonth()==2)
		month = 'Mar';
	else if(now.getMonth()==3)
		month = 'Apr';
	else if(now.getMonth()==4)
		month = 'May';
	else if(now.getMonth()==5)
		month = 'Jun';
	else if(now.getMonth()==6)
		month = 'Jul';
	else if(now.getMonth()==7)
		month = 'Aug';
	else if(now.getMonth()==8)
		month = 'Sep';
	else if(now.getMonth()==9)
		month = 'Oct';
	else if(now.getMonth()==10)
		month = 'Nov';
	else
		month = 'Dec';


	var s = month + " " + now.getDate()+ " " + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
	document.getElementById('ctime').innerHTML = s;
	setTimeout('setCTime()', 1000);

	//console.log(now.getMonth());
}

//constants
var POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", 
	"obsequious", "dissonant", "today", "idempotent"];
var MAX_GUESSES = 6;

//global variables
var guesses = "";					//내가 입력한 문자열 (guess한 문자)
var guessCount = MAX_GUESSES;		//남은 guess수 (목숨)
var word;							//맞춰야할 단어 (정답)

function newGame(){
	var rindex = Math.floor(Math.random()*POSSIBLE_WORDS.length);
	word = POSSIBLE_WORDS[rindex];
	guesses = "";
	guessCount = MAX_GUESSES;
	document.getElementById("guessbutton").disabled = false;
	console.log(word);
	updatePage();
}

function updatePage(){
	//update hangman image
	document.getElementById("hangmanpic").src = "hangman"+guessCount+".gif";
	//update clue string
	var clueString = "";																	
	for(var i=0; i<word.length;i++){
		clueString += " _ ";
	}
	document.getElementById("clue").innerHTML = clueString; 
	//update guess string
	document.getElementById("guessstr").innerHTML = "Guesses : " + guesses;

}

function guessLetter(){
	//guesses에 letter 문자 추가
	var letter = "";
	letter = document.getElementById("hguess").value;

	if(guesses.indexOf(letter)<0) {//guesses에 letter가 없으면
		guesses += letter;
		//guessCount 갱신
		var exist = word.indexOf(letter);
		if(exist<0)
			guessCount += -1;
	}
	else //letter가 이미 guesses에 포함된 문자
		return;
	
	//console 확인
	console.log(word);
	console.log(letter);
	console.log(guesses);
	console.log(guessCount);

	updatePage();
}















