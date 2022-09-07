let myLibrary = [];
let counter = 0;

// Creates new objects for new entries
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

// Adds new entries to myLibrary
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
};

// Creates new divs for each library entry
function displayBook(object = myLibrary[counter]) {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('cardDiv');

        const container = document.getElementsByClassName('cardContainer');

        container[0].appendChild(cardDiv);

        for(const [key, value] of Object.entries(object)) {
            const display = document.createElement('p');
            display.classList.add(key);

            display.textContent = `${key}: ${value}`;
            
            const innerContainer = document.getElementsByClassName('cardDiv');

            cardDiv.appendChild(display);
        };

        // Adds remove button to each book
        const remove = document.createElement('button');
        remove.classList.add('remove');

        cardDiv.appendChild(remove);

        const removeImg = document.createElement('img');
        removeImg.src = './img/trash.png';

        const removeButton = document.getElementsByClassName('remove');
        removeButton[0].appendChild(removeImg);

        counter += 1;
};

// Display and hide new book form
function openForm() {
    document.getElementById('popupForm').style.display = 'block';
};

function closeForm() {
    document.getElementById('popupForm').style.display = 'none';
};

// Submits form info to myLibrary
function submitForm() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    addBookToLibrary(title, author, pages, read);

    displayBook();

    closeForm();

    document.getElementById('form').reset();
};