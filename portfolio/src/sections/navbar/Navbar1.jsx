import React, { useState, useEffect } from 'react';
import './../../assets/css/css.css';

function Navbar1({theme = "sTheme"}){
    const [a1navbarHeight, a1setNavbarHeight] = useState(0);
    useEffect(() => {
        const fa1updateNavbarHeight = () => {
            const fa1navbar = document.querySelector('.navbar');
            if (fa1navbar) {
                a1setNavbarHeight(fa1navbar.offsetHeight);
            }
        };
    
        // Initial call to set navbar height
        fa1updateNavbarHeight();
    
        // Add resize event listener to handle viewport changes
        window.addEventListener('resize', fa1updateNavbarHeight);
    
        return () => {
            // Cleanup resize event listener on component unmount
            window.removeEventListener('resize', fa1updateNavbarHeight);
        };
    }, []);

    useEffect(() => {
        // Auto collapse after click
        const a1navLinks = document.querySelectorAll('.nav-link');
        const a1navCollapse = document.querySelector('.collapse');

        a1navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (a1navCollapse.classList.contains('show')) {
                    a1navCollapse.classList.remove('show');
                }
            });
        });
    }, []);

    return(
        <>
        <nav className={`navbar navbar-expand-sm fixed-top ${theme}`}>
            <div className="container">
            <a href="#" className="navbar-brand">CONTATO</a>
            
            <div>
                <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#id1navItems" aria-controls="nav" aria-label="Expand navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="id1navItems" className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a href="#idObjective" className="nav-link">Objetivo</a></li>
                        <li className="nav-item"><a href="#idSkills" className="nav-link">Proficiências</a></li>
                        <li className="nav-item"><a href="#idProjects" className="nav-link">Projetos</a></li>
                    </ul>
                </div>
            </div>

            </div>
        </nav>
        <div id="idHome" style={{ marginTop: `${a1navbarHeight}px` }}></div>
        </>
    );
}

export default Navbar1