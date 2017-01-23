
var courseName = ['','Math','Literature','Art','Total'];
var minScore = 50;
var maxScore = 100;
/*
* generate scores for each person
*
* @para {integer} num
* @returns {array}
*/
function scoreForEachPerson(num, max, min){
	var arr = new Array();
	var sum = 0;
	for (var i = 0; i < num; i++) {
		min = Math.ceil(min);
		max = Math.floor(max);
		var score =  Math.floor(Math.random() * (max - min)) + min;
		sum += score;
		arr.push(score);
	}
	arr.push(sum);
	return arr;

	
}

var data = {
	'student1' : scoreForEachPerson(courseName.length - 2, maxScore, minScore),
	'student2' : scoreForEachPerson(courseName.length - 2, maxScore, minScore),
	'student3' : scoreForEachPerson(courseName.length - 2, maxScore, minScore),
	'student4' : scoreForEachPerson(courseName.length - 2, maxScore, minScore),
	'student5' : scoreForEachPerson(courseName.length - 2, maxScore, minScore),
	'student6' : scoreForEachPerson(courseName.length - 2, maxScore, minScore),
	'student7' : scoreForEachPerson(courseName.length - 2, maxScore, minScore),
	'student8' : scoreForEachPerson(courseName.length - 2, maxScore, minScore),
	'student9' : scoreForEachPerson(courseName.length - 2, maxScore, minScore),
	'student10' : scoreForEachPerson(courseName.length - 2, maxScore, minScore),
	'student11' : scoreForEachPerson(courseName.length - 2, maxScore, minScore),
	'student12' : scoreForEachPerson(courseName.length - 2, maxScore, minScore),
	'student13' : scoreForEachPerson(courseName.length - 2, maxScore, minScore),
	'student14' : scoreForEachPerson(courseName.length - 2, maxScore, minScore),
	'student15' : scoreForEachPerson(courseName.length - 2, maxScore, minScore),
	'student16' : scoreForEachPerson(courseName.length - 2, maxScore, minScore),
	'student17' : scoreForEachPerson(courseName.length - 2, maxScore, minScore),
	'student18' : scoreForEachPerson(courseName.length - 2, maxScore, minScore)
}
var table = new FixedLineTable('#table', data, courseName);