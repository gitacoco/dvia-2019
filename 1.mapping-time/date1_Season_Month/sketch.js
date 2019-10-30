
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400)
  noStroke();

}

function draw() {
  // note that setting the background also clears the canvas from our previous round of drawing
   background('black')

  // measure the current time and re-map the number from time proportion to location proportion
    var now = clock()
    let season = now.season // the current season 1-4 (starting with spring)
    let month = now.month // month number 1–12

  // draw the 12 circles
    //push(); 
    //strokeWeight(12);
    //stroke(40, 40, 40);
    //noFill();
    //let a1 = circle(90, 65, 61);
    //let a2 = circle(200, 65, 61);
    //let a3 = circle(310, 65, 61);
    
    //let b1 = circle(90, 155, 61);
    //let b2 = circle(200, 155, 61);
    //let b3 = circle(310, 155, 61);    

    //let c1 = circle(90, 245, 61);
    //let c2 = circle(200, 245, 61);
    //let c3 = circle(310, 245, 61);

    //let d1 = circle(90, 335, 61);
    //let d2 = circle(200, 335, 61);
    //let d3 = circle(310, 335, 61);
    //pop();

  // draw and color the 12 circles
      if (season == 1) {

        strokeWeight(12);
        noFill();
        stroke(184, 233, 134);
        let a3 = circle(310, 65, 61);
        let b1 = circle(90, 155, 61);
        let b2 = circle(200, 155, 61);
        
        stroke(40, 40, 40);
        let b3 = circle(310, 155, 61);    
        let c1 = circle(90, 245, 61);
        let c2 = circle(200, 245, 61);
        
        let c3 = circle(310, 245, 61);
        let d1 = circle(90, 335, 61);
        let d2 = circle(200, 335, 61);

        let d3 = circle(310, 335, 61);
        let a1 = circle(90, 65, 61);
        let a2 = circle(200, 65, 61);

      } else if (season == 2){

        strokeWeight(12);
        noFill();
        stroke(40, 40, 40);
        let a3 = circle(310, 65, 61);
        let b1 = circle(90, 155, 61);
        let b2 = circle(200, 155, 61);
        
        stroke(255, 85, 85);
        let b3 = circle(310, 155, 61);    
        let c1 = circle(90, 245, 61);
        let c2 = circle(200, 245, 61);
        
        stroke(40, 40, 40);
        let c3 = circle(310, 245, 61);
        let d1 = circle(90, 335, 61);
        let d2 = circle(200, 335, 61);

        let d3 = circle(310, 335, 61);
        let a1 = circle(90, 65, 61);
        let a2 = circle(200, 65, 61);

      } else if (season == 3){

        strokeWeight(12);
        noFill();
        stroke(40, 40, 40);
        let a3 = circle(310, 65, 61);
        let b1 = circle(90, 155, 61);
        let b2 = circle(200, 155, 61);        

        let b3 = circle(310, 155, 61);    
        let c1 = circle(90, 245, 61);
        let c2 = circle(200, 245, 61);
        
        stroke(245, 166, 35);
        let c3 = circle(310, 245, 61);
        let d1 = circle(90, 335, 61);
        let d2 = circle(200, 335, 61);
        
        stroke(40, 40, 40);
        let d3 = circle(310, 335, 61);
        let a1 = circle(90, 65, 61);
        let a2 = circle(200, 65, 61);

      } else {

        strokeWeight(12);
        noFill();
        stroke(40, 40, 40);
        let a3 = circle(310, 65, 61);
        let b1 = circle(90, 155, 61);
        let b2 = circle(200, 155, 61);
        
        let b3 = circle(310, 155, 61);    
        let c1 = circle(90, 245, 61);
        let c2 = circle(200, 245, 61);

        let c3 = circle(310, 245, 61);
        let d1 = circle(90, 335, 61);
        let d2 = circle(200, 335, 61);  
        
        stroke(246, 246, 246);
        let d3 = circle(310, 335, 61);
        let a1 = circle(90, 65, 61);
        let a2 = circle(200, 65, 61);

   
      }

  // draw the yellow point
    
    if (month == 1) {
        let x = 90; let y = 65;
        noStroke();
        fill(248, 231, 28);
        circle(x, y, 30);
      } else if (month == 2){
        let x = 200; let y = 65;
        noStroke();
        fill(248, 231, 28);
        circle(x, y, 30);
      } else if (month == 3){
        let x = 310; let y = 65;
        noStroke();
        fill(248, 231, 28);
        circle(x, y, 30);
      } else if (month == 4){
        let x = 90; let y = 155;
        noStroke();
        fill(248, 231, 28);
        circle(x, y, 30);
      } else if (month == 5){
        let x = 200; let y = 155;
        noStroke();
        fill(248, 231, 28);
        circle(x, y, 30);
      } else if (month == 6){
        let x = 310; let y = 155;
        noStroke();
        fill(248, 231, 28);
        circle(x, y, 30);
      } else if (month == 7){
        let x = 90; let y = 245;
        noStroke();
        fill(248, 231, 28);
        circle(x, y, 30);
      } else if (month == 8){
        let x = 200; let y = 245;
        noStroke();
        fill(248, 231, 28);
        circle(x, y, 30);
      } else if (month == 9){
       let x = 310; let y = 245;
        noStroke();
        fill(248, 231, 28);
        circle(x, y, 30);
      } else if (month == 10){
       let x = 90; let y = 335;
        noStroke();
        fill(248, 231, 28);
        circle(x, y, 30);
      } else if (month == 11){
       let x = 200; let y =335;
        noStroke();
        fill(248, 231, 28);
        circle(x, y, 30);
      } else {
       let x = 310; let y =335;
        noStroke();
        fill(248, 231, 28);
        circle(x, y, 30);
      }

    //noStroke();
    //fill(248, 231, 28);
    //circle(x, y, 30);

}
