// Resets the currentUser everytime they are on the home page
localStorage.removeItem("currentUser");

// Check for empty/ghost users that never finished their profile
let usersList = JSON.parse(localStorage.getItem("usersList"))

/* =============================
 * Checks if the usersList is populated yet. We assume that all new users will
 * start with 0 users, so we populate their usersList with 10 test users for
 * the match interface later on.
 *
 * If the user does have a populated usersList already, it checks if they are
 * valid users. This is because sometimes people can stop the create new user
 * questionnaire mid-way, creating ghost users (or incomplete users). Thus,
 * this filters out the ghost users from the usersList.
 */
if (usersList) {
    Object.entries(usersList).forEach(([username, userData]) => {
    if (!Object.keys(userData).includes("password")) {
        delete usersList[username]
        localStorage.setItem("usersList", JSON.stringify(usersList))
    }
    })
} else { // Add dummy values to if usersList is empty
    usersList = {
        "GoopyShoehorn8309": { //1
            "prompt1": ["If I could have one superpower, it would be...", "iegufiuwegfilg"],
            "prompt2": ["In a parallel universe, I'm definitely...", "iugwef'"],
            "prompt3": ["Three dinner guests, unlimited wine, and chaos ensues...", "i;ugwfeueibf"],
            "checkbox": ["Sporty", "Optimistic", "Empathetic", "Memecentral"],
            "profile": {
                "color": "#668a75",
                "accessory": "images/prof_customization/mustache.svg"
            },
            "selectedPrompts": [
                "If I could have one superpower, it would be...",
                "In a parallel universe, I'm definitely...",
                "Three dinner guests, unlimited wine, and chaos ensues..."
            ],
        "password": "123",
        "activity":"BOC",
        "politics":"republican",
        "religion":"buddhist",
        "alcohol":"yes",
        "tobacco":"no",
        "cannabis":"yes"
        },
        "FluffyFan7518": { //2
            "prompt1": ["If I could have one superpower, it would be...", "iegufiuwegfilg"],
            "prompt2": ["In a parallel universe, I'm definitely...", "iugwef'"],
            "prompt3": ["Three dinner guests, unlimited wine, and chaos ensues...", "i;ugwfeueibf"],
            "checkbox": ["Sporty", "Listener"],
            "profile": {
                "color": "#448a75",
                "accessory": "images/prof_customization/mustache.svg"
            },
            "selectedPrompts": [
                "If I could have one superpower, it would be...",
                "In a parallel universe, I'm definitely...",
                "Three dinner guests, unlimited wine, and chaos ensues..."
            ],
            "password": "123",
            "activity":"theater",
            "politics":"other",
            "religion":"buddhist",
            "alcohol":"yes",
            "tobacco":"yes",
            "cannabis":"no"
        },

        "PepperyBlender8283": { //3
            "prompt1": ["If I could have one superpower, it would be...", "lwukgeflibwelfbliegyfilwueb"],
            "prompt2": ["In a parallel universe, I'm definitely...", "iugwef'"],
            "prompt3": ["Three dinner guests, unlimited wine, and chaos ensues...", "i;ugwfeueibf"],
            "checkbox": ["Sporty", "Optimistic", "Empathetic", "Chronically Online"],
            "profile": {
                "color": "#448aaa",
                "accessory": "images/prof_customization/empty.svg"
            },
            "selectedPrompts": [
                "If I could have one superpower, it would be...",
                "In a parallel universe, I'm definitely...",
                "Three dinner guests, unlimited wine, and chaos ensues..."
            ],
            "password": "123",
            "activity":"none",
            "politics":"libertarian",
            "religion":"muslim",
            "alcohol":"no",
            "tobacco":"yes",
            "cannabis":"no"
        },

        "WhippedClock8985": { //4
            "prompt1": ["If I could have one superpower, it would be...", "lwukgeflibwelfbliegyfilwueb"],
            "prompt2": ["In a parallel universe, I'm definitely...", "iugwef'"],
            "prompt3": ["Three dinner guests, unlimited wine, and chaos ensues...", "i;ugwfeueibf"],
            "checkbox": ["Empathetic"],
            "profile": {
                "color": "#aaa555",
                "accessory": "images/prof_customization/empty.svg"
            },
            "selectedPrompts": [
                "If I could have one superpower, it would be...",
                "In a parallel universe, I'm definitely...",
                "Three dinner guests, unlimited wine, and chaos ensues..."
            ],
            "password": "123",
            "activity":"sports",
            "politics":"other",
            "religion":"hindu",
            "alcohol":"no",
            "tobacco":"yes",
            "cannabis":"yes"
        },

        "JuicyShoehorn3850": { //5
            "prompt1": ["If I could have one superpower, it would be...", "lwukgeflibwelfbliegyfilwueb"],
            "prompt2": ["In a parallel universe, I'm definitely...", "iugwef'"],
            "prompt3": ["Three dinner guests, unlimited wine, and chaos ensues...", "i;ugwfeueibf"],
            "checkbox": ["Chronically Online"],
            "profile": {
                "color": "#555aaa",
                "accessory": "images/prof_customization/empty.svg"
            },
            "selectedPrompts": [
                "If I could have one superpower, it would be...",
                "In a parallel universe, I'm definitely...",
                "Three dinner guests, unlimited wine, and chaos ensues..."
            ],
            "password": "123",
            "activity":"none",
            "politics":"libertarian",
            "religion":"libertarian",
            "alcohol":"no",
            "tobacco":"yes",
            "cannabis":"no"
        },
        "TangyDrill8936": { //6
            "prompt1": ["If I could have one superpower, it would be...", "lwukgeflibwelfbliegyfilwueb"],
            "prompt2": ["In a parallel universe, I'm definitely...", "iugwef'"],
            "prompt3": ["Three dinner guests, unlimited wine, and chaos ensues...", "i;ugwfeueibf"],
            "checkbox": ["Listener", "Sporty"],
            "profile": {
                "color": "#667ffa",
                "accessory": "images/prof_customization/empty.svg"
            },
            "selectedPrompts": [
                "If I could have one superpower, it would be...",
                "In a parallel universe, I'm definitely...",
                "Three dinner guests, unlimited wine, and chaos ensues..."
            ],
            "password": "123",
            "activity":"none",
            "politics":"democrat",
            "religion":"christian",
            "alcohol":"no",
            "tobacco":"no",
            "cannabis":"no"
        },
        "WobblyLasagna9618": { //7
            "prompt1": ["If I could have one superpower, it would be...", "lwukgeflibwelfbliegyfilwueb"],
            "prompt2": ["In a parallel universe, I'm definitely...", "iugwef'"],
            "prompt3": ["Three dinner guests, unlimited wine, and chaos ensues...", "i;ugwfeueibf"],
            "checkbox": ["Outgoing", "Punctual"],
            "profile": {
                "color": "#8951ac",
                "accessory": "images/prof_customization/empty.svg"
            },
            "selectedPrompts": [
                "If I could have one superpower, it would be...",
                "In a parallel universe, I'm definitely...",
                "Three dinner guests, unlimited wine, and chaos ensues..."
            ],
            "password": "123",
            "activity":"BOC",
            "politics":"democrat",
            "religion":"jewish",
            "alcohol":"yes",
            "tobacco":"yes",
            "cannabis":"no"
        },

        "CrunchyDumpling7861": { //8
            "prompt1": ["If I could have one superpower, it would be...", "lwukgeflibwelfbliegyfilwueb"],
            "prompt2": ["In a parallel universe, I'm definitely...", "iugwef'"],
            "prompt3": ["Three dinner guests, unlimited wine, and chaos ensues...", "i;ugwfeueibf"],
            "checkbox": ["Punctual"],
            "profile": {
                "color": "#987654",
                "accessory": "images/prof_customization/empty.svg"
            },
            "selectedPrompts": [
                "If I could have one superpower, it would be...",
                "In a parallel universe, I'm definitely...",
                "Three dinner guests, unlimited wine, and chaos ensues..."
            ],
            "password": "123",
            "activity":"none",
            "politics":"none",
            "religion":"Other",
            "alcohol":"no",
            "tobacco":"no",
            "cannabis":"no"
        },
        "PickledLasagna3383":{ //9
            "selectedPrompts":["In a parallel universe, I'm definitely...","If I could have one superpower, it would be...","The soundtrack of my life would definitely include..."],
            "prompt1":["In a parallel universe, I'm definitely...","A pro gamer"],
            "prompt2":["If I could have one superpower, it would be...","Rewinding time"],
            "prompt3":["The soundtrack of my life would definitely include...","A Hans Zimmer Soundtrack"],
            "activity":"none",
            "politics":"Other",
            "religion":"atheist",
            "alcohol":"no",
            "tobacco":"no","cannabis":
            "yes","checkbox":["Foodie","Easygoing","Memecentral","Easily Peer-Pressured"],
            "profile":{"color":"#fcb041","accessory":"../images/prof_customization/sunglasses.svg"},
            "password":"98765"},

        "PepperyMug7489":{ // 10
            "selectedPrompts":["The last chapter of my life story better include...","In a parallel universe, I'm definitely...","The title of my autobiography would be..."],
            "prompt1":["The last chapter of my life story better include...","Money"],
            "prompt2":["In a parallel universe, I'm definitely...","RIch"],
            "prompt3":["The title of my autobiography would be...","How to be awesome"],
            "activity":"sports",
            "politics":"other",
            "religion":"hindu",
            "alcohol":"yes",
            "tobacco":"no",
            "cannabis":"no",
            "checkbox":["Chronically Online","Loyal","Easygoing","Memecentral","Honest"],
            "profile":{
                "color":"#52def3",
                "accessory":"../images/prof_customization/glasses.svg"},
            "password":"12345"
        }
    }
    localStorage.setItem("usersList", JSON.stringify(usersList))
}
console.log(usersList) // NOTE: This should NOT be here but we left it for developemental purposes

/* =============================
 * From a selection of interesting adjectives and items, a unique random
 * username.
 */
function generateUsername() {
    const adjectives = [
        "Spicy", "Cheesy", "Crunchy", "Zesty", "Greasy",
        "Fluffy", "Saucy", "Tangy", "Crumbly", "Jiggly",
        "Wobbly", "Smoky", "Toasty", "Buttery", "Juicy",
        "Chilly", "Soggy", "Goopy", "Peppery", "Syrupy",
        "Gravy", "Nutty", "Pickled", "Savory", "Whipped"
    ];

    const items = [
        "Pizza", "Burrito", "Cupcake", "Pancake", "Taco", "Sushi", "Donut", "Burger",
        "Lasagna", "Ravioli", "Curry", "Meatball",
        "Waffle", "Croissant", "Bagel", "Quesadilla",
        "Nachos", "Churro", "Dumpling", "Pretzel",
        "Macaron", "Tofu", "Gumbo", "Falafel",
        "Pierogi", "Toaster", "Microwave", "Blender", "Lawnmower", "Vacuum", "Keyboard", "Mug",
        "Spoon", "Stapler", "Lamp", "Fridge",
        "Speaker", "Fan", "Backpack", "Candle",
        "Helmet", "Goggles", "Drill", "Ruler",
        "Chair","Skillet", "Toilet", "Mirror",
        "Shoehorn", "Clock"
    ];

    var chosenAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    var chosenItem = items[Math.floor(Math.random() * items.length)];
    var number = Math.floor(Math.random() * 10000);

    var username = `${chosenAdj}${chosenItem}${number}`
    return username
}

/* =============================
 * Generates a username for users after they click on the new user button. This
 * username is used in localStorage to store their questionnare responses
 * and becomes their profile username.
 */
function createUser(){
    var usersList = JSON.parse(localStorage.getItem("usersList")) || {};
    
    let username;
    do {
        username = generateUsername();
    } while (usersList[username] );

    usersList[username] = {};
    localStorage.setItem("usersList", JSON.stringify(usersList))

    localStorage.setItem("currentUser", username)
    window.location.href="newuser_prompt1.html"
}

    newUserButton = document.getElementById("newuser-button")
    newUserButton.addEventListener('click', function() {
        createUser()
})