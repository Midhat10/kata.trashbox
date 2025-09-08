const firstName = "Midhat";
const lastName = "Farkhutdinov";
const age = 30;

let str;

str = "Hello my name is " + firstName + " " + lastName;

str =
  "<ul>" +
  "<li>First name:" +
  firstName +
  "</li>" +
  "<li>First name:" +
  lastName +
  "</li>" +
  "<li>First name:" +
  age +
  "</li>" +
  "</ul>";

// console.log(str);

// ES6
str = `
<ul>
  <li> First name: ${firstName} </li>
  <li> Last name: ${lastName} </li>
  <li> age: ${age} </li>
  <li> Math.random: ${+Math.random().toFixed(2)} </li>
</ul>
`;

document.body.innerHTML = str;
