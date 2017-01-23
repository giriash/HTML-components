/**
 * @constructor
 *
 * @param {int} X
 * @param {int} Y
 * @param {int} DIRECTION
 * @param {DOMelement} element
 */

var square = function(X, Y, DIRECTION,element,tableElement){
	this.X = X;
	this.Y = Y;
	this.DIRECTION = DIRECTION;
	this.box = document.querySelector(element);
	this.angles = [0,90,180,-90];
	//this.wallMap = new Array(row).fill(new Array(col).fill(false));
	this.wallMap = new Array(row); 
	for (var i = 0; i < row ; i++) {
		this.wallMap[i] = new Array(col);
		for (var j = 0; j < col; j++) {
			this.wallMap[i][j] = false;
		}
	}
	this.table = tableElement;
}

/**
 * travel
 *
 * @param {int} direction
 * @param {int} row
 * @param {int} col
 *
 */

square.prototype.travel = function(direction, row, col){
	var destX = this.X, destY = this.Y;
	switch(direction){
		case this.angles[0] : //UP
			destX = this.X == 1 ? 1 : this.X - 1;
			break;
		case this.angles[1] :  //RIGHT
			destY = this.Y == col - 1 ? this.Y : this.Y + 1;
			break;
		case this.angles[2] : //DOWN
			destX = this.X == row - 1 ? this.X : this.X + 1;
			break;
		case this.angles[3] : //LEFT
			destY = this.Y == 1 ? 1: this.Y - 1;
			break;
	}
	if(this.wallMap[destX][destY]){
		alert("Woops, a wall in front you! Please try another path.")
	} else {
		this.X = destX, this.Y = destY;
	}
	this.draw();
}

/**
 * turn
 *
 * @param {string} input GO|TUN RIG|TUN BAC|TUN LEF
 *
 */

square.prototype.turn = function(input){
	var angleIndex = this.angles.indexOf(this.DIRECTION);
	switch(input){
		case "GO" : 
			angleIndex = angleIndex;
			break;
		case "TUN RIG":  
			angleIndex = angleIndex == angles.length - 1 ? 0 : angleIndex + 1;
			break;
		case "TUN BAC":  
			angleIndex = angleIndex >= angles.length / 2 ? angleIndex - 2 : angleIndex + 2;
			break;
		case "TUN LEF": 
			angleIndex = angleIndex == 0 ? angles.length - 1 : angleIndex - 1;
			break;
	}
	this.DIRECTION = this.angles[angleIndex];
	this.draw();
}

/**
 * Move
 *
 * @param {string} input MOV TOP|MOV RIG|MOV BOT|MOV LEF
 * @param {int} row
 * @param {int} col
 *
 */

square.prototype.move = function(input, row, col){
	var angleIndex = this.angles.indexOf(this.DIRECTION);
	switch(input){
		case "MOV TOP" : 
			angleIndex = 0;
			break;
		case "MOV RIG":  
			angleIndex = 1
			break;
		case "MOV BOT":  
			angleIndex = 2;
			break;
		case "MOV LEF": 
			angleIndex = 3;
			break;
	}
	this.DIRECTION = this.angles[angleIndex];
	this.travel(this.DIRECTION, row, col);
	this.draw();
}

/**
 * draw
 */
square.prototype.draw = function(){
	this.box.style.top = 50 * this.X + 'px';
	this.box.style.left = 50 * this.Y + 'px';
	this.box.style.transform = 'rotate(' + this.DIRECTION + 'deg)';
}

/**
 * build new wall
 *
 */
square.prototype.build = function(){
	var wall = this.getWallPosition();
	var wallX = wall[0], wallY = wall[1];
	if( wallX == false || wallY == false || this.wallMap[wallX][wallY]){
		console.log("woops");
	} else {
		this.wallMap[wallX][wallY] = true;
		this.drawWall(wallX,wallY);
	}

} 

/**
 * get next wall position
 *
 * @return {array}
 */
square.prototype.getWallPosition = function(){
	var wallX, wallY;
	switch(this.DIRECTION){
		case this.angles[0] : //UP
			wallX = this.X == 1 ? false : this.X - 1;
			wallY = this.Y;
			break;
		case this.angles[1] :  //RIGHT
			wallY = this.Y == col - 1 ? false : this.Y + 1;
			wallX = this.X;
			break;
		case this.angles[2] : //DOWN
			wallX = this.X == row - 1 ? false : this.X + 1;
			wallY = this.Y;
			break;
		case this.angles[3] : //LEFT
			wallY = this.Y == false ? 1: this.Y - 1;
			wallX = this.X;
			break;
	}
	return [wallX, wallY];
}

/**
 * render wall
 */
square.prototype.drawWall = function(x,y){
	document.getElementsByTagName('tr')[x].childNodes[y].style.background = '#ccc';
}

/**
 * brush wall
 */
square.prototype.brushWall = function(color){
	var wall = this.getWallPosition();
	var wallX = wall[0], wallY = wall[1];
	if(this.wallMap[wallX][wallY]){
		document.getElementsByTagName('tr')[wallX].childNodes[wallY].style.background = color;
	} else {
		console.log("no wall");
	}
	
}

/**
 * clean wall
 */
square.prototype.refreshWall = function(){
	for(var i = 1; i < row; i++){
		for(var j = 1; j < col; j++){
			if(this.wallMap[i][j]){
				this.wallMap[i][j] = false;
				document.getElementsByTagName('tr')[i].childNodes[j].style.background = '#fff';
			}
		}
	}
}

/**
 * generate random walls
 */
square.prototype.randomWall = function(){
	this.refreshWall();
	var wallNum = getRandomIntInclusive(10, 30);
	while(wallNum>0){
		var row = getRandomIntInclusive(1, 10);
		var col = getRandomIntInclusive(1, 10);
		this.wallMap[row][col] = true;
		this.drawWall(row,col);
		wallNum--;
	}
}
/**
 * generate random number
 * 
 * @para {int} min
 * @para {int} max
 * @return {int} random number
 */
function getRandomIntInclusive(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1)) + min;
}