let expression = document.getElementById("expression");
// for one
let one = document.getElementById("one");

one.addEventListener("click", () => {
  expression.value += 1;
});

// for two
let two = document.getElementById("two");

two.addEventListener("click", () => {
  expression.value += 2;
});

// for three
let three = document.getElementById("three");

three.addEventListener("click", () => {
  expression.value += 3;
});
// for four
let four = document.getElementById("four");

four.addEventListener("click", () => {
  expression.value += 4;
});
// for five
let five = document.getElementById("five");

five.addEventListener("click", () => {
  expression.value += 5;
});
// for six
let six = document.getElementById("six");

six.addEventListener("click", () => {
  expression.value += 6;
});
// for seven
let seven = document.getElementById("seven");

seven.addEventListener("click", () => {
  expression.value += 7;
});
// for eight
let eight = document.getElementById("eight");

eight.addEventListener("click", () => {
  expression.value += 8;
});
// for nine
let nine = document.getElementById("nine");

nine.addEventListener("click", () => {
  expression.value += 9;
});

// for cancel
let cancel = document.getElementById("cancel");

cancel.addEventListener("click", () => {
  expression.value = "";
});

// for zero
let zero = document.getElementById("zero");

zero.addEventListener("click", () => {
  expression.value += 0;
});

// for backspace
let backspace = document.getElementById("backspace");

backspace.addEventListener("click", () => {
  let expressionValue = expression.value;
  let valueToReturn = expressionValue.slice(0, expressionValue.length-1);
  expression.value = valueToReturn;
});

// for plus operation
let plus = document.getElementById("plus");

plus.addEventListener("click", () => {
  expression.value += "+";
});


 // for minus operation
 let minus = document.getElementById("minus");

minus.addEventListener("click", () => {
expression.value += "-";
});

// for multiply operation
 let multiply = document.getElementById("multiply");

multiply.addEventListener("click", () => {
expression.value += "*";
});

// for divide operation
 let divide = document.getElementById("divide");

divide.addEventListener("click", () => {
expression.value += "/";
});

// for result operation
let result = document.getElementById("result");

result.addEventListener("click", () => {
  let expression = document.getElementById("expression");

  let express = expression.value;
  let resultexpress = eval(express);
  expression.value = resultexpress;
});