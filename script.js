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

popUpBtn.onclick = function () {
  bookInputForm.classList.toggle("hide");
};

closeFormBtn.onclick = function () {
  bookInputForm.classList.toggle("hide");
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

class Library {
  constructor() {
    this.books = [];
    console.log(this.books);
  }

  addBookToLibrary() {
    this.books.push(getNewBookDetails());
  }
}

const library = new Library();

const getNewBookDetails = () => {
  const title = titleInput.value;
  const author = authorInput.value;
  const genre = genreInput.value;
  const rating = ratingInput.value;
  return new Book(title, author, genre, rating);
};

const addBook = (book) => {
  // Row
  const bookElementRow = document.createElement("div");
  bookElementRow.className = "row pb-2";
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
  bookElementGenreCol.className = "col col-3";
  bookElementRow.appendChild(bookElementGenreCol);
  bookElementGenreCol.textContent = book.genre;
  // Rating column
  const bookElementRatingCol = document.createElement("div");
  bookElementRatingCol.className = "col col-2 text-center";
  bookElementRow.appendChild(bookElementRatingCol);
  bookElementRatingCol.textContent = book.rating;
  // Add to library
  library.books.push(book);
};

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook(getNewBookDetails());
});
