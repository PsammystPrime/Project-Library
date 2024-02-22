const Libraries = [];

function Book(title, author, pages, status,) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status
  };

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
        const notification = document.getElementById('notification')
        
        submit.addEventListener('click', function(e){
          e.preventDefault()
          if (title.value && author.value && pages.value!==''  ) {
            novel=new Book(title.value,author.value,pages.value)
            Libraries.push(novel)

          notification.textContent = 'Book added Successfully!'
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
             notification.textContent = 'Book removed Successfully!'
           })

          list1.appendChild(info),
          list1.appendChild(check)
          list1.appendChild(del),
          bookList.appendChild(list1);

          title.value = '',
          author.value = '',
          pages.value = ''; 
          

          }else {
            notification.textContent = 'Input cannot be blank!'
          }


        });       


   
      }
      addBookToLibrary()

      /**************************************Not Working */

      const search = document.querySelector('[data-search]')
      search.addEventListener('input', (e)=>{
         const value = e.target.value
         Libraries.forEach(library => {
         const isVisible = library.title.includes(value);
         
          const element = document.querySelectorAll('li');
          element.classList.toggle('hide', !isVisible)
         
        
         //element.classList.toggle("hide", !isVisible)
       //  console.log(isVisible)
         })
        
      })


