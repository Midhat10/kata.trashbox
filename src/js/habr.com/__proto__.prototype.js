// function User(login, email) {
//   this.login = login;
//   this.email = email;
// }

// User.prototype.constructor = User;
// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// let user = new User("Midhat", "Studentbgau1@gmail.com");
// console.log(user);
// user.changeEmail("Midhat1997@mail.ru");
// console.log(user);

// function Admin(login, email, team) {
//   User.call(this, login, email);
//   this.team = team;
// }

// Admin.prototype = Object.create(User.prototype);
// Admin.prototype.constructor = Admin;
// Admin.prototype.changeTeam = function (newTeam) {
//   this.team = newTeam;
// };

// let admin = new Admin("Egor12", "Egor12@gmail.com", "Microsoft-Team");
// console.log(admin);
// admin.changeTeam("Evropa-team");
// console.log(admin);
// admin.changeEmail("Daniil12@gmail.com");
// console.log(admin);

var cloneProps = function (clonedObject, destinationObject) {
  for (var key in clonedObject) {
    destinationObject[key] = clonedObject[key];
  }
};
// Клонирование объектов с применением конструктора;
// var SomeConstructor = function (clonedObject) {
//   cloneProps(clonedObject, this);
// };

// var someExistingObjectToClone = {
//   foo: "bar",
// };

// var clone1 = new SomeConstructor(someExistingObjectToClone);
// var clone2 = new SomeConstructor(someExistingObjectToClone);

// console.log(clone1.foo === clone2.foo);
// клонирование Конструктора из Конструктора;
// var SomeConstructor = function () {
//   this.a = "cloned";
// };

// var AnotherConstructor = function () {
//   SomeConstructor.call(this);
// };

// var clone1 = new SomeConstructor();
// var clone2 = new AnotherConstructor();

// console.log(clone1, "sdfsd", clone2);
// клонирование Конструктора с применением Объекта;
// var existentObject = {
//   foo: "bar",
// };

// var SomeConstructor = function () {
//   cloneProps(existentObject, this);
// };

// var OtherConstructor = function () {
//   cloneProps(existentObject, this);
// };

// var clone1 = new SomeConstructor();
// var clone2 = new OtherConstructor();

// console.log(clone1, clone2);

// Наследование объекта с помощью Конструктора

// var existentObject = {
//   foo: "bar",
// };

// var SomeConstructor = function () {};
// SomeConstructor.prototype = existentObject;

// var inheritedObject = new SomeConstructor();

// window.console.log(inheritedObject.foo);

// Наследование Конструктора из Конструктора

// var FirstConstructor = function () {
//   this.foo = "bar";
// };

// var InheritedConstructor = function () {
//   FirstConstructor.call(this);
// };

// InheritedConstructor.prototype = {
//   bar: "foo",
// };

// InheritedConstructor.prototype.constructor = FirstConstructor;
// var inherited = new InheritedConstructor();
// console.log(inherited);

// Create Child object through ObjectParent and ConstructorParent;

// var ParentObject = {
//   foo: "bar",
// };

// var ParentConstructor = function () {
//   // cloneProps(ParentObject, this);
// };
// ParentConstructor.prototype = ParentObject;

// var ChildObject = new ParentConstructor();
// console.log(ChildObject);

// var ChildObjectGrownToParent = ChildObject;

// var AnotherConstructor = function () {};
// AnotherConstructor.prototype = ChildObjectGrownToParent;

// var SequentialChildObject = new AnotherConstructor();

// console.log(ChildObject instanceof ParentConstructor);
// console.log(SequentialChildObject instanceof ParentConstructor);
// console.log(SequentialChildObject instanceof AnotherConstructor);

//Хроника Решения

// var Pollen = {
//   season: "Spring",
// };
// // factory of constructors
// var FlowersFactory = function (proto) {
//   var FlowerEggCell = function (sort) {
//     this.sort = sort;
//   };
//   FlowerEggCell.prototype = proto;
//   return FlowerEggCell;
// };

// var FlowerZygote = FlowersFactory(Pollen);
// var galanthus = new FlowerZygote("Galanthus");
// console.log(galanthus);

// console.log();

// console.dir([].__proto__);
