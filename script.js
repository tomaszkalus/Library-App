const bookList = [];
let book_counter = 0;

// Delete button
function delete_book(event){
  const id = event.target.parentElement.getAttribute("data-bookid");
  const books = document.querySelectorAll(".book");
  for(let book of books){
    if(book.getAttribute("data-bookid") == id){
      book.remove()
      break;
    }
  }
};

function Book(id, title, author, number_of_pages, have_i_read) {
  this.id = id
  this.title = title
  this.author = author
  this.number_of_pages = number_of_pages
  this.have_i_read = have_i_read
  this.info = () => {
    let report = this.title + " by " + this.author + ", " + this.number_of_pages + " pages, "
    switch (this.have_i_read) {
      case false:
        report += "not read yet";
        break;
      case true:
        report += "read";
        break;
    }
    return report;
  }
}

const book_add_btn = document.querySelector("#btn-add");
book_add_btn.addEventListener("click", addBookToLibrary)

function addBookToLibrary() {
  console.log(book_counter)
  book_counter++;

  const book_container = document.querySelector("#books-container");
  const temp = document.getElementById("book-template");
  const book = temp.content.querySelector(".book");
  
  
  book_copy = document.importNode(book, true);
  book_copy.setAttribute("data-bookid",book_counter);

  const title = book_copy.querySelector(".book-title");
  const author = book_copy.querySelector(".book-author");
  const pages = book_copy.querySelector(".book-pages");
  const read = book_copy.querySelector(".book-read");

  const title_input = document.querySelector('#title-input').value;
  const author_input = document.querySelector('#author-input').value;
  const pages_input = document.querySelector('#pages-input').value;
  const read_input = document.querySelector('#read-input').value;

  book_object = new Book(book_counter,title_input, author_input, pages_input, read_input);
  
  title.textContent = title_input;
  author.textContent = author_input;
  pages.textContent = pages_input;
  read.textContent = (read_input === "yes" ? "Read" : "Not read yet");

  book_container.appendChild(book_copy);
  bookList.push(book_object);
  console.log(book_object.info());

  book_copy.querySelector(".delete-btn").addEventListener('click', e=>delete_book(e));
}

document.querySelector('#btn-add-test').addEventListener('click',()=>{
  const title_input = document.querySelector('#title-input').value = "1984";
  const author_input = document.querySelector('#author-input').value = "George Orwell";
  const pages_input = document.querySelector('#pages-input').value = 341;
  const read_input = document.querySelector('#read-input').value = "yes";
  addBookToLibrary()
})