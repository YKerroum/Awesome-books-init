class BookClass {
  constructor() {
    this.AllBooks = (localStorage.storagebook != null) ? JSON.parse(localStorage.storagebook) : [];
  }

  addbook() {
    const Title = document.getElementById('title');
    const Author = document.getElementById('author');
      this.AllBooks.push({ Title: Title.value, Author: Author.value });
      this.updateLocalStorage();
  }

  destroybook(id) {
    this.AllBooks.splice(id, 1);
    this.updateLocalStorage();
  }
  
  showbooks() {
    const AllBooks = document.getElementById('AllBooks');
    AllBooks.innerHTML = '';
    let id = 0;
    this.AllBooks.forEach((book) => {
      AllBooks.innerHTML
      += `<tr>
       <td>"${book.Title}" by ${book.Author}</td>
      <td><a href="#" class="btn-remove" onClick="storagebook.destroybook(${id})">Remove</a></td>
      </tr>`;
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


if (storagebook.AllBooks.length !== 0) { TitleThread.innerHTML = ''; }