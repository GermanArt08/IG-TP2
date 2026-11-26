const contenedor = document.getElementById("lineaTiempoPinturas");

const lineaTiempo = new Histropedia.Timeline(contenedor, {
  width: contenedor.clientWidth,
  height: contenedor.clientHeight,
  article: {
    density: "all",
    autoStacking: {
      active: true,
      rowSpacing: 90,
      range: "all",
      fitToHeight: false,
      topGap: 25
    }
  }
});

const pinturas = [
  {
    id: "nacimiento",
    title: "Nacimiento",
    subtitle: "1475 · Caprese",
    from: { year:1475 },
  },
  {
    id: "madonna-manchester",
    title: "Madonna de Mánchester",
    subtitle: "Hacia 1497 · Obra inacabada",
    from: { year: 1497 },
    imageUrl: new URL("img/pinturas/madonna.jpeg", document.baseURI).href,
    cardLayout: "portrait"
  },
  {
    id: "doni-tondo",
    title: "Tondo Doni",
    subtitle: "1505–1506 · Sagrada Familia · Uffizi, Florencia",
    from: { year: 1505 },
    to: { year: 1506 },
    imageUrl: new URL("img/pinturas/tondo_doni.jpeg", document.baseURI).href,
    cardLayout: "portrait"
  },
  {
    id: "boveda-sixtina",
    title: "Bóveda de la Capilla Sixtina",
    subtitle: "1508–1512 · Frescos del techo de la Capilla Sixtina",
    from: { year: 1508 },
    to: { year: 1512 },
    imageUrl: new URL("img/pinturas/boveda_de_la_capilla_sixtina.jpg", document.baseURI).href,
    cardLayout: "portrait"
  },
  {
    id: "pecado-original",
    title: "El Pecado Original y la expulsión del Paraíso",
    subtitle: "Hacia 1510 · Escena de la bóveda de la Capilla Sixtina",
    from: { year: 1510 },
    imageUrl: new URL("img//pinturas/pecado_original.jpeg", document.baseURI).href,
    cardLayout: "portrait"
  },
  {
    id: "creacion-adan",
    title: "La Creación de Adán",
    subtitle: "Hacia 1511 · Fresco de la bóveda de la Capilla Sixtina",
    from: { year: 1511 },
    imageUrl: new URL("img/pinturas/creacion_de_adan.jpeg", document.baseURI).href,
    cardLayout: "portrait"
  },
  {
    id: "juicio-final",
    title: "El Juicio Final",
    subtitle: "1536–1541 · Muro del altar de la Capilla Sixtina",
    from: { year: 1536 },
    to: { year: 1541 },
    imageUrl: new URL("img/pinturas/juicio_final.jpg", document.baseURI).href,
    cardLayout: "portrait"
  },
  {
    id: "conversion-san-pablo",
    title: "La conversión de San Pablo",
    subtitle: "1542–1545 · Capilla Paulina, Vaticano",
    from: { year: 1542 },
    to: { year: 1545 },
    imageUrl: new URL("img/pinturas/conversion_sanpablo.jpg", document.baseURI).href,
    cardLayout: "portrait"
  },
  {
    id: "crucifixion-san-pedro",
    title: "La crucifixión de San Pedro",
    subtitle: "1546–1550 · Capilla Paulina, Vaticano",
    from: { year: 1546 },
    to: { year: 1550 },
    imageUrl: new URL("img/pinturas/crucificion_de_sanpedro.jpg", document.baseURI).href,
    cardLayout: "portrait"
  },
  {
    id: "muerte",
    title: "Muerte",
    subtitle: "1564 · Roma",
    from: { year:1564 },
   },
];

lineaTiempo.load(pinturas);

lineaTiempo.on("article-click", (articulo) => {
  const obra = articulo.data;

  if (obra.imageUrl) {
    Fancybox.show(
      [
        {
          src: obra.imageUrl,
          type: "image",
          caption: obra.title + " — " + obra.subtitle
        }
      ],
      {
        triggerEl: contenedor,
        placeFocusBack: true
      }
    );
  }
});

lineaTiempo.fitDateRange(
  { year: 1497 },
  { year: 1550 },
  { padding: 40 }
);

window.addEventListener("resize", () => {
  lineaTiempo.setSize(
    contenedor.clientWidth,
    contenedor.clientHeight
  );
});
