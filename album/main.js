var img_num = 1;
var album = new Album(img_num, '#container');

var select = document.querySelector('select');
addEvent(select,'change',function(e){
	img_num = e.target.value;
	album.num = img_num;
	album.init(album.num);
	console.log('num' + album.num);
});

