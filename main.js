let myLibrary = [];
let counter = 0;
let divIdReset = 0;
let inputIdReset = 0;
let rpIdReset = 0;
let upIdReset = 0;
let removeIDReset = 0;

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

        cardDiv.setAttribute("id", counter);

        for(const [key, value] of Object.entries(object)) {
            const display = document.createElement('p');
            display.classList.add(key);

            display.textContent = `${key}: ${value}`;

            cardDiv.appendChild(display);
        };

        // Adds remove button to each book
        const removeDiv = document.createElement('div');
        removeDiv.classList.add('removeDiv');

        cardDiv.appendChild(removeDiv);

        const remove = document.createElement('button');
        remove.classList.add('remove');

        removeDiv.appendChild(remove);

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
                div.setAttribute('id', divIdReset);
                divIdReset += 1;
            });

            const nextInput = document.querySelectorAll('.statusInput');
            nextInput.forEach((input) => {
                input.setAttribute('id', (inputIdReset + 's'));
                inputIdReset += 1;
            });

            const read = document.querySelectorAll('.readPara');
            read.forEach((status) => {
                status.setAttribute('id', (rpIdReset + 'p'));
                rpIdReset += 1;
            });

            const unread = document.querySelectorAll('.unreadPara');
            unread.forEach((status) => {
                status.setAttribute('id', (upIdReset + 'p'));
                upIdReset += 1;
            });

            const nextRemove = document.querySelectorAll('.remove');
            nextRemove.forEach((remove) => {
                remove.setAttribute('id', (removeIDReset + 'p'));
                upIdReset += 1;
            });

            counter -= 1;
            divIdReset = 0;
            inputIdReset = 0;
            rpIdReset = 0;
            upIdReset = 0;
            removeIDReset = 0;
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
        statusInput.setAttribute('id', counter + 's');

        statusLabel.appendChild(statusInput);

        statusInput.setAttribute('type', 'checkbox');

        const paraDiv = document.createElement('div');
        paraDiv.classList.add('paraDiv');

        statusDiv.appendChild(paraDiv);

            // Displays the word "Read" or "Unread"
            const read = document.createElement('p');
            read.setAttribute('id', counter + 'rp');
            read.classList.add('readPara');

            read.textContent = 'Read';

            paraDiv.appendChild(read);

            const unread = document.createElement('p');
            unread.setAttribute('id', counter + 'up');
            unread.classList.add('unreadPara');

            unread.textContent = 'Unread';

            paraDiv.appendChild(unread);

            if (object.read == 'yes') {
                statusInput.setAttribute('checked', 'checked');
                document.getElementById((counter + 'rp')).style.display = 'block';
            } else {
                document.getElementById((counter + 'up')).style.display = 'block';
            };

        const statusSpan = document.createElement('span');
        statusSpan.classList.add('slider');

        statusLabel.appendChild(statusSpan);

        // Switches read status when checked
        const checkbox = document.getElementById((counter + 's'));
        const readRef = document.getElementById((counter + 'rp'));
        const unreadRef = document.getElementById((counter + 'up'));
        checkbox.addEventListener('change', function () {
          if (checkbox.checked) {
            object.read = 'yes';
            
            readRef.style.display = 'block';
            unreadRef.style.display = 'none';
          } else {
            object.read = 'no';
            
            readRef.style.display = 'none';
            unreadRef.style.display = 'block';
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

