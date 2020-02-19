var defaultVal = 0;
var currentOutput = defaultVal;
var tmpExpression = [];
var isPreviousSignEquality = false;

var numBtns = document.getElementsByClassName('calc-btn-num');
var operatorBtns = document.getElementsByClassName('calc-btn-operator');

var clickHandlers = {
	/**
	* AC handler
	*/
	ac: function () {
		currentOutput = defaultVal;
		tmpExpression = [];

		helpers.updateHtml();
	},

	/**
	* Handle click on number button
	*/
	number: function () {
		var numVal = parseInt(this.innerHTML);

		if (!isPreviousSignEquality) {
			helpers.addToTmpExpression(numVal);
		} else {
			tmpExpression = [numVal];
			currentOutput = numVal;

			helpers.updateHtml();
		}

		isPreviousSignEquality = false;
	},

	/**
	* Handle click on operator button
	*/
	operator: function () {
		var operator = this.innerHTML;
		isPreviousSignEquality = false;
		helpers.addToTmpExpression(operator);
	},

	/**
	* Handle click on equality button
	*/
	equality: function () {
		currentOutput = helpers.calculate();
		tmpExpression = [currentOutput];
		isPreviousSignEquality = true;

		helpers.updateHtml();
	},

	backspace: function () {
		// tmpExpression.pop();
		// currentOutput = tmpExpression.join('');
		// helpers.updateHtml();

		for (var j = 0; j < tmpExpression.length; j++) {
			tmpExpression.pop();
			currentOutput = tmpExpression.join('');
			helpers.updateHtml();
		}
	}
};

var helpers = {
	/**
	* update calculator display value
	*/
	updateHtml: function () {
		document.getElementById('calc-display-val').innerHTML = currentOutput;
	},

	/**
	* Add value to expression array
	*/
	addToTmpExpression: function (val) {
		tmpExpression.push(val);
		currentOutput = tmpExpression.join('');

		this.updateHtml();
	},

	calculate: function () {
		var a = new Function('calcStr', 'return calcStr');
		console.log(typeof tmpExpression.join(''));
		return a('1+6');
	}
};

/**
* Add eventListener for numbers
*/
(function addListeners() {
	for (var i = 0; i < numBtns.length; i++) {
		numBtns[i].addEventListener('click', clickHandlers.number);
	}

	for (var i = 0; i < operatorBtns.length; i++) {
		operatorBtns[i].addEventListener('click', clickHandlers.operator);
	}

	document.getElementById('calc-clear').addEventListener('click', clickHandlers.ac);
	document.getElementById('calc-equals').addEventListener('click', clickHandlers.equality);

	document.getElementById('calc-backspace').addEventListener('click', clickHandlers.backspace);
}());