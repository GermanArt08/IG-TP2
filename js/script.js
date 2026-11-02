document.addEventListener('DOMContentLoaded', () => {

  // 1. Integración de Fancybox
  if (typeof Fancybox !== 'undefined') {
    Fancybox.bind("[data-fancybox='galeria']", {
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [],
          right: ["slideshow", "fullscreen", "thumbs", "close"],
        },
      },
      Hash: false,
    });
  }

  // 2. Filtrado de obras
  const filterButtons = document.querySelectorAll('.filter-btn');
  const workItems = document.querySelectorAll('.obra-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {

      // Cambiar el botón activo
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });

      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');

      // Obtener la categoría seleccionada
      const filterValue = button.dataset.filter;

      // Mostrar u ocultar las obras
      workItems.forEach(item => {
        const itemCategory = item.dataset.category;

        item.hidden = filterValue !== 'all' && itemCategory !== filterValue;
      });

    });
  });

});