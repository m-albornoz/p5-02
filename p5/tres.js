var puntos;

function preload() {
  puntos = loadTable("https://raw.githubusercontent.com/profesorfaco/dgp602.data/gh-pages/data/smartcitizen.csv", "csv", "header");
}

function setup() {
  var miCanvas = createCanvas(900, 570);
  miCanvas.parent('miMapa');
  print(puntos.getRowCount() + " filas en la tabla");
  print(puntos.getColumnCount() + " columnas en la tabla");
  noLoop();
  noStroke();
}

function draw(){
  fill(255,0,0);
  for (var i = 0; i < puntos.getRowCount(); i++){
      var lat = puntos.get(i,1);
      var lng = puntos.get(i,2);
      var x = map(lat,-90,90,0,900);
      var y = map(lng,-180,180,0,570);
      ellipse(round(x),round(y),3,3);
    }
}

