
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400)
  noStroke();

}

function draw() {
  // note that setting the background also clears the canvas from our previous round of drawing
   background('white')

  // measure the current time and re-map the number from time proportion to location proportion
    var now = clock()
    let HourAngle = map(now.hours, 0,23,0,360) // from hours (0-23) to angles (0-360)
    let MinAngle = map(now.min, 0,60,0,360) // from mins (0-60) to angles (0-360)
    let SecRadius = map(now.sec, 0, 60, 0, 280) // from secs (0-60) to radius (0-280)

  // draw the second hands: breathing circle
    push(); 
    strokeWeight(10);
    stroke(184, 184, 184);
    noFill();
    circle(200, 200, SecRadius);
    pop();

  // draw the minute hands
    push();
    noFill();
    strokeWeight(2);
    stroke(151, 151, 151);
    arc(200, 200, 180, 180, radians(270), radians(270+MinAngle));  
    pop();  

  // draw the hour hand
    push(); 
    let r = 140;
    let x2 = 200 + r * Math.sin(Math.PI / 180 * HourAngle);
    let y2 = 200 - r * Math.cos(Math.PI / 180 * HourAngle);
    strokeWeight(2);
    stroke("black");
    line(200, 200, x2, y2);
    pop();

  // draw the circle core 【done】
    push(); 
    fill("black");
    circle(200, 200, 17);
    pop();

  // draw the peripheral dotted circle
    push(); 
    strokeWeight(2);
    stroke(175, 175, 175);
    noFill();
    drawingContext.setLineDash([1, 5]);
    circle(200, 200, 280);
    pop();
}
