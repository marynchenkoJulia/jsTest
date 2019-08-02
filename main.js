// var decimalBtn = document.getElementById('calc-decimal');
// var clearBtn = document.getElementById('calc-clear');
// var backspaceBtn = document.getElementById('calc-backspace');
// var displayValElement = document.getElementById('calc-display');

// var displayVal = '0'; /*Simulates the zero on default*/
// var pendingVal; /* Undefined. '5+3' then 3 would be displayed while 5 is pendingVal*/
// var evalStringArray = []; /*Holds all values then can use eval()*/

// /* Array by class*/
// var calcNumBtns = document.getElementsByClassName('calc-num');
// var calcOperatorBtns = document.getElementsByClassName('calc-operator');

// /* clickObj automatically passes click event to the function*/
// var updateDisplayVal = (clickObj) => { 
// 	/* If '8' is clicked, then btnText = 8 */
// 	var btnText = clickObj.target.innerText;
// 	/* Check display if 0, then clear it and add numbers to it*/
// 	if(displayVal === '0'){
// 		displayVal = '';
// 	}

// 	displayVal += btnText;
// 	displayValElement.innerText = displayVal;
// }
// var performOperation = (clickObj) => {
// 	var operator = clickObj.target.innerText;
// 	switch(operator) {
// 		case '+':
// 			pendingVal = displayVal;
// 			displayVal = '0';
// 			displayValElement.innerText = displayVal;
// 			evalStringArray.push(pendingVal);
// 			evalStringArray.push('+');
// 			break;
// 		case '-':
// 			pendingVal = displayVal;
// 			displayVal = '0';
// 			displayValElement.innerText = displayVal;
// 			evalStringArray.push(pendingVal);
// 			evalStringArray.push('-');
// 			break;
// 		case 'x':
// 			pendingVal = displayVal;
// 			displayVal = '0';
// 			displayValElement.innerText = displayVal;
// 			evalStringArray.push(pendingVal);
// 			evalStringArray.push('*');
// 			break;
// 		case '÷':
// 			pendingVal = displayVal;
// 			displayVal = '0';
// 			displayValElement.innerText = displayVal;
// 			evalStringArray.push(pendingVal);
// 			evalStringArray.push('/');
// 			break;
// 		case '=':
// 			evalStringArray.push(displayVal);
// 			var evaluation = eval(evalStringArray.join(''));
// 			displayVal = evaluation;
// 			displayValElement.innerText = displayVal;
// 			evalStringArray = [];
// 			break;
// 		}
// }

// /* Places click event on numbers that triggers updateDisplayVal()*/
// for(var i=0; i < calcNumBtns.length; i++) {
// 	calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
// }
// /* Click event for operators*/
// for(let i=0; i < calcOperatorBtns.length; i++) {
// 	calcOperatorBtns[i].addEventListener('click', performOperation, false);
// }

// clearBtn.onclick = () => {
// 	displayVal = '0'
// 	evalStringArray = [];
// 	displayValElement.innerHTML = displayVal;
// }
// backspaceBtn.onclick = () => {
// 	/* Take index of last string and remove it */
// 	let lengthOfDisplayVal = displayVal.length;
// 	/* Array starts at 0 */
// 	/* The end slice is not included in returned slice */
// 	displayVal = displayVal.slice(0,lengthOfDisplayVal - 1);
// 	/* Check if displayVal is empty*/
// 	if(displayVal === '') {
// 		displayVal = '0';
// 	}
// 	displayValElement.innerHTML = displayVal;
// }
// decimalBtn.onclick = () => {
// 	/* not false is true */
// 	if(!displayVal.includes('.')){
// 		displayVal += '.';
// 	}
// 	displayValElement.innerHTML = displayVal;
// }















var oneBtn = document.getElementById('calc-one');
var twoBtn = document.getElementById('calc-two');
var threeBtn = document.getElementById('calc-three');
var fourBtn = document.getElementById('calc-four');
var fiveBtn = document.getElementById('calc-five');
var sixBtn = document.getElementById('calc-six');
var sevenBtn = document.getElementById('calc-seven');
var eightBtn = document.getElementById('calc-eight');
var nineBtn = document.getElementById('calc-nine');
var zeroBtn = document.getElementById('calc-zero');

var decimalBtn = document.getElementById('calc-decimal');
var clearBtn = document.getElementById('calc-clear');
var backspaceBtn = document.getElementById('calc-backspace');
var displayValElement = document.getElementById('calc-display-val');

var displayVal = '0';
var pending;
var evalStringArray = [];

var calcNumBtn = document.getElementsByClassName('calc-btn-num');
var calcOperatorBtn = document.getElementsByClassName('calc-btn-operator');

var updateDisplayVal = (clickObj) => {
	var btnText = clickObj.target.innerText;

	if (displayVal === '0') {
		displayVal = '';
	}

	displayVal += btnText;
	displayValElement.innerText = displayVal;
}

for (var i = 0; i < calcNumBtn.lenght; i++) {
	calcNumBtn[i].addEventListener('click', updateDisplayVal, false);
}

// oneBtn.addEventListener('click', function(){
// 	alert('working!');
// });


// window.addEventListener('load', function OnWindowLoaded() {
// 	var btns = [
// 	'1', '2', '3', '+',
// 	'4', '5', '6', '-',
// 	'7', '8', '9', '/',
// 	'0', '.', '=', 'c'
// 	];

// 	var calc = document.getElementById('calc');
// 	var textArea = document.getElementById('inputVal');
// 	btns.forEach(function (sign) {
// 		var signElement = document.createElement('div');
// 		signElement.className = 'btn';
// 		signElement.innerHTML = sign;
// 		calc.appendChild(signElement);
// 	});
// 	document.querySelectorAll('#calc-wrap .btn').forEach(function (button) {
// 		button.addEventListener('click', onButtonClick);
// 	});

// 	function onButtonClick(e) {
// 		if (e.target.innerHTML === 'c') {
// 			textArea.innerHTML = '0';
// 		} else if (e.target.innerHTML === '=') {
// 			textArea.innerHTML = eval(textArea.innerHTML);
// 		} else if (textArea.innerHTML === '0') {
// 			textArea.innerHTML = e.target.innerHTML;
// 		} else {
// 			textArea.innerHTML += e.target.innerHTML;
// 		}
// 	}
// });