function clicked() {
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;
    if (u == "admin" && p == "admin") {
        alert("Login success!");
    }
    else {
        alert("Login fail!");
    }
}