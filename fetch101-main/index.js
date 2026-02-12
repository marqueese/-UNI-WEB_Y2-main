/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

async function showMessage(elem, url) {
  const response = await fetch(url);
  const content = await response.text();
  elem.textContent = content;
}


//Create a function `showList` that takes two parameters: an element and a string that is a URL. The function will fetch the URL, parse the retrieved data as JSON; the data is guaranteed to be an array of strings. The function will then, like the `filler` function in `dom101`, put the contents of the array as list items into the provided element

async function showList(elem, url){
    const response = await fetch(url);
    const content = await response.json();
    for (let i=0; i < content.length; i++){
        const listItem = document.createElement('li');
        listItem.textContent = content[i];
        elem.appendChild(listItem);
    }
}


//Create a function `startShowingMessage` that takes two parameters: an element and a string that is a URL. The function will use `setInterval` to make the following task every 1s: fetch the URL and put the response text into the text content of the provided element.
async function startShowingMessage(elem, url){
    setInterval(async function(){
        const response = await fetch(url);
        const content = await response.text();
        elem.textContent = content;
    }, 1000);
}

