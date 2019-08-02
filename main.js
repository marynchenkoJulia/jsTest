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
	console.log(clickObj);
	var btnText = clickObj.target.innerText;

	if (displayVal === '0') {
		displayVal = '';
	}

	displayVal += btnText;
	displayValElement.innerText = displayVal;
};

for (var i = 0; i < calcNumBtn.length; i++) {
	calcNumBtn[i].addEventListener('click', updateDisplayVal);
}