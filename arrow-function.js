// const tax = (price)  => {
//     return price * 0.13
// }

//  solo cuando tiene un argumento se puede escribir de esa manera
const tax =  price => price * 0.13

const price = 1000

console.log(`The price is ${price + tax(price)}`)

const classicPerson = {
    name: 'classic person',
    sayName: function() {
        console.log(this.name)
    }
}

// no se puede usar de esa forma no tiene el this interno por lo cual da undefine 
// this apunta al contexto pero las arrow functions no lo tiene por eso da undefine
// call junta y llama la funcion
// bind solo junta los objetos 
const arrowPerson = {
    name: 'arrow person',
    sayName: () => {
        console.log(this.name)
    }
}

classicPerson.sayName()
arrowPerson.sayName()