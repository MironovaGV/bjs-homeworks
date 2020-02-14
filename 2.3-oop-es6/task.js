class Weapon {
    constructor(property) {
        this.name = property.name;
        this.attack = property.attack;
        this.durability = property.durability;
        this.baseDurability = property.durability;
        this.range = property.range;
    }

    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if ((this.durability * 100 / this.baseDurability) >= 30) {
            return this.attack;
        }

        if (this.durability === 0) {
            return 0;
        }

        return this.attack / 2;
    }

    isBroken() {
        if (this.durability > 0) {
            return false;
        }

        return true;
    }

}

class Arm extends Weapon {
    constructor() {
        super({
            name: 'Рука',
            attack: 1,
            durability: Infinity,
            range: 1,
        })
    }
}

class Bow extends Weapon {
    constructor() {
        super({
            name: 'Лук',
            attack: 10,
            durability: 200,
            range: 3,
        })
    }
}

class Sword extends Weapon {
    constructor() {
        super({
            name: 'Меч',
            attack: 25,
            durability: 500,
            range: 1,
        })
    }
}

class Knife extends Weapon {
    constructor() {
        super({
            name: 'Нож',
            attack: 5,
            durability: 300,
            range: 1,
        })
    }
}

class Staff extends Weapon {
    constructor() {
        super({
            name: 'Посох',
            attack: 8,
            durability: 300,
            range: 2,
        })
    }
}

class LongBow extends Bow {
    constructor() {
        super();
        this.version = this.name;
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor() {
        super();
        this.version = this.name;
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}

class StormStaff extends Staff {
    constructor() {
        super();
        this.version = this.name;
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

//Задание 3

class StudentLog {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (!(subject in this)) {
            this[subject] = [];
        }

        if (grade > 5 || grade <= 0) {
            return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.
${this[subject].length}`;
        }

        this[subject].push(grade);
        return this[subject].length;
    }

    getAverageBySubject(subject) {
        if (!(subject in this)) {
            return 0;
        }

        let sumGrade = 0;

        for (let i = 0; i < this[subject].length; i++) {
            sumGrade += this[subject][i];
        }
        return sumGrade / this[subject].length;

    }

    getTotalAverage() {
        let totalSum = 0,
            i = 0;
        for (let key in this) {
            if (key != 'name') {
                totalSum += this.getAverageBySubject(key);
                i++;
            }
        }
        if ( totalSum === 0) {
            return 0;
        }
        return totalSum / i;
    }
    

}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName());

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0

console.log(log.getTotalAverage());
