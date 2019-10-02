
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400)

}

function draw() {
  // note that setting the background also clears the canvas from our previous round of drawing
   background('white')

  // draw the axis
   line(20, 200, 380, 200);
   line(20, 195, 20, 205);
   line(380, 195, 380, 205);
   stroke('grey');

  // measure the current time and re-map the number from time proportion to location proportion
    var now = clock()
    let HourLoca = map(now.hours, 0,23,20,380) // from hours (0-23) to pixels (20-380)
    let MinLoca = map(now.min, 0,60,20,380) // from mins (0-60) to pixels (20-380)
    let SecLoca = map(now.sec, 0,60,20,380) // from secs (0-60) to pixels (20-380)

  // clock's 'progress' percentages
    // let HourLoca = 360 * now.progress.hour
    // let MinLoca = 360 * now.progress.min
    // let SecLoca = 360 * now.progress.sec

  // draw the clock hands
    //  push(); 
    // noStroke();
    // fill('#222222');
    // rect(HourLoca + 20, 175, 10, 50);
    // rect(MinLoca + 20, 180, 7, 40);
    // rect(SecLoca + 20, 185, 3, 30);
    // pop();

  // draw the clock hands
    push(); 
    noStroke();
    fill('#222222');
    rect(HourLoca, 175, 10, 50);
    rect(MinLoca, 180, 7, 40);
    rect(SecLoca, 185, 3, 30);
    pop();
}
