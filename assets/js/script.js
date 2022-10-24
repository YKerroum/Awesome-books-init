let books=[];
const book={title:"",author:""};
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
function addBook (book) {
  const booksList = document.createDocumentFragment();
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
    if (localStorage.length) {
      books= JSON.parse(localStorage.getItem('books'));
      books.forEach(book => {
       addBook(book);
      });
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
    addForm.appendChild(addButton);
    document.getElementById("main").appendChild(addForm);
}


