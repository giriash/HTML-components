let rating = 0;
const startCounts = 5;

class star {
	constructor(index) {
		this.index = index;
		this.starEle = this.create();
	}

	get star() {
		return this.starEle;
	}

	create() {
		let starEle = document.createElement('li');
			starEle.className = 'fa fa-star star star-grey';
			starEle.id = `star-${this.index}`;

		return starEle;
	}
}

var canvas = document.querySelector('#canvas');

var onClickStar = function(rating) {
	for(var i = 0; i < rating; i++) {
		var curStar = document.querySelector(`#star-${i+1}`);
		if(curStar) {
			curStar.className = 'fa fa-star star star-yellow';
		}
		
	}

	for(var i = rating; i < startCounts; i++) {
		var curStar = document.querySelector(`#star-${i+1}`);
		if(curStar) {
			curStar.className = 'fa fa-star star star-grey';
		}
	}
}

for(var n = 0; n < 5; n++) {
	var starI = new star(n + 1);
	starI.star.addEventListener('click', onClickStar.bind(this, n + 1), false);
	canvas.appendChild(starI.star);
}
