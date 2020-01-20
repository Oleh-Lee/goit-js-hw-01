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
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`)
            alert(`Доставка в ${country} будет стоить ${price} кредитов`)
            break;

        case 'чили':
            country = "Чили"
            price = 250
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`)
            alert(`Доставка в ${country} будет стоить ${price} кредитов`)
            break;

        case 'австралия':
            country = "Австралию"
            price = 170
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`)
            alert(`Доставка в ${country} будет стоить ${price} кредитов`)
            break;

        case 'индия':
            country = "Индию"
            price = 80
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`)
            alert(`Доставка в ${country} будет стоить ${price} кредитов`)
            break;

        case 'ямайка':
            country = "Ямайку"
            price = 120
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`)
            alert(`Доставка в ${country} будет стоить ${price} кредитов`)
            break;

        default:
            console.log('В вашей стране доставка не доступна')
            alert('В вашей стране доставка не доступна')
    }
}




// message = `Доставка в ${country} будет стоить ${price} кредитов`
//     console.log(message)
