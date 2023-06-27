import React from 'react';
import {useState} from 'react';


const Card = ({title,content}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };
    return(
        <div id={`card1${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div id="front">
            <h2>{title}</h2>
        </div>
        <div id="back">
            <p>{content}</p>
        </div>
        </div>
    )
}
export default Card;