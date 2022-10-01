import React from "react";

const currentYear = new Date().getFullYear();



function Footer (){
    return(
        <footer>
            <p>
                Copywrite @bammdigital {currentYear}
            </p>
        </footer>
    )
};

export default Footer;
