import { series } from "./data.js";
import { Serie } from "./series.js";

const tableBody = document.getElementById("tabla-series")?.getElementsByTagName("tbody")[0] as HTMLTableSectionElement;

function mostrarSeries(): void {
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

  const promedio = calcularPromedioTemporadas();
  const filaPromedio = document.createElement("tr");

  filaPromedio.innerHTML = `
    <td colspan="3">Seasons average</td>
    <td>${promedio.toFixed(2)}</td>
  `;

  tableBody.appendChild(filaPromedio);
}

function calcularPromedioTemporadas(): number {
  let totalSeasons = series.reduce((sum, serie) => sum + serie.temporadas, 0);
  return totalSeasons / series.length;
}

mostrarSeries();