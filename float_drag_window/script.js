var floatWindow = new FloatLayer('#float_layer');
//floatWindow.show();

var loginBtn = document.querySelector('#login_btn');
var loginLink = document.querySelector('#login_link');
var closeBtn = document.querySelector('#close_btn');
var loginForm = document.querySelector('#float_layer');
addEvent(loginLink, 'click', function(){

	floatWindow.show();
});

addEvent(loginBtn, 'click', function(){
	floatWindow.hide();
});

addEvent(closeBtn, 'click', function(){
	floatWindow.hide();
});

// addEvent(window, 'click', function(event){
// 	console.log("test");
// 	if(event.target == loginForm) {
// 		console.log("test1");
// 		loginForm.style.display = "none";
// 	}
// });

// var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == loginForm) {
//         loginForm.style.display = "none";
//     }
// }