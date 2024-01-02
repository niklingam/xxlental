import React from "react";
import img1 from '../images/23/1.jpeg'
import img2 from '../images/21/hall.jpeg'
import img3 from '../images/23/2.jpeg'
import './homecss.css';


const App = () => (
  <div className="main-container">
    <meta name="viewport" content='width=device-width,initial-scale=1.0' ></meta>
    <div className="property-1">
      <img className="img1-fluid" src={img1} alt="23" />
      <a href="Property1"><p>More Information Click here...</p> </a>
      <h3>Description:</h3>
      <p>2 Bed Flat with ensuite bathroom with 2 double beds,2 TVs,Large comfy sofa.
        The property is accessed by a secure door entry and comprises sociable open-plan living, attractive understated interiors and convenient private parking. Only a few minutes drive away from M8 to connect to Edinburgh Airport and the city centre.
        The ALDI supermarket is next door and the amenities in Livingston are under 5 min by drive.</p> 

    </div>
    <div className="property-2" >
      <img className="img2-fluid" src={img2} alt="23"/>
      <a href="Property2"><p>More Information Click here...</p> </a>
      <h3>Description:</h3>
      <p className="text1">2 Bed/2 Bath Apartment with king bed, comfy sofas, full working kitchen with American fridge freezer, 2 TVs in heart of Livingston.
         Only a few minutes drive away from M8 to connect to Edinburgh Airport and the city centre. 
         The ALDI supermarket is next door and the amenities in Livingston are under 5 min by drive. 
        Short distance to Livingston Railway station/ to reach Edinburgh in 15 mins. </p>
    </div>
    <div className="property-3" >
      <img className="img3-fluid" src={img3} alt="23" />
      <a href="23home"><p>More Information Click here...</p> </a>
      <h3>Description:</h3>
      <p className="text1">This 2 bed flat Favourably situated in the conveniently placed  Queens Crescent, Livingston development which is 0.2 miles to Livingston North Train 
        Statin providing rail links to Edinburgh and Glasgow, this two double bedroom flat forms part of a leafy residential street and offers well-proportioned accommodation
         with secure entrance and residents parking.</p>
    </div>
  </div>
);
export default App;