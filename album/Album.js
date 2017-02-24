
var Album = function(num, selector){
	this.num = num;
	this.container = document.querySelector(selector);
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