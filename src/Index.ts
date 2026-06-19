import {procesarCompra} from "./service/CompraService";
import {compraEjemplo1, compraEjemplo2, compraEjemplo3} from "./data/DatosCompra";

console.log("Los datos de las compras son los siguientes:\n");
console.log("Compra 1:", procesarCompra(compraEjemplo1));
console.log("Compra 2:", procesarCompra(compraEjemplo2));
console.log("Compra 3:", procesarCompra(compraEjemplo3));