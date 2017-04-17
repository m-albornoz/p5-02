var etiquetasDis;

function setup() {
   loadJSON('http://dis.uchilefau.cl/api/get_tag_index', gotData, 'jsonp');
   var miCanvas = createCanvas(windowWidth, 400);
   miCanvas.parent('miContenedor');
}

function gotData(data) {
   console.log(data);
   etiquetasDis = data;
}

function draw() {
   if (etiquetasDis) {
      background(20);
      textSize(10);
      n = 0;
      for (var y = 20; y <= height - 10; y += 20) {
         for (var x = 0; x <= width - 10; x += 200) {
            if (etiquetasDis.tags[n].post_count >= 20) {
               fill(162,255,255);
               textStyle(BOLD);
               textSize(14);
            } else if (etiquetasDis.tags[n].post_count >= 10) {
               fill(2,208,255);
               textStyle(BOLD);
               textSize(12); 
            } else {
               fill(19,137,255); 
               textStyle(NORMAL);
               textSize(10);
            }
            text("(" + etiquetasDis.tags[n].post_count + ") " + etiquetasDis.tags[n].title, x, y);
            n = n + 1;
         }
      }
   }
}
