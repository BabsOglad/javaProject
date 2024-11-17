//Delete Function
const deleteBtn = document.querySelectorAll(".delete");
const parent = document.getElementById("wrap"); //ul

console.log(deleteBtn);

/*
Array.isArray Method - This is used to check if an item is an Array or not
console.log(Array.isArray(deleteBtn));//checking if it is an array or not using the method
*/
//Array.from Method - this is used to convert list of items/nodelist to an Array
// console.log(Array.from(deleteBtn));

//Looping through the delete Buttons
Array.from(deleteBtn).forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        //selecting the parent of the clicked button
        let li = e.target.parentNode; //parentNode represent the parent of the item
        //Removing the selected li from the ul
        parent.removeChild(li);
    })
});

//Add Book Function
//Collects input value and insert it into a generated/created span element
//<span>input value<span/>
//Generate/create a pan element and insert "delete" textContent into it
//<span>delete<span/>
//Generate/create an li tag and append the two created spans into it.
//<li>
//  <span>input value<span/>
//  <span>delete<span/>
//<li/>
//Append the li into the Parent ul. (appended)
//Prevent default action. *

//1. Selecting the add button from the HTML
let addBtn = document.getElementById("add_btn");

//2. Add an event listener of click to the button
addBtn.addEventListener("click", function (e) {
    let bookTitleValue = document.getElementById('add_book').value; //textContent is used for HTML tags, .value is used for input
    e.preventDefault();

    //Creating the elements - li, span
    let li = document.createDocumentFragment('li');
    let title = document.createElement('span');
    let deleteBook = document.createElement('span');


    //Assigning values of our span tags
    title.textContent = bookTitleValue; //this gets the title inputted in the search space
    deleteBook.textContent = "delete"; //this makes the content of the span called deleteBook to be "delete"

    //classlist and id are used for attaching class and id attributes to HTML elements from our Javascript code. 
    //An example for this Javascript project using deleteBook (which is the delete button).
    //deleteBook.claslist.add('delete');
    //deleteBook.id.add('id name')
    //tyling the delete button by giving it the same class as the other delete buttons
    deleteBook.classList.add('delete');

    //Appending title and deleteBook into the li tag
    //<li>
    //  <span>input value<span/>
    //  <span>delete<span/>
    //<li/>
    li.appendChild(title);
    li.appendChild(deleteBook);



    //Appending the created li to the ul tag
    parent.appendChild(li);
    //<ul>
    //  <li>
    //      <span>input value<span/>
    //      <span>delete<span/>
    //  <li/>
    //<ul/>

    //creating the delete function
    deleteBook.addEventListener("click", function () {
        parent.removeChild(li);
    });

});

//

