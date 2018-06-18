var fruits = ['apple', 'banana', 'orange', 'peach'];
var explanations = fruits.map(value => 'tooptip for ' + value);
var tooltipPositions = ['left', 'right', 'top', 'bottom'];
var container = document.querySelector('.container');

render(fruits);

function render(data) {
	for (var i = 0; i < data.length; i++) {
		var domContainer = document.createElement('div');
		var target = document.createElement('div');
			target.innerHTML = data[i];
			target.className = 'block';
		// var toolTip = document.createElement('div');
		// 	toolTip.innerHTML = explanations[i];
		// 	toolTip.className = 'tooltip';
		var toolTip = new ToolTip(target, explanations[i], tooltipPositions[i]);
		domContainer.appendChild(target);
		domContainer.appendChild(toolTip);
		container.appendChild(domContainer);
	}

}