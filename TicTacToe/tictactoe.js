/*
* construnctor
*
* @para {Dom} selector
* @para {json} data
* @para {array} courses
*/
var Tictactoe = function(selector, n){
    this.board = document.querySelector(selector);
    this.n = n;
    this.step = 0;
    this.gaveOver = this.n === this.step;
    this.record = new Array(n);
    for(var i = 0; i < this.n; i++) {
        this.record[i] = new Array(this.n);
    }
};

Tictactoe.prototype = {
    init : function(){
        this.board.appendChild(this.render());
    },

    /*
     * render board
     *
     */

    render : function() {
        const self = this;
        const size = this.n;
        var board = document.createElement('table');

        for(let i = 0 ; i < size; i++) {
            let row = document.createElement('tr');
            for(let j = 0 ; j < size; j++) {
                let col = document.createElement('td');
                //col.innerHTML = i * this.n + j + 1;
                addEvent(col, 'click', function(e){self.action(i,j,col)});
                row.appendChild(col);
            }
            board.appendChild(row);
        }


        return board;
    },

    /*
     * click event
     *
     */
    action : function(row, col, cell) {
        if(this.step >= this.n * this.n) return;
        if(this.gaveOver) {
            console.log('gameOver');
            return;
        }
        if(this.duplicateAction(cell)) {
            console.log('invalid input');
            return;
        }

        this.step++;
        const position = {
            row: row,
            col: col
        };

        if(this.step % 2) {
            this.palyer1Move(position, cell);
        } else {
            this.palyer2Move(position, cell);
        }
    },

    palyer1Move : function(position, cell) {
        this.renderCell(position, cell, 'X');
        if(this.win(position)) {
            console.log('player1 win');
            this.gaveOver = true;
            //console.log('records: ', this.record);
        }
    },

    palyer2Move : function(position, cell) {
        this.renderCell(position, cell, 'O');
        if(this.win(position)) {
            console.log('player2 win');
            this.gaveOver = true;
            //console.log('records: ', this.record);
        }
    },

    renderCell : function(position, cell, content) {
        const row = position['row'];
        const col = position['col'];
        this.record[row][col] = content;
        cell.innerHTML = content;
    },

    duplicateAction : function(cell) {
        return cell.innerHTML === 'X' || cell.innerHTML === 'O';
    },

    win : function(position) {
        const row = position['row'];
        const col = position['col'];
        return this.rowWin(row) || this.colWin(col) || this.diagonalWin1(row, col) || this.diagonalWin2(row, col);

    },

    rowWin : function(row) {
        const positions = this.record;
        for(var i = 0; i < this.n - 1; i++) {
            if(positions[row][i] !== positions[row][i + 1]) {
                return false;
            }
        }
        return true;
    },

    colWin : function(col) {
        const positions = this.record;
        for(var i = 0; i < this.n - 1; i++) {
            if(positions[i][col] !== positions[i + 1][col]) {
                return false;
            }
        }
        return true;
    },

    diagonalWin1 : function(row, col) {
        if(row !== col) return false;
        const positions = this.record;
        for(var i = 0 ; i < this.n - 1; i++) {
            if(positions[i][i] !== positions[i + 1][i + 1]) {
                return false;
            }
        }
        return true;
    },

    diagonalWin2 : function(row, col) {
        if(row + col !== this.n - 1) return false;
        const positions = this.record;
        for(var i = 0 ; i < this.n - 1; i++) {
            if(positions[i][this.n - 1 - i] !== positions[i + 1][this.n - i - 2]) {
                return false;
            }
        }
        return true;
    },

}