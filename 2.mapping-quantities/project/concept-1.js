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
  print(table.getRowCount() + ' total rows in table')
  print(table.getColumnCount() + ' total columns in table')

  // set up typography
  textFont("Rokkitt")
  textSize(16)
  fill(30)
  noStroke()

  var x = 200
  var y = 100
  var rowHeight = 60
  var colWidth = 40

  print(table.getRow('Year'))
  print(table.getRow('Frequency'))

  for (let r = 0; r < table.getRowCount(); r++)
  	for (let c = 0; c< table.getColumnCount(); c++){print(table.getString(r, c))
  	}

}
