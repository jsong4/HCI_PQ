import { userDistances } from './algorithm.js';

distances = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
angles = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324, 360]

matches = [[0, 0.1], [0, 0.2], [0, 0.3], [0, 0.4], [0, 0.5], [0, 0.6], [0, 0.7], [0, 0.8], [0, 0.9], [0, 1]]

var numMatches = 10;

centerX = 250
centerY = 250

Xs = [50, 100, 150, 400, 200, 300, 380, 400, 300, 500]
Ys = [50, 10, 400, 50, 250, 75, 350, 200, 450, 10]

const base = new Image();
base.src = "images/prof_customization/base.svg";

function drawGraph() {

    const c = document.getElementById("matchesGraph");
    const ctx = c.getContext("2d");

    for (i = 0; i < 10; i++) {
        id = matches[i][0]
        var pfColor = '#007AFF' //NOTE: get color from id
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
    }

    ctx.beginPath(); // Start a new path
    ctx.arc(250, 250, 10, 0, 2 * Math.PI); // Create the circle arc
    ctx.fillStyle = '#FFFFFF'
    ctx.fill()
    ctx.stroke(); // Draw the circle
    ctx.closePath(); // Close the path
}

drawGraph()

// function getDistances(){
    
// }