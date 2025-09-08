// function isEmpty(obj) {
//   const keys = Object.keys(obj);
//   return keys.length === 0 ? true : false;
// }

// // const obj = Object.create(null);
// // const obj2 = { prop: "value" };
// // console.log(Object.keys(obj));
// // console.log(Object.keys(obj2));
// // console.log(isEmpty(obj)); // -> true
// // console.log(isEmpty(obj2)); // -> false

// function isEmptyWithProtos(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// const protoObj = Object.create(null);
// const obj = Object.create(protoObj);
// isEmptyWithProtos(obj); // -> true
// isEmptyWithProtos({}); // -> true

// Задача из кат.академии books/Library

function Book(name, author, year, reader = null) {
  this.name = name;
  this.author = author;
  this.year = year;
  this.reader = reader;
}

Book.prototype = {
  isAvailable: function () {
    if (this.reader === null) {
      return true;
    }
    return false;
  },
  takeBook: function (readerName) {
    if (this.isAvailable()) {
      this.reader = readerName;
      return true;
    }
    return false;
  },
  returnBook: function () {
    if (this.reader !== null) {
      this.reader = null;
      return true;
    }
    return false;
  },
  changeBookName: function (newBookName) {
    if (newBookName !== this.name) {
      this.name = newBookName;
      return true;
    }
    return false;
  },
  changeAuthorName: function (newAuthorName) {
    if (newAuthorName !== this.author) {
      this.author = newAuthorName;
      return true;
    }
    return false;
  },
  getCurrentReader: function () {
    return this.reader;
  },
};

const book = new Book("Повести временных лет", "Лермонтов", 1850);

console.log(
  book.name,
  book.author,
  book.year,
  book.reader,
  book.isAvailable(),
  book.takeBook("Midhat"),
  book.reader,
  book.isAvailable(),
  book.changeBookName("Странные истории временных лет"),
  book.changeBookName("Странные истории временных лет"),
  book.name,
  book.changeAuthorName("Не Лермонтов"),
  book.changeAuthorName("Не Лермонтов"),
  book.author,
  book.getCurrentReader(),
  book.isAvailable(),
  book.takeBook("Misha"),
  book.getCurrentReader(),
  book.returnBook(),
  book.getCurrentReader(),
  book.takeBook("Misha"),
  book.getCurrentReader(),
  book.name,
  book.author,
);
