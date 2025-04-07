import { series } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const tablaBody = document.getElementById('series');
    const promedioElemento = document.getElementById('average-seasons');

    // Limpiar tabla
    tablaBody.innerHTML = '';

    // Llenar tabla
    series.forEach(serie => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.nombre}</td>
            <td>${serie.canal}</td>
            <td>${serie.temporadas}</td>
        `;
        tablaBody.appendChild(fila);
    });

    // Calcular promedio
    const totalTemporadas = series.reduce((acc, serie) => acc + serie.temporadas, 0);
    const promedio = totalTemporadas / series.length;
    promedioElemento.textContent = promedio.toFixed(2);
});