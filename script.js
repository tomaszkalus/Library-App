const bookList = [];

// Delete button
const delete_btns = document.querySelectorAll('.delete-btn');
delete_btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e)
    })
})


function Book(title, author, number_of_pages, have_i_read){
    this.title = title
    this.author = author
    this.number_of_pages = number_of_pages
    this.have_i_read = have_i_read
    this.info = () => {
      let report = this.title+" by "+this.author+", "+this.number_of_pages+" pages, "
      switch(this.have_i_read){
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

    const book_container = document.querySelector("#books-container");

    const temp = document.getElementById("book-template");
    const book = temp.content.querySelector(".book");
    book_copy = document.importNode(book, true);

    const title = book_copy.querySelector(".book-title");
    const author = book_copy.querySelector(".book-author");
    const pages = book_copy.querySelector(".book-pages");
    const read = book_copy.querySelector(".book-read");

    const title_input = document.querySelector('#title-input').value;
    const author_input = document.querySelector('#author-input').value;
    const pages_input = document.querySelector('#pages-input').value;
    const read_input = document.querySelector('#read-input').value;

    title.textContent = title_input;
    author.textContent = author_input;
    pages.textContent = pages_input;
    read.textContent = read_input;

    book_container.appendChild(book_copy);

    bookList.push(new Book(title, author, pages, read));

    
}