// https://github.com/kaziriyad7/assignment-js
/**
 * Function to calculate meter from kilometer
 */
function kilometerToMeter(km){
    // Data validation
    if(km < 0){
        return "Kilometer can't be less than 0"
    }else if(typeof km === 'string') {
        return "Kilometer can't be string"
    }

    // Operation
    const result = km * 1000;

    return result;
}

/**
 * Function to calculate the budget based on amount
 */
function budgetCalculator(watchAmount, phoneAmount, laptopAmount) {
    // Data validation
    if(watchAmount < 0 || phoneAmount < 0 || laptopAmount < 0){
        return "Amount can't be less than 0"
    }

    // Product price
    const watchPrice = 50;
    const phonePrice = 100;
    const laptopPrice = 500;

    // Calculated Price
    const totalWatchPrice = watchPrice * watchAmount;
    const totalPhonePrice = phonePrice * phoneAmount;
    const totalLaptopPrice = laptopPrice * laptopAmount;

    // Total budget price
    const totalPrice = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

    return totalPrice;
}

/**
 * Function to calculate the hotel cost based on discount
 */
function hotelCost(amountOfDay){
    // Data validation
    if(amountOfDay < 0){
        return "Amount of day can't be less than 0"
    }

    let totalCost = 0;

    // If the amount of day is equal or less than 10
    if(amountOfDay <= 10){
        totalCost = amountOfDay * 100;
    }else if (amountOfDay >= 11 && amountOfDay <= 20) { // If the amount of day is from 11 - 20
        const tenDaysCost = 10 * 100;
        const remainingDay = amountOfDay - 10;
        const remainingCost = remainingDay * 80;

        totalCost = tenDaysCost + remainingCost;
    }else if (amountOfDay >= 21) { // If the amount of day is more than 21
        const tenDaysCost = 10 * 100;
        const twentyDaysCost = 10 * 80;
        const remainingDays = amountOfDay - 20;
        const remainingCost = remainingDays * 50;

        totalCost = tenDaysCost + twentyDaysCost + remainingCost;
    }

    return totalCost;
}

/**
 * Find out the maximum length name from an array
 */
function megaFriend(names){
    let maxLength = 0;
    let maxNameIndex = 0;
    
    for(let i = 0; i < names.length; i++){
        if (names[i].length > maxLength){
            maxLength = names[i].length;
            maxNameIndex = i;
        }
    }

    return names[maxNameIndex];
}