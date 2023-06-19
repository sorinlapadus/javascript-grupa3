var person = {
  employed: true,
  age: 29,
  name: "First Last",
  skills: ["html", "css", `js`],
};

console.debug(person);
console.info(person.name);
console.debug(person.age);
console.debug(person.employed);
console.debug(person["employed"]); // same as above

// function, name, parameters, code block
function emptyFn() {}

function getWelcomeMsg(name) {
  var msg = "Hello " + name + ", " + "welcome at FastTrackIT.";
  return msg;
}

function getMsg(name) {
  return `Hey ${name}, I'm glad to help you learn js.`;
}

// call getWelcomeMsg and store result in variable
var welcomeNick = getWelcomeMsg("Nick");
var welcomeJohn = getWelcomeMsg("John");

console.info(welcomeNick);

var person = {
  age: 29,
  name: "Nick",
  learn: function () {
    console.info("I'm learning JS, I love it!");
  },
  play: function () {
    console.info("I'm playing. My name is ", this.name);
  },
};

person.learn();
person.play();

//typeof document
//typeof document.getElementById
//typeof console
console.info(person["name"]); // => Nick
var action = "learn";
person[action]();

//arrow functions
const noParam = () => {
  return "This fn has no parameters";
};
const oneParam = (name) => {
  return "one parameter " + name;
};
const oneParamSimplified = (name) => {
  return "for one param can omit ()" + name;
};
const moreParams = (firstName, lastName) => {
  return "required () for more params" + firstName + " " + lastName;
};
const simplifiedReturn = () => "returned";
