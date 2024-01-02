import React from "react";
import { Button } from 'antd';
import './property1css.css'
import img1 from '../images/23/1.jpeg'
import img2 from '../images/23/2.jpeg'
import img3 from '../images/23/3.jpeg'
import img4 from '../images/23/4.jpeg'
import img5 from '../images/23/5.jpeg'
import img6 from '../images/23/6.jpeg'
import img7 from '../images/23/7.jpeg'
import img8 from '../images/23/8.jpeg'
import img9 from '../images/23/9.jpeg'
import img10 from '../images/23/10.jpeg'
import img11 from '../images/23/11.jpeg'


function App() {


    return (
        <div>


            <div className="propertynew1">
                <Button className="button1" type="primary" block ><a href="/Final"> Book Now </a></Button>
                <img className='img1' src={img1} alt="bedroom1" width="500px" height="300px" />
                <img className='img1' src={img2} alt="bedroom1" width="500px" height="300px" />
                <img className='img1' src={img3} alt="bedroom1" width="500px" height="300px" />
                <img className='img1' src={img4} alt="bedroom1" width="500px" height="300px" />
                <img className='img1' src={img5} alt="bedroom1" width="500px" height="300px" />
                <img className='img1' src={img6} alt="bedroom1" width="500px" height="300px" />
                <img className='img1' src={img7} alt="bedroom1" width="500px" height="300px" />
                <img className='img1' src={img8} alt="bedroom1" width="500px" height="300px" />
                <img className='img1' src={img9} alt="bedroom1" width="500px" height="300px" />
                <img className='img1' src={img10} alt="bedroom1" width="500px" height="300px" />
                <img className='img1' src={img11} alt="bedroom1" width="500px" height="300px" />


                <Button type="primary" block ><a href="/Final"> Book Now </a></Button>

            </div>

        </div>
    );
}
export default App;