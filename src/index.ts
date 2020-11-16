import './style.scss';

console.dir(document);
console.log(document.title);

// getElementById
const headerTitle = document.getElementById('header-title');
if (headerTitle) {
    headerTitle.textContent = 'Item Lister v2';
    headerTitle.innerText = 'Item Lister v3';
    headerTitle.innerHTML = '<h3>Item Lister html</h3>'
}
const header = document.getElementById('main-header');
if (header) {
    header.style.borderBottom = 'solid 3px #000';
}

// getElementsByClassName
// for typescript a casting to HTMLCollectionOf<HTMLElement> is required
const items = document.getElementsByClassName('list-group-item') as HTMLCollectionOf<HTMLElement>;
items[1].textContent = 'v2 getElementsByClassName';
items[2].style.fontWeight = 'bold';
for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
}

// getElementsByTagName
// We'll get all the li elements on the page
const li = document.getElementsByTagName('li') as HTMLCollectionOf<HTMLElement>;
li[2].style.backgroundColor = 'yellow';
for (var i = 0; i < li.length; i++) {
    // li[i].style.backgroundColor = 'yellow';
}

// querySelector - querySelectorAll
// Typescript cast to HTMLElement
const newheader = document.querySelector('#main-header') as HTMLElement;
if (newheader) newheader.style.borderBottom = 'solid 3px #ccc';

// Typescript cast to HTMLInputElement
const input = document.querySelector('input') as HTMLInputElement;
input.value = 'Yay!';

// Grabbing items by its type attribute
var submit = document.querySelector('input[type="submit"]') as HTMLInputElement;
if (submit)
    submit.value = 'Submitterrr';

// Since there are many in the .list-group-item it will only
// affect the first one in the collection
const item = document.querySelector('.list-group-item') as HTMLElement;
if (item)
    item.style.color = 'red';

const last = document.querySelector('.list-group-item:last-child') as HTMLElement;
if (last)
    last.style.color = 'blue';

// querySelectorAll
const titles = document.querySelectorAll('.title');
// titles.forEach((title: Element)=> {
//     title.textContent = 'title element changed';
// });
titles[0].textContent = 'Add Items (new title)';