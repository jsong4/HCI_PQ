
// const mGraph = document.getElementById("matchesGraph");
// const svgNamespace = "http://www.w3.org/2000/svg";

// console.log("hello world")
// document.getElementById("circle1").setAttribute("r", "50");
// let newRect = document.createElementNS(svgNamespace, "rect");
// newRect.setAttribute("x", "150");
// newRect.setAttribute("y", "150");
// newRect.setAttribute("width", "100");
// newRect.setAttribute("height", "100");
// newRect.setAttribute("fill", "#5cceee");
// mGraph.appendChild(newRect);
// var numMatches = 10;

// cx = 500
// cy = 500
// center = (cx, cy)

// distances = ["50", "10", "5", "5", "5", "5", "5", "5", "5", "5"]

// angle = 0

// for (i = 0; i < numMatches; i++) {
//     //generate circle in correct position
//     let newCircle = document.createElementNS(svgNamespace, "circle");
//     angle += 360/numMatches //increases by 36 each time
//     radians = angle * Math.PI/180
//     endX = distance[i] * Math.cos(radians)
//     endY = distance[i] * Math.setInterval(radians)
//     newCircle.setAttribute("r", "10");
//     newCircle.setAttribute("cx", endX);
//     newCircle.setAttribute("cy", endY);
//     mGraph.appendChild(newRect);
//     //connect center and new circle with a line
//     let newLine = document.createElementNS(svgNamespace, "line");
//     newLine.setAttribute("x1", cx)
//     newLine.setAttribute("y1", cy)
//     newLine.setAttribute("x2", endX)
//     newLine.setAttribute("y2", endY)
//     mGraph.appendChild(newLine);
// }

function changeRadius() {
    document.getElementById("circle1").setAttribute("r", "50");
    let newRect = document.createElementNS(svgNamespace, "rect");
    newRect.setAttribute("x", "150");
    newRect.setAttribute("y", "150");
    newRect.setAttribute("width", "100");
    newRect.setAttribute("height", "100");
    newRect.setAttribute("fill", "#5cceee");
    mGraph.appendChild(newRect);
}

distances = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
angles = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324, 360]

var numMatches = 10;

centerX = 250
centerY = 250

// angle += 360/numMatches //increases by 36 each time
//     //     radians = angle * Math.PI/180
//     //     endX = distance[i] * Math.cos(radians)
//     //     endY = distance[i] * Math.setInterval(radians)

Xs = [50, 100, 150, 400, 200, 300, 380, 400, 300, 500]
Ys = [50, 10, 400, 50, 250, 75, 350, 200, 450, 10]
function drawGraph() {

    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");

    ctx.beginPath(); // Start a new path
    ctx.arc(250, 250, 5, 0, 2 * Math.PI); // Create the circle arc
    ctx.strokeStyle = 'blue'; // Set the stroke color
    ctx.lineWidth = 3; // Set the line width
    ctx.stroke(); // Draw the circle
    ctx.closePath(); // Close the path

    for (i = 0; i < 10; i++) {
        radians = angles[i] * Math.PI/180
        endX = distances[i] * Math.cos(radians) * 5
        endX = endX + centerX
        endY = distances[i] * Math.sin(radians) * 5
        endY = endY + centerY
        ctx.beginPath(); // Start a new path
        ctx.arc(endX, endY, 5, 0, 2 * Math.PI); // Create the circle arc
        ctx.strokeStyle = 'orange'; // Set the stroke color
        ctx.lineWidth = 3; // Set the line width
        ctx.stroke(); // Draw the circle
        ctx.closePath();
    }



    // for (i = 0; i < numMatches; i++) {
    //     //generate circle in correct position
    //     let newCircle = document.createElementNS(svgNamespace, "circle");
    //     angle += 360/numMatches //increases by 36 each time
    //     radians = angle * Math.PI/180
    //     endX = distance[i] * Math.cos(radians)
    //     endY = distance[i] * Math.setInterval(radians)
    //     newCircle.setAttribute("r", "10");
    //     newCircle.setAttribute("cx", endX);
    //     newCircle.setAttribute("cy", endY);
    //     mGraph.appendChild(newRect);
    //     //connect center and new circle with a line
    //     let newLine = document.createElementNS(svgNamespace, "line");
    //     newLine.setAttribute("x1", cx)
    //     newLine.setAttribute("y1", cy)
    //     newLine.setAttribute("x2", endX)
    //     newLine.setAttribute("y2", endY)
    //     mGraph.appendChild(newLine);
    // }

}

drawGraph()