import React from 'react';

const fourofour=({ScreenWidth})=>{
    return (
        <main  className={ScreenWidth === 'active' ? 'half' : 'full'}>
            <h1>404 Page Not Found</h1>
        </main>
    )
}
export default  fourofour;