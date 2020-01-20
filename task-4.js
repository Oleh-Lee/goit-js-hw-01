'use strict'
const credits = 23580;
const pricePerDroid = 3000;
const input = prompt('Укажите количество дроидов которые хотите купить.')
const totalPrice = input * pricePerDroid;
let message;
if (input === null) {
    message = 'Отмененно пользователем'
} else if (credits > totalPrice) {
    message = `Вы купили ${input} дроидов, на счету осталось ${credits - totalPrice} кредитов.`
} else if (credits < totalPrice) {
    message = 'Недостаточно средств на счету!'
} else if (isNaN(input)) {
    message = ` **${input}** не числос, введите число`
}
alert(message)
console.log(message)