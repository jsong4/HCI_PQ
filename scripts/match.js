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



angles = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324, 360]

matches = [[0, 0.1], [0, 0.2], [0, 0.3], [0, 0.4], [0, 0.5], [0, 0.6], [0, 0.7], [0, 0.8], [0, 0.9], [0, 1]]

centerX = 250
centerY = 250

positions = []

acessories = ["images/prof_customization/baseballcap.svg", "images/prof_customization/beanie.svg",
    "images/prof_customization/bow.svg", "images/prof_customization/crown.svg",
    "images/prof_customization/earrings.svg", "images/prof_customization/empty.svg",
    "images/prof_customization/glasses.svg", "images/prof_customization/mustache.svg",
    "images/prof_customization/necklace.svg", "images/prof_customization/partyhat.svg"
]

colors = ["#FE938C", "#99C1B9", "#8E7DBE", "#D1D646", "#06BA63", "#FE4A49", "#39304A", "#AFD0BF",
    "#0075A2", "#E5446D"]



const base = new Image();
base.src = "images/prof_customization/base_circle.svg";

function drawGraph() {

    const c = document.getElementById("matchesGraph");
    const ctx = c.getContext("2d");

    for (i = 0; i < 10; i++) {
        id = matches[i][0]
        var pfColor = '#409AFD' //NOTE: get color from id
        distance = matches[i][1]

        //calculate circle centerpoints
        radians = angles[i] * Math.PI/180
        endX = ((distance * Math.cos(radians)) + 0.05) * 250 
        endX = endX + centerX
        endY = ((distance * Math.sin(radians)) + 0.05) * 250
        endY = endY + centerY

        //draw a line connecting to the circle
        ctx.beginPath();
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.closePath();

        //accesories
        const accesory = new Image();
        accesory.src = "images/prof_customization/beanie.svg"; //NOTE: grab accesories from id
        ctx.drawImage(accesory, endX - 19, endY - 19, 38, 38);
        ctx.closePath();
        positions.push([endX, endY])
    }

    ctx.beginPath();
    ctx.arc(250, 250, 10, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF'
    ctx.fill()
    ctx.stroke(); // Draw the circle
    ctx.closePath(); // Close the path
    console.log(positions)
}

function positionItems(){
    const match1 = document.getElementById('match1');
    const match2 = document.getElementById('match2');
    const match3 = document.getElementById('match3');
    const match4 = document.getElementById('match4');
    const match5 = document.getElementById('match5');
    const match6 = document.getElementById('match6');
    const match7 = document.getElementById('match7');
    const match8 = document.getElementById('match8');
    const match9 = document.getElementById('match9');
    const match10 = document.getElementById('match10');

    profiles = [match1, match2, match3, match4, match5, match6, match7, match8, match9, match10]

    for (i = 0; i < 10; i++) {
        profile = profiles[i]
        profile.style.position = 'absolute'
        profile.style.left = positions[i][0] - 20 + 'px';
        profile.style.top = positions[i][1] - 20 + 'px';
    }
}

function changeColors() {
    document.getElementById("bear1").style.fill = colors[0];
    document.getElementById("bear2").style.fill = colors[1];
    document.getElementById("bear3").style.fill = colors[2];
    document.getElementById("bear4").style.fill = colors[3];
    document.getElementById("bear5").style.fill = colors[4];
    document.getElementById("bear6").style.fill = colors[5];
    document.getElementById("bear7").style.fill = colors[6];
    document.getElementById("bear8").style.fill = colors[7];
    document.getElementById("bear9").style.fill = colors[8];
    document.getElementById("bear10").style.fill = colors[9];
}

function changeaccesories() {
    document.getElementById("accesory1").setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', acessories[0]);
    document.getElementById("accesory2").setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', acessories[1]);
    document.getElementById("accesory3").setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', acessories[2]);
    document.getElementById("accesory4").setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', acessories[3]);
    document.getElementById("accesory5").setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', acessories[4]);
    document.getElementById("accesory6").setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', acessories[5]);
    document.getElementById("accesory7").setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', acessories[6]);
    document.getElementById("accesory8").setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', acessories[7]);
    document.getElementById("accesory9").setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', acessories[8]);
    document.getElementById("accesory10").setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', acessories[9]);
}



document.addEventListener("DOMContentLoaded", () => {
    changeColors() 
    drawGraph() 
    positionItems()
    changeaccesories()
});

savePreferencesDealbreakers() {
    
}