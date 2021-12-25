import Draggable from 'react-draggable';
import magicBall from './magicball.jpg';
import './magicBall.css';
import React from "react";
import RestaurantWindow from './restaurantTab';

const MagicBall = () => {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)
    return (
        <div id = "setWindow">
            <Draggable>
                <div id = "makeColumn">
                <img id="magicBall" src={magicBall} onDoubleClick={onClick} alt="magic ball"></img>
                <span>Find Food!</span>
                </div>
            </Draggable>
            {showResults ? <Results /> : null}
        </div>
    )
}

const Results = () => (
    <RestaurantWindow/>
)

export default MagicBall;