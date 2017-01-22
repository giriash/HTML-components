var floatWindow = new FloatLayer('#float_layer');
floatWindow.show();

var loginBtn = document.querySelector('#login_btn');
var loginLink = document.querySelector('#login_link');
var closeBtn = document.querySelector('#close_btn');

addEvent(loginLink, 'click', function(){
	console.log("test");
	floatWindow.show();
});

addEvent(loginBtn, 'click', function(){
	floatWindow.hide();
});

addEvent(closeBtn, 'click', function(){
	floatWindow.hide();
});