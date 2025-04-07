var _a;
import { series } from "./data.js";
var tableBody = (_a = document.getElementById("tabla-series")) === null || _a === void 0 ? void 0 : _a.getElementsByTagName("tbody")[0];
function mostrarSeries() {
    series.forEach(function (serie) {
        var fila = document.createElement("tr");
        fila.innerHTML = "\n      <td>".concat(serie.id, "</td>\n      <td>").concat(serie.nombre, "</td>\n      <td>").concat(serie.canal, "</td>\n      <td>").concat(serie.temporadas, "</td>\n    ");
        tableBody.appendChild(fila);
    });
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.temporadas; }, 0);
    var promedio = totalSeasons / series.length;

    var filaPromedio = document.createElement("tr");
    filaPromedio.innerHTML = "\n    <td colspan=\"3\"><strong>Seasons average</strong></td>\n    <td><strong>".concat(promedio.toFixed(2), "</strong></td>\n  ");
    tableBody.appendChild(filaPromedio);
}
mostrarSeries();