var command = function(element,colElement,squareElement,tableElement){
	this.input = document.querySelector(element);
	this.index = document.querySelector(colElement);
	this.square = squareElement;
	this.table = tableElement;
	this.inputArr = [];
}

//transfer user input into command array and generate column number in the grey block
command.prototype.processUserInput = function(){
	var result = this.input.value.toUpperCase().split('\n');
	var topPosition = this.input.scrollTop;
	var i = 1;
	var arr = [];
	result.forEach(function(){	
		arr.push('<div>' + i++ + '</div>');
	});
	this.index.innerHTML = arr.join('');
	this.index.scrollTop = topPosition;
	this.inputArr = result;
}


//pressExec
command.prototype.exec = function(){
	
	var arr = this.inputArr;
	var square = this.square;
	var table = this.table; 
	var thisCommand = arr[0].trim();
	if(thisCommand.substring(0,2) == 'GO'){
		var text = 'GO';
		var time = thisCommand.length > 2 ? parseInt(thisCommand.substring(3)) : 1;
	} else{
		var text = thisCommand.substring(0,7);
		var time = thisCommand.length > 7 ? parseInt(thisCommand.substring(8)) : 1;
	}		

	command.prototype.singleExec(text, time, square, table);
	var i = 1;
	var timer = setInterval (function(){
		if(i < arr.length){
			thisCommand = arr[i].trim();
			if(thisCommand.substring(0,2) == 'GO'){
				text = 'GO';
				time = thisCommand.length > 2 ? parseInt(thisCommand.substring(3)) : 1;
			} else{
				text = thisCommand.substring(0,7);
				time = thisCommand.length > 7 ? parseInt(thisCommand.substring(8)) : 1;
			}	
			
			command.prototype.singleExec(text, time, square, table);
			i++;
		} else{
			clearInterval(timer);
		}
	}, 1000)

}

//exec sigle line of input
command.prototype.singleExec = function (text, time, square, table){
	if(text == "GO"){
			while(time > 0){
				square.travel(square.DIRECTION, table.row, table.col);
				time--;
			}
	}else if(TUN.includes(text)){
			while(time > 0){
				square.turn(text);
				time--;
			}
	}else if(TRA.includes(text)){
			while(time > 0){
				square.travel(square.angles[TRA.indexOf(text)], table.row, table.col);
				time--;
			}
	}else if(MOV.includes(text)){
			while(time > 0){
				square.move(text, table.row, table.col);
				time--;
			}
	}else if(text == "BUILD"){
		square.build();
	}else if(text.substring(0,3) == "BRU"){
		square.brushWall(text.substring(4));
	} else {
		alert("Please use valid commands.");	}
}


//refresh
command.prototype.fresh = function(element){
	this.inputArr = [];
	this.input.value = '';
	this.index.innerHTML = '';
	this.index.scrollTop = 0;
	this.square.X = 5;
	this.square.Y = 5;
	this.square.refreshWall();
	this.square.DIRECTION = this.square.angles[0];
	this.square.draw();
}