import React from "react";
import "../styles.css";

function Navbar() {
    const navbar = {
        backgroundColor: "var(--background-alt)",
        borderBottom: "1px var(--border) solid",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        maxHeight: "40px"
    }
    return (
        <div style={navbar}> {/*asignar estilos con objeto*/}
            <h2>Student List</h2>
        </div>
    );
}









export default Navbar;