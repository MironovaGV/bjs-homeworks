"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}


function calculateTotalMortgage(percent, contribution, amount, date) {
    let localPercent = Number.parseInt(percent),
        localContribution = Number.parseInt(contribution),
        localAmount = Number.parseInt(amount);

    if (isNaN(localPercent)) {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    }

    if (isNaN(localContribution)) {
        return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
    }

    if (isNaN(localAmount)) {
        return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
    }

    let returnAmont = localAmount - localContribution;
    let myDate = new Date(date);
    let now = new Date();
    let diff = ((myDate.getFullYear() - now.getFullYear()) * 12) + (myDate.getMonth() - now.getMonth());
    let p = localPercent / 100 / 12;

    let perMonth = returnAmont * (p + p / ((Math.pow((1 + p), diff)) - 1));
    let totalAmount = parseFloat(parseFloat(diff * perMonth).toFixed(2));

    console.log(totalAmount);
    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name === '' || name === null || name === undefined) {
        name = 'Аноним';
    }
    
    return `Привет, мир! Меня зовут ${name}`;
}



