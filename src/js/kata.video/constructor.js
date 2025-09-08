// let Person, person, anotherPerson, Developer, developer;

// Person = function (name) {
//   this.name = name;
// };

// Person.prototype.greet = function () {
//   console.log("Hello, my name is " + this.name);
// };

// person = new Person("Jack");
// console.log(person.name);
// person.greet();
// console.log(person.constructor);
// console.log(Person.prototype.constructor);

// anotherPerson = new Person("Bruce");
// console.log(anotherPerson.name);
// anotherPerson.greet();

// console.log(anotherPerson instanceof Person);
// console.log(Person.prototype.isPrototypeOf(anotherPerson));

// Developer = function (name, skills) {
//   Person.apply(this, arguments);
//   this.skills = skills || [];
// };

// Developer.prototype = Object.create(Person.prototype);
// Developer.prototype.constructor = Developer;

// developer = new Developer("John", ["ruby", "ror", "python"]);
// console.log(developer.name);
// console.log(developer.skills);
// console.log(developer.greet());
// console.log(developer instanceof Developer);
// console.log(developer instanceof Person);

// console.log(Object.prototype.toString.call(45));
