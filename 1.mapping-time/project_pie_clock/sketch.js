
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
    let HourAngle = map(now.hours, 0,23,0,360) // from hours (0-23) to pixels (20-380)
    let MinAngle = map(now.min, 0,60,20,380) // from mins (0-60) to pixels (20-380)
    let SecAngle = map(now.sec, 0,60,20,380) // from secs (0-60) to pixels (20-380)

  // draw the second hands
    fill(175, 175, 175);
    arc(200, 200, 280, 280, radians(270), radians(SecAngle));     


  // draw the minute hands
    fill(116, 116, 116);
    arc(200, 200, 180, 180, radians(270), radians(MinAngle));     


  // draw the hour hand
    fill(55, 55, 55);
    arc(200, 200, 80, 80, radians(270), radians(HourAngle));     

  // draw the peripheral circle
    push(); 
    strokeWeight(2);
    stroke(175, 175, 175);
    noFill();
    circle(200, 200, 280);
    pop();
}
