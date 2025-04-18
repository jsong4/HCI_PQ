const accessories = [
    "images/prof_customization/beanie.svg",
    "images/prof_customization/bow.svg",
    "images/prof_customization/sunglasses.svg",
    "images/prof_customization/crown.svg",
    "images/prof_customization/glasses.svg",
    "images/prof_customization/empty.svg"
]

// TODO - Add usersList and add character customization items

var profile_accessory = document.getElementById("profile-img-accessory");
var profile_left = document.getElementById("left-button")
var profile_right = document.getElementById("right-button")
var color_form = document.getElementById("color-input")
var bear_color = document.getElementById("profile-img-container")
var color_input = document.getElementById("profile-img-color")

profile_left.addEventListener("click", function() {
    idx = accessories.indexOf(profile_accessory.getAttribute("src"))
    console.log(idx, profile_accessory.getAttribute("src"))
    if (idx > 0) {
        console.log(accessories[idx-1])
        profile_accessory.src = accessories[idx-1]
    } else {
        console.log(accessories[accessories.length-1])
        profile_accessory.src = accessories[accessories.length-1]
    }
})

profile_right.addEventListener("click", function() {
    idx = accessories.indexOf(profile_accessory.getAttribute("src"))
    console.log(idx, profile_accessory.getAttribute("src"))
    if (idx < accessories.length-1) {
        console.log(accessories[idx+1])
        profile_accessory.src = accessories[idx+1]
    } else {
        console.log(accessories[0])
        profile_accessory.src = accessories[0]
    }
})

color_form.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log(color_input.value)
    bear_color.style.backgroundColor = color_input.value
    return false
})

// Using localStorage
test = {
    "user1": {
        "prompt1": ["In a parallel universe, I am definitely...", "A polar bear who noms on fish all day"],
        "prompt2": ["One rule of society I'd totally rewrite...", "the lazy dog jumped over the sleeping fox and ate a cheeseburger from in n out, specifically the double double because that's yummy. Animal style suck"],
        "prompt3": ["A letter to my future me would start with...", "what up"],
        "checkbox": ["Chronically online", "Listener", "Easygoing"],
        "profile" : {
            "color": "#4287f5",
            "accessory": "images/prof_customization/beanie.svg"
        }
    }
}

userData = {
    "user2" : {
        "distance" : 0.2,
        "match_bool" : 0 // 0 for false, 1 for true
    },
    "user3" : {
        "distance" : 0.9,
        "match_bool" : 1 // 0 for false, 1 for true
    }
}


// localStorage.removeItem("usersList")
current_user = "user1"
localStorage.setItem("usersList", JSON.stringify(test));
let usersList = JSON.parse(localStorage.getItem("usersList"))

if (usersList != null) { // Valid User
    userInfo = usersList[current_user];
    if (userInfo != null) {
        prompt1 = userInfo["prompt1"];
        prompt2 = userInfo["prompt2"];
        prompt3 = userInfo["prompt3"];
        checkbox = userInfo["checkbox"];
        userName = current_user; // TODO - future implemntation to use openAi to generate names?
        prompts = [prompt1, prompt2, prompt3]
        color = userInfo["profile"]["color"]
        accessory = userInfo["profile"]["accessory"]
        bear_color.style.backgroundColor = color
        profile_accessory.src = accessory
        color_input.value = color

        document.getElementById("userName").textContent = userName;

        for (var i = 0; i < 3; i++) {
            promptParent = document.getElementById(`prompt${i + 1}`);
            chosenPrompt = document.createElement("div");
            chosenPrompt.className = "prompt";
            chosenPrompt.textContent = prompts[i][0];
            console.log(chosenPrompt)
            console.log(prompts[i][0])
            promptParent.appendChild(chosenPrompt);

            writtenResp = document.createElement("div");
            writtenResp.className = "response";
            writtenResp.textContent = prompts[i][1];
            promptParent.appendChild(writtenResp);
        }

        for (var i = 0; i < checkbox.length; i++) {
            listParent = document.getElementById("checkbox");
            listChild = document.createElement("li");
            listChild.textContent = checkbox[i];
            listParent.appendChild(listChild);
        }
    }
}