var carbon

function preload(){
  carbon = loadTable('data/all-frequency.csv','csv', 'header')
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

  //var x = 200
  //var y = 100
  var rowHeight = 60
  var colWidth = 45

  //draw year labels
  x = 100
  y = 100
  textStyle(NORMAL)
  textAlign(BOLD)
  for (var r=0; r<table.getRowCount(); r++){
    var year = table.getString(r, 0)
    text(year, x, y-rowHeight)
    x += colWidth
  }  

  //draw the barchart

  x = 100
  y = 120
  noStroke()
  fill('black')
  textStyle(NORMAL)
  textAlign(BOLD)
  for (var r=0; r<table.getRowCount(); r++){
    var tests = table.getNum(r, 1)
    rect(x, y, colWidth-5, tests*5)
    x += colWidth
  }  
}
