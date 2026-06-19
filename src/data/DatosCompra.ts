import {Producto} from "../model/Producto";

// Mi primera compra de ejemplo tiene varios productos, para probar que la suma funcione bien
export const compraEjemplo1: Producto[] = [
  { nombre: "MaxSteel", precio: 300 },
  { nombre: "Carrito Hotwheels", precio: 46 },
  { nombre: "Pistola Nerf", precio: 150 },
];

// Mi Sgunda compra tiene solo unproducto, para una prueba mas simple
export const compraEjemplo2: Producto[] = [
  { nombre: "Terrenitor", precio: 6000 },
];

// Mi tercera compra tiene varios productos tmabien, pero le puse decimales, para probar que no hace diferencia
export const compraEjemplo3: Producto[] = [
  { nombre: "Lego IronMan", precio: 120.59 },
  { nombre: "PSR", precio: 8999.99 },
];
