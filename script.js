
// Add, remove form popup. Add book to the library.
const addBookBtn = document.querySelector('body button');
const addBookContainer = document.querySelector('.add-book-form-container');
const addButton = document.querySelector('.book-submit-form button');
const closeForm = document.querySelector('.book-close-form');

addBookBtn.addEventListener('click', () => {
    addBookContainer.classList.add('show');
})

closeForm.addEventListener('click', () => {
    addBookContainer.classList.remove('show');
})

addButton.addEventListener('click', addBookToLibrary);


// Book constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = form.title.value;
        this.author = form.title.value;
        this.pages = form.pages.value + "pages";
        this.read = form.pages.value;
    }
}


// Creates book from a book constructor and adds it to the library.
let myLibrary = [];
let newBook;

function addBookToLibrary() {
    event.preventDefault();
    addBookContainer.classList.remove('show');
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    renderBook();
    form.reset();
}


// Renders book on the page.
function renderBook() {
    const display = document.querySelector('.libary-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));

    for (let i = 0; i < myLibrary.length; i++) {
        createBook(myLibrary[i]);
    }
}


// Creates book DOM elements, to use it later in renderBook();
function createBook(item) {
    const library = document.querySelector('#Library-container');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');
    
    
    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authDiv.textContent = item.author;
    authDiv.classList.add('author');
    bookDiv.appendChild(authDiv);

    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages');
    bookDiv.appendChild(pageDiv);

    readBtn.classList.add('readBtn')    
    bookDiv.appendChild(readBtn);
    if(item.read===false) {
        readBtn.textContent = 'Not Read';
        readBtn.style.backgroundColor = '#e04f63';
    }else {
        readBtn.textContent = 'Read';
        readBtn.style.backgroundColor = '#63da63'
    }

    removeBtn.textContent = 'Remove'; 
    removeBtn.setAttribute('id', 'removeBtn');
    bookDiv.appendChild(removeBtn);
    
    library.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item),1);
        setData()
        render();
    });

    //add toggle ability to each book 'read' button on click
    readBtn.addEventListener('click', () => { 
        item.read = !item.read; 
        setData(); 
        render();
    }); 
};