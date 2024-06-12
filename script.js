document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos el contenedor y todas las cajas de imágenes
    const gallery = document.querySelector('.container');
    const boxes = Array.from(gallery.querySelectorAll('.box'));

    // Verificar el número de columnas basado en el CSS
    const computedStyle = getComputedStyle(gallery);
    const numColumns = parseInt(computedStyle.getPropertyValue('column-count'));

    // Si no se puede determinar el número de columnas, usar 3 por defecto
    if (isNaN(numColumns) || numColumns <= 0) {
        numColumns = 3;
    }

    // Array para las imágenes reordenadas
    let reorderedBoxes = [];

    // Reorganizamos las cajas de imágenes por filas
    for (let i = 0; i < numColumns; i++) {
        for (let j = i; j < boxes.length; j += numColumns) {
            reorderedBoxes.push(boxes[j]);
        }
    }

    // Vaciamos la galería y volvemos a agregar las cajas de imágenes en el nuevo orden
    gallery.innerHTML = '';
    reorderedBoxes.forEach(box => {
        gallery.appendChild(box);
    });
});