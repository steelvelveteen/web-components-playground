import './style.scss';
// To add items to the list we'll first add a submit event
const form = document.querySelector('#addForm');
// We'll also get the item list and store it
const itemList = document.querySelector('#items');
// Filter / search
const filter = document.querySelector('#filter');

// Form submit event
form?.addEventListener('submit', (e: Event) => {
    addItem(e);
});

const addItem = (e: Event) => {
    e.preventDefault();
    // Get input value
    const newItem = (document.querySelector('#item') as HTMLInputElement).value;

    // Create new li element
    const li = document.createElement('li');
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create the delete button element
    const deleteBtn = document.createElement('button') as HTMLElement;
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append the button to the appended li element
    li.appendChild(deleteBtn);
    itemList?.appendChild(li);
};
// The remove button on each item in the list
// We'll add a 'click' event to each item in that list
itemList?.addEventListener('click', (e: Event) => {
    removeItem(e);
});
// Remove item function
const removeItem = (e: Event) => {
    // console.log((e.target as HTMLElement).classList);
    let el = e.target as HTMLElement;
    if (el.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            let li = el.parentElement as Node;
            itemList?.removeChild(li);
        }
    }
};

// Working with the filter
filter?.addEventListener('input', (e: Event) => {
    let terms = (e.target as HTMLInputElement).value.toLowerCase();
    // if (terms.length > 2) {
    // const items = itemList?.querySelectorAll('li');
    const items = itemList?.getElementsByTagName('li') as ArrayLike<HTMLLIElement>;

    Array.from(items).forEach(item => {
        let itemName = item.firstChild?.textContent;
        if (itemName?.toLowerCase().indexOf(terms) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    // }
});
