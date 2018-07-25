/*
* construnctor
*
* @para {Dom} selector
* @para {Dom} inputSelector
* @para {Dom} btnSelector
* @para {json} data
*/
var AutoComplete = function(selector, inputSelector, btnSelector, data){
	this.autoComplete = document.querySelector(selector);
	this.input = document.querySelector(inputSelector);
	this.btn = document.querySelector(btnSelector);
	this.data = data;
	this.init();
}

AutoComplete.prototype = {
	
	MonthName : ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemper', 'October', 'Novermber', 'December'],
	WeekName : ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'], 
	/*
	* initiate calendar header and table
	*/
	init : function(){
		this.render();
	},

	/*
	* DetectInputChange
	*
	* @ return {string} 
	*/

	render: function() {
		var self = this;
		var change = '';
		var matches;
		addEvent(self.input, 'keyup', function(e) {
			self.deleteOptions();
			change = self.input.value;
			matches = self.getMatches(change);
			// console.log('change: ', change);
			// console.log('match: ', matches);
			if(matches.length > 0) self.renderOptions(matches, 10);
		});
	},
	
	/*
	* find matches
	*
	* @ para {string}
	* @ return {array} 
	*/
	getMatches: function(change) {
		var self = this;
		return self.getFirstMatches(change.toLowerCase(), self.data).concat(self.getSecondMatches(change.toLowerCase(),self.data));
	},

	/*
	* find first matches
	* match from beginning positions
	*
	* @ para change {string}
	* @ para data {array}
	* @ return {array} 
	*/
	getFirstMatches: function(change, data) {
		return data.filter(str => str.toLowerCase().indexOf(change) === 0);
	},

	/*
	* find any matches
	* match from any postions
	* @ para change {string}
	* @ para data {array}
	* @ return {array} 
	*/
	getSecondMatches: function(change, data) {
		return data.filter(str => str.toLowerCase().indexOf(change) > 0);
	},

	/*
	* render menu list
	*
	* @ para {array}
	* @ para {number}
	*/
	renderOptions: function(matches, maxShow) {
		var self = this;
		var optionsContainer = document.createElement('div');
			optionsContainer.className = 'menu-container';
			optionsContainer.id = 'options';
		var len = matches.length <= maxShow ? matches.length : maxShow;
		for (var i = 0; i < len; i++) {
			optionsContainer.appendChild(self.createOption(matches[i]));
		}
		self.autoComplete.appendChild(optionsContainer);
	},


	/*
	* delete menu list
	*
	* @ para {array}
	*/
	deleteOptions: function() {
		var optionsContainer = document.querySelector('#options');
		if(optionsContainer) optionsContainer.remove();
	},

	/*
	* create single menu list item
	*
	* @ para {string}
	* @ return {DOM} 
	*/
	createOption: function(match) {
		var self = this;
		var option = document.createElement('div');
			option.className = 'menu-list';
			option.innerHTML = match;
		addEvent(option, 'click', function(e){
			self.input.value = match;
			self.deleteOptions();
		});
		return option;
	},

	/*
	* select option
	*
	* @ para {string}
	*/
	selectOption: function(option) {
		var self = this;
		self.input.value = option;
		self.deleteOptions();
	},

	capitalize: function(str) {
    	return str.charAt(0).toUpperCase() + str.slice(1);
	}
}