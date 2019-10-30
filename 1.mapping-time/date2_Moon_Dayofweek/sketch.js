
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
    let moon = now.progress.moon // from hours (0-23) to angles (0-360)
    let week = now.weekday // the day of the week 1-7

  // draw the peripheral circle
    noFill();
    stroke(151, 151, 151);
    circle(200, 200, 200);

  // draw texture
    line()

  // draw the hour hand

}
