let myLibrary  = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary() {
    // Variables from input fields
    const titleInp = document.querySelector('.title-inp input').value;
    const authorInp = document.querySelector('.author-inp input').value;
    const pagesInp = document.querySelector('.pages-inp input').value;
    const readInp = document.querySelector('.read-inp input').checked;

    // Check validity of inputs and if they are valid add them to the library
    if (titleInp === '' || authorInp === '' || pagesInp === '') {
        return alert("Please fill all inputs.");
    } else {
        // Create new book object
        const newBookObj = new Book(titleInp, authorInp, pagesInp, readInp);

        // Push new object into array
        myLibrary.push(newBookObj);
    }

    // Render
    renderBook();

    // Refresh inputs
    titleInp.value,
    authorInp.value,
    pagesInp.value,
    readInp.value = "";
}


const submitAddBookBtn = document.querySelector('form button[type="button"]');

submitAddBookBtn.addEventListener('click', addBookToLibrary);



// Hide and show pop up window
const popUp = document.querySelector('.form-container');

document.querySelector('#addBtn').addEventListener('click', () => {
    popUp.classList.add('show');
})

document.querySelector('.pop-up-header button').addEventListener('click', () => {
    popUp.classList.remove('show');
})



// Render books
function renderBook() {
    const cardsContainer = document.querySelector('.cards-container');
    for (let i = 0; i < this.length; i++) {
        // Card container
        const card = document.createElement('div');
        card.classList.add('card');

        // Title container
        const titleCont = document.createElement('div');
        titleCont.classList.add('titleCont');
        titleCont.textContent = myLibrary[i].title;
        card.appendChild(titleCont);

        // Author container
        const authorCont = document.createElement('div');
        authorCont.classList.add('authorCont');
        authorCont.textContent = myLibrary[i].author;
        card.appendChild(authorCont);

        // Pages container
        const pagesCont = document.createElement('div');
        pagesCont.classList.add('pagesCont');
        pagesCont.textContent = myLibrary[i].pages + 'pages';
        card.appendChild(pagesCont);

        // Read button
        const readBtn = document.createElement('button');
        if(myLibrary[i].read === true) {
            readBtn.textContent = 'Read';
            readBtn.style.background = '#4ade80';
        } else {
            readBtn.textContent = 'Not Read';
            readBtn.style.background = '#f87171';
        }
        card.appendChild(readBtn);

        // Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('removeBtn');
        card.appendChild(removeBtn);

        // Append card
        cardsContainer.appendChild(card);
    }
}