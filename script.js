////// Add new book to library, pop ups.

// Add new book to library
const createBtn = document.querySelector('form button');
createBtn.addEventListener('click', addBookToLibrary);

const addPopup = document.querySelector('button#addbook-btn');
const popUpForm = document.querySelector('.pop-up');
const removePopup = document.querySelector('.pop-up-header button');

// Show pop up menu.
addPopup.addEventListener('click', () => {
    popUpForm.classList.add('show');
});

// Hide pop up menu.
removePopup.addEventListener('click', () => {
    popUpForm.classList.remove('show');
})


////// Book constructor




class Book {
    constructor(title, author, pages, read) {
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value + 'pages';
        this.read = form.read.checked;
    }
}


//// Create a book from Book constructor and add it to library.

let myLibrary = [];
let newBook;


function addBookToLibrary() {
    Event.preventDefault();

    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}