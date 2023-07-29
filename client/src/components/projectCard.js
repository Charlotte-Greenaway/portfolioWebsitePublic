import React from 'react';
import {useState} from 'react';


const Card = ({title,content,link,img}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };
    return(
        <div id={`card1${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div id="front">
            <h2>{title}</h2>
            {img !== false && (
                <img
                alt="projectLogo"
                src={img}
                style={{ width: '100%' }}
                />
            )}
        </div>
        <div id="back">
            <p>{content}</p>
            {link !== false && (
                <a href={link}>View me on github!</a>
            )}
        </div>
        </div>
    )
}
export default Card;