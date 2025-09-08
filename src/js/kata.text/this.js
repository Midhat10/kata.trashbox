// const obj = {
//   fn() {
//     console.log(this);
//   },
// };
// obj.fn(); // obj
// const fn = obj.fn;
// fn(); // глобальный контекст (undefined в strict моде и window без него)

const someFn = (callback) => {
  callback();
  /*
  Контекст все равно будет утерян, но утерян он будет у переданной функции,
  т.е. у нашей функции-обертки

  Вызов же метода в этой функции-обертке все равно делается через точку,
  т.е. от имени объекта.

  Благодаря этому, мы избегаем потери контекста
 */
};

const obj = {
  method: function () {
    console.log(this);
  },
};

someFn(() => obj.method()); // this в методе будет равен obj
someFn(function () {
  obj.method();
}); // this в методе будет равен obj
