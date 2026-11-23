const contenedor = document.getElementById("lineaTiempoArquitectura");

const lineaTiempo = new Histropedia.Timeline(contenedor, {
  width: contenedor.clientWidth,
  height: contenedor.clientHeight,
  article: {
    density: "all",
    autoStacking: {
      active: true,
      rowSpacing: 70,
      range: "all",
      fitToHeight: false,
      topGap: 20
    }
  }
});

const proyectos = [
  {
    id: "nacimiento",
    title: "Nacimiento",
    subtitle: "1475 · Caprese",
    from: { year:1475 },
  },
  {
    id: "fachada-san-lorenzo",
    title: "Fachada de San Lorenzo",
    subtitle: "Encargo de 1516 · Proyecto abandonado antes de construirse",
    from: { year: 1516 },
    to: { year: 1519 },
    imageUrl: new URL("img/arquitectura/fachada-san-lorenzo.jpg", document.baseURI).href,
    cardLayout: "portrait"
  },
  {
    id: "sacristia-nueva",
    title: "Sacristía Nueva",
    subtitle: "Desde 1520 · Capilla funeraria de los Médici",
    from: { year: 1520 },
    to: { year: 1534 },
    imageUrl: new URL("img/arquitectura/sacristia-nueva.jpg", document.baseURI).href,
    cardLayout: "portrait"
  },
  {
    id: "biblioteca-laurenziana",
    title: "Biblioteca Laurenziana",
    subtitle: "Encargo de 1524 · La escalera fue terminada por Ammannati en 1560",
    from: { year: 1524 },
    to: { year: 1534 },
    imageUrl: new URL("img/arquitectura/biblioteca-laurenziana.jpg", document.baseURI).href,
    cardLayout: "portrait"
  },
  {
    id: "campidoglio",
    title: "Plaza del Campidoglio",
    subtitle: "Reordenación encargada en 1546 · El proyecto se completó después de su muerte",
    from: { year: 1546 },
    imageUrl: new URL("img/arquitectura/campidoglio.jpg", document.baseURI).href,
    cardLayout: "portrait"
  },
  {
    id: "palazzo-farnese",
    title: "Palazzo Farnese",
    subtitle: "Miguel Ángel se hizo cargo de las obras en 1546",
    from: { year: 1546 },
    imageUrl: new URL("img/arquitectura/palazzo-farnese.jpg", document.baseURI).href,
    cardLayout: "portrait"
  },
  {
    id: "basilica-san-pedro",
    title: "Basílica de San Pedro",
    subtitle: "Director de las obras desde 1546 hasta 1564 · La cúpula se construyó después",
    from: { year: 1546 },
    to: { year: 1564 },
    imageUrl: new URL("img/arquitectura/basilica-san-pedro.jpg", document.baseURI).href,
    cardLayout: "portrait"
  },
  {
    id: "san-giovanni-fiorentini",
    title: "San Giovanni dei Fiorentini",
    subtitle: "Proyecto de 1559 · El diseño de Miguel Ángel no llegó a construirse",
    from: { year: 1559 },
    imageUrl: new URL("img/arquitectura/san-giovanni-fiorentini.jpg", document.baseURI).href,
    cardLayout: "portrait"
  },
  {
    id: "santa-maria-angeli",
    title: "Santa Maria degli Angeli",
    subtitle: "Proyecto de 1563 · Transformación de las termas de Diocleciano",
    from: { year: 1563 },
    imageUrl: new URL("img/arquitectura/santa-maria-angeli.jpg", document.baseURI).href,
    cardLayout: "portrait"
  },
  {
    id: "muerte",
    title: "Muerte",
    subtitle: "1564 · Roma",
    from: { year:1564 },
   },
];

lineaTiempo.load(proyectos);

lineaTiempo.on("article-click", (articulo) => {
  const obra = articulo.data;

  if (obra.imageUrl) {
    Fancybox.show([
      {
        src: obra.imageUrl,
        type: "image",
        caption: obra.title + " — " + obra.subtitle
      }
    ]);
  }
});

lineaTiempo.fitDateRange(
  { year: 1516 },
  { year: 1564 },
  { padding: 40 }
);

window.addEventListener("resize", () => {
  lineaTiempo.setSize(
    contenedor.clientWidth,
    contenedor.clientHeight
  );
});