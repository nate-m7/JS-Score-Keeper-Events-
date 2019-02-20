//var player1button = document.querySelectorAll("button")[0];
//var player2button = document.querySelectorAll("button")[1];
var player1button = document.querySelector("#p1");
var player2button = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1Display = document.querySelector("p1Display");
//var scoreInput = document.querySelector("input").value;
//console.log(scoreInput)

var winningScore = document.querySelector("p").textContent;
console.log(winningScore)
var index = winningScore.lastIndexOf(":");
var splicedScore = winningScore.substring(index+1, winningScore.length);
console.log(splicedScore)

var p1score = 0
var p2score = 0;
var h1 = document.querySelector("h1")
//.textContent = p1 + "to" + p2;
var scoreReached = false;

//while (p1score < splicedScore && p2score < splicedScore) {


	player1button.addEventListener("click", function() {
		p1score++
		h1.textContent = p1score + " to " + p2score;

	})
	player2button.addEventListener("click", function() {
		p2score++
		h1.textContent = p1score + " to " + p2score;
	})
//}

// if (p1score == splicedScore) {
// 	p1score.style.color = "green";
// }
// if (p2score == splicedScore) {
// 	p2score.style.color = "green";
// }
// h1.textContent = p1score + " to " + p2score;



reset.addEventListener("click", function() {
	p1score = 0;
	p2score = 0;
	h1.textContent = p1score + " to " + p2score;
})