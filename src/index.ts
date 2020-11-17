import './style.scss';

// Parent node
const itemList = document.querySelector('#items') as Element;
console.log(itemList.parentNode);
const parent = itemList.parentNode as HTMLElement;
parent.style.backgroundColor = '#f4f4f4';
// You can keep chaining and get the parent of the parent

// Parent Element : equivalent to parentNode
// const itemList2 = document.querySelector('#items') as Element;
// const parent2 = itemList2.parentNode as HTMLElement;

/**
 * Important note: many properties will also return linebreaks as text nodes
 * which aren't useful at all. I will be working with the alternatives
 * The bad ones are: childNodes, nextSibling, firstChild and lastChild. 
 * The good alternatives are: children, firstElementChild, lastElementChild,
 * nextElementSibling, etc. You get the idea.
 */
// Child nodes -> children
console.log(itemList.children);
console.log(itemList.firstElementChild);
console.log(itemList.lastElementChild);

// Siblings
console.log(itemList.nextElementSibling); // returns null if there are no next siblings
console.log(itemList.previousElementSibling);

// Creating elements
const newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'helloid';
newDiv.setAttribute('title', 'Hello div');
const newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

// Inserting the newly created element into the dom
const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');
container?.insertBefore(newDiv, h1);



