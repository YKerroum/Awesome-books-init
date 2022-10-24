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
        booksList.appendChild(remove);
        const line= document.createElement("hr")
        booksList.appendChild(line);
        list.appendChild(booksList);
  })

}

function fillBook (book) {
  const booksList = document.createElement("div");
  booksList.id="booksList";
  const title = document.createElement("p");
  title.innerHTML = book.title;
      booksList.appendChild(title);
        const author = document.createElement("p");
        author.innerHTML = book.author;
        booksList.appendChild(author);
        const remove = document.createElement("button");
        remove.type="button";
        remove.textContent = "Remove";
        booksList.appendChild(remove);
        const line= document.createElement("hr")
        booksList.appendChild(line);
        document.getElementById("main").appendChild(booksList);
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
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    books.push(new book(title, author));
    localStorage.setItem('books', JSON.stringify(books));
    refreshList();
}

