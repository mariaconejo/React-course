//bind juntar diferentes objetos
const person = {
    name: 'Bruce',
    lastname: 'Wayne',
    fullname: function() {
        return `${this.name} ${this.lastname}`
    }
}

// el bind permite juntar objetos y poder utilizar la informacion que se encuentra en ellos como argmentos o funciones
const print = function(greet, adj){
    console.log(greet, this.fullname(), 'You are', adj)
} //.bind(person)

// print.call(person, 'Hello', 'Special')
const printBinded = print.bind(person)

// printBinded('hello', 'special')

print.apply(person, ['hello', 'special'])