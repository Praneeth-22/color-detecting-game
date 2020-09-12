var nsquares=6;
var colors = generateRandomColors(nsquares);
var bt=document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var easy =document.getElementById("easy");
var hard =document.getElementById("hard");

colorDisplay.textContent = pickedColor;

bt.addEventListener("click",function(){
	colors=generateRandomColors(nsquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	this.textContent="New Colors";
	messageDisplay.textContent="";
	for (var i = 0; i<squares.length; i++) {
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="#ecf5ff";
})

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {

		var clickedColor = this.style.backgroundColor;
		
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Bravo..";
			reset.textContent="Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}
		 else {
			this.style.backgroundColor ="#ecf5ff";
			messageDisplay.textContent = "oops";
		}
	});
}

function changeColors(color) {
	
	for(var i = 0; i < squares.length; i++) {
		
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	nsquares=3;
	colors =generateRandomColors(nsquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
})
hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	colors =generateRandomColors(nsquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}
})
