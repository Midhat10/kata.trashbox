class EventEmitter {
  constructor() {}

  on(event, callback) {
    if (this[event] === undefined) {
      this[event] = [];
    }
    this[event].push({ fn: callback });
    return this;
  } //- добавить обработчик события
  off(event, callback) {
    this[event] = this[event].filter((item) => item.fn !== callback);
    return this;
  } //- удалить обработчик события

  once(event, callback) {
    if (this[event] === undefined) {
      this[event] = [];
    }
    this[event].push({ fn: callback, once: 0 });
    return this;
  } //- добавить обработчик события, который сработает единожды

  emit(event, ...arg) {
    this[event].forEach((item) => {
      if (item.once === 0) {
        item.once = 1;
        return item.fn(...arg);
      } else if (item.once === 1) {
        return;
      }
      return item.fn(...arg);
    });
  } //- вызвать все обработчики события event, можно передать аргументы
}

class BroadcastEventEmitter extends EventEmitter {
  constructor() {
    super();
  }

  emit(event = "*", ...arg) {
    if (event === "*") {
      for (let key in this) {
        super.emit(key, ...arg);
      }
    } else {
      super.emit(event, ...arg);
    }
  }
}

let emitter = new EventEmitter();

const multiplyTwo = (num) => num * 2;
const multiplyThree = (num) => num * 3;

const divideTwo = (num) => num / 2;
const divideThree = (num) => num / 3;

// Добавляем для события multiplication два обработчка
emitter.on("multiplication", multiplyTwo);
emitter.on("multiplication", multiplyThree);

// Вызываем событие multiplication, должны вызвать все обработчики для этого события - multiplyTwo и multiplyThree
emitter.emit("multiplication", 2);
// -> 4
// -> 6

// Удалим обработчик multiplyThree для события multiplication
console.log(emitter.off("multiplication", multiplyThree));

emitter.emit("multiplication", 2);

// Создадим новое событие divideTwo и добавим два обработчика:
// divideTwo - срабатывает всегда, когда вызывается событие division (до тех пор, пока не удалим этот обработчик)
//  divideThree - сработает только ОДИН раз, во время первого ВЫЗОВА события division
emitter.on("division", divideTwo);
emitter.once("division", divideThree);

emitter.emit("division", 6);
// -> 3
// -> 2

// Вызываем еще раз событие division - срабатывает ТОЛЬКО обработчики divideTwo
emitter.emit("division", 6);
// -> 3

emitter.emit("division", 6);
// -> 3
/////////////////

let broadcastEmitter = new BroadcastEventEmitter();

broadcastEmitter.on("multiplication", multiplyTwo);
broadcastEmitter.on("multiplication", multiplyThree);
broadcastEmitter.on("division", divideTwo);
broadcastEmitter.once("division", divideThree);

// Вызываем все события (multiplication и division) => все обработчики для всех событий будут вызваны.
// Для события multiplication - вызовутся обработчики multiplyTwo и multiplyThree.
// Для события division - вызовутся обработчики divideTwo и divideThree.

// broadcastEmitter.emit("*", 6);
// console.log("sdffds");
broadcastEmitter.emit("division", 3);
