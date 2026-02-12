/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here

//Create a function replaceText which accepts two parameters: an element and a string. The function should set the content of the given element to the given string.

function replaceText(elem, str) {
  elem.textContent = str;
}

function addTextTo(elem, str){
    elem.textContent += str;
}

function moreBears(){
    const animals = document.getElementById('animals');
    animals.src = 'http://placebear.com/400/200';
    animals.alt = 'A bear.';
    animals.title = 'A BEAR!';
}

function setId(elem, str){      
    elem.id = str
    return elem;
}

function setClass(elem, str){
    elem.className = str;
    return elem;
}

function addAClass(elem, str){
    elem.classList.add(str);
    return elem;
}

function removeAClass(elem, str){
    elem.classList.remove(str);
    return elem;
}

function newElement(name){
    return document.createElement(name);
}

function findElementById(id){
    return document.getElementById(id);
}

function findElementsByQuery(query){
   return document.querySelectorAll(query);
}

//Create a function `reverseList` that can reverse the content of a list (a UL or OL element). The function should take one parameter, which is a query selector used to find the list whose children should be reversed. Return the selected element. Rerun

function reverseList(query){
    const list = document.querySelector(query);
    const children = list.children;
    for(let i = children.length - 1; i >= 0; i--){
        list.appendChild(children[i]);
    }
    return list;
}

//Create a function `mover` that accepts two parameters, the first is a selector for the element to move, the second is a selector for the element that it should be appended to. Rerun
function mover(moveThis, appendToThis){
    const elem = document.querySelector(moveThis);
    const target = document.querySelector(appendToThis);
    target.appendChild(elem);
    return target;
}

//Write a function `filler` that accepts two parameters, the first is a list element that should be added to, the second is an array of candidate strings that will be turned into list items. Rerun
function filler(list, candidates){
    for(let i = 0; i < candidates.length; i++){
        const li = document.createElement('li');
        li.textContent = candidates[i];
        list.appendChild(li);
    }
    return list;
}

//Write a function `dupe` that accepts one parameter, a selector. The function should duplicate the element chosen by the selector (and any children of it) and append it to its parent. Rerun
function dupe(selector){
    const elem = document.querySelector(selector);
    const parent = elem.parentNode;
    const clone = elem.cloneNode(true);
    parent.appendChild(clone);
    return parent;
}

//Write a function `removeAll` that accepts one parameter, a selector. All nodes that match that selector should be removed. Rerun
function removeAll(selector){
    const elem = document.querySelectorAll(selector);
    for (let i = 0; i < elem.length; i++){
        elem[i].remove();
    }
}

//Write a function `getUserData` that returns an object with information from the #username, #speed, #student form input fields. The result should be an object like this: { name: 'john', speed: 30, student: true }. Rerun
function getUserData(){
    const name = document.getElementById('username').value;
    const speed = parseInt(document.getElementById('speed').value);
    const student = document.getElementById('student').checked;
    return { name: name, speed: speed, student: student };
}



function addition(a , b){
    return a + b;
}

function additionToString(a,b){
    const c = addition(a,b); 
    return c.toString();
}

function subtractionToString(a, b, c){
    const d = a - b - c;
    return d.toString();
}

function divisionToString(a, b){
    const c = a / b;
    return c.toString();
}

function multiplicationToString(a, b){
    const c = a * b;
    return c.toString();
}

//create a function to create new users and view stored information about them 

function createUser(Name, Age, Email){
    return { Name: Name, Age: Age, Email: Email };
}

function viewUserInfo(user){
    return `Name: ${user.Name}, Age: ${user.Age}, Email: ${user.Email}`;
}

function loopUntil(number){
    for (let i = 0; i <= number; i++){
        console.log(i);
    }
}   

function breakNameToLetters(name){
    const Letters = [];
    for (let i = 0; i < name.length; i++){
        Letters.push(name[i])
    }   
    return Letters;
}


function countToTen(){
    let count = 0;
    while (count < 10){
        console.log(count);
        count++;
    }
}