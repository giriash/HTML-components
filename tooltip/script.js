var fruits = ['apple', 'banana', 'orange', 'peach'];
var explanations = fruits.map(value => value);
var tooltipPositions = ['left', 'right', 'top', 'bottom'];
var container = document.querySelector('.container');

render(fruits);

function render(data) {
	for (var i = 0; i < data.length; i++) {
		var domContainer = document.createElement('div');
		var target = document.createElement('div');
			target.innerHTML = data[i];
			target.className = 'block';
		domContainer.appendChild(target);
		this.addTooltip(target, explanations[i], tooltipPositions[i]);
		container.appendChild(domContainer);
	}

}

function addTooltip(target, explaination, position) {
	return new ToolTip(target, explaination, position);
}