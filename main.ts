import { series } from "./data.js";
import { Serie } from "./series.js";

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("series") as HTMLTableSectionElement;
    const averageElement = document.getElementById("average-seasons") as HTMLSpanElement;

    // Limpiar tabla
    tableBody.innerHTML = '';
    
    // Llenar tabla
    series.forEach((serie: Serie) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.nombre}</td>
            <td>${serie.canal}</td>
            <td>${serie.temporadas}</td>
        `;
        tableBody.appendChild(fila);
    });
    
    // Calcular y mostrar promedio
    const totalTemporadas = series.reduce((sum, serie) => sum + serie.temporadas, 0);
    const promedio = totalTemporadas / series.length;
    averageElement.textContent = promedio.toFixed(2);
});