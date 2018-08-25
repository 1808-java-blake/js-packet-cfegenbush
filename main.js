// -----------------------------------------------------------------------------------
// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
// Please put the question itself as a comment above each answer.

// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA() {
    for (let x of document.getElementsByTagName('*')) {
        if (x.textContent === "USA") {
            console.log(x.innerHTML);
        }
    }
}
  
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() {
    for (let x of document.getElementsByTagName('tr')){
        if (x.textContent.includes('Sales')) {
            for (let y of x.getElementsByClassName('empName')) {
                console.log(y.innerHTML);
            }
        } 
    }
}

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren() {
    for (let x of document.getElementsByTagName('a')) {
        for (let y of x.getElementsByTagName('span')) {
            console.log(y.innerHTML);
        }
    }
}
  
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies() {
    for (let x of document.getElementsByName('hobbies')) {
        for (let y of x.getElementsByTagName('option')) {
            console.log(`Value: ${y.value}, Contents: ${y.textContent}`);
        }
    }
}
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getCustomAttribute() {
    for (let x of document.querySelectorAll('[data-customAttr]')) {
        console.log(`Element: ${x.tagName} Value: ${x.getAttribute('data-customAttr')}`);
    }
}
// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
document.addEventListener('change', function() {
    document.getElementById('num1').onchange=changeEventHandler;
})

document.addEventListener('change', function() {
    document.getElementById('num2').onchange=changeEventHandler;
})

function changeEventHandler(event) {
    let num1Val = document.getElementById('num1').value;
    let num2Val = document.getElementById('num2').value;
    let sum = document.getElementById('sum');
    if (!(+num1Val + +num2Val)) {
        sum.innerHTML = "Cannot add";
    } else {
        sum.innerHTML = +num1Val + +num2Val;
    }
}
// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.


// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).