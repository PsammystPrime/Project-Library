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
    const button = document.querySelector('.btn');
    const para = document.querySelector('p')  
    const push = document.querySelector('.push')
    const lists = document.querySelector('ul')

     button.addEventListener('click', function(){
      let title=  prompt('Title')
     /*let author= prompt('Author')  
      let pages = prompt('Pages?')
      let status = prompt('status?')*/

      myLibrary.push(title, /*author, pages, status*/)
      console.log(myLibrary)
       para.textContent= title +' by '/*+author+ ' has '+pages+ ' pages, '+status*/
    
    })

    push.addEventListener('click', ()=>{
        const listNovel=document.createElement('li')
        const novel = document.createElement('span')
        const del = document.createElement('button')
        novel.textContent = para.textContent
        del.textContent='Delete'

        listNovel.appendChild(novel);
        listNovel.appendChild(del);
        lists.appendChild(listNovel);
        
        del.addEventListener('click',()=>{
            lists.removeChild(listNovel)
        })
       

        const submit = document.querySelector('.submit')
        const form = document.querySelector('input')
        submit.addEventListener('click', ()=>{
            console.log(form.value)
        })
    })
      }
      addBookToLibrary()




    //create Book
 /* const book1=new Book ('War', 'warrior',50, 'read') ;
  const book2=new Book('Engineering Maths', 'J Bird', 500, 'Unread');
  const book3=new Book('Think And Grow Rich', 'Napoleon hill', 200, 'read');
  const book4=new Book('Romeo & Juliet', 'Shakespear', '350', 'Unread' );
  const book5=new Book('Rich Dad Poor Dad', 'R Kowarski', 400, 'Unread');
  const book6=new Book('True Masculinity', 'Unknown', 300, 'Unread');
  const book7=new Book('The Last Ship', 'Tom Chandler',900 , 'Unread'); 
  console.log(book1.info());
  console.log(book2.info());
  console.log(book3.info());*/
