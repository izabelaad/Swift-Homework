var name = 'Izabela';

if(name == 'Petur' || name == 'Ivan' || name == 'Georgi') {
	console.log(true);
} else {
	console.log(false);
}


var name = 'Izabela';

if(name == 'Izabela') {
	console.log(true);
	if(name == 'Petur' || name == 'Ivan' || name == 'Georgi') {
		console.log(true);
	} else {
		console.log(false);
	}
} else {
	console.log(false);
}