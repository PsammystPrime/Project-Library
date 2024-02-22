function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function () {
      return console.log(this.title+' by '+this.author+' with '+this.pages+' pages ')
    }
  }
//   create books
  const book1 = new Book('The 100', 'Kass Morgan','100', 'read')
  const book2 = new Book('The 100', 'Kass Morgan','200', 'read')
  const book3 = new Book('The 200', 'Kent Morgan','300', 'unread')

//Push the books to array
const library = [];
library.push(book1)
library.push(book2)
library.push(book3)
console.log(library);

// display the books info
library.forEach((book)=>{ console.log(book.info());})

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