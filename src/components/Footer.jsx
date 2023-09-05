import React from "react";

var copYear=new Date().getFullYear();

function Footer(){
    return(
    <footer>
       <p>Copyright Ⓒ, {copYear}</p>
    </footer>
    );
}

export default Footer;