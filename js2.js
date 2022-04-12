'use strict';

// 1. Booleanos
console.log(`// 1. Booleanos
`);

//     Dados 2 variables booleanas:
const booleano1 = true;
const booleano2 = false;

// Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2
const booleanoAnd = booleano1 && booleano2;
console.log("booleanoAnd:", booleanoAnd)

// Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1 or booleano2
const booleanoOr = booleano1 || booleano2;
console.log("booleanoOr:", booleanoOr)

// Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1
const booleanoNot = !booleano1;
console.log("booleanoNot:", booleanoNot)

// Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)
const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));
console.log("booleanoMix0:", booleanoMix0)


// 2.Operadores
console.log(`
// 2.Operadores
`);
// Crear variable valorDivisión cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado
const valorDivision = 17 / 3;
console.log("valorDivisión", valorDivision.toFixed(2));

// Crear variable valorResto cuyo valor sea el resto de 17 entre 7
const valorResto = 17 % 7;
console.log("valorResto:", valorResto);


// 3.Lógica de programación
console.log(`
// 3.Lógica de programación
`);

// Crea una variable A cuyo valor sea el número 9, después crea una variable B cuyo valor sea un string con el número 9, desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B, comprobamos que A === B?
const a = 9;
const b = '9';
console.log("Valores: a = 9; b = '9'");
console.log("a == b:", a == b ? 'Son iguales' : 'No son iguales');
console.log("a === b:", a === b ? 'Son idénticos' : 'No son idénticos');

// Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que sí mochila tiene más de 10 elementos muestre por consola el mensaje “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola “Creo q no necesito una mochila”

const dimeMochila = mochila => {

    console.log(`Mochila con ${mochila.length} elementos:`);

    if (mochila.length > 10) {
        console.log("“No puedo cargar con tantas cosas”");
    } else if (mochila.length >= 2) {
        console.log("“Que bien voy con mi mochila”");
    } else {
        console.log("“Creo q no necesito una mochila”");
    }
}

let mochila = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
dimeMochila(mochila);
mochila = [1, 2, 3];
dimeMochila(mochila);
mochila = [1];
dimeMochila(mochila);

// Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10
let contarHasta10 = 0;
while (true) {
    if (contarHasta10 === 10) {
        console.log("contarHasta10 === 10");
        break;
    }
    console.log(`contarHasta10 no es 10`);
    contarHasta10++;
}

// Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario que si diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’ y  si es false ‘Hoy trabajo’
const checkHolyday = diaFestivo => {

    console.log("diaFestivo:", diaFestivo);

    diaFestivo ?
        console.log("‘Hoy no trabajo’") :
        console.log("‘Hoy trabajo’ (si no estás en paro)");
};
let diaFestivo = true;
checkHolyday(diaFestivo);
diaFestivo = false;
checkHolyday(diaFestivo);

// Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle
const arrayBucle = [];
console.log('arrayBucle:', arrayBucle);
for (let i = 4; i < 19; i++) {
    arrayBucle.push(i)
}
console.log('arrayBucle:', arrayBucle);

// Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado
const resultado = arrayBucle.reduce((n, i) => n+i);
console.log("resultado:", resultado);

// Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos
const words = ['‘Con’', '‘Sofia’', '‘aprendiendo’', '‘bucles’'];
console.log("for of:");
for (const word of words) {
    console.log(`Word: ${word}`);
}
console.log("for in:");
for (const key in words) {
    console.log(`Key: ${key}. Word: ${words[key]}`);
}

// Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3
console.log("Bucle while patatero.");
let potatoNumber = 1;
while (potatoNumber < 21) {
    if (potatoNumber % 3 == 0) {
        console.log(`Patata! (${potatoNumber})`);
    }
    potatoNumber++;
}

// Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.

console.log("Programa de notas");
let nota = 0;
while (nota != -1) {
    nota = prompt("Introduce la nota (-1 para salir):");
    if (nota == -1) {
        console.log("Salimos del notas.");
        break;
    }
    switch (nota) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
            console.log("Insuficiente");
            break;
        case '5':
        case '6':
            console.log("Suficiente");
            break;
        case '7':
        case '8':
            console.log("Notable");
            break;
        case '9':
        case '10':
            console.log("Sobresaliente");
            break;
        default:
            console.log("Nota incorrecta");
    }
}


// Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.
const resta = (a, b) => a - b;
console.log("resta(-5, -8):", resta(-5, -8));

// Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’
const duplicaNumero = (num) =>
    typeof num === 'number' ?
    num * 2 :
    "Debo ser ejecutada con un número";

console.log("duplicaNumero(3):", duplicaNumero(3));
console.log("duplicaNumero(-4):", duplicaNumero(-4));
console.log("duplicaNumero('5'):", duplicaNumero('5'));
console.log("duplicaNumero('Ambrosio'):", duplicaNumero('Ambrosio'));
