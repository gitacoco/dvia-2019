var totals

function preload(){
  totals = loadTable('data/all-frequency.csv', 'csv', 'header')
}

function setup(){
  createCanvas(2000, 600)
  background(230)

  // pick the data file to work with and call it "table"
  var table = totals
 
  // count the colums
  print(table)

  // set up typography
  textFont("Rokkitt")
  textSize(16)
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
  textAlign(BOLD)
  for (var r=0; r<table.getRowCount(); r++){
    var year = table.getString(r, 0)
    text(year, x, y-rowHeight)
    x += colWidth
  }

  // draw the frequency label on the left edge of the table
  textStyle(BOLD)
  textAlign(RIGHT)
  for (var c=1; c<table.getColumnCount(); c++){
    text(table.columns[c], x-colWidth, y)
    y += rowHeight
  }

  // print out the total for each year, one column at a time
  x = 200
  for (var r=1; r<table.getRowCount(); r++){  
    y = 100
	for (var c=0; c<table.getColumnCount(); c++){

      print(table.getString (r,c) )
      var value = table.getNum(r, c)
      text(value, x, y)
      y += rowHeight
    }
    x += colWidth
  }

}
