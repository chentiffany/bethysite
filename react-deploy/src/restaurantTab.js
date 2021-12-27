import React from "react";
import Draggable from 'react-draggable';
import './restaurantTab.css';
import GenerateRestaurant from './extractRestaurant';
import ThaiCountryCafeButton from './thaiCountryCafeButton';

const RestaurantWindow = () => (
    <Draggable>
        <div id="restaurantBox" className="search-results">
            <div id="top-bar">
                <top-title>
                    Restaurant Generator
                </top-title>
            </div>
            <p>Welcome!</p>
            <p>Here you can generate somewhere to go on a date!</p>
            <p>Simply click the button below.</p>
            <div id = "make-row">
                <GenerateRestaurant />
                <ThaiCountryCafeButton />
            </div>
        </div>
    </Draggable>
);

export default RestaurantWindow;