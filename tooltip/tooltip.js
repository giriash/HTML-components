/*
* construnctor
*
* @para {Dom} target
* @para {string} tooltipContent
* @para {string} position
* @para {json} data
*/
var ToolTip = function(target, tooltipContent, position){
	this.target = target;
	this.tooltipContent = tooltipContent;
	this.position = position;
	return this.init();
};

ToolTip.prototype = {
	/*
	* initiate a tooltip
	*/
	init : function(){
		return this.render();
	},

	/*
	* render tooltip
	*
	* @ return {string} 
	*/

	render: function() {
		var self = this;
		var positionClass = self.position + '-tooltip';
		var toolTip = document.createElement('div');
			toolTip.innerHTML = self.tooltipContent;
			toolTip.classList.add('tooltip', positionClass);
		addEvent(self.target, "mouseover", function(e){
			toolTip.style.display = 'block';
		});
		addEvent(self.target, "mouseout", function(e){
			toolTip.style.display = 'none';
		});
		self.target.appendChild(toolTip);
	}
}