function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    }
    let sound = animal.sound;

    return sound;
}


function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }

    let sumItem = 0;

    for (let i = 0; i < marks.length; i++) {
        sumItem += marks[i];
    }

    let roundedAverage = Math.round(sumItem / marks.length);

    return roundedAverage;
}

function checkBirthday(birthday) {
    const now = Date.now(),
          yearTimestamp = 31536000000,
          dayTimestamp = 86400000;

    let userBirthday = new Date(birthday),
        diff = now - userBirthday.getTime(),
        days = 0;
    
    for (let i = userBirthday.getFullYear(); i < new Date().getFullYear(); i++) {
        if (isLeapYear(i)) {
            days++;
        }
    }

    let age = diff / (yearTimestamp + (dayTimestamp * days));
    
    return age > 18;
}


function isLeapYear(year) {
    if (!(year % 100)) {
        if (!(year % 400)) {
            return true;
        }

        return false;
    }

    if (!(year % 4)) {
        return true;
    }

    return false;
}
