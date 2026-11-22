  const contenedor = document.getElementById("lineaTiempoEsculturas");

    const lineaTiempo = new Histropedia.Timeline(contenedor, {
      width: contenedor.clientWidth,
      height: contenedor.clientHeight
    });

    const esculturas = [
      {
        id: "nacimiento",
        title: "Nacimiento",
        subtitle: "1475 · Caprese",
        from: { year:1475 },
      },
      {
        id: "angel-arrodillado",
        title: "Ángel arrodillado",
        subtitle: "1494–1495 · Mármol · Bolonia",
        from: { year: 1494 },
        to: { year: 1495 },
        imageUrl: new URL("img/esculturas/angel-arrodillado.jpg", document.baseURI).href,
        cardLayout: "portrait"
      },
      {
        id: "san-proculo",
        title: "San Próculo",
        subtitle: "1494–1495 · Mármol · Bolonia",
        from: { year: 1494 },
        to: { year: 1495 },
        imageUrl: new URL("img/esculturas/san-proculo.jpg", document.baseURI).href,
        cardLayout: "portrait"
      },
      {
        id: "cupido",
        title: "Cupido",
        subtitle: "1494–1496 · Una de sus primeras esculturas",
        from: { year: 1494 },
        to: { year: 1496 },
        imageUrl: new URL("img/esculturas/cupido.jpg", document.baseURI).href,
        cardLayout: "portrait"
      },
      {
        id: "baco",
        title: "Baco",
        subtitle: "1496–1497 · Dios romano del vino",
        from: { year: 1496 },
        to: { year: 1497 },
        imageUrl: new URL("img/esculturas/baco.jpg", document.baseURI).href,
        cardLayout: "portrait"
      },
      {
        id: "piedad-vaticana",
        title: "Piedad del Vaticano",
        subtitle: "1499–1500 · Basílica de San Pedro, Roma",
        from: { year: 1499 },
        to: { year: 1500 },
        imageUrl: new URL("img/esculturas/piedad-vaticana.jpg", document.baseURI).href,
        cardLayout: "portrait"
      },
      {
        id: "david",
        title: "David",
        subtitle: "1501–1504 · Mármol · Florencia",
        from: { year: 1501 },
        to: { year: 1504 },
        imageUrl: new URL("img/esculturas/david.jpg", document.baseURI).href,
        cardLayout: "portrait"
      },
      {
        id: "madonna-brujas",
        title: "Madonna de Brujas",
        subtitle: "1501–1504 · Mármol · Brujas",
        from: { year: 1501 },
        to: { year: 1504 },
        imageUrl: new URL("img/esculturas/madonna-brujas.jpg", document.baseURI).href,
        cardLayout: "portrait"
      },
      {
        id: "tondo-taddei",
        title: "Tondo Taddei",
        subtitle: "1503–1506 · Relieve circular en mármol",
        from: { year: 1503 },
        to: { year: 1506 },
        imageUrl: new URL("img/esculturas/tondo-taddei.jpg", document.baseURI).href,
        cardLayout: "portrait"
      },
      {
        id: "tumba-julio-segundo",
        title: "Proyecto de la tumba de Julio II",
        subtitle: "1505–1545 · Proyecto escultórico de larga duración",
        from: { year: 1505 },
        to: { year: 1545 },
        imageUrl: new URL("img/esculturas/tumba-julio-segundo.jpg", document.baseURI).href,
        cardLayout: "portrait"
      },
      {
        id: "moises",
        title: "Moisés",
        subtitle: "1513–1515 · Diseñado para la tumba de Julio II",
        from: { year: 1513 },
        to: { year: 1515 },
        imageUrl: new URL("img/esculturas/moises.jpg", document.baseURI).href,
        cardLayout: "portrait"
      },
      {
        id: "esclavo",
        title: "Esclavo moribundo",
        subtitle: "1513–1520 · Obra destinada a la tumba de Julio II",
        from: { year: 1513 },
        to: { year: 1520 },
        imageUrl: new URL("img/esculturas/esclavo.jpg", document.baseURI).href,
        cardLayout: "portrait"
      },
      {
        id: "capilla-medici",
        title: "Esculturas de la Capilla Medici",
        subtitle: "1520–1534 · Florencia",
        from: { year: 1520 },
        to: { year: 1534 },
        imageUrl: new URL("img/esculturas/capilla-medici.jpg", document.baseURI).href,
        cardLayout: "portrait"
      },
      {
        id: "piedad-florentina",
        title: "Piedad florentina",
        subtitle: "Hacia 1550 · Obra inacabada",
        from: { year: 1550 },
        imageUrl: new URL("img/esculturas/piedad-florentina.jpg", document.baseURI).href,
        cardLayout: "portrait"
      },
      {
        id: "muerte",
        title: "Muerte",
        subtitle: "1564 · Roma",
        from: { year:1564 },
      },
    ];

    lineaTiempo.load(esculturas);

    lineaTiempo.fitDateRange(
      { year: 1475 },
      { year: 1564 },
      { padding: 40 }
    );

    window.addEventListener("resize", () => {
      lineaTiempo.setSize(
        contenedor.clientWidth,
        contenedor.clientHeight
      );
    });