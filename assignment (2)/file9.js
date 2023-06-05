// Declare and initialize a strings array
var stringsArray = ["apple", "banana", "cherry"];

// Declare and initialize a numbers array
var numbersArray = [1, 2, 3, 4, 5];

// Declare and initialize a boolean array
var booleanArray = [true, false, true];

// Declare and initialize a mixed array
var mixedArray = ["apple", 2, true];

// Declare and initialize an array of education qualifications
var qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Display the qualificationsArray in the browser
document.write("<h1>Education Qualifications in Pakistan:</h1>");
document.write("<ul>");
for (var i = 0; i < qualificationsArray.length; i++) {
  document.write("<li>" + qualificationsArray[i] + "</li>");
}
document.write("</ul>");
document.write( "<hr>");
/////////////////////////////////////////////////////////////////

// Declare and initialize arrays for student names and scores
var studentNames = ["Michael", "Jhon", "Tony"];
var studentScores = [320, 230, 480];

// Calculate the percentage of each student
var totalMarks = 500;
var percentages = [];
for (var i = 0; i < studentScores.length; i++) {
  percentages.push((studentScores[i] / totalMarks) * 100);
}

// Display the scores and percentages of each student
for (var i = 0; i < studentNames.length; i++) {
  document.write("<h2>" + studentNames[i] + "</h2>");
  document.write("<p>Score: " + studentScores[i] + " out of " + totalMarks + "</p>");
  document.write("<p>Percentage: " + percentages[i] + "%</p>");
  document.write("<hr>");
}
//////////////////////////////////////////////////////////////////////////////
// Initialize an array with color names
var colorsArray = ["Red", "Green", "Blue", "Yellow", "Pink"];

// Display the array elements in the browser
document.write("<h2>Original Array:</h2>");
document.write("<p>" + colorsArray.join(", ") + "</p>");

// Add a color to the beginning of the array
var newColorBeginning = prompt("Enter a color to add to the beginning of the array:");
colorsArray.unshift(newColorBeginning);

// Display the updated array in the browser
document.write("<h2>Updated Array (After Adding Color to Beginning):</h2>");
document.write("<p>" + colorsArray.join(", ") + "</p>");

// Add a color to the end of the array
var  newColorEnd = prompt("Enter a color to add to the end of the array:");
colorsArray.push(newColorEnd);

// Display the updated array in the browser
document.write("<h2>Updated Array (After Adding Color to End):</h2>");
document.write("<p>" + colorsArray.join(", ") + "</p>");

// Add two more colors to the beginning of the array
colorsArray.unshift("Orange", "Purple");

// Display the updated array in the browser
document.write("<h2>Updated Array (After Adding Two Colors to Beginning):</h2>");
document.write("<p>" + colorsArray.join(", ") + "</p>");

// Delete the first color in the array
colorsArray.shift();

// Display the updated array in the browser
document.write("<h2>Updated Array (After Deleting First Color):</h2>");
document.write("<p>" + colorsArray.join(", ") + "</p>");

// Delete the last color in the array
colorsArray.pop();

// Display the updated array in the browser
document.write("<h2>Updated Array (After Deleting Last Color):</h2>");
document.write("<p>" + colorsArray.join(", ") + "</p>");

// Add a color at a desired index
var  newColorIndex = prompt("Enter the index at which you want to add the color:");
var newColorName = prompt("Enter the name of the color you want to add:");
colorsArray.splice(newColorIndex, 0, newColorName);

// Display the updated array in the browser
document.write("<h2>Updated Array (After Adding Color at Desired Index):</h2>");
document.write("<p>" + colorsArray.join(", ") + "</p>");

// Delete color(s) from a desired index
var deleteColorIndex = prompt("Enter the index from which you want to delete color(s):");
var deleteColorCount = prompt("Enter the number of colors you want to delete:");
colorsArray.splice(deleteColorIndex, deleteColorCount);

// Display the updated array in the browser
document.write("<h2>Updated Array (After Deleting Color(s) from Desired Index):</h2>");
document.write("<p>" + colorsArray.join(", ") + "</p> <br> <hr>");
///////////////////////////////////////////////////////////////////////////////
var scores = [320, 230, 480, 120];

document.write( "<hr>");
document.write("Scores before sorting: " + scores + "<br>");

scores.sort(function(a, b) {
  return a - b;
});

document.write("Scores after sorting: " + scores  +"<br> <hr> ");
//////////////////////////////////////////////////////////////////////////
var cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad"];
var selectedCities = [];

// Copying 3 elements from cities array to selectedCities array
selectedCities = cities.slice(1, 4);

// Displaying the original and selected cities arrays
document.write("Cities: " + cities + "<br>");
document.write("Selected Cities: " + selectedCities  +"<br> <hr> ");

/////////////////////////////////////////////////////////
var arr = ["This", "is", "my", "cat"];

var str = arr.join(" ");

document.write(str  + "<br> <hr>");
////////////////////////////////////////////////////////////////////
var myArray = [];

// Add values to the array using push() method
myArray.push("apple");
myArray.push("banana");
myArray.push("orange");

// Access values in the order they were stored using shift() method
var firstValue = myArray.shift();
var secondValue = myArray.shift();
var thirdValue = myArray.shift();

// Display the values in the order they were stored
document.write(firstValue + "<br>");
document.write(secondValue + "<br>");
document.write(thirdValue + "<br> <hr>");
/////////////////////////////////////////////////////////////////////
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Display the dropdown/select menu
document.write("<label for='phone'>Select a phone manufacturer:</label>");
document.write("<select id='phone' name='phone'>");
for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");


//////////////////////////////////////////////////////////////////