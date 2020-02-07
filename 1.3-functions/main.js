
//Задача 1
function getSolutions(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    let disc = {
        D: d
    };
    if (d < 0) {
        return disc;
    }

    disc.roots = [];
    let x1;

    if (d == 0) {
        x1 = (-b / (2 * a));
        disc.roots.push(x1);
        return disc;
    }

    x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    disc.roots.push(x1, x2);

    return disc;
};

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`«Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}».`);
    console.log(`«Значение дискриминанта: ${result.D}»`);

    if (result.D < 0) {
        console.log(`«Уравнение не имеет вещественных корней»`);
    }

    if (result.D == 0) {
        console.log(`«Уравнение имеет один корень X₁ = ${result.roots}»`);
    }

    if (result.D > 0) {
        console.log(`«Уравнение имеет два корня. X₁ = ${result.roots[0]}», X₂ = ${result.roots[1]}»`);
    }
};

showSolutionsMessage(7, 5, 1);

//Задача 2

let x = {
    algebra: [4, 3, 4, 5],
    french: [4, 5, 4, 3],
    geometry: [4, 5, 4, 3],
    russian: [4, 3, 4, 5],
    music: [4, 3, 4, 5],
    english: [4, 5, 4, 3],
    poetry: [4, 5, 4, 3],
};

function getAverageScore(data) {
    let result = {},
        average = [];

    for (key in data) {
        result[key] = dataSum(data[key]);
        average.push(result[key]);
    };
    result.average = dataSum(average);

    return result;
}

function dataSum(arr) {
    let sumItem = 0;

    for (let i = 0; i < arr.length; i++) {
        sumItem += arr[i];
    };
    return sumItem / arr.length;
};

console.log(getAverageScore(x));

//Задача 3



function getPersonData(secretData) {

     return {
        firstName: getName(secretData.aaa),
        lastName: getName(secretData.bbb),
     };
   
}

function getName(key) {
    if (key == 1) {
        return "Эмильо";
    }

    if (key == 0) {
        return "Родриго";
    }
}

console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));
console.log(getPersonData({
    aaa: 1,
    bbb: 0
}));
console.log(getPersonData({
    aaa: 0,
    bbb: 0
}));
