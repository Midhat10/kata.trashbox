//Классы
const animal = {
  name: "Animal",
  age: 5,
  hasTail: true,
};

// class KingdomOfHeaven {
//   static type = "Kingdom";
//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.hasTail = options.hasTail;
//   }

//   voice() {
//     console.log("Jesus is God");
//   }
// }

// // const animal = new Animal({
// //   name: "Animal",
// //   age: 5,
// //   hasTail: true,
// // });Thou

// class Gospeller extends KingdomOfHeaven {
//   static type = "Evangelist";

//   constructor(options) {
//     super(options);
//     this.color = options.color;
//   }

//   voice() {
//     super.voice();
//     console.log("The voice of one crying in the wilderness");
//   }

//   get ageInfo() {
//     return this.age * 7;
//   }

//   set ageInfo(newAge) {
//     this.age = newAge;
//   }
// }

// const gospeller = new Gospeller({
//   name: "Ioann",
//   age: 90,
//   hasTail: false,
//   color: "white",
// });

/////////////

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  hide() {
    this.$el.style.display = "none";
  }

  show() {
    this.$el.style.display = "block";
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);

    this.$el.style.width = this.$el.style.height = options.size + "px";
    this.$el.style.background = options.color;
  }
}
const box1 = new Box({
  selector: "#box1",
  size: 100,
  color: "red",
});
