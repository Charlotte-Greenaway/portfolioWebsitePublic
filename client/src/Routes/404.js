import React from 'react';
import {Link} from 'react-router-dom';

const fourofour=({ScreenWidth})=>{
    return (
        <main  className={ScreenWidth === 'active' ? 'half' : 'full'} style={{textAlign:"center", fontFamily:"monospace"}}>
            <h1>404 Page Not Found</h1>
            <h2>Lost?</h2>
            <h3>Theres no place like <Link to="/">home.</Link></h3>
        </main>
    )
}
export default  fourofour;