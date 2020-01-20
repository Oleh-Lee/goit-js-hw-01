let country;
let price;
const promptLable = prompt('Введите страну доставки');
if(promptLable === null){
    console.log('Отменено пользователем')
}
const input = promptLable.toLowerCase()
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
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`)
   break;

    case 'индия':
        country = "Индию"
        price = 80
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`)
        break;

    case 'ямайка':
        country = "Ямайку"
        price = 120
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`)
        break;
        
        default:
            console.log('В вашей стране доставка не доступна')        
}






// message = `Доставка в ${country} будет стоить ${price} кредитов`
//     console.log(message)
