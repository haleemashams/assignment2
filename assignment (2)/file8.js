// Taking user input
var input = prompt("A Number, Uppercase letter or lower case letter.\nEnter a character:");

// Converting the input to ASCII code
var charCode = input.charCodeAt(0);

// Checking the type of the input
if (charCode >= 48 && charCode <= 57) {
    alert("The input is a number.");
} else if (charCode >= 65 && charCode <= 90) {
    alert("The input is an uppercase letter.");
} else if (charCode >= 97 && charCode <= 122) {
   alert("The input is a lowercase letter.");
} else {
    alert("Invalid input!");
}
/////////////////////////////////////////////////////////////////
// Taking user input
var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));

// Checking which integer is larger
if (num1 > num2) {
    alert(`${num1} is larger than ${num2}.`);
} else if (num2 > num1) {
    alert(`${num2} is larger than ${num1}.`);
} else {
    alert("The two integers are equal.");
}
////////////////////////////////////////////////////////////////

// Taking user input
var number = parseFloat(prompt("Positive, Negative or Zero.\nEnter a number:"));

// Checking if the number is positive, negative, or zero
if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}
//////////////////////////////////////////////////////////////////////////
// Taking user input
var char = prompt("Enter a character:");

// Converting the input to lowercase
char = char.toLowerCase();

// Checking if the character is a vowel
if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
   alert(true);
} else {
    alert(false);
}
////////////////////////////////////////////////////////////////////////
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var password = prompt(" Enter his/her password");
var validpassword = prompt(" Confirm your password");
if (password === validpassword){
    alert( "“Correct! The password you \nentered matches the original password”.")
}else {
    alert("“Incorrect password”")
}
///////////////////////////////////////////////////////////////////////////////
var greeting=prompt( "Enter hours:  ")
var hour = 13;
if (hour < 18) {
alert (greeting = "Good day");}
else{
alert (greeting = "Good evening");
}
