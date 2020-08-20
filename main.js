'use strict';
//1
const firstRow = prompt('напишите первую фразу');
const secondRow = prompt('напишите вторую фразу');

function getRow(firstRow, secondRow) {
	function findSymbol(row) {
		let count = 0;

		for (let i = 0; i < row.length; i++) {
			if (row.charAt(i) === 'а') {
				count++
			}
		}
		return count;
	}

	let result1 = findSymbol(firstRow);

	let result2 = findSymbol(secondRow);

	if (result1 > result2) {
		return firstRow;
	} else {
		return secondRow;
	}
}

console.log('в этой фразе: \"' + getRow(firstRow, secondRow) + '\" больше букв \"а\"');

alert('в этой фразе: \"' + getRow(firstRow, secondRow) + '\" больше букв \"а\"');

//2
const phone = prompt('напишите номер телефона');

function formattedPhone(phone) {
	let phoneArray = phone.split('');

	for (let i = 0; i < phoneArray.length; i++) {
		if (i === 2) {
			phoneArray.splice(i, '', ' (');
		} else if (i === 6) {
			phoneArray.splice(i, '', ') ');
		} else if (i === 10) {
			phoneArray.splice(i, '', '-');
		} else if (i === 13) {
			phoneArray.splice(i, '', '-');
		}
	}

	let result = phoneArray.join('');
	return result;
}

console.log('отформатированный номер телефона теперь выглядит вот так: \"' + formattedPhone(phone));

alert('отформатированный номер телефона теперь выглядит вот так: \"' + formattedPhone(phone));