
const myLibrary = [{ title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, isRead: false },
{ title: "1984", author: "George Orwell", pages: 328, isRead: false },
{ title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180, isRead: false },
];



const bookshow = function () {
  let booksshow = document.querySelector(".booksshow");
  booksshow.innerHTML = ""
  for (let i = 0; i < myLibrary.length; i++) {
    booksshow.innerHTML += `<p data-id = ${i}>` + "The " + myLibrary[i].title + " was writen by " + myLibrary[i].author + " and have " + myLibrary[i].pages + " pages " + `${myLibrary[i].isRead ? "read" : "not read"}` + " by me. " + ` <button id="reading"  class=" ${i}">read</button> ` + ` <button id="remove" class=" ${i}">remove</button> ` + "</p>";
  }
}
document.getElementById("sub").addEventListener("click", function (event) {
  event.preventDefault();
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  addBookToLibrary(title, author, pages)
})
bookshow();
removeBookIds();
readBookIds()

function Book(title, author, pages) {
  this.title = title,
    this.author = author,
    this.pages = pages,
    isRead = false;
}

function addBookToLibrary(title, author, pages) {
  // do stuff here
  // let bookadd = { title: title, author: author, pages: parseInt(pages), isRead: "notRead" };
  // myLibrary.push(bookadd);
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  bookshow();
  removeBookIds();
  readBookIds()
}




function removeBookIds() {
  const removeBookId = document.querySelectorAll("#remove");
  removeBookId.forEach(bookId => {
    bookId.addEventListener("click", function (event) {
      myLibrary.splice(event.target.className, 1);
      bookshow();
      removeBookIds();
      readBookIds()
      // console.log(event.target.className);
    });
  })
}

function readBookIds() {
  const toogleRead = document.querySelectorAll("#reading");
  toogleRead.forEach(bookIds => {
    bookIds.addEventListener("click", function (event) {
      if (myLibrary[Number(event.target.className)].isRead == true) {
        myLibrary[Number(event.target.className)].isRead = false;
      } else {
        myLibrary[Number(event.target.className)].isRead = true;
      }

      bookshow();
      removeBookIds();
      readBookIds()
      // console.log(event.target.className);
    });
  })
}




// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.