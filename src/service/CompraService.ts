import {Producto} from "../model/Producto";
import {ResultadoCompra} from "../model/ResultadoCompra";

// Le puse el 12% y fijo porque ese es el que me salio cuando lo busque en google, no le di mas busqueda
const tasaIva = 0.12;

/* 
Aqui sumo el precio de todos los productos (solo sumo los que estan juntos,
por lo tanto no se van a sumar los de la compra 1 con la 2) para sacar el subtotal
 */
export const calcularSubtotal = (productos: Producto[]): number => {
    let subtotal = 0;
    for (const producto of productos) {
        subtotal += producto.precio;
    }
    return subtotal;
};

// Aqui simplemente multiplico porque, el IVA sale de multiplicar el subtotal por la tasa
export const calcularIva = (subtotal: number): number => {
    return subtotal * tasaIva;
};

// Agarro lo que me dio en el subtotal, el iva y el total en un solo objeto para no andar calculando todo de nuevo despues
export const procesarCompra = (productos: Producto[]): ResultadoCompra => {
    const subtotal = calcularSubtotal(productos);
    const iva = calcularIva(subtotal);
    const total = subtotal + iva;
    return {subtotal, iva, total};
};