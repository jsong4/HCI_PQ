
function setUser(username, password) {
    var usersList = JSON.parse(localStorage.getItem("usersList"))
    if (username in usersList) {
        savedPass = usersList[username].password
        // check if password correct
        if (password == savedPass) {
            localStorage.setItem("currentUser", username)
            window.location.href = 'match.html'
        } else {
            alert(`Invalid Password. Please try again.`)
        }
    } else {
        alert(`Invalid Username ${username}. Please try again.`)
    }
}

loginButton = document.getElementById("login-button")
loginButton.addEventListener('click', function(e) {
    e.preventDefault();
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    console.log(username, password);
    setUser(username, password)
})