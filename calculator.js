const topScreen = document.querySelector("#screen-top");
const bottomScreen = document.querySelector("#screen-bottom");

let lastInput = []; 
let num1 = 0;
let num2 = 0;
let operator = "";
let result = 0;
let summed = false;

const add = function (a, b) {
    return a + b;
}