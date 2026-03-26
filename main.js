function toggleInstructions() {
var x = document.getElementById("instructions");

if (x.style.display == "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}
}

function login() {
var user = document.getElementById("username").value;
var pass = document.getElementById("password").value;

if (user.length >= 4 && pass.length >= 6) {
document.getElementById("output").innerHTML = "Login Successful!";
alert("Welcome " + user);
} else {
document.getElementById("output").innerHTML = "Invalid input!";
}
}

function showPass() {
var x = document.getElementById("password");

if (x.type == "password") {
x.type = "text";
} else {
x.type = "password";
}
}