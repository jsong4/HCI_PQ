angles = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324, 360]

matches = [[0, 0.1], [0, 0.2], [0, 0.3], [0, 0.4], [0, 0.5], [0, 0.6], [0, 0.7], [0, 0.8], [0, 0.9], [0, 1]]

centerX = 250
centerY = 250

positions = []

const base = new Image();
base.src = "images/prof_customization/base.svg";

function drawGraph() {

    const c = document.getElementById("matchesGraph");
    const ctx = c.getContext("2d");

    for (i = 0; i < 10; i++) {
        id = matches[i][0]
        var pfColor = '#409AFD' //NOTE: get color from id
        distance = matches[i][1]

        //calculate circle centerpoints
        radians = angles[i] * Math.PI/180
        endX = distance * Math.cos(radians) * 250
        endX = endX + centerX
        endY = distance * Math.sin(radians) * 250
        endY = endY + centerY

        //draw a line connecting to the circle
        ctx.beginPath();
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.closePath();

        //draw a circle
        ctx.beginPath(); // Start a new path
        ctx.arc(endX, endY, 20, 0, 2 * Math.PI); // Create the circle arc
        ctx.strokeStyle = 'black' ; // Set the stroke color
        ctx.lineWidth = 2; // Set the line width
        ctx.fillStyle = pfColor;
        ctx.fill();
        ctx.stroke()
        ctx.closePath();

        //place profile
        ctx.drawImage(base, endX - 18, endY - 18, 36, 36);

        //accesories
        const accesory = new Image();
        accesory.src = "images/prof_customization/beanie.svg"; //NOTE: grab accesories from id
        ctx.drawImage(accesory, endX - 18, endY - 18, 36, 36);

        // //tooltip
        // //draw the link
        // ctx.font = '10px sans-serif';
        // ctx.fillStyle = "#0000ff";
        // ctx.fillText('linkText', endX, endY);
        // linkWidth = ctx.measureText(linkText).width;

        // //add mouse listeners
        // c.addEventListener("mousemove", on_mousemove, false);
        // c.addEventListener("click", on_click, false)

        //store positions for tooltips
        positions.push([endX, endY])
    }

    ctx.beginPath(); // Start a new path
    ctx.arc(250, 250, 10, 0, 2 * Math.PI); // Create the circle arc
    ctx.fillStyle = '#FFFFFF'
    ctx.fill()
    ctx.stroke(); // Draw the circle
    ctx.closePath(); // Close the path
    console.log(positions)
}

drawGraph()

// function on_mousemove(ev) {
//     var x, y;
  
//     // Get the mouse position relative to the canvas element.
//     if (ev.layerX || ev.layerX == 0) { //for firefox
//       x = ev.layerX;
//       y = ev.layerY;
//     }
//     x -= canvas.offsetLeft;
//     y -= canvas.offsetTop;
  
//     //is the mouse over the link?
//     if (x >= linkX && x <= (linkX + linkWidth) && y <= linkY && y >= (linkY - linkHeight)) {
//       document.body.style.cursor = "pointer";
//       inLink = true;
//     } else {
//       document.body.style.cursor = "";
//       inLink = false;
//     }
//   }
  
//   //if the link has been clicked, go to link
//   function on_click(e) {
//     if (inLink) {
//       window.location = linkText;
//     }
//   }

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

// match1.style.left = toString(positions[0][0]) + 'px';
// match1.style.top = toString(positions[0][1]) + 'px';

match1.style.left = positions[0][0];
match1.style.top = positions[0][1];