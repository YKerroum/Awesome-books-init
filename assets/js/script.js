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
    bo.innerHTML = '';
    let id = 0;
    this.AllBooks.forEach((book) => {
      bo.innerHTML
      += `<tr class="grey">
       <td>"${book.title}" by ${book.author}</td>
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