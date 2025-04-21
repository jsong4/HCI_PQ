function loadProgressBar() {
    console.log("Load")
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

// Example
test = {
    "user1": {
        "selectedPrompts": ["In a parallel universe, I am definitely...", "One rule of society I'd totally rewrite...", "A letter to my future me would start with..."],
        "prompt1": ["In a parallel universe, I am definitely...", "A polar bear who noms on fish all day"],
        "prompt2": ["One rule of society I'd totally rewrite...", "the lazy dog jumped over the sleeping fox and ate a cheeseburger from in n out, specifically the double double because that's yummy. Animal style suck"],
        "prompt3": ["A letter to my future me would start with...", "what up"],
        "checkbox": ["Chronically online", "Listener", "Easygoing"] // More than 3 now, but only top 3 on create prof preview
    },
    "user2": {
        "selectedPrompts": ["In a parallel universe, I am definitely...", "One rule of society I'd totally rewrite...", "A letter to my future me would start with..."],
        "prompt1": ["In a parallel universe, I am definitely...", "A polar bear who noms on fish all day"],
        "prompt2": ["One rule of society I'd totally rewrite...", "the lazy dog jumped over the sleeping fox and ate a cheeseburger from in n out, specifically the double double because that's yummy. Animal style suck"],
        "prompt3": ["A letter to my future me would start with...", "what up"],
        "checkbox": ["Chronically online", "Listener", "Easygoing"] // More than 3 now, but only top 3 on create prof preview
    }

}
current_user = "user1"
 //let usersList = JSON.parse(localStorage.getItem("usersList")) || { "user1": {} };

// Get item userList, JSON.parse the userList from , add new item to dictionary

// // Add test to localStorage
// localStorage.setItem("usersList", JSON.stringify(test));

function redirectToStart() {
    msg = "Uh oh, it seems your profile wasn't saved properly. Click to proceed back to the home page and restart your Persona!"
    url = "index.html"
    alert(msg)
    window.location.href = url
}

// Access items from localStorage
let usersList = JSON.parse(localStorage.getItem("usersList"))
console.log(usersList)

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
            console.log(current_user)
            userInfo = usersList[current_user];
            if (userInfo != null) {
                let userName = current_user; // TODO - future implemntation to use openAi to generate names?
                userInfo["profile"] = {
                    "color": "#fff1cc",
                    "accessory": "images/prof_customization/empty.svg"
                }
                localStorage.setItem("usersList", JSON.stringify(usersList))
                var starterColor = userInfo.profile.color;
                console.log(starterColor)
                console.log(document.getElementById("welcome-img"))
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
        console.log("create prof page!")
        if (usersList == null) { // Invalid User
                redirectToStart()
        
        }
    }
}

window.onload = loadSpecificPage;