localStorage.removeItem("usersList")
localStorage.removeItem("currentUser");

// Check for empty/ghost users that never finished their profile
let usersList = JSON.parse(localStorage.getItem("usersList"))
console.log(usersList)

if (usersList) {
    Object.entries(usersList).forEach(([username, userData]) => {
    if (!Object.keys(userData).includes("password")) {
        delete usersList[username]
        localStorage.setItem("usersList", JSON.stringify(usersList))
        console.log("updated list:", usersList)
    }
    })
}

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

function createUser(){
    var usersList = JSON.parse(localStorage.getItem("usersList")) || {};
    
    let username;
    do {
        username = generateUsername();
    } while (usersList[username] );

    usersList[username] = {};
    console.log("new user added to usersList", usersList)

    localStorage.setItem("usersList", JSON.stringify(usersList))

    localStorage.setItem("currentUser", username)
    console.log(`${username}`)
    window.location.href="newuser_prompt1.html"
}

newUserButton = document.getElementById("newuser-button")
newUserButton.addEventListener('click', function() {
    createUser()
})