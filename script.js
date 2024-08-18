// new book: author, title, number of pages, whether it’s been read 
// const myLibrary = [["book1", "author1", 101, "notRead"], ["book2", "author2", 102, "notRead"], ["book3", "author3", 103, "notRead"], ["book4", "author4", 104, "Read"], ["book5", "author5", 105, "notRead"]];

const myLibrary = [{ title: "book1", author: "author1", pages: 101, isRead: "notRead" },
{ title: "book2", author: "author2", pages: 102, isRead: "notRead" },
{ title: "book3", author: "author3", pages: 103, isRead: "Read" },
];




document.getElementById("sub").addEventListener("click", function (event) {
  event.preventDefault()
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let bookadd = { title: title, author: author, pages: pages, isRead: "notRead" };
  myLibrary.push(bookadd)
  console.log(myLibrary);
});


function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
