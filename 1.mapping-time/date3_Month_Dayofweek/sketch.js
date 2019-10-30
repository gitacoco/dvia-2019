
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

  // draw the week indicator
    stroke("black");
    strokeWeight(1.5);
    let x1 = week * (357-27);
    line(27, 47, 27+x1, 47);

  // draw the month indicator
    stroke("black");
    strokeWeight(1.5);
    let x2 = month * (357-27);
    line(27, 112, 27+x2, 344);

  // draw the week points
    stroke(216, 216, 216);
    strokeWeight(10);
    point(27, 47);
    point(82, 47);
    point(137, 47);
    point(192, 47);
    point(247, 47);
    point(302, 47);
    point(357, 47);
    //lerp(27, 362, 0.5)

  // draw the anchor point
    stroke(216, 216, 216);
    strokeWeight(10);
    point(27, 112);

  // draw the month points
    stroke(216, 216, 216);
    strokeWeight(10);
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

}
