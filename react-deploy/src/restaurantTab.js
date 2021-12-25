import React from "react";
import Draggable from 'react-draggable';
import './restaurantTab.css';

const RestaurantWindow = () => (
    <Draggable>
    <div id="restaurantBox" className="search-results">
        <div id = "top-bar">
            <top-title>
                Restaurant Generator
            </top-title>
        </div>
        <p>Welcome!</p>
        <p>Here you can generate somewhere to go on a date!</p>
        <p>Simply click the button below.</p>
        <button>Choose Restaurant</button>
    </div>
    </Draggable>
);

export default RestaurantWindow;