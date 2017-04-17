# Javascript y data, vía p5.js 

### Introducción

Usaremos el término **data** para referirnos a un conjunto de valores de variables cualitativas o cuantitativas. Esto es referirse a algo distinto del dato, que es: 

1. m. Información sobre algo concreto que permite su conocimiento exacto o sirve para deducir las consecuencias derivadas de un hecho. *A este problema le faltan datos numéricos*.
2. m. Documento, testimonio, fundamento.
3. m. *Inform*. Información dispuesta de manera adecuada para su tratamiento por una computadora. 

Usaremos el término **dataset** para referirnos a una colección de **data** (una colección de conjuntos de valores de variables cualitativas o cuantitativas). 

Y usaremos el término **data exchange** para referirnos al intercambio de **data** estructurada, que cumple con la condición de estar dispuesta de manera adecuada para su tratamiento en un esquema de origen y también en un esquema de destino.

Podemos usar todos los términos mencionados en una única frase: 

> En **Humanitarian *Data Exchange*** podemos encontrar un ***dataset*** de *[Maternal mortality ratio per 100,000 live births](https://data.humdata.org/dataset/maternal_mortality_ratio_per_100000_live_births)*. Con [p5.js](https://p5js.org/), que es nuestra vía de ingreso a [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Una_re-introducci%C3%B3n_a_JavaScript), podríamos hacer *algo* que entregue a la percepción la posibilidad de comparar ***data***.

Si nos quedamos con lo aprendido en [la clase anterior](https://github.com/profesorfaco/dgp602.p5), podríamos revisar, *a mano*, alguno de los formatos con los que se ofrece el *dataset* de *[Maternal mortality ratio per 100,000 live births](https://data.humdata.org/dataset/maternal_mortality_ratio_per_100000_live_births)* ([XLS](https://es.wikipedia.org/wiki/Microsoft_Excel), [CSV](https://es.wikipedia.org/wiki/Valores_separados_por_comas) o [TXT](https://es.wikipedia.org/wiki/Archivo_de_texto)), para copiar los conjuntos de valores que estimemos convenientes y pegarlos en uno o varios [arreglos](https://www.w3schools.com/js/js_arrays.asp).

Pero en esta clase vamos a encargarle al mismo [p5.js](https://p5js.org/) que haga lecturas de algunos *dataset*, siempre y cuando estén en [algún formato adecuado al *data exchange*](https://en.wikipedia.org/wiki/Data_exchange#Popular_languages_used_for_data_exchange), entre los que nos conviene destacar:

- [**XML** (eXtensible Markup Language)](https://www.w3schools.com/xml) es un estándar para el intercambio de información estructurada entre diferentes plataformas. Se puede usar en bases de datos, editores de texto, hojas de cálculo y casi cualquier cosa imaginable.

- [**CSV** (Comma Separated Value)](https://es.wikipedia.org/wiki/Valores_separados_por_comas) es una *simplificación* de una hoja de cálculo de Microsoft Excel, que representa la separación de columnas con comas y la separación de filas con saltos de línea. Este formato se ha convertido en un pseudo estándar, incluso entre plataformas que no son de Microsoft.

-  [**JSON** (JavaScript Object Notation)](http://www.json.org/json-es.html) es un subconjunto de la notación literal de objetos de JavaScript. Actualmente, debido a su amplia adopción como alternativa a XML, se considera un formato de lenguaje independiente. 

### Recursos

- [Beyond the Canvas](https://github.com/processing/p5.js/wiki/Beyond-the-canvas)
- [Google Spreadsheet JSON Export](https://gist.github.com/pamelafox/1878143)
- [JavaScript Basics](https://github.com/processing/p5.js/wiki/JavaScript-basics)
- [JSON Formatter & Validator](https://jsonformatter.curiousconcept.com/)
- [Working with data - p5.js Tutorial](https://youtu.be/rJaXOFfwGVw?list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r)

##### Datasets

- [Cool Datasets](http://cooldatasets.com/)
- [Corpora](https://github.com/dariusk/corpora)
- [Datos de libre acceso del Banco Mundial](http://datos.bancomundial.org/)
- [The Humanitarian Data Exchange](https://data.humdata.org/group/chl)

##### APIs
- [OpenWeatherMap](https://openweathermap.org/current)
- [The New York Times Developer Network](http://developer.nytimes.com/)

### Actividad

- Resolver los desafíos que se presentan en los documentos HTML del repositorio. Subir sus resultados en repositorio y GitHub Pages.

### Resultados

- Respondiendo a [este Formulario de Google](https://docs.google.com/forms/d/e/1FAIpQLSf9K7AqnlMpJy1nHujpwcFKO1RVEydpvdskNhF9f5SLRxUhTg/viewform?usp=sf_link), puedes informar del resultado de la actividad.
