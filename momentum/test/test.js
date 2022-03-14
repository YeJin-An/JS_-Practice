// const and let
let constant = 6;
let constants = 2;

let myName = "nico";

let varible = "variable를 변화하고자 할때 사용된다.";
let lets = "어떠한 규칙없어 실시간으로 업데이트 가능 [봘]";
let onstant = "constant는 기본적으로 사용이 된다 ";

console.log(constant + constants);
console.log(constant * constants);
console.log(constant / constants);
console.log("hello " + myName);

myName = "micolas";
console.log("your name is ", myName);

//------------------------------------------------------------------

// Booleanas
const amIFat = null;
let lives = "null = 메모리와 값은 있는 그 값이 비어있는 것";
let live = "undenied = 메모리는 있는데 값이 주어지지 않는 것";
console.log(amIFat, live);

// Arrays 데이터구조(1)

const array = "하나의 variable 안에 데이터의 list를 가지는 것";
const daysOfWeek = ["mon", "tue", "sed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

// sub one more day to the array
daysOfWeek.pop("sun");
console.log(daysOfWeek);

//-----------------------------------------------------------------------

// Objects

const playerName = "nico";
const playerpoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

// player[0] == name
// player[1] == points
const player1 = ["nico", 1212, false, "little bit"];

const player = {
  name: "nico",
  points: 10,
  fat: false,
};

console.log(player);
// object안의 무언가를 수정하는 것은 update가능!!
player.name = "nicoles";
player.fat = true;
player.points = player.points + 15;
console.log(player.name, player.points, player.fat);

//---------------------------------------------------------------------

// Functions part One
console.log("Hello my name is nico");
console.log("Hello my name is dal");

function sayHello(nameOfPerson, age) {
  console.log(`Hello my name is ${nameOfPerson}` + "and I'm " + age);
}
sayHello("nico", 10);
sayHello("dal", 23);

function plus(firstNumber, secondNumber) {
  console.log("firstNumber+secondNumber=", firstNumber + secondNumber);
}
function divide(firstNumber, secondNumber) {
  console.log("firstNumber/secondNumber=", firstNumber / secondNumber);
}
plus(2, 3);
divide(60, 8);

const players = {
  name: "nice",
  age: 34,
  sayhello: function (otherPersonName) {
    console.log(`hello ${otherPersonName} nice to meet you`);
  },
};
console.log(players.sayhello("lynn"));

// ------------------------------------------------------------------------

// Recap1 => 데이터 타입 (씌우다.)
const datatype = [1, 2, true, false, undefined, "nico"];

const toBuy = ["potato", "tomate", "pizzia"];
console.log(toBuy);
toBuy[2] = "water";
toBuy.push("meat");
console.log(toBuy);

let isNicoFat = true;
// 변수를 생성하는 것인 아닌 수정하는 것이어서 declared 안해도 됨
isNicoFat = false;
isNicoFat = undefined;
isNicoFat = null;
console.log(isNicoFat);

let hello;
console.log(hello);

// Recap2 => 데이터 타입
const Person = {
  name: "Nice",
  age: 45,
};
Person.name = "Niceias";
Person.sexy = "soon";
console.log(Person);
console.log(console);

// Recap3 => 데이터 타입

// -------------------------------------------------------------------------

// 자리표시자(place holder) ex> firstNumber, secondNumber, Number
function minusFive(Number) {
  console.log(Number - 5);
}
minusFive(3, 4, 4, 3, 2, 3, 4, 3);

// Returns and place holder ???

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  power: function (a, b) {
    return a ** b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};
const plusResult = calculator.add(5, 4);
const mulResult = calculator.mul(3, 4);
const subResult = calculator.sub(3, 4);
const powerResult = calculator.power(3, 4);
console.log(plusResult, mulResult, subResult, powerResult);

const timesResult = calculator.sub(powerResult, 10);
const minusResult = calculator.add(timesResult, 40);
const mixResult = calculator.sub(timesResult, minusResult);
console.log(timesResult, minusResult, mixResult);

const AGE = 96;
function Age(ageOfForeigner) {
  return ageOfForeigner * 3;
}

const KRage = Age(AGE);
console.log(KRage);

// ------------------------------------------------------------------
