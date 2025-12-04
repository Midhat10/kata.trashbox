class Person {
  constructor(firstName, lastName, date) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getAge = function () {
      let dateNow = new Date();
      let birthDate = new Date(date);
      let dif = dateNow.getFullYear() - birthDate.getFullYear();
      if (
        birthDate.getMonth() >= dateNow.getMonth() &&
        birthDate.getDate() > dateNow.getDate()
      ) {
        dif = dif - 1;
      }
      return dif;
    };
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Account {
  constructor(person, account) {
    this.person = person;
    this.account = account;
    this.arr = [];
  }

  addMoney(amount, description = "Получение от другого") {
    this.account += amount;
    this.arr.push({
      timestamp: new Date().getTime(),
      target: "in",
      amount: amount,
      description: description,
    });
  }

  withdrawMoney(amount, description = "Перевод другому") {
    this.account -= amount;
    this.arr.push({
      timestamp: new Date().getTime(),
      target: "out",
      amount: amount,
      description: description,
    });
  }

  getAmount() {
    return this.account;
  }

  getAccountHistory() {
    return this.arr;
  }

  static transfer(fromAccount, toAccount, amount) {
    fromAccount.withdrawMoney(amount);
    toAccount.addMoney(amount);
  }
}

const alex = new Person("Alexey", "Petrov", "1994-05-22");
const alexAccount = new Account(alex, 1000);
const helen = new Person("Helen", "Smith", "1990-06-06");
const helenAccount = new Account(helen, 400);

alexAccount.addMoney(1000, "Зарплата");
const amount = alexAccount.getAmount();
alexAccount.withdrawMoney(amount * 0.1, "Налоги");
// console.log(new Account().transfer(alexAccount, helenAccount, 100));
Account.transfer(alexAccount, helenAccount, 100);
console.log(alexAccount.getAccountHistory());
console.log(helenAccount.getAmount()); // 500
console.log(alexAccount.getAmount()); // 1700

// const dob = "1993-9-26";

// const date = new Date(dob);
// const current_date = new Date();

// console.log(date);
// console.log(current_date);
// age = current_date - date;
// console.log(age);

// age = new Date(age).getFullYear();
// console.log(age - 1970);

// age;

// let nowDate = new Date();
// let birthDate = new Date(dob);

// let dif = nowDate.getFullYear() - birthDate.getFullYear();
// console.log(dif);
// if (
//   birthDate.getMonth() >= nowDate.getMonth() &&
//   birthDate.getDate() > nowDate.getDate()
// ) {
//   dif = dif - 1;
// }
// console.log(dif);

// console.log(birthDate.getMonth(), nowDate.getMonth());
