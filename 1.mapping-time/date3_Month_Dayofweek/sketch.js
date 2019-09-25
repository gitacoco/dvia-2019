
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
    let month = now.progress.month // values between 0.0 and 1.0 measuring the month's %-completion of cycles
    let week = now.progress.week // values between 0.0 and 1.0 measuring the week's %-completion of various cycles

  // draw the week points
    stroke(216, 216, 216);
    strokeweight(5);
    point(27, 47);
    point(83, 47);
    point(138, 47);
    point(195, 47);
    point(250, 47);
    point(306, 47);
    point(362, 47);
    //lerp(27, 362, 0.5)

  // draw the anchor point
    stroke(216, 216, 216);
    strokeweight(5);
    point(27, 112);

  // draw the month points
    stroke(216, 216, 216);
    strokeweight(5);
    point(27, 344);
    point(57, 344);
    point(87, 344);
    point(117, 344);
    point(147, 344);
    point(177, 344);
    point(207, 344);
    point(237, 344);
    point(267, 344);
    point(297, 344);
    point(327, 344);
    point(357, 344);

  // draw the week indicator
    stroke(216, 216, 216);
    strokeweight(5);
    let x1 = week * (362-27);
    line(27, 47, x1, 47);

  // draw the month indicator
    stroke(216, 216, 216);
    strokeweight(5);
    let x2 = month * (344-27);
    line(27, 112, x2, 344);

}
