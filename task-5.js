'use strict'
let country;
let price;
const promptLable = prompt('Введите страну доставки');

if (promptLable === null || promptLable === '') {
    alert('Отменено пользователем')
    console.log('Отменено пользователем')

} else {
    const input = promptLable.toLowerCase();
    let message = `Доставка в ${country} будет стоить ${price} кредитов`
    switch (input) {

        case 'китай':
            country = "Китай"
            price = 100
            alert(`Доставка в ${country} будет стоить ${price} кредитов`)
            break;

        case 'чили':
            country = "Чили"
            price = 250
            alert(`Доставка в ${country} будет стоить ${price} кредитов`)
            break;

        case 'австралия':
            country = "Австралию"
            price = 170
            alert(`Доставка в ${country} будет стоить ${price} кредитов`)
            break;

        case 'индия':
            country = "Индию"
            price = 80
            alert(`Доставка в ${country} будет стоить ${price} кредитов`)
            break;

        case 'ямайка':
            country = "Ямайку"
            price = 120
            alert(`Доставка в ${country} будет стоить ${price} кредитов`)
            break;

        default:
            alert('В вашей стране доставка не доступна')
    }
}




// message = `Доставка в ${country} будет стоить ${price} кредитов`
//     console.log(message)
