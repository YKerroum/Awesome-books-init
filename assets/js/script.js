const listb = document.getElementById('list-b');
const addnewb = document.getElementById('addnew-b');
const contactb = document.getElementById('Contact-b');

const closebook = document.getElementById('showbookclose');
const closeaddbook = document.getElementById('addbooksclose');
const closecontact = document.getElementById('contactclose');


const bo = document.querySelector('.AllB');

class BookClass {
  constructor() {
    this.AllBooks = (localStorage.storagebook != null) ? JSON.parse(localStorage.storagebook) : [];
  }

  addbook() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    this.AllBooks.push({ title: title.value, author: author.value });
    this.updateLocalStorage();
  }

  destroybook(id) {
    this.AllBooks.splice(id, 1);
    this.updateLocalStorage();
  }

  showbooks() {
    const ulist = document.createElement('ul');
    ulist.className = 'booksList';
    bo.innerHTML = '';
    bo.appendChild(ulist);
    let id = 0;
    this.AllBooks.forEach((book) => {
      ulist.innerHTML
      += `<li class="booksLine ${id % 2 === 0 ? 'grey' : ''}">
      <span>"${book.title}" by ${book.author}</span>
      <button type="button" class="btn-remove" onClick="storagebook.destroybook(${id})">Remove</button>
      </li>`;
      id += 1;
    });
  }

  updateLocalStorage() {
    localStorage.storagebook = JSON.stringify(this.AllBooks);
    this.showbooks();
  }
}

const storagebook = new BookClass();

storagebook.showbooks();

function listopen() {
  closebook.classList.remove('hidden');
  closeaddbook.classList.add('hidden');
  closecontact.classList.add('hidden');
}

function addnewopen() {
  closebook.classList.add('hidden');
  closeaddbook.classList.remove('hidden');
  closecontact.classList.add('hidden');
}

function contactopen() {
  closebook.classList.add('hidden');
  closeaddbook.classList.add('hidden');
  closecontact.classList.remove('hidden');
}

listb.addEventListener('click', listopen);
addnewb.addEventListener('click', addnewopen);
contactb.addEventListener('click', contactopen);