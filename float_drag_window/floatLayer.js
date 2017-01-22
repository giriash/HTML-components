var FloatLayer = function(selector){
	this.element = document.querySelector(selector);
	this.dragging = false;
	this.drag(this.element);
}

FloatLayer.prototype.show = function(){
	this.element.style.display = 'block';
	this.element.style.left = '35%';
	this.element.style.top = '35%';
}

FloatLayer.prototype.hide = function(){
	this.element.style.display = 'none';
}


FloatLayer.prototype.drag = function(node){
	//there are some tips for drag
	//1. only relative or absolute position
	//2. mousemove should attach on document element to avoid delay in rapid move
	//3. use clientX & clientY to get mouse poisition
	var self = this;
	
	//step one: 
	addEvent(node, 'mousedown', function(event){
		self.dragging = true;
		var mouseX = event.clientX,
			mouseY = event.clientY;
		var nodeX = self.element.offsetLeft,
			nodeY = self.element.offsetTop;
		var disX = mouseX - nodeX,
			disY = mouseY - nodeY;

		var setNodePos = function(event){
			self.element.style.left = event.clientX - disX + 'px';
			self.element.style.top = event.clientY - disY + 'px';
		}
		if(self.dragging){
			console.log("test");
			addEvent(document, 'mousemove', setNodePos);
			addEvent(document, 'mouseup', function(){
				removeEvent(document, 'mousemove', setNodePos);
				self.dragging = false;
			});
			// addEvent(document, 'mousemove', function(event){setNodePos(event);});
			// addEvent(document, 'mouseup', function(event){
			// 	removeEvent(document, 'mousemove', function(event){
			// 		setNodePos(event);
			// 		self.dragging = false;
			// 	})
			// });
		}
		
	});
	
}