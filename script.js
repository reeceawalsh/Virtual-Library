// Assigning buttons
const popUpBtn = document.getElementById("popUpBtn");
const bookInputForm = document.getElementById("bookInputForm");
const sendEmailBtn = document.getElementById("sendEmailBtn");
const closeFormBtn = document.getElementById("closeFormBtn");
const addBookBtn = document.getElementById("addBookBtn");

// Assigning form values for input
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const genreInput = document.getElementById("genreInput");
const ratingInput = document.getElementById("ratingInput");
const addBookForm = document.getElementById("addBookForm");
let formOpen = false;

popUpBtn.onclick = function () {
  bookInputForm.classList.toggle("hide");
  formOpen = true;
};

closeFormBtn.onclick = function () {
  bookInputForm.classList.toggle("hide");
  formOpen = false;
};

// Table variables
const libraryTable = document.getElementById("libraryTable");

// Book class
class Book {
  constructor(title, author, genre, rating) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.rating = rating;
  }
}

let books = JSON.parse(localStorage.getItem("books")) || [];

// Assigning the form inputs to a new Book object and then pushing it in the library and returning the full object to be used.
const getNewBookDetails = () => {
  const title = titleInput.value;
  const author = authorInput.value;
  const genre = genreInput.value;
  const rating = ratingInput.value;
  const newBook = new Book(title, author, genre, rating);
  books.push(newBook);
  return newBook;
};

// Makes sure that the library is up to date when the page first loads.
const updateLibrary = () => {
  for (let i = 0; i < books.length; i++) {
    addBook(books[i]);
  }
};

// This function takes the book data and adds it to local storage via JSON and adds each piece of information to the library table as col elements.
const addBook = (book, i) => {
  localStorage.setItem("books", JSON.stringify(books));
  // Row
  const bookElementRow = document.createElement("div");
  bookElementRow.className = "row pb-2";
  // I'm using this element as a unique identified so that I can find and delete the full row at a later date
  bookElementRow.setAttribute("data-index", `${i}`);
  libraryTable.appendChild(bookElementRow);
  // Title column
  const bookElementTitleCol = document.createElement("div");
  bookElementTitleCol.className = "col col-4";
  bookElementRow.appendChild(bookElementTitleCol);
  bookElementTitleCol.textContent = book.title;
  // Author column
  const bookElementAuthorCol = document.createElement("div");
  bookElementAuthorCol.className = "col col-3";
  bookElementRow.appendChild(bookElementAuthorCol);
  bookElementAuthorCol.textContent = book.author;
  // Genre column
  const bookElementGenreCol = document.createElement("div");
  bookElementGenreCol.className = "col col-2";
  bookElementRow.appendChild(bookElementGenreCol);
  bookElementGenreCol.textContent = book.genre;
  // Rating column
  const bookElementRatingCol = document.createElement("div");
  bookElementRatingCol.className = "col col-2 text-center";
  bookElementRow.appendChild(bookElementRatingCol);
  bookElementRatingCol.textContent = book.rating;
  // Delete button
  const deleteBookEntryCol = document.createElement("div");
  deleteBookEntryCol.className = "col col-1";
  bookElementRow.appendChild(deleteBookEntryCol);
  const deleteBookEntryBtn = document.createElement("button");
  deleteBookEntryBtn.className = "btn-close btn-sm deleteEntryBtn";
  deleteBookEntryCol.appendChild(deleteBookEntryBtn);
  deleteBookEntryBtn.addEventListener("click", (e) => {
    libraryTable.removeChild(bookElementRow);
    books.splice(bookElementRow, 1);
    localStorage.setItem("books", JSON.stringify(books));
  });
};

// Sets the form to default values
function clearForm() {
  titleInput.value = "";
  authorInput.value = "";
  genreInput.value = "Fantasy";
  ratingInput.value = 1;
}

// The add button on the input form will take the information and pass it into the addbook form (to be added to the library table) and into getNewBookDetails (to be added to the books array and storage). i is needed here as a unique identifier for each new object. After this, the clearform function is closed so that the user can input information on a blank form.
addBookForm.addEventListener("submit", (e, i) => {
  e.preventDefault();
  addBook(getNewBookDetails(), i);
  clearForm();
});

// Variables needed in order to make the below function work which will close the input form if the user clicks anywhere out of the form. These elements are all the elements that are in the form.
const closeBtn = document.getElementById("closeBtn");
const titleLabel = document.getElementById("titleLabel");
const title = document.getElementById("title");
const author = document.getElementById("author");
const authorLabel = document.getElementById("authorLabel");
const genre = document.getElementById("genre");
const genreLabel = document.getElementById("genreLabel");
const rating = document.getElementById("rating");
const ratingLabel = document.getElementById("ratingLabel");
// Close the add book form when you click anywhere out of the form
// There must be a slicker solution but I couldn't find one at the moment
window.addEventListener("click", (e) => {
  if (
    e.target.id !== "closeBtn" &&
    e.target.id !== "titleLabel" &&
    e.target.id !== "titleInput" &&
    e.target.id !== "title" &&
    e.target.id !== "author" &&
    e.target.id !== "authorLabel" &&
    e.target.id !== "authorInput" &&
    e.target.id !== "genre" &&
    e.target.id !== "genreLabel" &&
    e.target.id !== "genreInput" &&
    e.target.id !== "rating" &&
    e.target.id !== "ratingLabel" &&
    e.target.id !== "ratingInput" &&
    e.target.id !== "addBookForm" &&
    e.target.id !== "popUpBtn" &&
    e.target.id !== "addBookBtn" &&
    formOpen === true
  ) {
    bookInputForm.classList.toggle("hide");
    formOpen = false;
    console.log(e.target.id);
  }
});

window.addEventListener("click", (e) => {
  console.log(e.target.id);
});

window.addEventListener("load", updateLibrary);
