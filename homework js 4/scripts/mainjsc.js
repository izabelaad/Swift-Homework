function monthsOfTheYear() {
	var monthsObj = document.querySelector('#months');
	var monthsNamesArr = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	for (var i = 0; i < monthsNamesArr.length; i++) {
		var optionElements = document.createElement('option');
		optionElements.innerHTML = monthsNamesArr[i];
		optionElements.value = i;
		monthsObj.appendChild(optionElements);
	}
}

function monthsSOfTheYear() {
	var monthsObj = document.querySelector('#monthsS');
	var monthsNamesArr = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	for (var i = 0; i < monthsNamesArr.length; i++){
		monthsObj.innerHTML += '<option>' + monthsNamesArr[i] + '</option>';
	}
}

//в тази функция, проблемът е, че прикачва Event-а само за съществуващите Li-та
/*function markedItems() {
	var list = document.querySelectorAll('ul li');


	for(var i = 0; i < list.length; i++) {
		list[i].addEventListener('click', function() {
			if(this.className == 'checked') {
				this.classList.remove('checked');
			} else {
				this.classList.add('checked');
			}
		})
	}
}*/


//Event Delegation-The problem solver for dynamically created elements
function markedItems() {
	var list = document.querySelector('ul');

	list.addEventListener('click', function(ev) {
		if (ev.target.tagName == 'LI') {
    ev.target.classList.toggle('checked');
  		}
	}, false);

}

function textField() {
	var textObj = document.querySelector('#textfield');
	var ul = document.querySelector('ul');

	var addObj = document.querySelector('#add');

	addObj.addEventListener('click', function(){
		console.log(textObj.value);

		if(checkForPresence(textObj.value)){
			alert("This element already exists!");
		} else {
			var newListItem = document.createElement('li');
			newListItem.innerHTML = textObj.value;
			ul.appendChild(newListItem);
		}
	})
}

function checkForPresence(text) {
	var list = document.querySelectorAll('ul li');
	console.log(list);

	for(var i = 0; i <= list.length-1; i++) {
		if(text == list[i].innerHTML) {
			return true;
		}
	}
	return false;
}





window.addEventListener('load', function() {
	monthsOfTheYear();
	monthsSOfTheYear();
	markedItems();
	textField();
})