// let availH = window.screen.availHeight;
// let availW = window.screen.availWidth;      //added to change window screen avail 


// let myWindow;

// function newWindow() {
//   myWindow = window.open(
//     "https://perscholas.org/",
//     "perscholas",
//     `width=${availW * .6}, height=${availH * .5}, left=${availW * .125}, top=${availH*.25}, resizable=yes, scrollbars=yes, location=yes`
//   );
//   myWindow.focus();
// }

// // Note that the close() method can only
// // affect windows created by the open() method.
// // You cannot close the current browsing window
// // using this method, for example.
// function closeWindow() {
//   myWindow.close();
// }

// // A sneak peek at event handling!
// // This will be covered in depth during a future lesson.
// document.getElementById("openWindowBtn").addEventListener("click", newWindow);
// document
//   .getElementById("closeWindowBtn")
//   .addEventListener("click", closeWindow);

// console.log(window.screen);

// console.log(window.screen.availHeight);
// console.log(window.screen.height);

// console.log(window.history);

/***NAVIGATOR */

const app = document.getElementById("app");

const uaData = window.navigator.userAgent;

// Let's use some DOM manipulation to
// create a new structure for holding
// the userAgent data:
const list = (app
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li")).textContent = uaData);

console.log(window.navigator.appVersion)
