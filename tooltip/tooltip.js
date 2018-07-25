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
}

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
		var toolTip = document.createElement('div');
			toolTip.innerHTML = self.tooltipContent;
			toolTip.className = 'tooltip';
		addEvent(self.target, "mouseover", function(e){
			console.log('over');
			toolTip.style.display = 'block';
		});
		addEvent(self.target, "mouseout", function(e){
			console.log('out');
			toolTip.style.display = 'none';
		});
		return toolTip;
	}

}