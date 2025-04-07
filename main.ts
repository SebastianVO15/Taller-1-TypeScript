import { series } from "./data.js";
import { Serie } from "./series.js";

const tableBody = document.getElementById("series") as HTMLTableSectionElement;
const averageElement = document.getElementById("average-seasons") as HTMLSpanElement;

function mostrarSeries(): void {
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
    const promedio = calcularPromedioTemporadas();
    averageElement.textContent = promedio.toFixed(2);
}

function calcularPromedioTemporadas(): number {
    return series.reduce((sum, serie) => sum + serie.temporadas, 0) / series.length;
}

document.addEventListener("DOMContentLoaded", mostrarSeries);