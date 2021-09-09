import {multi, sum, rest} from './destruturing.js'

const multiplicacion= multi(1,2,3,4);
const suma = sum(1,2,3,4);
const resta = rest(1,2,3,4);
console.log('This is a multi',multiplicacion)
console.log('This is a sum',suma)
console.log('This is a rest',resta)