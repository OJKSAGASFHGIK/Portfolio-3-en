import './../../assets/css/css.css';

function Navbar1({theme = "sTheme"}){
    return(
        <>
        <nav className={`navbar navbar-expand fixed-top ${theme}`}>
            <div className="container">
            <a href="#idHome" className="navbar-brand">CONTATO</a>
            <div>
            <ul className="navbar-nav">
                <li className="nav-item"><a href="" className="nav-link">a1</a></li>
                <li className="nav-item"><a href="" className="nav-link">a2</a></li>
                <li className="nav-item"><a href="" className="nav-link">a3</a></li>
            </ul>
            </div>
            </div>
        </nav>
        <nav className="navbar">
            <div className="navbar-brand" style={{color:'transparent'}}>Text transparent</div>
        </nav>
        </>
    );
}

export default Navbar1