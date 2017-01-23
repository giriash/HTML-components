/*
* construnctor
*
* @para {Dom} selector
* @para {json} data
* @para {array} courses
*/

var FixedLineTable = function(selector, data, courses){
	this.table = document.querySelector(selector);
	this.data = data;
	this.courses = courses;
	this.sortedName = [];
	this.initData();
	this.trClone = null; //avoid last row flipping when overlap with the title row
}

/*
* transfer keys in json to array, easy to sort
*/

FixedLineTable.prototype.initData = function(){
	this.sortedName = [];
    for (var key in this.data) {
    	this.sortedName.push(key);
    }
	this.loadScores();
}

/*
* load scores by sortedName
*/

FixedLineTable.prototype.loadScores = function(){
	//clean previous
	removeChildrenNodes(this.table); //in public.js
	/////////generate title
	var titleTR = document.createElement('tr');
	for(var i = 0; i < this.courses.length; i++){
		var titleTD = document.createElement('td');
		titleTD.className = 'title';
		var titleName = document.createElement('p');
		titleName.innerHTML = this.courses[i];
		titleTD.appendChild(titleName);
		if(i > 0){
			this.generateSort(titleTD);
		}
		titleTR.appendChild(titleTD);
	}
	this.table.appendChild(titleTR);
	/////////generate scores
	for(var i = 0; i < this.sortedName.length; i++){
		var student = document.createElement('tr');
		var studentName = document.createElement('td');
		studentName.innerHTML = this.sortedName[i];
		student.appendChild(studentName);
		for (var j = 0; j < this.courses.length - 1; j++) {
			var score = document.createElement('td');
			score.innerHTML = this.data[this.sortedName[i]][j];
			student.appendChild(score);
		}
		this.table.appendChild(student);
	}
	this.fixedTr();
} 

/*
* add sort buttons and attach click-to-sort function to them
*
* @para {Dom} ele 
*/

FixedLineTable.prototype.generateSort = function(ele){
	var self = this;

	var sortedBy = ele.children[0].innerHTML;
	var courseIndex = self.courses.indexOf(sortedBy);

	var btnbox = document.createElement('div');
		btnbox.className = 'button-container';
	var upBtn = document.createElement('button');
		upBtn.className = 'uptri';
		addEvent(upBtn,'click',function(e){
			console.log("test up");
			self.sortedName.sort(function(a,b){
				return self.data[a][courseIndex - 1] - self.data[b][courseIndex - 1];
			});
			self.loadScores();
		})
	var downBtn = document.createElement('button');
		downBtn.className = 'downtri';
		addEvent(downBtn,'click',function(e){
			self.sortedName.sort(function(a,b){
				return self.data[b][courseIndex - 1] - self.data[a][courseIndex - 1];
			});
			self.loadScores();
		})
	btnbox.appendChild(upBtn);
	btnbox.appendChild(downBtn);
	ele.appendChild(btnbox);

} 

/*
* fixed first row function
*
* @para {Dom} ele 
*/
FixedLineTable.prototype.fixedTr = function(){
	var firstRow = this.table.children[0];
	this.trClone = firstRow.cloneNode(true);
	console.log(this.trClone);
	var self = this;
	function scorll() {
		var scrollY = document.documentElement.scrollTop || document.body.scrollTop; //the distance we scrolled
		var elementY = self.table.offsetHeight; // the height of element;
		var distanceY = self.table.offsetTop; // the distance from window top to element top
		if(scrollY >= distanceY && scrollY <= distanceY + elementY){
			// var tr1 = self.table.children[1];
			// if(tr1 !== self.trClone){
			// 	self.table.children[0].insertBefore(self.trClone, tr1);
			// }
			

			firstRow.style.position = 'fixed';
			firstRow.style.top = 0;
		} else {
			// var tr1 = self.tableEle.children[1];
   //          if (tr1 === self.trClone) {
   //              self.table.children[0].removeChild(self.trClone);
   //          }
			firstRow.style.position = '';
		}
	}
	//scorll();
	addEvent(window, 'scroll', function(){scorll();});
} 