'use strict'
let input;
let total = 0;

while (true) {
    input = prompt('Введите число');

    if (input === null) {
        break;
    } else if (isNaN(input)) {
        alert('It is not a number')
        continue;
    }

    input = Number(input)
    total += input
}
alert(total)
console.log(total)