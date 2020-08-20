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

alert('в этой фразе: \"' + getRow(firstRow, secondRow) + '\" больше букв \"а\"');

console.log('в этой фразе: \"' + getRow(firstRow, secondRow) + '\" больше букв \"а\"');
