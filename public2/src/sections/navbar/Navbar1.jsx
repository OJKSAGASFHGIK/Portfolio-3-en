import React, { useState, useEffect } from 'react';
import './../../assets/css/css.css';

function Navbar1({theme = "sTheme"}){
    const [navbarHeight, setNavbarHeight] = useState(0);

    useEffect(() => {
        // Seleciona a navbar e calcula sua altura
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            setNavbarHeight(navbar.offsetHeight);
        }
    }, []);

    return(
        <>
        <nav className={`navbar navbar-expand fixed-top ${theme}`}>
            <div className="container">
            <a href="#" className="navbar-brand">CONTATO</a>
            <div>
            <ul className="navbar-nav">
                <li className="nav-item"><a href="#idObjective" className="nav-link">Objetivo</a></li>
                <li className="nav-item"><a href="#idSkills" className="nav-link">Proficiências</a></li>
                <li className="nav-item"><a href="#idProjects" className="nav-link">Projetos</a></li>
            </ul>
            </div>
            </div>
        </nav>
        <div id="idHome" style={{ marginTop: `${navbarHeight}px` }}></div>
        </>
    );
}

export default Navbar1