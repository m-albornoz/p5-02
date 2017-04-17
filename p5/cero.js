var data; //lo primero es crear una variable global, a la que se le asigna un contenido en preload(){}

function preload() {
   data = loadTable("https://raw.githubusercontent.com/profesorfaco/dgp602.data/gh-pages/data/acaparadores-de-premios-oscar.csv", "csv", "header");
   //Fuente: https://es.wikipedia.org/wiki/Anexo:Películas_con_más_premios_Óscar
}

function setup() {
   for (var i = 0; i < data.getRowCount(); i++) {
      var year = data.get(i, 0);
      var title = data.get(i, 1);
      var how_many = data.get(i, 2);
      var nominees = data.get(i, 3);   
      print("El año " + year + ", la película «" + title + "» se llevó " + how_many + " premios Oscar para su casa, con " + nominees + " nominaciones." );
   }
   print("La tabla consultada tiene " + data.getRowCount() + " filas y " + data.getColumnCount() + " columnas.");
}

function draw() {}
