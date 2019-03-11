let person1 = {
    name: 'Zishan',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

let person2 = {
    name: 'Ashley',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

let person3 = {
    name: 'Fehzan',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

let person4 = {
    name: 'James',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

let person5 = {
    name: 'Starla',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

function Person (name, city, age) {
    this.name = name;
    this.age = age;
    this.city = city;
}

Person.prototype.sayHey = function () {
    console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`);
}

let p11 = new Person ('Zishan', 'Chicago', '29');
let p22 = new Person ('Ashley', 'Dallas', '28');
let p33 = new Person ('Fehzan', 'Boston', '29');
let p44 = new Person ('Starla', 'Addison', '2');
let p55 = new Person ('James', 'Chicago', '101');

p11.sayHey();
p22.sayHey();
p33.sayHey();
p44.sayHey();
p55.sayHey();

