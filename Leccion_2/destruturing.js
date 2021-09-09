// permite descomponer objetos más pequeños o variables, funcion integrada desde ES6

const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
}
// se declara la variable secretName que utiliza la informacion que esta dentro del objeto hero
const { realName: secretName } = hero;
// console.log(secretName)// Bruce Wayne

// Este operador permite que los elementos de un array se expandan y, de esta manera, podemos añadir un array dentro de otro sin que el resultado sean arrays anidados, si no un único array al que se han añadido nuevos valores.

let a;
let b;
let spread;

const numbers = [10,20,30,40,50];
[a, b, ...spread] = numbers;

// console.log('a', a);
// console.log('b',b);
// console.log('spread', spread)

// rest
// se va comportar como un array y permite los argumentos que se quieran
// una buena practica para evitar poner muchos argumentos en una funcion
function sum(...arg){
    // let result = 0;
    // for(arg of arg){
    //     result += arg
    // }

return arg.reduce((prev, curr) => prev + curr)
}
// console.log("Suma" + sum(12,85,76,1))

function rest(...arg){
    return arg.reduce((prev, curr) =>  prev - curr)
}

// console.log("Resta" + rest(1200,85,76,1));

function multi(...args){
    return args.reduce((prev, curr)=> prev * curr)
}

// console.log("Multiplicacion"+multi(1200,85,76,1));

export {multi, sum, rest};