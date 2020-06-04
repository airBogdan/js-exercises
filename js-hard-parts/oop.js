// Working with Object Literals
// Challenge 1/1
// Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:
// create an empty object
// add a name property to the newly created object with its value being the 'name' argument passed into the function
// add an age property to the newly created object with its value being the 'age' argument passed into the function
// return the object
function makePerson(name, age) {
    return {
        name,
        age
    }
}

// Using Object.create
// Challenge 1/3
// Inside personStore object, create a property greet where the value is a function that logs "hello".
const personStore = {
   greet() {
       console.log('hello');
   },
    introduce() {
       console.log(`hi, my name is ${this.name}`);
    }
};

// Challenge 2/3
// Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.
// Challenge 3/3
// Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".
function personFromPersonStore(name, age) {
    var obj = Object.create(personStore);
    obj.name = name;
    obj.age = age;
    return obj;
}

// const sandra = personFromPersonStore('Sandra', 26);
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'
// sandra.introduce(); //-> Logs 'hi, my name is Sandra

// Using the NEW keyword
// Challenge 1/3
// Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'.
function PersonConstructor() {
    this.greet = function greet() {
        console.log('hello');
    }
}

// const simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'

// Challenge 2/3
// Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.
// Challenge 3/3
// Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".
function personFromConstructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function greet() {
        console.log('hello');
    }
    this.introduce = function intro() {
        console.log(`hi, my name is ${this.name}`);
    }
}

// const mike = new personFromConstructor('Mike', 30);
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'
// mike.introduce(); // -> Logs 'Hi, my name is Mike'

// Using ES6 Classes
// Challenge 1/2
// Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string 'hello'.
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log('hello');
    }
}

// const george = new PersonClass;
// george.greet(); // -> Logs 'hello'

// Challenge 2/2
// Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce method. When called, introduce should log the string 'Hello World, my name is [name]'.
class DeveloperClass extends PersonClass {
    introduce() {
        console.log(`Hi my name is ${this.name}`);
    }
}
// const thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'

// EXTENSION: Subclassing
// Challenge 1/5
// Create an object adminFunctionStore that has access to all methods in the userFunctionStore object, without copying them over individually.
const userFunctionStore = {
    sayType: function() {
        console.log("I am a(n) " + this.type);
    }
}
const adminFunctionStore = Object.create(userFunctionStore);

// Challenge 2/5
// Create an adminFactory function that creates an object with all the same data fields (and default values) as objects of the userFactory class, but without copying each data field individually.
// Challenge 3/5
// Then make sure the value of the 'type' field for adminFactory objects is 'Admin' instead of 'User'.
// Challenge 4/5
// Make sure that adminFactory objects have access to adminFunctionStore methods, without copying them over.
// Challenge 5/5
// Created a method called sharePublicMessage that logs 'Welcome users!' and will be available to adminFactory objects, but not userFactory objects. Do not add this method directly in the adminFactory function.
function AdminFactory(name, score) {
    return Object.create(userFactory(name, score));
}

function userFactory(name, score) {
    let user = Object.create(userFunctionStore);
    user.type = "User";
    user.name = name;
    user.score = score;
    return user;
}

userFunctionStore.sharePublicMessage = function sharePublicMessage() {
    console.log('welcome users');
}

// const adminFromFactory = AdminFactory("Eva", 5);
// adminFromFactory.type = "Admin";
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"

// EXTENSION: MIXINS
// Mixins are a tool in object-oriented programming that allows objects to be given methods and properties beyond those provided by their inheritance.
// For this challenge, complete the missing code, giving all of the robotMixin properties to robotFido. Do this in a single line of code, without adding the properties individually.
class Dog {
    constructor() {
        this.legs = 4;
    }
    speak() {
        console.log('Woof!');
    }
}

const robotMixin = {
    skin: 'metal',
    speak: function() { console.log(`I have ${this.legs} legs and am made of ${this.skin}`) },
}

// let robotFido = new Dog();
// Object.assign(Dog.prototype, robotMixin);
// robotFido.speak() // -> Logs "I have 4 legs and am made of metal"

