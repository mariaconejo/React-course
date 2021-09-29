import React from 'react';
import ReactDOM  from 'react-dom';

// componentes de funcion
// nombre en mayuscula y su es compuesto la letra en mayuscula tambien
const Cat = (props) => {
    return (
        <div>
            <h1>{props.name}</h1> {/* Definir los nombres */}
            <p>color: {props.color}</p>
        </div>
    )
}
// los props deben verse como funcion puras
// las funciones puras son funciones que siempre van dar el mismo
// el resultado si sus argumentos son los mismos

// // componentes de clase

// class Cat extends React.Component{ // es necesario para que sea un react component y no se puede utilizar render
//     constructor(props){
//         // es una funcion que se ejecuta antes de renderizar algo en la pantalla
//         super(props) // elevar los props a la clase superior
//     }
//     render(){
//         // permite mostrar algo en pantalla
//         return (
//             <div>
//                 <h1>{this.props.name}</h1>
//                 <p>color:{this.props.color}</p>
//             </div>
//         )
//     }
// }

export default Cat

