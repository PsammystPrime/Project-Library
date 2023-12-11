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

    function addBookToLibrary() {  
        const title = document.querySelector('#title');
        const author = document.getElementById('author');
        const pages = document.getElementById('pages');
        const status = document.getElementById('status');
        const bookList = document.querySelector('.list');
        const submit = document.querySelector('.submit');
        const clear = document.querySelector('.clear')

        submit.addEventListener('click', function(e){
          e.preventDefault()
          if (title.value,author.value,pages.value!==''  ) {
         const list1 =document.createElement('li')
          const info = document.createElement('span')
          const check = document.createElement('span')
          const del = document.createElement('button')

          info.textContent= title.value+' by '+author.value+ ' has '+pages.value+ ' pages.'          
            if (status.checked) {
              check.textContent= 'Read'
            } else {
              check.textContent = 'Unread'
            };
            del.textContent = 'delete'
           del.addEventListener('click', ()=>{
             bookList.removeChild(list1)
           })

          list1.appendChild(info),
          list1.appendChild(check)
          list1.appendChild(del),
          bookList.appendChild(list1);
            console.log('author.value')
          }
          
        });
        clear.addEventListener('click', ()=>{
          title.value = '',
          author.value = '',
          pages.value = ''; 
        });
       

      }
      addBookToLibrary()


