const currentUser = localStorage.getItem("currentUser")

function updateUser() {
    //grab current user
    let usersList = JSON.parse(localStorage.getItem("usersList")) || { currentUser: {} };
    const currentUser = localStorage.getItem("currentUser")

    //grab dropdown values
    const activity = document.getElementById("activity-select");
    const selectedActivity = activity.value;

    const politics = document.getElementById("politics-select");
    const selectedPolitics = politics.value;

    const religion = document.getElementById("religion-select");
    const selectedReligion = religion.value;

    const alcohol = document.getElementById("alcohol-select");
    const selectedAlcohol = alcohol.value;

    const tobacco = document.getElementById("tobacco-select");
    const selectedTobacco = tobacco.value;

    const cannabis = document.getElementById("cannabis-select");
    const selectedCannabis = cannabis.value;

    userInfo = usersList[currentUser];

    //update current user
    userInfo["activity"] = selectedActivity;
    userInfo["politics"] = selectedPolitics;
    userInfo["religion"] = selectedReligion;
    userInfo["alcohol"] = selectedAlcohol;
    userInfo["tobacco"] = selectedTobacco;
    userInfo["cannabis"] = selectedCannabis;

    // Store updated data
    localStorage.setItem("usersList", JSON.stringify(usersList));

    localStorage.setItem("test", "test");
    window.location.href = "newuser_checkbox.html"
}

const UsersList = {
    "Snergle": {
       "prompt1": ["In a parallel universe, I'm definitely...", "A polar bear who noms on fish all day"],
       "prompt2": ["One rule of society I'd totally rewrite...", "SUPERS MUST HAVE A SET MENU! I NEED TO KNOW THE MOZZIE STICK SCHEDULE."],
       "prompt3": ["A letter to future me would definitely include...", "I hope you made 1 million dollars, my lakehouse dreams are counting on it."],
       "checkbox": ["Chronically Online", "Punctual", "Easygoing", "Outgoing", "Memecentral"],
       "profile": {
            "color": "#738cff",
           "accessory": "images/prof_customization/glasses.svg"
        },
       "selectedPrompts": [
           "In a parallel universe, I'm definitely...",
           "One rule of society I'd totally rewrite...",
           "A letter to future me would definitely include..."
       ],
       "password": "123"
   },
    "Bun Bo Hue": {
       "prompt1": ["The soundtrack of my life would definitely include...", "Call Me Maybe by Carly Rae Jepsen (Lawnmower Edition)"],
       "prompt2": ["If my life were a meme right now, it would be...", "The 'huh' cat."],
       "prompt3": ["If my personality were a cocktail, it would be called...", "Le Fat Bastard, not a cocktail but the hippo doing a handstand just resonates with me."],
       "checkbox": ["Easily Peer-Pressured", "Listener", "Honest", "Adventurous"],
       "profile": {
           "color": "#bd4fb0",
           "accessory": "images/prof_customization/bow.svg"
       },
       "selectedPrompts": [
           "The soundtrack of my life would definitely include...",
           "If my life were a meme right now, it would be...",
           "If my personality were a cocktail, it would be called..."
       ],
       "password": "123"
   },
    "Ooonga Boonga": {
       "prompt1": ["If I could have one superpower, it would be...", "Absolutely decimating Earth's population of fish and having a infinite stomach to eat sushi 24/7 (sorry fish welfare, but me like fish)."],
       "prompt2": ["In a parallel universe, I'm definitely...", "A hyrax. I will dig my way into people's houses, give them the bombastic side eye, and start screaming 'AWAWA!'"],
       "prompt3": ["Three dinner guests, unlimited wine, and chaos ensues...", "Snoop Dogg, Martha Stewart, and Bob Ross. And instead of wine, it will a 'not-unexpected, but wholesome' blunt rotation."],
       "checkbox": ["Sporty", "Optimistic", "Empathetic", "Chronically Online"],
       "profile": {
           "color": "#668a75",
           "accessory": "images/prof_customization/mustache.svg"
       },
       "selectedPrompts": [
           "If I could have one superpower, it would be...",
           "In a parallel universe, I'm definitely...",
           "Three dinner guests, unlimited wine, and chaos ensues..."
       ],
       "password": "123"
   }
}