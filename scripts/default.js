const currentUser = localStorage.getItem("currentUser")
console.log(currentUser)

if (currentUser != null && !window.location.href.includes("newuser")) {
    // User has logged in
    let logo = document.getElementById('logo-container')
    logo.removeAttribute('href')

    let toolbar = document.querySelector('.nav-icons')
    toolbar.classList.remove('hidden')

    let homeLink = document.querySelector('.nav-links a')
    homeLink.addEventListener('click', function(e) {
        let confirmation = confirm('You will be logged out if you continue to home. Would you like to continue?')
        if (!confirmation) {
            e.preventDefault()
        }
    })
}