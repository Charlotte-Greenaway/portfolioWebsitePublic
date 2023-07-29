import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import {useState} from 'react';
import './css/NavBar.css';



const NavBar = ({setScreenWidth}) => {
    var isMobile = window.innerWidth < 800;
    var deviceState= (isMobile)?"off" :"active";
    const [activeStat, setActiveStat] = useState(deviceState);
    const [hamburger,setHamburger]= useState(false);
    function hamPress(){
        if (activeStat==='active'){
            setActiveStat('off');
            setHamburger(true);
            setScreenWidth('off');
        }else{
            setActiveStat('active');
            setHamburger(false);
            setScreenWidth('active');
        }
    }
    return(
        
        <div id="navBar" className='()'>
            <nav className={activeStat}>
                <ul>
                    <li>
                        <Link to="/" onClick={isMobile ? hamPress : undefined}>About Me</Link>
                    </li>
                    <hr/>
                    <li>
                        <Link to="/skills" onClick={isMobile ? hamPress : undefined}>Skills</Link>
                    </li>
                    <hr/>
                    <li>
                        <Link to="/certifications" onClick={isMobile ? hamPress : undefined}>Certifications &Projects</Link>
                    </li>
                    <hr/>
                    <li>
                        <Link to="/resume" onClick={isMobile ? hamPress : undefined}>Resume</Link>
                    </li>
                    <hr/>
                    <li>
                        <Link to="/contact" onClick={isMobile ? hamPress : undefined}>Contact</Link>
                    </li>
                    <Outlet/>
                </ul>
                
                <button onClick={hamPress} >
                    <span id={hamburger? "l1ham" :"l1line"}></span>
                    <span id={hamburger? "l2ham" :"l2line"} ></span>
                    <span id={hamburger? "l3ham" :"l3line"}></span>
                </button>
            </nav>
            <Outlet/>
        </div>
        
    );
}

export default NavBar;