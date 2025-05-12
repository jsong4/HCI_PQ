/* =============================
 * Given a username and password from the user, it checks to see if given
 * username exists in usersList. If username exists, it checks if the given
 * password is also correct. If both are correct, it sets the currentUser to
 * the given username and sends them to the match interface page.
 */
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
    setUser(username, password)
})