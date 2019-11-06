var carbon

function preload(){
  carbon = loadTable('data/carbon14-ave.csv','csv', 'header')
}

function setup(){
  createCanvas(3300, 1000)
  background(230)
  
  // pick the data file to work with and call it "table"
  var table = carbon
 
  // count the colums
  //print(table)

  // set up typography
  textFont("Rokkitt")
  textSize(16)
  fill(30)
  noStroke()

  var rowHeight = 60
  var colWidth = 45

  //draw year labels
  x = 100
  y = 900
  textStyle(NORMAL)
  textAlign(CENTER)
  for (var r=0; r<table.getRowCount(); r++){
    var year = table.getString(r, 0)
    text(year, x, y-rowHeight)
    x += colWidth
  }  

  //draw the scatter plot

  x = 100
  y = 800
  noStroke()
  fill('black')
  textStyle(NORMAL)
  textAlign(BOLD)
  for (var r=0; r<table.getRowCount(); r++){
    var tests = table.getNum(r, 1)
    stroke('purple')
    strokeWeight(10)
    point(x, 700-tests)
    //line(x, 700-tests, x+45, 700-tests)
    x += colWidth
  }  

}
