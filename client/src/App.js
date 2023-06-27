import React, { useState } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './Routes/AboutMe';
import Skills from './Routes/Skills';
import Certifications from './Routes/Certifications';
import Resume from './Routes/Resume';
import Contact from './Routes/Contact';
import Fof from './Routes/404';
import Footer from './components/footer';
import NavBar from './components/navBar';


const App = () => {
    //top level screen width variable (whether nav is open or not), variable set by the nav and fed into content paths
    const [ScreenWidth, setScreenWidth] = useState('active');
    return(
        <>
            <BrowserRouter>
                <NavBar setScreenWidth={setScreenWidth}/>
                <Routes>
                    <Route path="/" element={<AboutMe ScreenWidth={ScreenWidth}/>}/>
                    <Route path="/skills" element={<Skills ScreenWidth={ScreenWidth}/>}/>
                    <Route path="/certifications" element={<Certifications ScreenWidth={ScreenWidth}/>}/>
                    <Route path="/resume" element={<Resume ScreenWidth={ScreenWidth}/>}/>
                    <Route path="/contact" element={<Contact ScreenWidth={ScreenWidth}/>}/>
                    <Route path="*" element={<Fof ScreenWidth={ScreenWidth}/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter> 
            
        </>
    );
}

export default App;