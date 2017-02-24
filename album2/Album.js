
var Album = function(selector, colNum){
	this.container = document.querySelector(selector);
	this.colNum = colNum;
	this.allImages = this.container ? Array.prototype.slice.call(this.container.querySelectorAll(".single-box")) || [];
	this.init(this.num);
}

Album.prototype.init = function(num){
	var self = this;
	removeChildrenNodes(self.container);
	console.log("test");
	for (var i = 0; i < num; i++) {
		var img = document.createElement('img');
		img.src = 'src/' + (i+1) + '.jpg';
		this.container.appendChild(img);
	}
}