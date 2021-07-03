'use strict';
//1
const firstRow = prompt('напишите первую фразу');
const secondRow = prompt('напишите вторую фразу');
const CHAR = prompt('напишите букву');

function getRow(firstRow, secondRow) {
	let firstResult = findSymbol(firstRow, CHAR);
	let secondResult = findSymbol(secondRow, CHAR);

	if (firstResult === secondResult) {
		return 'в этих фразая: одинаковое кол-во букв ' + '"' + CHAR + '"';
	}

	return firstRow > secondRow ? firstRow : secondRow;
}

function findSymbol(row, char) {
	let count = 0;

	for (let i = 0; i < row.length; i++) {
		if (row.charAt(i) === char) {
			count++
		}
	}

	return count;
}

console.log('в этой фразе: \"' + getRow(firstRow, secondRow) + '\" больше букв ' + '"' + CHAR + '"');

alert('в этой фразе: \"' + getRow(firstRow, secondRow) + '\" больше букв ' + '"' + CHAR + '"');

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