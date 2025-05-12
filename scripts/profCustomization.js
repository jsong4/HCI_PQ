/* =============================
 * Pre-set the current user generated at the start of the questionnaire to
 * store their responses in localStorage.
 */
const curUser = localStorage.getItem("currentUser")

/* =============================
 * Gets the currentUser information from localStorage from the usersList and
 * loads it onto the profile interface page.
 */
function loadUserData() {
    let usersList = JSON.parse(localStorage.getItem("usersList"))

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

/* =============================
 * If a user wants to edit their prompt and/or written response, a pop up opens
 * to allow user to update their information for those items and have it
 * updated in localStorage.
 */
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

/* =============================
 * If a user wants to update their current selected checkboxes, a pop up opens
 * with their current selected checkboxes and allows them to update them
 * and have it saved to localStorage.
 */
function editCheckboxes() {
    var popup = document.getElementById("checkbox-popup");
    popup.style.display = "block";
    
    const checkboxes = document.querySelectorAll(".checkbox-option");
    const updateButton = document.getElementById('update-checkbox-button');

    // Retrieve stored data or initialize it
    let usersList = JSON.parse(localStorage.getItem("usersList"))
    let selectedCheckboxes = usersList[curUser].checkbox || [];

    // Limit the number of checkboxes that can be selected to 5
    checkboxes.forEach(checkbox => {
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
        popup.style.display = "none";
    })

    // Event listener for the Next button
    updateButton.addEventListener("click", () => {
        const selectedOptions = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.nextSibling.textContent.trim()); // Collect the label text

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

/* =============================
 * A user can edit and update what their current accessory is by parsing
 * through the accessories list using the arrow buttons beside the polar bear
 * profile and have it saved to localStorage.
 */
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

/* =============================
 * A user can edit and update what their current accessory is by parsing
 * through the accessories list using the arrow buttons beside the polar bear
 * profile and have it saved to localStorage.
 */
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

/* =============================
 * A user can edit and update what their current bear color is by clicking on
 * any color they want on the color scheme or enter a specific hex/rgb value
 * on the color picker interface and have it saved to localStorage.
 */
color_form.addEventListener("submit", function (event) {
    event.preventDefault()
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    bear_color.style.backgroundColor = color_input.value
    usersList[curUser].profile.color = color_input.value;
    localStorage.setItem("usersList", JSON.stringify(usersList))
    return false
})

/* =============================
 * A user can update their activity preferences on the dropdown and have it
 * saved to localStorage.
 */
const activity = document.getElementById("activity-select")
activity.addEventListener('click', function(event) {
    event.preventDefault();
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    const selectedActivity = activity.value;

    userInfo = usersList[currentUser];
    userInfo["activity"] = selectedActivity;

    localStorage.setItem("usersList", JSON.stringify(usersList));
})

/* =============================
 * A user can update their politics preferences on the dropdown and have it
 * saved to localStorage.
 */
const politics = document.getElementById("politics-select")
politics.addEventListener('click', function(event) {
    event.preventDefault();
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    const selectedPolitics = politics.value;

    userInfo = usersList[currentUser];
    userInfo["politics"] = selectedPolitics;

    localStorage.setItem("usersList", JSON.stringify(usersList));
})

/* =============================
 * A user can update their religion preferences on the dropdown and have it
 * saved to localStorage.
 */
const religion = document.getElementById("religion-select")
religion.addEventListener('click', function(event) {
    event.preventDefault();
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    const selectedReligion = religion.value;

    userInfo = usersList[currentUser];
    userInfo["religion"] = selectedReligion;

    localStorage.setItem("usersList", JSON.stringify(usersList));
})

/* =============================
 * A user can update their alcohol preferences on the dropdown and have it
 * saved to localStorage.
 */
const alcohol = document.getElementById("alcohol-select")
alcohol.addEventListener('click', function(event) {
    event.preventDefault();
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    const selectedAlcohol = alcohol.value;

    userInfo = usersList[currentUser];
    userInfo["alcohol"] = selectedAlcohol;

    localStorage.setItem("usersList", JSON.stringify(usersList));
})

/* =============================
 * A user can update their tobacco preferences on the dropdown and have it
 * saved to localStorage.
 */
const tobacco = document.getElementById("tobacco-select")
tobacco.addEventListener('click', function(event) {
    event.preventDefault();
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    const selectedTobacco = tobacco.value;

    userInfo = usersList[currentUser];
    userInfo["tobacco"] = selectedTobacco;

    localStorage.setItem("usersList", JSON.stringify(usersList));
})

/* =============================
 * A user can update their cannabis preferences on the dropdown and have it
 * saved to localStorage.
 */
const cannabis = document.getElementById("cannabis-select")
cannabis.addEventListener('click', function(event) {
    event.preventDefault();
    let usersList = JSON.parse(localStorage.getItem("usersList"));
    const selectedCannabis = cannabis.value;

    userInfo = usersList[currentUser];
    userInfo["cannabis"] = selectedCannabis;

    localStorage.setItem("usersList", JSON.stringify(usersList));
})

/* =============================
 * If it is a new user, the interface will include a password text area for
 * users to complete their profile and be able to return to it later on.
 *
 * If it is a returning user who wants to edit their current saved profile,
 * they have a log out button option to log out of their current profile and
 * go back to the home page.
 */
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