let books = [];

class Book {
title='';

author='';

constructor(title, author) {
  this.title = title;
  this.author = author;
}
}

function refreshList() {
  const list = document.getElementById('booksList');
  list.innerHTML = '';
  let i = 0;
  books.forEach((b) => {
    const booksList = document.createDocumentFragment();
    const title = document.createElement('p');
    title.innerHTML = b.title;
    booksList.appendChild(title);
    const author = document.createElement('p');
    author.innerHTML = b.author;
    booksList.appendChild(author);
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.textContent = 'Remove';
    remove.className = 'remove';
    remove.setAttribute('onclick', `removeBook(${i})`);
    booksList.appendChild(remove);
    const line = document.createElement('hr');
    booksList.appendChild(line);
    list.appendChild(booksList);
    i += 1;
  });
}

window.onload = () => {
  const booksList = document.createElement('div');
  booksList.id = 'booksList';
  document.getElementById('main').appendChild(booksList);
  if (localStorage.length) {
    books = JSON.parse(localStorage.getItem('books'));
    refreshList();
  }
  const form = document.createElement('form');
  form.setAttribute('onsubmit', 'addon(1)');
  form.id = 'formBook';
  const newLine = document.createElement('br');
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'title';
  titleInput.placeholder = 'Title';
  form.appendChild(titleInput);
  form.appendChild(newLine);
  const authorInput = document.createElement('input');
  authorInput.type = 'text';
  authorInput.id = 'author';
  authorInput.placeholder = 'Author';
  form.appendChild(authorInput);
  form.appendChild(newLine);
  const addButton = document.createElement('input');
  addButton.type = 'submit';
  addButton.value = 'Add';
  addButton.id = 'submitBtn';
  form.appendChild(addButton);
  document.getElementById('main').appendChild(form);
};

function addon(i) {
  if (i) {
    const titleInp = document.getElementById('title');
    const authorInp = document.getElementById('author');
    const title = titleInp.value;
    const author = authorInp.value;
    books.push(new Book(title, author));
    localStorage.setItem('books', JSON.stringify(books));
    refreshList();
    titleInp.value = '';
    authorInp.value = '';
  }
}
function removeBook(id) {
  if (id >= 0) {
    books.splice(id, 1);
    localStorage.setItem('books', JSON.stringify(books));
    refreshList();
  }
}
addon(0);
removeBook(-1);
