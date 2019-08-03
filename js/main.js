var defaultVal = 0;
var currentOutput = defaultVal;
var tmpExpression = [];
var isPreviousSignEquality = false;

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
		currentOutput = eval(tmpExpression.join(''));
		tmpExpression = [currentOutput];
		isPreviousSignEquality = true;

		helpers.updateHtml();
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
	}
};

/**
* Add eventListener for numbers
*/
(function addListeners() {
	for (var i = 0; i < document.getElementsByClassName('calc-btn-num').length; i++) {
		document.getElementsByClassName('calc-btn-num')[i].addEventListener('click', clickHandlers.number);
	}

	for (var i = 0; i < document.getElementsByClassName('calc-btn-operator').length; i++) {
		document.getElementsByClassName('calc-btn-operator')[i].addEventListener('click', clickHandlers.operator);
	}

	document.getElementById('calc-clear').addEventListener('click', clickHandlers.ac);

	document.getElementById('calc-equals').addEventListener('click', clickHandlers.equality);
}());