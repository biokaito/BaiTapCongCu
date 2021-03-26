function clicked() {
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;
    if (u == "admin" && p == "admin") {
        alert("Login success!");
        window.open("./home.html")
    }
    else {
        alert("Login fail!");
    }
}