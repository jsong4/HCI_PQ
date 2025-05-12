const curUser = localStorage.getItem("currentUser")

// Using localStorage
// var test = {
//     "user1": {
//         "prompt1": ["In a parallel universe, I'm definitely...", "A polar bear who noms on fish all day"],
//         "prompt2": ["One rule of society I'd totally rewrite...", "the lazy dog jumped over the sleeping fox and ate a cheeseburger from in n out, specifically the double double because that's yummy. Animal style suck"],
//         "prompt3": ["A letter to future me would definitely include...", "what up"],
//         "checkbox": ["Chronically Online", "Listener", "Easygoing", "Outgoing", "Foodie"],
//         "profile": {
//             "color": "#fffdbd",
//             "accessory": "images/prof_customization/empty.svg"
//         },
//         "selectedPrompts": [
//             "In a parallel universe, I'm definitely...",
//             "One rule of society I'd totally rewrite...",
//             "A letter to future me would definitely include..."
//         ]
//     }
// }

// userData = {
//     "user2": {
//         "distance": 0.2,
//         "match_bool": 0 // 0 for false, 1 for true
//     },
//     "user3": {
//         "distance": 0.9,
//         "match_bool": 1 // 0 for false, 1 for true
//     }
// }

// localStorage.removeItem("usersList")
// var current_user = "user1"
// localStorage.setItem("usersList", JSON.stringify(test));

function loadUserData() {
    let usersList = JSON.parse(localStorage.getItem("usersList"))
    console.log(usersList);

    if (usersList != null) { // Valid User
        var userInfo = usersList[curUser];
        if (userInfo != null) {
            var prompt1 = userInfo["prompt1"];
            var prompt2 = userInfo["prompt2"];
            var prompt3 = userInfo["prompt3"];
            var checkbox = userInfo["checkbox"];
            var userName = curUser; // TODO
            var prompts = [prompt1, prompt2, prompt3]
            var color = userInfo["profile"]["color"]
            var accessory = userInfo["profile"]["accessory"]
            var activity = userInfo["activity"]
            var politics = userInfo["politics"]
            var religion = userInfo["religion"]
            var alcohol = userInfo["alcohol"]
            var tobacco = userInfo["tobacco"]
            var cannabis = userInfo["cannabis"]
            bear_color.style.backgroundColor = color
            profile_accessory.src = accessory
            color_input.value = color

            document.getElementById("userName").textContent = userName;

            for (var i = 0; i < 3; i++) {
                const promptParent = document.getElementById(`prompt${i + 1}`);
                const promptDiv = promptParent.querySelector(".prompt");
                const responseDiv = promptParent.querySelector(".response");

                if (promptDiv && responseDiv) {
                    promptDiv.textContent = prompts[i][0];
                    responseDiv.textContent = prompts[i][1];
                } else {
                    chosenPrompt = document.createElement("div");
                    chosenPrompt.className = "prompt";
                    chosenPrompt.textContent = prompts[i][0];
                    promptParent.appendChild(chosenPrompt);

                    writtenResp = document.createElement("div");
                    writtenResp.className = "response";
                    writtenResp.textContent = prompts[i][1];
                    promptParent.appendChild(writtenResp);
                }
            }
        }
        
        var listParent = document.getElementById("checkbox");
        listParent.innerHTML = ''; // to update
        for (var i = 0; i < checkbox.length; i++) {
            var listChild = document.createElement("li");
            listChild.textContent = checkbox[i];
            listParent.appendChild(listChild);
        }

        let valueMap = {activity, politics, religion, alcohol, tobacco, cannabis};
        let values = document.querySelectorAll('#values-container select')
        values.forEach(select => {
            let savedValue = valueMap[select.name]
            select.value = savedValue;
        })
    }
}

// List of all prompts
const list_of_prompts = [
    "The last chapter of my life story better include...",
    "In a parallel universe, I'm definitely...",
    "A letter to future me would definitely include...",
    "One rule of society I'd totally rewrite...",
    "Three dinner guests, unlimited wine, and chaos ensues...",
    "The soundtrack of my life would definitely include...",
    "If my personality were a cocktail, it would be called...",
    "The title of my autobiography would be...",
    "If I could have one superpower, it would be...",
    "If my life were a meme right now, it would be..."
];

function editResponse(promptNum) {
    popup = document.getElementById("prompt-popup");

    popup.style.display = "block";
    const dropdown = document.getElementById("select-prompt");
    const textEntry = document.getElementById("response");
    const updateButton = document.getElementById('update-resp-button');
    
    dropdown.innerHTML = '';
    textEntry.value = '';

    // Placeholder option to prompt user selection
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select a written prompt";
    placeholder.disabled = true;
    placeholder.selected = true;
    dropdown.appendChild(placeholder);

    // Retrieve stored data or initialize it
    let usersList = JSON.parse(localStorage.getItem("usersList"))
    let selectedPrompts = usersList[curUser].selectedPrompts || [];

    // Filter out already selected prompts
    const filteredPrompts = list_of_prompts.filter(prompt => !selectedPrompts.includes(prompt));

    // Populate the dropdown with filtered prompts
    filteredPrompts.forEach(prompt => {
        const option = document.createElement("option");
        option.value = prompt;
        option.textContent = prompt;
        dropdown.appendChild(option);
    });

    close_resp = document.getElementById("resp-close-icon");
    close_resp.addEventListener("click", function () {
        popup.style.display = "none";
    })

    // Event listener for the Next button
    updateButton.addEventListener("click", () => {
        const selectedOption = dropdown.value;
        const textValue = textEntry.value;
        const currentOption = usersList[curUser][promptNum][0]

        if (selectedOption && textValue) {
            // Update the selected prompts array
            if (!selectedPrompts.includes(selectedOption)) {
                selectedPrompts.push(selectedOption);
                selectedPrompts = selectedPrompts.filter(prompt => prompt !== currentOption);

                usersList[curUser].selectedPrompts = selectedPrompts;
            }

            // Update the user data structure
            usersList[curUser][promptNum] = [selectedOption, textValue];

            // Store updated data
            localStorage.setItem("usersList", JSON.stringify(usersList));
            loadUserData();
            popup.style.display = "None";
        } else {
            alert("If you do not wish to update your written response, please click the close button.");
        }
    });
}

// List of all checkboxes
const list_of_checkboxes = [
    "Chronically Online",
    "Outgoing",
    "Adventurous",
    "Easygoing",
    "Honest",
    "Prefers Voice Notes",
    "Optimistic",
    "Sporty",
    "Loyal",
    "Punctual",
    "Listener",
    "Memecentral",
    "Foodie",
    "Empathetic",
    "Easily Peer-Pressured"
];

function editCheckboxes() {
    var popup = document.getElementById("checkbox-popup");
    popup.style.display = "block";
    
    const checkboxes = document.querySelectorAll(".checkbox-option");
    const updateButton = document.getElementById('update-checkbox-button');

    // Retrieve stored data or initialize it
    let usersList = JSON.parse(localStorage.getItem("usersList"))
    let selectedCheckboxes = usersList[curUser].checkbox || [];
    console.log(selectedCheckboxes)

    // Limit the number of checkboxes that can be selected to 5
    checkboxes.forEach(checkbox => {
        console.log(checkbox.nextSibling.textContent)
        if (selectedCheckboxes.includes(checkbox.nextSibling.textContent.trim())) { // Check previously checked values
            checkbox.checked = true;
        }

        checkbox.addEventListener("change", () => {
            const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
            if (checkedCount > 5) {
                alert("You can only select up to 5 options.");
                checkbox.checked = false;  // Uncheck the last one if more than 5 are selected
            }
        });
    });

    close_check = document.getElementById("check-close-icon");
    close_check.addEventListener("click", function () {
        console.log("closing");
        popup.style.display = "none";
    })

    // Event listener for the Next button
    updateButton.addEventListener("click", () => {
        const selectedOptions = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.nextSibling.textContent.trim()); // Collect the label text
        console.log(selectedOptions)

        if (selectedOptions.length > 0) { // might not be necessary
            // Store the selected options in localStorage
            usersList[curUser].checkbox = selectedOptions;

            // Store updated data
            localStorage.setItem("usersList", JSON.stringify(usersList));
            loadUserData();
            popup.style.display = "None";
        } else {
            alert("Please check at least 1 trait to continue.");
        }
    });
}

const accessories = [
    "images/prof_customization/beanie.svg",
    "images/prof_customization/bow.svg",
    "images/prof_customization/sunglasses.svg",
    "images/prof_customization/crown.svg",
    "images/prof_customization/glasses.svg",
    "images/prof_customization/baseballcap.svg",
    "images/prof_customization/earrings.svg",
    "images/prof_customization/mustache.svg",
    "images/prof_customization/scarf.svg",
    "images/prof_customization/partyhat.svg",
    "images/prof_customization/necklace.svg",
    "images/prof_customization/empty.svg"
]

var profile_accessory = document.getElementById("profile-img-accessory");
var profile_left = document.getElementById("left-button")
var profile_right = document.getElementById("right-button")
var color_form = document.getElementById("color-input")
var bear_color = document.getElementById("profile-img-container")
var color_input = document.getElementById("profile-img-color")

profile_left.addEventListener("click", function () {
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    idx = accessories.indexOf(profile_accessory.getAttribute("src"))
    new_src = ""
    if (idx > 0) {
        new_src = accessories[idx - 1]
    } else {
        new_src = accessories[accessories.length - 1]
    }
    profile_accessory.src = new_src
    usersList[curUser].profile.accessory = new_src; // set new accessory
    localStorage.setItem("usersList", JSON.stringify(usersList))
})

profile_right.addEventListener("click", function () {
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    idx = accessories.indexOf(profile_accessory.getAttribute("src"))
    new_src = ""
    if (idx < accessories.length - 1) {
        new_src = accessories[idx + 1];
    } else {
        new_src = accessories[0];
    }
    profile_accessory.src = new_src;
    usersList[curUser].profile.accessory = new_src; // set new accessory
    localStorage.setItem("usersList", JSON.stringify(usersList))
})

color_form.addEventListener("submit", function (event) {
    event.preventDefault()
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    console.log("current color", usersList[curUser].profile.color)
    bear_color.style.backgroundColor = color_input.value
    usersList[curUser].profile.color = color_input.value;
    console.log("new color", usersList[curUser].profile.color)
    localStorage.setItem("usersList", JSON.stringify(usersList))
    return false
})

const activity = document.getElementById("activity-select")
activity.addEventListener('click', function(event) {
    event.preventDefault();
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    const selectedActivity = activity.value;

    userInfo = usersList[currentUser];
    userInfo["activity"] = selectedActivity;
    console.log(usersList)

    localStorage.setItem("usersList", JSON.stringify(usersList));
})

const politics = document.getElementById("politics-select")
politics.addEventListener('click', function(event) {
    event.preventDefault();
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    const selectedPolitics = politics.value;

    userInfo = usersList[currentUser];
    userInfo["politics"] = selectedPolitics;

    localStorage.setItem("usersList", JSON.stringify(usersList));
})

const religion = document.getElementById("religion-select")
religion.addEventListener('click', function(event) {
    event.preventDefault();
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    const selectedReligion = religion.value;

    userInfo = usersList[currentUser];
    userInfo["religion"] = selectedReligion;

    localStorage.setItem("usersList", JSON.stringify(usersList));
})

const alcohol = document.getElementById("alcohol-select")
alcohol.addEventListener('click', function(event) {
    event.preventDefault();
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    const selectedAlcohol = alcohol.value;

    userInfo = usersList[currentUser];
    userInfo["alcohol"] = selectedAlcohol;

    localStorage.setItem("usersList", JSON.stringify(usersList));
})

const tobacco = document.getElementById("tobacco-select")
tobacco.addEventListener('click', function(event) {
    event.preventDefault();
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    const selectedTobacco = tobacco.value;

    userInfo = usersList[currentUser];
    userInfo["tobacco"] = selectedTobacco;

    localStorage.setItem("usersList", JSON.stringify(usersList));
})

const cannabis = document.getElementById("cannabis-select")
cannabis.addEventListener('click', function(event) {
    event.preventDefault();
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    const selectedCannabis = cannabis.value;

    userInfo = usersList[currentUser];
    userInfo["cannabis"] = selectedCannabis;

    localStorage.setItem("usersList", JSON.stringify(usersList));
})

if (window.location.href.includes("newuser_createprof.html")) {
    createUserButton = document.getElementById("createprof-button")
    createUserButton.addEventListener('click', function() {
        profPassword = document.getElementById("password").value
        if (profPassword == '' || profPassword == null) {
            alert("Please enter a valid password to login with later!")
        } else {
            let usersList = JSON.parse(localStorage.getItem("usersList"))
            usersList[curUser].password = profPassword
            localStorage.setItem("usersList", JSON.stringify(usersList))
            console.log(usersList)
            window.location.href = "match.html"
        }
    })
} else { // profile.html
    var logoutButton = document.getElementById("logout")
    logoutButton.addEventListener('click', function() {
        if (confirm("Would you like to proceed and return to the home page?")) {
            window.location.href="index.html"
        }
    })
}

loadUserData()