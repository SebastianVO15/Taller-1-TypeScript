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
        
        // Añadir evento click a cada fila
        fila.addEventListener("click", () => {
            mostrarDetalleSerie(serie);
            
            // Quitar clase selected-row de todas las filas
            document.querySelectorAll("#series tr").forEach(row => {
                row.classList.remove("selected-row");
            });
            
            // Añadir clase selected-row a la fila actual
            fila.classList.add("selected-row");
        });
        
        tableBody.appendChild(fila);
    });
    
    // Calcular y mostrar promedio
    const totalTemporadas = series.reduce((sum, serie) => sum + serie.temporadas, 0);
    const promedio = totalTemporadas / series.length;
    averageElement.textContent = promedio.toFixed(2);
    
    // Mostrar la primera serie por defecto
    if (series.length > 0) {
        mostrarDetalleSerie(series[0]);
        document.querySelector("#series tr").classList.add("selected-row");
    }
});

// Función para mostrar el detalle de una serie en la tarjeta
function mostrarDetalleSerie(serie) {
    // Actualizar elementos de la tarjeta
    document.getElementById("serie-image").src = serie.imagen;
    document.getElementById("serie-image").alt = serie.nombre;
    document.getElementById("serie-title").textContent = serie.nombre;
    document.getElementById("serie-description").textContent = serie.descripcion;
    
    // Generar badges con información adicional
    const badgesContainer = document.getElementById("serie-badges");
    badgesContainer.innerHTML = `
        <span class="badge badge-primary">Canal: ${serie.canal}</span>
        <span class="badge badge-success">Temporadas: ${serie.temporadas}</span>
        <span class="badge badge-info">ID: ${serie.id}</span>
    `;
}