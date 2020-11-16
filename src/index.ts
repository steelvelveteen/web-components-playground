import './style.scss';

console.log('Hello typescript webpack template');

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

//getElementsByClassName
// for typescript a casting to HTMLCollectionOf<HTMLElement> is required
const items = document.getElementsByClassName('list-group-item')  as HTMLCollectionOf<HTMLElement>;;
items[1].textContent = 'v2 getElementsByClassName';
items[2].style.fontWeight = 'bold';
for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
}