var user_command = document.querySelector('#command_input');
var btns = document.querySelector('#button_list');

var angles = [0,90,180,-90];
var TUN = ['TUN LEF', 'TUN RIG', 'TUN BAC'];
var TRA = ['TRA TOP','TRA RIG','TRA BOT','TRA LEF'];
var MOV = ['MOV TOP','MOV RIG','MOV BOT','MOV LEF'];
var row = 11, col = 11; // table size

//t.childNodes[2].childNodes[6].style.color = '#eee';
//draw table
var map = new generateTable('#table_container',row,col);
map.create();

//generate a new square;
var s = new square(5,5,angles[0],'#square',map);
s.draw();

//attach key event
var commands = new command('#command_input','#command_col',s,map);
addEvent(user_command,'keyup', function(e){
	commands.processUserInput();
});

//attach click to exec button
addEvent(btns, 'click', function(e){
	switch(e.target.id){
		case 'do_btn' : 
			commands.exec();
			break;
		case 'refresh_btn' :
			commands.fresh();
			break;
		case 'random_btn' :
			s.randomWall();
			break;
		default: 
			break;
	}
});
