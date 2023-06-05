var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  document.write("<h2>Matrix:</h2>");
  document.write("<table>");
  for (var i = 0; i < matrix.length; i++) {
    document.write("<tr>");
    for (var j = 0; j < matrix[i].length; j++) {
      document.write("<td>" + matrix[i][j] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table> <br> <hr>");
  ////////////////////////////////////////////////////////
  document.write("<h1>Numeric Counting</h1>");
   
var counting = "";

  for (var i = 1; i <= 10; i++) {
    counting += i + "<br>";
  }
  
  document.write(counting +"<br> <hr>");
  ///////////////////////////////////////////////////////////////////////////////
  document.write("<h1>Table</h1>");
  let tableNumber = parseInt(prompt("Enter the number you want the multiplication table for:"));
let tableLength = parseInt(prompt("Enter the length of the multiplication table:"));
let table = "";

for (let i = 1; i <= tableLength; i++) {
  table += tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>";
}

document.write(table+ "<br> <hr> ");
///////////////////////////////////////////////////////////////////////
document.write("<h1>Series:</h1>");
document.write("<h3>Counting:</h3>");
for (var i = 1; i <= 15; i++) {
  document.write(i + ",  <hr>  ");
}

document.write("<h3>Reverse counting:</h3>");
for (var i = 10; i >= 1; i--) {
  document.write(i + ",  <hr> ");
}

document.write("<h3>Even:</h3>");
for (var i = 0; i <= 20; i+=2) {
  document.write(i + ", <hr>  ");
}

document.write("<h3>Odd:</h3>");
for (var i = 1; i <= 19; i+=2) {
  document.write(i + ", <hr>  ");
}

document.write("<h3>Series:</h3>");
for (var i = 2; i <= 20; i+=2) {
  document.write(i + "k,  <hr>  ");
}
//////////////////////////////////////////////////////////
// Initialize an array
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt the user to enter an item to search for
var item = prompt("Welcome to HS Bakery. what do you want to order:");

// Initialize a flag variable to check if the item is found or not
var found = false;

// Loop through the array to search for the item
for (var i = 0; i < A.length; i++) {
  if (A[i] === item) {
    // Set the flag variable to true if the item is found
    found = true;
    break;
  }
}

// Check if the item is found or not and display a message accordingly
if (found) {
  alert(item + " is available at index " + i + " in our bakery");
} else {
  alert("We are sorry. " + item + " is not available in our bakery");
}
////////////////////////////////////////////////////////
// Given array
var A = [24, 53, 78, 91, 12];

// Initializing largest number as first element of array
var largest = A[0];

// Loop through the array and compare each element with the largest number
for (var i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}

// Display the largest number in the browser console
console.log("The largest number in the array is: " + largest);

// Display the largest number in the browser document
document.write("<h2> Largest Number</h2><br> ");
document.write("The largest number in the array is: " + largest + "<hr>");
////////////////////////////////////////////////////////////////////

document.write("<h3>Multiples of 5 ranging from 1 to 100:</h3>");
for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    document.write(i + "<br>");
  }
}
/////////////////////////////////////////////////////////

  