let myLibrary = [harryPotter, lordOfTheRings];

class Book {
  constructor(title, author, published) {
    this.title = title;
    this.author = author;
    this.published = published;
  }
  addBookToLibrary(title, author, published)
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook)
}

let harryPotter = {
  title: "Harry Potter",
  author: "J.K.Rowling",
  published: "June 1998",
};

let lordOfTheRings = {
  title: "Lord Of The Rings",
  author: "Tolkien",
  published: 1994
};
