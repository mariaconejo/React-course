import React from "react"

function List(props) {
    return (
        <div>
        <table>
            <thead>
            <th>id</th>
            <th>Name</th>
            <th>Is present ?</th>
            </thead>
            <tbody>
            {props.students.map((currentStudent) => (
                <tr key={currentStudent.id}>
                <td>{currentStudent.id}</td>
                <td>{currentStudent.name}</td>
                <td>
                    <input type="checkbox" />
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    )
}

export default List


// react cada vez que hace un nuevo render, existe un algoritmo que cambia los props
// como se hace un map debe recalcular el arbol de nodos de html
// que compara la versiona anterior renderizada con la proxima renderizada y el key neceista ser
// une elemento unico es mejor usar el key en vez del index de .map