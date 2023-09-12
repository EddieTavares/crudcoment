import React from "react";
import {NavLink} from "react-router-dom";


function Nav(){
    return (
        <nav>
            <NavLink to="/">Home</NavLink> 
            <NavLink to="/sobre">Sobre nós</NavLink> 
            <NavLink to="/comentarios">Contatos</NavLink> 
        </nav>
    );
};

export default Nav;