/**
 * @constructor
 *
 * @param {DOMelement} element
 * @param {int} row
 * @param {int} col
 * 
 */

var generateTable = function(element){
	this.table = document.querySelector(element);
	this.row = row;
	this.col = col;
}

/**
 * generate table
 *
 */
generateTable.prototype.create = function(){
	var table_tr = [];
	for (var i = 0; i < this.row; i++) {
		table_tr[i] = document.createElement("tr");
		this.table.appendChild(table_tr[i]);
		var table_td = [];
		for (var j = 0; j < this.col; j++) {
			table_td[j] = document.createElement("td");
			if (i == 0 && j > 0) {
				table_td[j].innerHTML = j;
			} else if(i > 0 && j == 0){
				table_td[j].innerHTML = i;
			}
			table_tr[i].appendChild(table_td[j]);
		}
	}
}