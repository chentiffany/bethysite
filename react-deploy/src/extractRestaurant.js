import React from "react";
import './extractRestaurant.css';
import { restaurantData } from "./data";

// const GenerateRestaurant = () => (
//     <div id = "getRestaurant">
//         {restaurantData.map((data, index) => {
//             var max = restaurantData.numRestaurants; 
//             var index = Math.floor(Math.random() * (max + 1));
//           return (
//             <div index={index}>
//               {data.restaurantName +
//                 " , " +
//                 data.address +
//                 " ," +
//                 data.websiteLink +
//                 ", " +
//                 data.phoneNumber}
//             </div>
//           );
//         })}
//     </div>
// );

// export default GenerateRestaurant;
class GenerateRestaurant extends React.Component {
    state = {
      showMessage: false
    };
    onButtonClickHandler = () => {
      this.setState({ showMessage: !this.state.showMessage });
    };
    render() {
      return (
        <div className="GenerateRestaurant">
          <button onClick={this.onButtonClickHandler}>Enter</button>
          {this.state.showMessage && <div id = "getRestaurant">where to eat
          <JsonDataDisplay/>
          </div>}
        </div>
      );
    }
  }
  export default GenerateRestaurant;

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  function JsonDataDisplay(){
     
    const DisplayData=restaurantData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.restaurantName}</td>
                    <td>{info.address}</td>
                    <td>{info.tiffsPick}</td>
                </tr>
            )
        }
    )
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Name: </th>
                    <th>Address: </th>
                    <th>Tiff's Pick: </th>
                    </tr>
                </thead>
                <tbody>                    
                    {DisplayData}                    
                </tbody>
            </table>            
        </div>
    )
 }