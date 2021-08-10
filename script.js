// Assigning buttons
const popUpBtn = document.getElementById("popUpBtn");
const bookInputForm = document.getElementById("bookInputForm");
const sendEmailBtn = document.getElementById("sendEmailBtn");
const closeFormBtn = document.getElementById("closeFormBtn");
const addBookBtn = document.getElementById("addBookBtn");
sendEmailBtn.addEventListener("click", console.log("working1"));

popUpBtn.onclick = function () {
  bookInputForm.classList.toggle("hide");
};

closeFormBtn.onclick = function () {
  bookInputForm.classList.toggle("hide");
};

// After the user has filled out all of the information and clicked the addBookBtn, a new grid with all of the relevant information will be created and the object will be saved in a database.

// Adding books functions

// let myLibrary = [harryPotter, lordOfTheRings];

// class Book {
//   constructor(title, author, published) {
//     this.title = title;
//     this.author = author;
//     this.published = published;
//   }
//   addBookToLibrary(title, author, published)
// }

// function addBookToLibrary(newBook) {
//   myLibrary.push(newBook)
// }

// let harryPotter = {
//   title: "Harry Potter",
//   author: "J.K.Rowling",
//   published: "June 1998",
// };

// let lordOfTheRings = {
//   title: "Lord Of The Rings",
//   author: "Tolkien",
//   published: 1994
// };
