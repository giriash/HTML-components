var btn = document.querySelector("#pop_btn");
var highestLayer = 99;
var count = 1;
var highestLayerArr = []
var container = document.querySelector("#container");
addEvent(btn, 'click', function(e){
	highestLayerArr[count - 1] = highestLayer;
	var popupWindow = new Popup(count, highestLayerArr);
	count++;
	//new Popup();
	highestLayerArr = popupWindow.getHighestLayerArr();
	highestLayer = popupWindow.getHighestLayer(highestLayerArr);
	container.appendChild(popupWindow.render());// "DADA"; //.appendChild(popupWindow);
});
