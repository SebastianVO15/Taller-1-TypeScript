// Función para mostrar las series cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("series");
  const averageElement = document.getElementById("average-seasons");
  
  // Limpiar tabla
  tableBody.innerHTML = '';
  
  // Llenar tabla
  series.forEach(serie => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
          <td>${serie.id}</td>
          <td>${serie.nombre}</td>
          <td>${serie.canal}</td>
          <td>${serie.temporadas}</td>
      `;
      
      // Agregar evento click a cada fila
      fila.addEventListener('click', () => {
          // Quitar la clase selected de todas las filas
          document.querySelectorAll('#series tr').forEach(row => {
              row.classList.remove('selected-row');
          });
          
          // Agregar la clase selected a la fila actual
          fila.classList.add('selected-row');
          
          // Mostrar detalles de la serie
          mostrarDetalleSerie(serie);
      });
      
      tableBody.appendChild(fila);
  });
  
  // Calcular y mostrar promedio
  const totalTemporadas = series.reduce((sum, serie) => sum + serie.temporadas, 0);
  const promedio = totalTemporadas / series.length;
  averageElement.textContent = promedio.toFixed(2);
});

// Función para mostrar los detalles de una serie
function mostrarDetalleSerie(serie) {
  document.getElementById('serie-title').textContent = serie.nombre;
  document.getElementById('serie-description').textContent = serie.descripcion;
  document.getElementById('serie-image').src = serie.imagen;
  document.getElementById('serie-image').alt = serie.nombre;
  
  // Badges con información adicional
  const badgesContainer = document.getElementById('serie-badges');
  badgesContainer.innerHTML = `
      <span class="badge badge-primary">${serie.canal}</span>
      <span class="badge badge-info">${serie.temporadas} temporada${serie.temporadas !== 1 ? 's' : ''}</span>
      <span class="badge badge-success">ID: ${serie.id}</span>
  `;
  
  // Animación de la tarjeta
  const card = document.getElementById('serie-detail');
  card.style.animation = 'none';
  setTimeout(() => {
      card.style.animation = 'fadeIn 0.5s';
  }, 10);
}