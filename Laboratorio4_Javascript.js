// Problema 1: Tabla de cuadrados y cubos
let num = parseInt(prompt("Ingrese un número:"));
document.write("<table border='1'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
for (let i = 1; i <= num; i++) {
    document.write(`<tr><td>${i}</td><td>${i ** 2}</td><td>${i ** 3}</td></tr>`);
}
document.write("</table>");

// Problema 2: Suma aleatoria
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let startTime = Date.now();
let answer = parseInt(prompt(`¿Cuánto es ${num1} + ${num2}?`));
let endTime = Date.now();
let correct = answer === (num1 + num2);
document.write(`Respuesta ${correct ? "correcta" : "incorrecta"}. Tiempo: ${(endTime - startTime) / 1000} segundos.`);

// Problema 3: Contador de números negativos, ceros y positivos
function contador(arr) {
    let negativos = arr.filter(n => n < 0).length;
    let ceros = arr.filter(n => n === 0).length;
    let positivos = arr.filter(n => n > 0).length;
    return { negativos, ceros, positivos };
}
console.log("Resultado de contador:", contador([-1, 0, 3, -5, 2, 0]));
console.assert(JSON.stringify(contador([-1, 0, 3, -5, 2, 0])) === JSON.stringify({ negativos: 2, ceros: 2, positivos: 2 }));

// Problema 4: Promedios de una matriz
function promedios(matriz) {
    return matriz.map(row => {
        let suma = 0;
        for (let num of row) {
            suma += num;
        }
        return suma / row.length;
    });
}
console.log("Resultado de promedios:", promedios([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.assert(JSON.stringify(promedios([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) === JSON.stringify([2, 5, 8]));

// Problema 5: Inverso de un número
function inverso(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
console.log("Resultado de inverso:", inverso(1234));
console.log("Resultado de inverso:", inverso(9876));
console.assert(inverso(1234) === 4321);
console.assert(inverso(9876) === 6789);

// Problema 6: Creación de un objeto con métodos
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    aplicarDescuento(porcentaje) {
        this.precio -= this.precio * (porcentaje / 100);
    }
    mostrarInfo() {
        return `Producto: ${this.nombre}, Precio: $${this.precio.toFixed(2)}`;
    }
}

let producto = new Producto("Laptop", 15000);
producto.aplicarDescuento(10);
console.log("Información del producto:", producto.mostrarInfo());
document.write(`<p>${producto.mostrarInfo()}</p>`);