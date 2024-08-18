
const myLibrary = [{ title: "book1", author: "author1", pages: 101, isRead: "notRead" },
{ title: "book2", author: "author2", pages: 102, isRead: "notRead" },
{ title: "book3", author: "author3", pages: 103, isRead: "Read" },
];

document.getElementById("sub").addEventListener("click", function (event) {
  event.preventDefault();
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  addBookToLibrary(title, author, pages)
})

function Book() {
  // the constructor...
}

function addBookToLibrary(title, author, pages) {
  // do stuff here
  let bookadd = { title: title, author: author, pages: parseInt(pages), isRead: "notRead" };
  myLibrary.push(bookadd)
  console.log(myLibrary);
}
