import React from "react";
import { ReactDOM } from "react-dom";

ReactDOM.render(
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