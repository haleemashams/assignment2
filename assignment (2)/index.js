
////////////////////////////////////////////////////////
var cityName = prompt("Enter a city name: ");

if (cityName=== "karachi") {
   alert("Welcome to the city of lights!");
} else {
   alert(`Welcome to ${cityName}!`);
}
/////////////////////////////////////////
var gender = prompt("Enter your gender (male/female): ");

if (gender === "male") {
    alert("Good Morning Sir.");
}  if (gender === "female") {
   alert("Good Morning Ma'am.");
} else {
    alert("Invalid input.");
    
}
////////////////////////////////////////////////
var color = prompt("Enter the color of the traffic signal: ");

if (color === "red") {
    alert("Must stop!");
}  if (color.toLowerCase() === "yellow") {
    alert("Ready to move!");
} else if (color === "green") {
    alert("Move now!");
} else  {
    alert("Invalid color entered.");
}
//////////////////////////////////////////////
var fuel =(prompt("Enter the remaining fuel in your car (in liters): "));

if (fuel < 0.25) {
    alert("Please refill the fuel in your car.");
} else {
    alert("You have enough fuel to continue driving.");
}
///////////////////////////////////////////////////////
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
///////////////////////////////////////////
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
////////////////////////////////
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
/////////////////////////
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//////////////////////
 if (true){
alert("True");
}
if (false){
alert("False");
}
//////////////////////////////////
if("car" < "cat"){
    alert("car is smaller than cat");
    }
//////////////////////////////////////
let marks1 = (prompt("Enter the marks obtained in subject 1: "));
let marks2 = (prompt("Enter the marks obtained in subject 2: "));
let marks3 = (prompt("Enter the marks obtained in subject 3: "));
let totalMarks =(prompt("Enter the total marks: "));

let obtainedMarks = marks1 + marks2 + marks3;
let percentage = (obtainedMarks / totalMarks) * 100;

alert("Percentage = " + percentage + "%");

if (percentage >= 90) {
   alert("Grade: A+");
}
 else if (percentage >= 80) {
   alert("Grade: A");
} else if (percentage >= 70) {
alert("Grade: B");
} else if (percentage >= 60) {
   alert("Grade: C");
} else {
    alert("Grade: Fail");
}
////////////////////////////////////////////
// Generate a random number between 1 and 10
var secretNumber =  (8) + 1;

// Ask the user to guess the secret number
var guess = parseInt(prompt("Guess the secret number (between 1 and 10): "));

// Check if the guess is correct
if (guess === secretNumber) {
    alert("Bingo! Correct answer.");
} else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
    alert("Close enough to the correct answer.");
} else {
    alert("Sorry, that's not the correct answer.");
}
////////////////////////////////////////////////////////
var number = (prompt("Which number is divisible by 3: "));

if (number % 3 === 0) {
  alert("The number is divisible by 3.");
} else {
   alert("The number is not divisible by 3.");
}
/////////////////////////////////////////////////


var number = (prompt("Enter a number here : "));

if (number % 2 === 0){
  alert("The is an Even number.");
} else {
   alert("The is Odd number.");
}
//////////////////////////////////////////////
// Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var T = (prompt("Enter a temperature here : "));


if( T >=40){
 alert("It is too hot outside.")
}

else if (T >= 30) {
   alert("The Weather today is Normal.");
}
else if (T >= 20) {
    alert("Today’s Weather is cool.");
}
else if (T >= 10) {
    alert("OMG! Today’s weather is so Cool");
}

///////////////////////////////////////////////////////
// Ask user for input
var num1 = (prompt("Enter the first number:"));
var num2 =(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

// Initialize result variable
var result;

// Perform operation based on user input
if (operation === "+") {
  result = num1 + num2;
} else if (operation  === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  result = num1 / num2;
} else if (operation === "%") {
  result = num1 % num2;
} else {
 alert("Invalid operation entered.");
}

// Display result to user
alert(`${num1} ${operation} ${num2} = ${result}`);
/////////////////////////////////////////////////////////////////////////////////////////////





