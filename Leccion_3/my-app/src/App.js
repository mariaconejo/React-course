import React from "react";
import { ReactDOM } from "react-dom";

ReactDOM.render( // lo quiero mostrar  y donde 
    <> // reactFragmentes
        <h1 className = 'Testign'>Hola mundo</h1>
        <p>Adios React</p>
    </>
    ,
    document.getElementById('root')
)

const user ={
    name: 'Tony',
    lastname: 'Stark',
    email: 'tony@stark.com'
}
// solo un tag raiz y los demas children
function userData(user){
    if(user.name){
        return <p>Hello {user.name}</p>
    }else{
        return <p>Hello Stranger</p>
    }
}

ReactDom.render(
    userData(user),
    document.getElementById("root")
)