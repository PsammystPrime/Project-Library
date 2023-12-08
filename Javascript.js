const myLibrary = [];
//create constructor for Book
function Book(title, author, pages, status,) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status
  };
  //create method for calling constructor
    Book.prototype.info = function () {
      return this.title +' by '+this.author+ ' has '+this.pages+ ' pages, '+this.status
    };
    //create Book
  const book1=new Book ('War', 'warrior',50, 'read') ;
  const book2=new Book('Engineering Maths', 'J Bird', 500, 'Unread');
  const book3=new Book('Think And Grow Rich', 'Napoleon hill', 200, 'read');
  const book4=new Book('Romeo & Juliet', 'Shakespear', '350', 'Unread' );
  const book5=new Book('Rich Dad Poor Dad', 'R Kowarski', 400, 'Unread');
  const book6=new Book('True Masculinity', 'Unknown', 300, 'Unread');
  const book7=new Book('The Last Ship', 'Tom Chandler',900 , 'Unread');
  const book8=Object.create(Book);
  book8.title = 'hunger'    
  console.log(book1.info());
  console.log(book2.info());
  console.log(book3.info());
  console.log(book8.info());
  