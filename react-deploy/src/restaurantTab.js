import React from "react";
import Draggable from 'react-draggable';
import './restaurantTab.css';
import GenerateRestaurant from './extractRestaurant';

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
        <GenerateRestaurant/>
    </div>
    </Draggable>
);

export default RestaurantWindow;