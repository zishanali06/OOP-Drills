
//BELOW IS OBJECT LITERALS
//object literal 1
let person1 = {
    name: 'Zishan',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};
//object literal 2
let person2 = {
    name: 'Ashley',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};
//object literal 3
let person3 = {
    name: 'Fehzan',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};
//object literal 4
let person4 = {
    name: 'James',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};
//object literal 5
let person5 = {
    name: 'Starla',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

//This IS USING PSEUDO CLASSES and METHODS TO DO SAME AS ABOVE
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

//THIS IS SETTING UP SAME AS BOTH CODES ABOVE BUT IN ES6
//****EASIEST WAY!!!***
class Nperson {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    };

    sayHello() {
        console.log(`Test 2: Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`);
    };
};

let p111 = new Nperson ('Zishan', 'Chicago', '29');
let p222 = new Nperson ('Ashley', 'Dallas', '28');
let p333 = new Nperson ('Fehzan', 'Boston', '29');
let p444 = new Nperson ('Starla', 'Addison', '2');
let p555 = new Nperson ('James', 'Chicago', '101');

p111.sayHello();
p222.sayHello();
p333.sayHello();
p444.sayHello();
p555.sayHello();

//Start of Part 2

class Vehicle {
    constructor(manufacturer, numofwheels){
        this.manufacturer = manufacturer;
        this.numofwheels = numofwheels;
    }

    aboutVehicle() {
        console.log(`This is a Vehicle, it was made by ${this.manufacturer} and it ${this.numofwheels} wheels.`);
    }
}

//This class inherits from the Vehicle Class
class Truck extends Vehicle {
    //CAN HAVE VARIABLES FROM PARENT AS WELL AS NEW ONES TO EXTEND TO IN THIS CONSTRUCTOR
    constructor(manufacturer, numofwheels, doors, hastruckbed){
        //SUPER IS USED TO CONTRUCT FROM PARENT CLASS
        super(manufacturer, numofwheels);
        this.doors = doors;
        this.hastruckbed = hastruckbed;
    }
}

class Sedan extends Vehicle {
    constructor(manufacturer, numofwheels, size, mpg){
        super(manufacturer, numofwheels);
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This is a Vehicle, it was made by ${this.manufacturer} and it ${this.numofwheels} wheels. This is a ${this.size} car that does ${this.mpg} mpg!`);
    }
}

class Motorcycle extends Vehicle {
    constructor(manufacturer, numofwheels, stering, nodoors){
        super(manufacturer, numofwheels);
        this.stering = stering;
        this.nodoors = nodoors;
    }
}

let newcar = new Sedan('Ford', 4, 'medium', 30);

//calling new class made above
console.log(newcar.numofwheels);
newcar.aboutVehicle();


