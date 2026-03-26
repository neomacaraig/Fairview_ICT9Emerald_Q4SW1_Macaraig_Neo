function toggleInstructions() {
    var instr = document.getElementById("instructions");

    if (instr.style.display == "none") {
        instr.style.display = "block";
    } else {
        instr.style.display = "none";
    }
}

// shows success or failed when person logs in
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

    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
