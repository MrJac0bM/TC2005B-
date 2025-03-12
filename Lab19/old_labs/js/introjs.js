// consola (log, info, warn, error, assert)
console.log("hola mundo wookie!");
console.info("Aquí andamos aprendiendo");
console.warn("Esta es una advertencia");
console.error("kjhdskjbcarjcnakjwencerk");
console.assert(1 == 1);
console.assert(1 === 1); 
console.assert(1 == "1");
console.assert(1 === "1");
console.assert(1 == true);
console.assert(1 === true);


// variables, constantes
var wookie = "Cheewbaca"; //forma antigua, no es tan segura

let otro_wookie = "Tarful"; //forma moderna

console.log(otro_wookie);

const precio = 99.99;


// Alcance de las variables
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//console.log(i);

// funciones modernas
const mi_funcion = () => {
    console.log("sk.djnverne.wjkn desde una función anónima")
}

mi_funcion();


// arreglos

const arreglo = ["Elemento"];

const arreglo2 = new Array(); 

arreglo.push("Otro elemento");

arreglo[10] = "Uno más";

//arreglos asociativos
arreglo["uno"] = 5;

//recorrido tradicional del arreglo
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

console.log("Operador in");

//recorridos alternativos del arreglo
for(let posicion in arreglo) {
    console.log(posicion);
}

for(let valor of arreglo) {
    console.log(valor);
}

//Objetos

const objeto = {};

objeto.atributo1 = "hola";

objeto.atributo2 = [];

objeto.atributo3 = {};

for(let posicion in objeto) {
    console.log(posicion);
}


// modificar html
const boton = document.getElementById("boton_imagen");
console.log(boton);

const poner_imagen_1 = () => {
    const span_imagen = document.getElementById("imagen_chewy");
    span_imagen.innerHTML = `<img alt="Cheewbaca guapo" 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgVp24TlNmDm2CaFYbBHLT0tAWoIRrUJPujBnNieQANku2V2XtR8kRLmyhn-_B-gxZmSNHHONU3XKwaj8-1HowsVWn-I3fmP3-7TPVoXKWra36PRJQGwr4lvukjNRARDlVw2dB30um6TFP/s1600/movies_star_wars_bts_pics_13.jpg"
        >`;
    boton.onclick = poner_imagen_2;
};

const poner_imagen_2 = () => {
    const span_imagen = document.getElementById("imagen_chewy_greñudo");
    span_imagen.innerHTML = `<img alt="Cheewbaca greñudo" 
            src="https://static.wikia.nocookie.net/starwars/images/4/49/AbominableChewbacca-SWT.png"
        >`;
    boton.onclick = poner_imagen_3;
};

const poner_imagen_3 = () => {
    const span_imagen = document.getElementById("imagen_chewy_enojado");
    span_imagen.innerHTML = `<img alt="Cheewbaca enojado" 
            src="https://media.tenor.com/pI-t9rHiePMAAAAe/mad-angry-star-wars.png"
        >`;
};

boton.onclick = poner_imagen_1;