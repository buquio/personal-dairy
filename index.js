/*
 - Create a variable named "entryForm" and use the document.getElementById method
   to make its value the entryForm from our HTML document.
*/

const entryForm = document.getElementById('entryForm');

/*
 - Add an event listener to the entryForm variable that prevents the page from
   reloading whenever the submit button is clicked.
*/

function addEntryToDom(event) {
    event.preventDefault();
}

entryForm.addEventListener('submit', addEntryToDom)


xxxx
/*
    create a new variable named "entriesSection" and assign it
    a value of the HTML section we just created
*/

const entryForm = document.getElementById('entryForm');
const entriesSection = document.getElementById('entries');
const entryTextbox = document.getElementByClass('entry-textbox');

console.log(entryTextbox.value);

function addEntryToDom(event) {
    event.preventDefault();
}

entryForm.addEventListener('submit', addEntryToDom)

xxxxx
const entryForm = document.getElementById('entryForm');
const entriesSection = document.getElementById('entries');
const entryTextbox = document.getElementsByClassName('entry-textbox');

function addEntryToDom(event) {
    event.preventDefault();
    console.log(entryTextbox[0].value);
}

entryForm.addEventListener('submit', addEntryToDom)

xxxxx
const entryForm = document.getElementById('entryForm');
const entriesSection = document.getElementById('entries');
const entryTextbox = document.getElementsByClassName('entry-textbox');

/*
  - Inside the addEntryToDom function, create a new variable named entryDiv.
  - Use the document.createElement method to create an html Div and make it the
      new variable's value.
  - On a new line, give the new div a class of 'single-entry'.
  - Change the div's innerText property to the user's input from the textbox
  - Use the appendChild method to add the new div to the entriesSection
      variable created on line 2
*/

function addEntryToDom(event) {
    event.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox[0].value;
    entriesSection.appendChild(entryDiv);
    // console.log(entryTextbox[0].value);
     /*
    clear the entry textbox whenever the submit button is clicked
    */

}

entryForm.addEventListener('submit', addEntryToDom)

xxxx
const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('entries');
const entryTextbox = document.querySelector('entry-textbox');
const entriesNav = document.querySelector('.entries-nav');

/*
  - In the addEntryToDom() function, create a new variable named
      displayEntryButton.
  - Use the document.createElement method to create an HTML button
      and make that the value of the new variable.
  - Use the innerText property to set the button's inner text to "1";
  - Append the button to the entriesNav div we created on line 4.
*/

function addEntryToDom(event) {
    event.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none';
    console.log(entryDiv);
    entriesSection.appendChild(entryDiv);
    entryTextbox.value = '';
}

entryForm.addEventListener('submit', addEntryToDom)


xxxxxxxx
/*
  - increment the button count whenever the submit button is clicked
  - hint: use a variable to represent the displayButton.innerText value
      on line 21
*/

/*
      - Add a click event listener to the displayEntryButton.
      - Set the display property of the entryDiv to 'block' whenever
          it's clicked.
    */
 /*
      - Inside the displayEntryButton addEventListener function,
          create a new variable named 'allEntries'.
      - use the document.queryselectorAll method to select all
          elements with the class of 'single-entry' and make that the
          value of the new allEntries variable.
    */
 /*
            - Use a for loop to iterate through all the elements in the
              allEntries variable.
            - Set each element's style.display property to 'none'.
        */
xxxxxxxxx

const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('#entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');

let count = 1;
function addEntryToDom(event) {
    event.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none';
    entriesSection.appendChild(entryDiv);
    entryTextbox.value = '';
    
    const displayEntryButton = document.createElement('button');
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = count;
    entriesNav.appendChild(displayEntryButton);

    displayEntryButton.addEventListener('click', function() {
        const allEntries = document.querySelectorAll('single-entry');
        /*
            - Use a for loop to iterate through all the elements in the
              allEntries variable.
            - Set each element's style.display property to 'none'.
        */
        entryDiv.style.display = 'block';
    })
    
    count++
}

entryForm.addEventListener('submit', addEntryToDom)