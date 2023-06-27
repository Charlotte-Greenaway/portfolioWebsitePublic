import React from 'react';
import './css/Footer.css';
import { Outlet, Link } from 'react-router-dom';

const Footer = () =>{
    const root = document.querySelector(':root');
    root.style.setProperty('--mobheight', (0.75*window.innerHeight) + "px");
    root.style.setProperty('--mobheight2', (0.8*window.innerHeight) + "px");
    const toggleDarkMode = () => {
        
        console.log(root);
        console.log("toggled")
        root.classList.toggle('darkmode');
    }
    return(
        
        <footer>
            <button onClick={toggleDarkMode} style={{float:"left"}}>&#x263D;</button>
            <div id="contact">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <h3>Contact</h3>
                <p>Telephone: 07802 767605</p>
                <p>Email: <a href="mailto:charlottegreenaway112@gmail.com">charlottegreenaway112@gmail.com</a></p>
                <a href= 'https://github.com/Charlotte-Greenaway'><i className="fa fa-github" style={{fontSize:3+"vh"}}></i></a><a href="https://www.linkedin.com/in/charlotte-greenaway-777140183/"><i className="fa fa-linkedin" style={{fontSize:3+"vh"}}></i></a>
            </div>
            <div id="quicklinks">
                <h3>Quick Links</h3>
                    <li>
                        <Link to="/">About Me</Link> <Link to="/resume">Resume</Link>
                    </li>
                    
                    <li>
                        <Link to="/skills">Skills</Link> <Link to="/contact">Contact</Link>
                    </li>
                  
                    <li>
                        <Link to="/certifications">Certifications</Link>
                    </li>
                   
                
                    <Outlet/>
            </div>
            
        </footer>
    );
}

export default Footer;