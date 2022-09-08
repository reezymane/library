let myLibrary = [];
let counter = 0;
let idReset = 0;

// Creates new objects for new entries
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // Toggles read status when called on a book
    this.toggleStatus = function () {
        if (read === 'yes') {
            read = 'no';
        } else {
            read = 'yes';
        };
    };
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

        cardDiv.setAttribute("id", counter);

        for(const [key, value] of Object.entries(object)) {
            const display = document.createElement('p');
            display.classList.add(key);

            display.textContent = `${key}: ${value}`;
            
            //const innerContainer = document.getElementsByClassName('cardDiv');

            cardDiv.appendChild(display);
        };

        // Adds remove button to each book
        const remove = document.createElement('button');
        remove.classList.add('remove');

        cardDiv.appendChild(remove);

        remove.setAttribute("id", counter + 'r');

        const removeImg = document.createElement('img');
        removeImg.src = './img/trash.png';

        const removeButton = document.getElementsByClassName('remove');
        removeButton[counter].appendChild(removeImg);

        // Removes book divs and removes corresponding object from myLibrary
        const toRemove = document.getElementById(counter);
        const removeClick = document.getElementById((counter + 'r'));
        removeClick.addEventListener('click', () => {
            container[0].removeChild(toRemove);

            myLibrary.splice(toRemove.getAttribute('id'), 1);

            // Reassigns ID values to cardDiv's
            const nextCardDivs = document.querySelectorAll('.cardDiv');
            nextCardDivs.forEach((div) => {
                div.setAttribute('id', idReset);
                idReset += 1;
            });

            counter -= 1;
            idReset = 0;
        });

        // Adds read status button to each book
        const statusDiv = document.createElement('div');
        statusDiv.classList.add('statusDiv');
        
        cardDiv.appendChild(statusDiv);
        
        const statusLabel = document.createElement('label');
        statusLabel.classList.add('switch');

        statusDiv.appendChild(statusLabel);

        const statusInput = document.createElement('input');
        statusInput.classList.add('statusInput');

        statusLabel.appendChild(statusInput);

        statusInput.setAttribute('type', 'checkbox');

        const statusSpan = document.createElement('span');
        statusSpan.classList.add('slider');

        statusLabel.appendChild(statusSpan);

        const checkbox = document.querySelector('input[type="checkbox"]');

        checkbox.addEventListener('change', function () {
          if (checkbox.checked) {
            // do this
            console.log('Checked');
          } else {
            // do that
            console.log('Not checked');
          }
        });
        
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

