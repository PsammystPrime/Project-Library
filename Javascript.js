//create constructor for novels
function Novels(title, author, pages, status,) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status
  };
  //create method for calling constructor
    Novels.prototype.info = function () {
      return this.title +' by '+this.author+ ' has '+this.pages+ ' pages, '+this.status
    };
    //create novels
  const novel1=new Novels ('War', 'warrior',50, 'read') ;
  const novel2=new Novels('Engineering Maths', 'J Bird', 500, 'Unread');
  const novel3=new Novels('Think And Grow Rich', 'Napoleon hill', 200, 'read');
  const novel4=new Novels('Romeo & Juliet', 'Shakespear', '350', 'Unread' );
  const novel5=new Novels('Rich Dad Poor Dad', 'R Kowarski', 400, 'Unread');
  const novel6=new Novels('True Masculinity', 'Unknown', 300, 'Unread');
  const novel7=new Novels('The Last Ship', 'Tom Chandler',900 , 'Unread');
  const novel8=Object.create(Novels);
  novel8.title = 'hunger'    
  console.log(novel1.info());
  console.log(novel2.info());
  console.log(novel3.info());
  console.log(novel8.info());
  