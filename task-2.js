'use strict'
const total = 100;
const ordered = 99;

if (total >= ordered) {
    console.log('Заказ оформлен, с вами свяжется менеджер')
} else {
    console.log('На складе недостаточно твоаров!')
}

//Тернарный 
// const ordered = 120;
// const total = ordered <= 100 ? console.log('Заказ оформлен, с вами свяжется менеджер') : console.log('На складе недостаточно твоаров!');
