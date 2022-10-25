let books=new Array();

class book {
title="";
author="";
constructor(title, author) {
this.title = title;
this.author = author;
}
}

function refreshList() {
const list= document.getElementById("booksList");
list.innerHTML = ``;
let i=0;
  books.forEach(function (b) {
    const booksList = document.createDocumentFragment();
    const title = document.createElement("p");
    title.innerHTML = b.title;
      booksList.appendChild(title);
        const author = document.createElement("p");
        author.innerHTML = b.author;
        booksList.appendChild(author);
        const remove = document.createElement("button");
        remove.type="button";
        remove.textContent = "Remove";
        remove.className="remove";
        remove.setAttribute('onclick','removeBook('+i+')');
        booksList.appendChild(remove);
        const line= document.createElement("hr")
        booksList.appendChild(line);
        list.appendChild(booksList);
        i++;
  })
}

window.onload= () => {
    const booksList = document.createElement("div");
    booksList.id="booksList";
    document.getElementById("main").appendChild(booksList);
    if (localStorage.length) {
      books= JSON.parse(localStorage.getItem('books'));
      refreshList();
    }
    
    const newLine = document.createElement("br");
    const addForm = document.createDocumentFragment();
    const titleInput = document.createElement("input");
    titleInput.type="text";
    titleInput.id="title";
    titleInput.placeholder="Title";
    addForm.appendChild(titleInput);
    addForm.appendChild(newLine);
    const authorInput = document.createElement("input");
    authorInput.type="text";
    authorInput.id="author";
    authorInput.placeholder="Author";
    addForm.appendChild(authorInput);
    addForm.appendChild(newLine);
    const addButton = document.createElement("button");
    addButton.type="button";
    addButton.textContent= "Add";
    addButton.id="add";
    addButton.setAttribute('onclick','addon()');
    addForm.appendChild(addButton);
    document.getElementById("main").appendChild(addForm);
}

function addon() {

    const titleInp = document.getElementById("title");
    const authorInp = document.getElementById("author");
    const title = titleInp.value;
const author= authorInp.value;
    books.push(new book(title, author));
    localStorage.setItem('books', JSON.stringify(books));
    refreshList();
    titleInp.value="";
    authorInp.value="";
}
function removeBook(id) {
  books.splice(id,1);
  localStorage.setItem('books', JSON.stringify(books));
  refreshList();
}


