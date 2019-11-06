var tests
var yields
var carbon

function preload(){
  tests = loadTable('data/all-frequency.csv', 'csv', 'header')
  yields = loadTable('data/yieldsbyyear.csv', 'csv', 'header')
  carbon = loadTable('data/carbon-14.csv', 'csv', 'header')
}

function setup(){
  createCanvas(9000, 600, SVG)
  background(230)

  // pick the data file to work with and call it "table"
  var table = yields
 
  // count the colums
  print(table)

  // set up typography
  textFont("Rokkitt")
  textSize(10)
  fill(30)
  noStroke()

  var x = 200
  var y = 100
  var rowHeight = 60
  var colWidth = 40

  // draw year labels in the header row
  x = 200
  y = 100
  textStyle(NORMAL)
  textAlign(RIGHT)
  for (var r=0; r<table.getRowCount(); r++){
    var year = table.getString(r, 0)
    text(year, x, y-rowHeight)
    x += colWidth
  }

  // draw the yields value below the head of the table
  textStyle(NORMAL)
  textAlign(RIGHT)
  for (var c=1; c<table.getColumnCount(); c++){
    text(table.columns[c], x-colWidth, y)
    y += rowHeight
  }

  // print out the total for each year, one column at a time
  x = 200
  for (var r=0; r<table.getRowCount(); r++){  
    y = 100
	for (var c=1; c<table.getColumnCount(); c++){

      print(table.getString (r,c) )
      var value = table.getNum(r, c)
      //if (value > 0){
      //	fill(255, 204, 0, 90)
      //	circle(x, y, value/50)
      //}
      text(value, x, y)
      y += rowHeight
    }
    x += colWidth
  }

}
