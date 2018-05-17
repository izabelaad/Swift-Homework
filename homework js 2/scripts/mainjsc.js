function sum (numbers) {
	var result = 0;
	for (var i = 0; i <= numbers.length - 1; i++) {
		result += numbers[i];
	}
	return result;
}

console.log(sum([1, 2, 3]));

console.log(sum([5, 6, 4]));

console.log(sum([2, 6, 8, 16, 8]));


function suma (numbers) {
	var result = 0;
	for (var i = 0; i <= numbers.length - 1; i++) {
		result += numbers[i];
	}
	return "Hi Emo! That's my result: " + result;
}

alert(suma([2, 5, 10, 20]));