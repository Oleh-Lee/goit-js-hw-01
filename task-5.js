'use strict'
let country;
let price;
const promptLable = prompt('Введите страну доставки');

if (promptLable === null) {
    alert('Отменено пользователем')
}else if(promptLable === ''){
    alert('Ничего не введенно')
} else {
    const input = promptLable.toLowerCase();
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
