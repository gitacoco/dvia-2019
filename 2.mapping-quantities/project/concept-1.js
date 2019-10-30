var totals

function preload(){
  totals = loadTable('data/all-frequency.csv', 'csv', 'header')
function setup(){
  createCanvas(800, 600)

  // pick the data file to work with and call it "table"
  var table = totals

  // log the whole dataset to the console so we can poke around in it
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

  // print out the total for each country, one column at a time
  x = 200
  for (var r=0; r<table.getRowCount(); r++){
    y = 100
    for (var c=1; c<table.getColumnCount(); c++){
      var value = table.getNum(r, c)
      text(value, x, y)
      y += rowHeight
    }
    x += colWidth
  }



}
