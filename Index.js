const library = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function () {
      return this.title+' by '+this.author+' with '+this.pages+' pages '
    }
  };

function addBookToLibrary(){
    const title = document.querySelector('#title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const status = document.getElementById('status');
    const bookList = document.querySelector('.list');
    const submit = document.querySelector('.submit');
    const notification = document.getElementById('notification')

    submit.addEventListener('click', function(e){
        e.preventDefault()
        bookList.textContent = '';
        //   create books
         const book1 = new Book(title.value, author.value,pages.value, 'read')
        //Push the books to array
         library.push(book1)
         //display book
         
  return  library.forEach((book)=>{ bookList.textContent += book.info();})

    })

}

addBookToLibrary()


//Pseudocode
//1-Take user input of book
//2- On submitting
// -clear the form
// -take FormData, make an Object, and push it to the library array
// -use a loop to display every arrayitem on the screen


  /*1: Instead of hard coding book details, we use a form that fetches it.
  2: Instead of calling the book, we add an event listener for submit button
  that calls book info().
  3: Instead of consoling the details of info, we display them to the DOM.
  */