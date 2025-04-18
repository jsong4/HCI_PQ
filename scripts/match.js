distances = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
angles = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324, 360]

var numMatches = 10;

centerX = 250
centerY = 250

Xs = [50, 100, 150, 400, 200, 300, 380, 400, 300, 500]
Ys = [50, 10, 400, 50, 250, 75, 350, 200, 450, 10]

function drawGraph() {

    const c = document.getElementById("matchesGraph");
    const ctx = c.getContext("2d");

    for (i = 0; i < 10; i++) {
        //calculate circle centerpoints
        radians = angles[i] * Math.PI/180
        endX = distances[i] * Math.cos(radians) * 5
        endX = endX + centerX
        endY = distances[i] * Math.sin(radians) * 5
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
        ctx.arc(endX, endY, 10, 0, 2 * Math.PI); // Create the circle arc
        ctx.strokeStyle = '#007AFF'; // Set the stroke color
        ctx.lineWidth = 3; // Set the line width
        ctx.fillStyle = '#007AFF'
        ctx.fill()
        ctx.stroke(); // Draw the circle
        ctx.closePath();
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