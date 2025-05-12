angles = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324, 360]

centerX = 250
centerY = 250

positions = []

matches = JSON.parse(localStorage.getItem("userDistances"))

const base = new Image();
base.src = "images/prof_customization/base_circle.svg";

/* =============================
 * Creates the base graph for the match interface to be later populated with
 * potential matches.
 */
function drawGraph() {
    const c = document.getElementById("matchesGraph");
    const ctx = c.getContext("2d");

    let counter = 0;
    for (const [i, match] of matches.entries()) {
        const id = match[0];
        const distance = match[1];
        var pfColor = '#409AFD' //NOTE: get color from id

        //calculate circle centerpoints
        radians = angles[counter] * Math.PI/180
        endX = ((distance * Math.cos(radians)) + 0.06) * 225
        endX = endX + centerX
        endY = ((distance * Math.sin(radians)) + 0.06) * 225
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
        positions.push([endX, endY])
        counter++;
    }

    ctx.beginPath();
    ctx.arc(250, 250, 10, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF'
    ctx.fill()
    ctx.stroke(); // Draw the circle
    ctx.closePath(); // Close the path
}

/* =============================
 * From the given top 10 matches returned from the algorithm, the matches
 * polar persona nodes are positioned onto the base graph relative to the
 * center (where you are the center) based on how closely similar you are.
 */
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

    for (i = 0; i < matches.length; i++) {
        profile = profiles[i]
        profile.style.position = 'absolute'
        profile.style.left = positions[i][0] - 20 + 'px';
        profile.style.top = positions[i][1] - 20 + 'px';
    }
}

/* =============================
 * Changes the polar persona color of the positioned node.
 */
function changeColors() {
    let usersList = JSON.parse(localStorage.getItem("usersList"))

    document.getElementById("bear1").style.fill = usersList[matches[0][0]]["profile"]["color"]
    document.getElementById("bear2").style.fill = usersList[matches[1][0]]["profile"]["color"]
    document.getElementById("bear3").style.fill = usersList[matches[2][0]]["profile"]["color"]
    document.getElementById("bear4").style.fill = usersList[matches[3][0]]["profile"]["color"]
    document.getElementById("bear5").style.fill = usersList[matches[4][0]]["profile"]["color"]
    document.getElementById("bear6").style.fill = usersList[matches[5][0]]["profile"]["color"]
    document.getElementById("bear7").style.fill = usersList[matches[6][0]]["profile"]["color"]
    document.getElementById("bear8").style.fill = usersList[matches[7][0]]["profile"]["color"]
    document.getElementById("bear9").style.fill = usersList[matches[8][0]]["profile"]["color"]
    document.getElementById("bear10").style.fill = usersList[matches[9][0]]["profile"]["color"]
}

/* =============================
 * Changes the polar persona accessories of the positioned node.
 */
function changeaccesories() {
    //grab and fix file paths
    accesory1 = JSON.stringify(usersList[matches[0][0]]["profile"]["accessory"]);
    accesory1 = '"' + accesory1.substring(1);
    accesory1 = JSON.parse(accesory1)

    accesory2 = JSON.stringify(usersList[matches[1][0]]["profile"]["accessory"]);
    accesory2 = '"' + accesory2.substring(1);
    accesory2 = JSON.parse(accesory2)

    accesory3 = JSON.stringify(usersList[matches[2][0]]["profile"]["accessory"]);
    accesory3 = '"' + accesory3.substring(1);
    accesory3 = JSON.parse(accesory3)

    accesory4 = JSON.stringify(usersList[matches[3][0]]["profile"]["accessory"]);
    accesory4 = '"' + accesory4.substring(1);
    accesory4 = JSON.parse(accesory4)

    accesory5 = JSON.stringify(usersList[matches[4][0]]["profile"]["accessory"]);
    accesory5 = '"' + accesory5.substring(1);
    accesory5 = JSON.parse(accesory5)

    accesory6 = JSON.stringify(usersList[matches[5][0]]["profile"]["accessory"]);
    accesory6 = '"' + accesory6.substring(1);
    accesory6 = JSON.parse(accesory6)

    accesory7 = JSON.stringify(usersList[matches[6][0]]["profile"]["accessory"]);
    accesory7 = '"' + accesory7.substring(1);
    accesory7 = JSON.parse(accesory7)

    accesory8 = JSON.stringify(usersList[matches[7][0]]["profile"]["accessory"]);
    accesory8 = '"' + accesory8.substring(1);
    accesory8 = JSON.parse(accesory8)

    accesory9 = JSON.stringify(usersList[matches[8][0]]["profile"]["accessory"]);
    accesory9 = '"' + accesory9.substring(1);
    accesory9 = JSON.parse(accesory9)

    accesory10 = JSON.stringify(usersList[matches[9][0]]["profile"]["accessory"]);
    accesory10 = '"' + accesory10.substring(1);
    accesory10 = JSON.parse(accesory10)

    //update accesories
    document.getElementById("accesory1").setAttributeNS('http://www.w3.org/1999/xlink',
        'xlink:href', accesory1);
    document.getElementById("accesory2").setAttributeNS('http://www.w3.org/1999/xlink',
        'xlink:href', accesory2);
    document.getElementById("accesory3").setAttributeNS('http://www.w3.org/1999/xlink',
        'xlink:href', accesory3);
    document.getElementById("accesory4").setAttributeNS('http://www.w3.org/1999/xlink',
        'xlink:href', accesory4);
    document.getElementById("accesory5").setAttributeNS('http://www.w3.org/1999/xlink',
        'xlink:href', accesory5);
    document.getElementById("accesory6").setAttributeNS('http://www.w3.org/1999/xlink',
        'xlink:href', accesory6);
    document.getElementById("accesory7").setAttributeNS('http://www.w3.org/1999/xlink',
        'xlink:href', accesory7);
    document.getElementById("accesory8").setAttributeNS('http://www.w3.org/1999/xlink',
        'xlink:href', accesory8);
    document.getElementById("accesory9").setAttributeNS('http://www.w3.org/1999/xlink',
        'xlink:href', accesory9);
    document.getElementById("accesory10").setAttributeNS('http://www.w3.org/1999/xlink',
        'xlink:href', accesory10);
}

document.addEventListener("DOMContentLoaded", () => {
    changeColors() 
    drawGraph() 
    positionItems()
    changeaccesories()
});