# Virtual Library

The Odin Project - Javascript Library Project

## Demo

https://reeceawalsh.github.io/Virtual-Library/

### Comments

I enjoyed designing the website and should have probably spent more time writing javascript as this was a javascript, but I was also refreshing my Bootstrap knowledge at the same time.

In regards to Bootstrap, it took me longer than it would have to make the website without Bootstrap but I was having to google a lot of functionality and classes at the same time.

I'm honestly not a massive fan of using it to be honest. I have a very good idea of what I want things to look like and that means I have to keep changing the Bootstrap styling anyway, and some of it can be a pain to get rid of.

The speed in which you can make a button or input form look nice is good, but it's never nice enough to keep that way, so it's pointless because I would change it later regardless.

It's probably quite good when you know all of the classes but I'd rather write my own styling, it's more customizable and faster for me. I might try out Tailwind again in the future though.

The javascript required in this project was a little more difficult than the last projects and I think a framework like React would have made it a lot easier and more fluid. I didn't focus on classes as much as I should have, I'm sure there's a much easier way of doing what I did but I'm not sure what it is yet.

### Specification

If you haven’t already, set up your project with skeleton HTML/CSS and JS files.
All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:

let myLibrary = [];

function Book() {
// the constructor...
}

function addBookToLibrary() {
// do stuff here
}
Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

Add a button on each book’s display to remove the book from the library.

You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

Add a button on each book’s display to change its read status.

To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

Optional - we haven’t learned any techniques for actually storing our data anywhere, so when the user refreshes the page, all of their books will disappear! If you want, you are capable of adding some persistence to this library app using the Web Storage API.

localStorage (docs here) allows you to save data on the user’s computer. The downside here is that the data is ONLY accessible on the computer that it was created on. Even so, it’s pretty handy! Set up a function that saves the whole library array to localStorage every time a new book is created, and another function that looks for that array in localStorage when your app is first loaded. Additionally, here are a couple of quick tips to help you not get tripped up:

Make sure your app doesn’t crash if the array you retrieve from localStorage isn’t there!

localStorage uses JSON to send and store data, and when you retrieve the data, it will also be in JSON format. You will learn more about this language in a later lesson, but it doesn’t hurt to get your feet wet now. Keep in mind you cannot store functions in JSON, so you’ll have to figure out how to add methods back to your object properties once you fetch them. Good luck!
