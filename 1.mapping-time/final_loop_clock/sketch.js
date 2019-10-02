
function setup() {
  // set the width & height of the sketch
  createCanvas(1200, 400)
  noStroke();

}

function draw() {
  // note that setting the background also clears the canvas from our previous round of drawing
   background('black')

  // measure the current time and re-map the number from time proportion to location proportion
    var now = clock()
    let season = now.season // the current season 1-4 (starting with spring)
    let month = now.month // month number 1–12
    let HourAngle = map(now.hour, 1, 12, 0, 360) // from hours (1-12) to pixels (0-360)
    let MinAngle = map(now.min, 0, 60, 0, 360) // from mins (0-60) to pixels (0-360)
    let SecAngle = map(now.sec, 0, 60, 0, 360) // from secs (0-60) to pixels (0-360)
    

  // draw and color the 12 circles
      push();
      if (season == 1) {

        strokeWeight(15);
        noFill();
        stroke(40, 40, 40);//grey
        let jan = circle(120, 114, 130);
        let feb = circle(312, 114, 130);
       
        stroke(184, 233, 134);//green
        let mar = circle(504, 114, 130);        
        let apr = circle(696, 114, 130);    
        let may = circle(888, 114, 130);

        stroke(40, 40, 40);//grey
        let jun = circle(1080, 114, 130);
        let jul = circle(120, 285, 130);
        let aug = circle(312, 285, 130); 
        let sep = circle(504, 285, 130);
        let oct = circle(696, 285, 130);
        let nov = circle(888, 285, 130);
        let dec = circle(1080, 285, 130);

      } else if (season == 2){

        strokeWeight(15);
        noFill();
        stroke(40, 40, 40);//grey
        let jan = circle(120, 114, 130);
        let feb = circle(312, 114, 130);
        let mar = circle(504, 114, 130);        
        let apr = circle(696, 114, 130);    
        let may = circle(888, 114, 130);      

        stroke(255, 85, 85);//red
        let jun = circle(1080, 114, 130);
        let jul = circle(120, 285, 130);
        let aug = circle(312, 285, 130);  

        stroke(40, 40, 40);//grey
        let sep = circle(504, 285, 130);
        let oct = circle(696, 285, 130);
        let nov = circle(888, 285, 130);
        let dec = circle(1080, 285, 130);

      } else if (season == 3){

        strokeWeight(15);
        noFill();
        stroke(40, 40, 40);//grey
        let jan = circle(120, 114, 130);
        let feb = circle(312, 114, 130);
        let mar = circle(504, 114, 130);        
        let apr = circle(696, 114, 130);    
        let may = circle(888, 114, 130);
        let jun = circle(1080, 114, 130);
        let jul = circle(120, 285, 130);
        let aug = circle(312, 285, 130);        

        stroke(245, 166, 35);//yellow
        let sep = circle(504, 285, 130);
        let oct = circle(696, 285, 130);
        let nov = circle(888, 285, 130);

        stroke(40, 40, 40);//grey
        let dec = circle(1080, 285, 130);

      } else {

        strokeWeight(15);
        noFill();
        stroke(246, 246, 246);//white
        let jan = circle(120, 114, 130);
        let feb = circle(312, 114, 130);

        stroke(40, 40, 40);//grey
        let mar = circle(504, 114, 130);        
        let apr = circle(696, 114, 130);    
        let may = circle(888, 114, 130);
        let jun = circle(1080, 114, 130);
        let jul = circle(120, 285, 130);
        let aug = circle(312, 285, 130);        
        let sep = circle(504, 285, 130);
        let oct = circle(696, 285, 130);
        let nov = circle(888, 285, 130);

        stroke(246, 246, 246);//white
        let dec = circle(1080, 285, 130);
      }
        pop();


  // draw a rectangle mask to show meridiem data
      if (month == 1) {
        //judge the meridiem
        if (now.am){let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(47.5, 41.5, 145, 73.5); } else{let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(47.5, 114, 145, 73.5);}

      } else if (month == 2){

        if (now.am){let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(239.5, 41.5, 145, 73.5); } else{let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(239.5, 114, 145, 73.5);}

      } else if (month == 3){

        if (now.am){let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(431.5, 41.5, 145, 73.5); } else{let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(431.5, 114, 145, 73.5);}

      } else if (month == 4){

        if (now.am){let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(623.5, 41.5, 145, 73.5); } else{let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(623.5, 114, 145, 73.5);}

      } else if (month == 5){

        if (now.am){let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(815.5, 41.5, 145, 73.5); } else{let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(815.5, 114, 145, 73.5);}

      } else if (month == 6){
        
        if (now.am){let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(1007.5, 41.5, 145, 73.5); } else{let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(1007.5, 114, 145, 73.5);}

      } else if (month == 7){

        if (now.am){let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(47.5, 212.5, 145, 73.5);} else{let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(47.5, 285, 145, 73.5);}

      } else if (month == 8){

        if (now.am){let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(239.5, 212.5, 145, 73.5); } else{let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(239.5, 285, 145, 73.5);}

      } else if (month == 9){

        if (now.am){let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(431.5, 212.5, 145, 73.5); } else{let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(431.5, 285, 145, 73.5);}

      } else if (month == 10){

        if (now.am){let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(623.5, 212.5, 145, 73.5);} else{let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(623.5, 285, 145, 73.5);}

      } else if (month == 11){

        if (now.am){let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(815.5, 212.5, 145, 73.5); } else{let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(815.5, 285, 145, 73.5);}

      } else {

        if (now.am){let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(1007.5, 212.5, 145, 73.5); } else{let c = color('rgba(0, 0, 0, 0.7)'); fill(c); rect(1007.5, 285, 145, 73.5);}
      }

  // drwa the clock
    // set the position of the clock
    if (month == 1) {
        let x = 120; let y = 114;
        // draw the second hands
        fill(211, 211, 211);
        arc(x, y, 90, 90, radians(270), radians(270+SecAngle));    
        // draw the minute hands
        fill(175, 175, 175);
        arc(x, y, 50, 50, radians(270), radians(270+MinAngle));     
        // draw the hour hand
        fill(134, 134, 134);
        arc(x, y, 20, 20, radians(270), radians(270+HourAngle)); 
      } else if (month == 2){
        let x = 312; let y = 114;
        // draw the second hands
        fill(211, 211, 211);
        arc(x, y, 90, 90, radians(270), radians(270+SecAngle));    
        // draw the minute hands
        fill(175, 175, 175);
        arc(x, y, 50, 50, radians(270), radians(270+MinAngle));     
        // draw the hour hand
        fill(134, 134, 134);
        arc(x, y, 20, 20, radians(270), radians(270+HourAngle)); 
      } else if (month == 3){
        let x = 504; let y = 114;
        // draw the second hands
        fill(211, 211, 211);
        arc(x, y, 90, 90, radians(270), radians(270+SecAngle));    
        // draw the minute hands
        fill(175, 175, 175);
        arc(x, y, 50, 50, radians(270), radians(270+MinAngle));     
        // draw the hour hand
        fill(134, 134, 134);
        arc(x, y, 20, 20, radians(270), radians(270+HourAngle)); 
      } else if (month == 4){
        let x = 696; let y = 114;
        // draw the second hands
        fill(211, 211, 211);
        arc(x, y, 90, 90, radians(270), radians(270+SecAngle));    
        // draw the minute hands
        fill(175, 175, 175);
        arc(x, y, 50, 50, radians(270), radians(270+MinAngle));     
        // draw the hour hand
        fill(134, 134, 134);
        arc(x, y, 20, 20, radians(270), radians(270+HourAngle)); 
      } else if (month == 5){
        let x = 888; let y = 114;
        // draw the second hands
        fill(211, 211, 211);
        arc(x, y, 90, 90, radians(270), radians(270+SecAngle));    
        // draw the minute hands
        fill(175, 175, 175);
        arc(x, y, 50, 50, radians(270), radians(270+MinAngle));     
        // draw the hour hand
        fill(134, 134, 134);
        arc(x, y, 20, 20, radians(270), radians(270+HourAngle)); 
      } else if (month == 6){
        let x = 1080; let y = 114;
        // draw the second hands
        fill(211, 211, 211);
        arc(x, y, 90, 90, radians(270), radians(270+SecAngle));    
        // draw the minute hands
        fill(175, 175, 175);
        arc(x, y, 50, 50, radians(270), radians(270+MinAngle));     
        // draw the hour hand
        fill(134, 134, 134);
        arc(x, y, 20, 20, radians(270), radians(270+HourAngle)); 
      } else if (month == 7){
        let x = 120; let y = 285;
        // draw the second hands
        fill(211, 211, 211);
        arc(x, y, 90, 90, radians(270), radians(270+SecAngle));    
        // draw the minute hands
        fill(175, 175, 175);
        arc(x, y, 50, 50, radians(270), radians(270+MinAngle));     
        // draw the hour hand
        fill(134, 134, 134);
        arc(x, y, 20, 20, radians(270), radians(270+HourAngle)); 
      } else if (month == 8){
        let x = 312; let y = 285;
        // draw the second hands
        fill(211, 211, 211);
        arc(x, y, 90, 90, radians(270), radians(270+SecAngle));    
        // draw the minute hands
        fill(175, 175, 175);
        arc(x, y, 50, 50, radians(270), radians(270+MinAngle));     
        // draw the hour hand
        fill(134, 134, 134);
        arc(x, y, 20, 20, radians(270), radians(270+HourAngle)); 
      } else if (month == 9){
        let x = 504; let y = 285;
        // draw the second hands
        fill(211, 211, 211);
        arc(x, y, 90, 90, radians(270), radians(270+SecAngle));    
        // draw the minute hands
        fill(175, 175, 175);
        arc(x, y, 50, 50, radians(270), radians(270+MinAngle));     
        // draw the hour hand
        fill(134, 134, 134);
        arc(x, y, 20, 20, radians(270), radians(270+HourAngle)); 
      } else if (month == 10){
       let x = 696; let y = 285;
        // draw the second hands
        fill(211, 211, 211);
        arc(x, y, 90, 90, radians(270), radians(270+SecAngle));    
        // draw the minute hands
        fill(175, 175, 175);
        arc(x, y, 50, 50, radians(270), radians(270+MinAngle));     
        // draw the hour hand
        fill(134, 134, 134);
        arc(x, y, 20, 20, radians(270), radians(270+HourAngle)); 
      } else if (month == 11){
       let x = 888; let y =285;
        // draw the second hands
        fill(211, 211, 211);
        arc(x, y, 90, 90, radians(270), radians(270+SecAngle));    
        // draw the minute hands
        fill(175, 175, 175);
        arc(x, y, 50, 50, radians(270), radians(270+MinAngle));     
        // draw the hour hand
        fill(134, 134, 134);
        arc(x, y, 20, 20, radians(270), radians(270+HourAngle)); 
      } else {
       let x = 1080; let y =285;
        // draw the second hands
        fill(211, 211, 211);
        arc(x, y, 90, 90, radians(270), radians(270+SecAngle));    
        // draw the minute hands
        fill(175, 175, 175);
        arc(x, y, 50, 50, radians(270), radians(270+MinAngle));     
        // draw the hour hand
        fill(134, 134, 134);
        arc(x, y, 20, 20, radians(270), radians(270+HourAngle)); 
      }

}
