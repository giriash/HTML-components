var Popup = function(count, highestLayerArr) {
	//this.container = document.querySelector(container);
	//this.btn = document.querySelector(btn);
	this.count = count;
	this.dragging = false;
	this.highestLayer = highestLayerArr[this.count - 1];
	this.highestLayerArr = highestLayerArr;
	//this.init();
}

Popup.prototype.render = function() {
	
	var self = this;
	var float_layer = document.createElement("div");
		float_layer.className = 'float-block';
		var top = self.count * 3 + 34;
		var left = self.count * 3 + 34;
		float_layer.style.top = top + "%";//'35% + 10 * ' (this.count - 1) + 'px';
		float_layer.style.left = left + '%';
		addEvent(float_layer,'click', function(e){
			// var z = document.defaultView.getComputedStyle(float_layer,null)['z-index'];
			// console.log("test z-index: " + z);
			self.highestLayer = self.getHighestLayer(self.highestLayerArr) + 1; 
			float_layer.style.zIndex = self.highestLayer;
			self.highestLayerArr[self.count] = self.highestLayer;
		});
	var subheader = document.createElement("div");
		subheader.className = 'subheader';
	var subheaderH1 = document.createElement("h1");
	var subheaderH1Content = document.createElement("span");
		subheaderH1Content.innerHTML = 'float layer ' + self.count;
	var subheaderBtn = document.createElement("button");
		subheaderBtn.className = 'close-btn';
		subheaderBtn.innerHTML = 'X';
		addEvent(subheaderBtn,'click', function(e){self.close(float_layer);});

	subheaderH1.appendChild(subheaderH1Content);	
	subheaderH1.appendChild(subheaderBtn);
	subheader.appendChild(subheaderH1);

	var usernameInput = document.createElement("input");
	var passwordInput = document.createElement("input");
	var loginBtn = document.createElement("button");
		loginBtn.className = 'login-btn';
		loginBtn.innerHTML = 'Login';
		addEvent(loginBtn,'click', function(e){self.login();});
	float_layer.appendChild(subheader);
	float_layer.appendChild(usernameInput);
	float_layer.appendChild(passwordInput);
	float_layer.appendChild(loginBtn);
	float_layer.style.zIndex = self.highestLayer;
	self.drag(float_layer);
	return float_layer;
}

Popup.prototype.close = function(element) {
	console.log("close");
	element.style.display = 'none';

}

Popup.prototype.login = function() {
	console.log("login");
}

Popup.prototype.getHighestLayer = function(arr) {
	this.highestLayer = Math.max.apply(Math, arr);
	return this.highestLayer;
}

Popup.prototype.getHighestLayerArr = function() {
	return this.highestLayerArr;
}

Popup.prototype.drag = function(node){
	//there are some tips for drag
	//1. only relative or absolute position
	//2. mousemove should attach on document element to avoid delay in rapid move
	//3. use clientX & clientY to get mouse poisition
	var self = this;
	
	//step one: 
	addEvent(node, 'mousedown', function(event){
		self.dragging = true;
		node.style.zIndex = self.highestLayer + 1; 
		self.highestLayer++;
		var mouseX = event.clientX,
			mouseY = event.clientY;
		var nodeX = node.offsetLeft,
			nodeY = node.offsetTop;
		var disX = mouseX - nodeX,
			disY = mouseY - nodeY;

		var setNodePos = function(event){
			node.style.left = event.clientX - disX + 'px';
			node.style.top = event.clientY - disY + 'px';
		}
		if(self.dragging){
			console.log("test");
			addEvent(document, 'mousemove', setNodePos);
			addEvent(document, 'mouseup', function(){
				removeEvent(document, 'mousemove', setNodePos);
				self.dragging = false;
			});
		}
	});
	
}

