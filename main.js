let myLibrary = [];

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
function displayBook() {
    myLibrary.forEach((object) => {
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
    });
};

addBookToLibrary('Harry Potter', 'J.K. Rowling', 5000, 'unread');

addBookToLibrary('Workywok', 'Shroom drop', 68, 'read');

displayBook();