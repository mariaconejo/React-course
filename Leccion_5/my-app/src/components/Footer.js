import React from "react";


function Footer(props){
    const footer ={
        flex: "0 0 auto",
        display: "flex",
        justifyContent: "center",
        background: props.color
    }
    return(
        <div>
            <p>Made with ❤ and ☕ {props.children}</p>
        </div>
        
    ) 
}






export default Footer;