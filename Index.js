const library = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function () {
      return this.title + ' by ' + this.author + '.'
    }
  };

function addBookToLibrary(){
    const title = document.querySelector('#title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const status = document.getElementById('status');
    const bookList = document.querySelector('.list');
    const submit = document.querySelector('.submit');
    const notification = document.getElementById('notification');

    submit.addEventListener('click', function(e){
        e.preventDefault()
        bookList.textContent = ''

        if(status.checked == true){
            status.value = 'Read'
        } else{
            status.value = 'Unread'
        }
        //   create books
         const book1 = new Book(title.value, author.value,pages.value, status.value)
        //Push the books to array
         library.push(book1)
         //display book        
        return  library.forEach((book)=>{
            
            const bookItem =document.createElement('li');
            const bookInfo =document.createElement('p');
            const bookPages =document.createElement('p');
            const bookStatus =document.createElement('p');
            const del = document.createElement('button');
            bookInfo.textContent = 'About: ' + book.info();
            bookPages.textContent = 'Pages: ' + book.pages;
            bookStatus.textContent = 'Status: ' + book.status;
            del.textContent = 'Delete';

            bookItem.appendChild(bookInfo);
            bookItem.appendChild(bookPages);
            bookItem.appendChild(bookStatus);
            bookItem.appendChild(del);

           bookList.appendChild(bookItem),
        
        notification.textContent = 'Book added Successfully!',
        console.log(library),
        title.value = '',
        author.value = '',
        pages.value = '',
        del.addEventListener('click', ()=>{
            bookList.removeChild(bookItem),
            library.slice(0,0),
            console.log(library),
            notification.textContent = 'Book removed Successfully!'
          })
        });
    });

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