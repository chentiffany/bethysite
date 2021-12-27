import React from "react";

class ThaiCountryCafeButton extends React.Component {
    state = {
        showMessage: false
    };
    onButtonClickHandler = () => {
        this.setState({ showMessage: !this.state.showMessage });
    };
    render() {
        return (
            <div className="ThaiCountryCafeButton">
                <button onClick={this.onButtonClickHandler}>Tiff's Pick</button>
                {this.state.showMessage && <div id="getRestaurant"> 
                    <TCC />
                </div>}
            </div>
        );
    }
}
export default ThaiCountryCafeButton;

const TCC = () => (
    <div>
    TIFF WANTS THAI COUNTRY CAFE !!!
    </div>
    );