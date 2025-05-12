/* =============================
 * Pre-set the current user generated at the start of the questionnaire to
 * store their responses in localStorage.
 */
const currentUser = localStorage.getItem("currentUser")

/* =============================
 * Loads a progress bar to indicate to a user that their profile is being
 * generated aka loading all their responses.
 */
function loadProgressBar() {
    console.log("Loading profile...")
    var progress = document.getElementById("progress")
    var width = 0;
    var id = setInterval(frame, 30);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            progress.style.width = width + "%";
            progress.innerHTML = width * 1 + "%";
        }
    }
}

/* =============================
 * If a user accidentally exits the page or does not follow the questionnaire
 * process in the standardized way, it will send the user back to the start
 * to ensure quality control.
 */
function redirectToStart() {
    msg = "Uh oh, it seems your profile wasn't saved properly. Click to proceed back to the home page and restart your Persona!"
    url = "index.html"
    alert(msg)
    window.location.href = url
}

// Access items from localStorage
let usersList = JSON.parse(localStorage.getItem("usersList"))

// Executes specific functions based on current page
function loadSpecificPage() {
    // If load page, execute load animation and switch page after finished
    if (window.location.href.includes("newuser_load.html")) {
        loadProgressBar();
        setTimeout(() => {
            window.location.href = "newuser_welcome.html";
        }, 3200);
    }
    // If welcome page, display generated name
    else if (window.location.href.includes("newuser_welcome.html")) {
        if (usersList != null) { // Valid User
            userInfo = usersList[currentUser];
            if (userInfo != null) {
                let userName = currentUser;
                userInfo["profile"] = {
                    "color": "#fff1cc",
                    "accessory": "images/prof_customization/empty.svg"
                }
                localStorage.setItem("usersList", JSON.stringify(usersList))
                var starterColor = userInfo.profile.color;
                document.getElementById("welcome-img").style.backgroundColor = starterColor;
                document.getElementById("userName").textContent = userName + "!";
            }
            else { // Invalid user
                redirectToStart()
            }
        }
        setTimeout(() => {
            title = document.getElementById("welcome-title");
            profImg = document.getElementById("welcome-img");
            title.classList.remove("fade-in-up");
            profImg.classList.remove("fade-in-up");
            title.classList.add("fade-out-down");
            profImg.classList.add("fade-out-down");
        }, 2750);
        setTimeout(() => {
            window.location.href = "newuser_createprof.html";
        }, 3200);
    }
    else if (window.location.href.includes("newuser_createprof.html")) {
        if (usersList == null) { // Invalid User
                redirectToStart()
        }
    }
}

window.onload = loadSpecificPage;