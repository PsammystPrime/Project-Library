function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function () {
      return console.log(this.title+' by '+this.author+' with '+this.pages+' pages ')
    }
  }
  const book1 = new Book('The 100', 'Kass Morgan','200', 'read')
  console.log(book1.info());
  /*1: Instead of hard coding book details, we use a form that fetches it.
  2: Instaed of calling the book, we add an event listener for submit button
  that calls book info().
  3: Instead of consoling the details of info, we display them to the Dom.
  */