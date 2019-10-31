var data

function preload(){
  data = loadJSON('data/all-frequency.json')
}

function setup(){
  createCanvas(1000, 600)
  background(230)
  print(data)

  // set up typography
  textFont("Rokkitt")
  textSize(16)
  fill(30)
  noStroke()

  var x = 200
  var y = 100
  var rowHeight = 60
  var colWidth = 40

  // draw country name labels on the left edge of the table
  textStyle(BOLD)
  textAlign(RIGHT)
  for (var country in data.tests){
    text(country, x-colWidth, y)
    y += rowHeight
  }

  textStyle(NORMAL)
  textAlign(CENTER)
  for (var i=0; i<data.Years.length; i++){
    y = 100

    // draw the year labels in the header row
    var year = data.Years[i]
    fill(30)
    text(year, x, y-rowHeight)

    // print out one row at a time
    for (var Frequency in data.tests){
      var value = data.tests[Frequency][i]
      text(value, x, y)
      y += rowHeight
    }

    x += colWidth
  }

}
