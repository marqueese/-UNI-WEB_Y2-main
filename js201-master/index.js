/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
  return "UP2271401";
}

function fn() {
  return 'Marcus';
}

function sn() {
  return 'Thomas';
}

/*Create an add function that accepts two parameters called a and b, and returns their sum*/
function add(a, b) {
  return a + b;
}

/*do the same but subtract*/
function subtract(a,b) {
  return a - b;
}

/* Create a checkObject function that accepts an object called obj as a parameter and sets the object's property `checked` to `true */
function checkObject(obj){
  obj.checked = true; 
}

/*Create a `checkObjectInside` function that accepts an object called `obj` as a parameter and if that object has an object value in its `data` property, it sets *that* inner object's property `checked` to `true`.*/
function checkObjectInside(obj){
  if ( obj.data){
    checkObject( obj.data );
  }
}

/*Create an arraySet function that accepts three parameters `arr`, `i` and `n`. The first one is an array and the second one an index. The function should place the value of the third parameter into the array at an index specified by the second parameter, if (and only if) such an index is already in the array. Note that your function does not need to return a value because the array is modified directly. --side note without a loop*/

function arraySet(arr, i, n) {
  if (arr[i]) {
    arr[i] = n;
  }
}

/* Create a function `addAll` that accepts an array `arr` as a single parameter. Assuming an array of numbers is passed, return the result of adding all those numbers. without using a loop */

function addAll(arr) {
  return arr.reduce((adder, current) => adder + current, 0); 
}


/*Create a function called `larger` that accepts two numbers `a` and `b`, and returns the larger.*/
function larger(a,b){
  //return Math.max(a,b);
  return a > b ? a : b;
}

/*Create a function called `largest` that accepts an array `arr` of numbers and returns the largest number in the array.*/
function largest(arr) {
  if (!arr.length) return null
  return Math.max(...arr);
}

//Create a function called compare that accepts two arrays of numbers (`a` and `b`) and compares the contents. It should return true if the arrays are identical and false otherwise without a loop 

function compare(a, b) {
  if (a.length !== b.length) return false;
  return JSON.stringify(a) === JSON.stringify(b); //turn both arrays into strings and compare 
}

//Create a function `addToAll` that accepts an array `arr` and a number `n` as parameters. Assuming an array of numbers is passed, return the same array with the second parameter added to each number within the array - such that ([1,2,3], 1) should return [2,3,4].
function addToAll(arr, n) {
  arr.forEach((_, i) => arr[i] += n)
  return arr;
}


//Create a function `rememberThis` with one parameter `keepsake` which should be stored in a global variable called 'remembered' (which you need to declare). Each subsequent call to rememberThis should overwrite the value of 'remembered'

let remembered;

function rememberThis(keepsake) {
  remembered = keepsake;
}

//Write a function `nArray` that takes a parameter `n` and returns an array with `n` numbers. The numbers in the array should increase from 1 to `n`.

function nArray(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

//Create a function `addAllOpt` that sums an array (`arr`). If the array is not present or empty, return 0

function addAllOpt(arr) {
  if (!arr || arr.length === 0) return 0;
  return arr.reduce((adder, current) => adder + current, 0); 
}

//Write a function `divisors` that takes takes two parameters `arr` and `div`, an array of numbers and a divisor. Return a new array containing only the numbers in the first array that are exactly divisible by the second parameter 
function divisors(arr, div) {
  return arr.filter(num => num % div === 0);
}

//Write a function `multiples` that takes two parameters `n` and `m`. It should return a new array of length `n` where the numbers inserted increase from 1*m to n*m

function multiples(n, m) {
  return Array.from({ length: n }, (_, i) => (i + 1) * m);
}
